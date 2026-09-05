// =============================================================================
// AlpFree — Motore di calcolo INTERNO (RISERVATO)
// -----------------------------------------------------------------------------
// Scoring lead + costruzione offerta con prezzi, margine, sussidi, ammortamento.
// ⚠️ Importare SOLO da codice server (route API) o dall'area /interno protetta.
//    Non deve mai finire in un bundle pubblico.
// =============================================================================

import type { ContractingInput } from "./calc";
import { MODULI_FV, COMPONENTI, type ModuloFV } from "./catalog.internal";

// ----------------------------------------------------------------------------
// Qualificazione lead (LATO SERVER, mai mostrata all'utente)
// ----------------------------------------------------------------------------
export type Routing = "contracting" | "batteria_automazione" | "ems" | "escluso";

export type LeadScore = {
  punteggio: number;
  routing: Routing;
  priorita: string; // testo operativo per Mehmet
};

export function scoreLead(i: ContractingInput): LeadScore {
  // tetto = no → fuori dal contracting a prescindere dal punteggio
  if (i.tetto === "no") {
    return {
      punteggio: 0,
      routing: "ems",
      priorita: "Senza tetto: solo EMS o automazione. Non contracting.",
    };
  }

  let p = 0;
  if (i.kmAnno > 12000) p += 3;
  if (i.situazioneAuto === "sto_valutando") p += 4; // segnale più forte
  if (i.situazioneAuto === "gia_elettrica") p += 2;
  if (i.tetto === "si") p += 3;
  else if (i.tetto === "parziale") p += 1;
  if (i.immobile === "primaria") p += 3; // secondaria: 0 (candidato EMS)

  // residenza secondaria con tetto → EMS, non contracting
  if (i.immobile === "secondaria" && (i.tetto === "si" || i.tetto === "parziale")) {
    return {
      punteggio: p,
      routing: "ems",
      priorita: "Residenza secondaria con tetto: candidato EMS, non contracting.",
    };
  }

  if (p >= 9) {
    return {
      punteggio: p,
      routing: "contracting",
      priorita: "CONTRACTING — priorità alta: richiamare entro 48h.",
    };
  }
  if (p >= 5) {
    return {
      punteggio: p,
      routing: "batteria_automazione",
      priorita: "Pacchetto batteria o automazione: richiamo standard.",
    };
  }
  return {
    punteggio: p,
    routing: "ems",
    priorita: "Lead debole per contracting: proporre EMS o automazione.",
  };
}

// ----------------------------------------------------------------------------
// Costruzione offerta modulare (prezzi + sussidi + margine)
// ----------------------------------------------------------------------------
export type VoceOfferta = { descrizione: string; quantita: string; totale: number };

export type OffertaInput = {
  // moduli attivi (il cliente sceglie cosa vuole)
  fv: boolean;
  numModuli: number;
  moduloId: string;
  batteria: boolean;
  batteriaKwh: number;
  batteriaPrezzoChf: number;
  wallbox: boolean;
  wallboxPrezzoChf: number;
  automazione: boolean;
  automazionePrezzoChf: number;
  // parametri economici (modificabili)
  sussidioChf: number; // stima Pronovo + cantone (modificabile)
  margineListino: number; // % margine incorporata nel listino (per stimare costo AlpFree)
};

export type OffertaOutput = {
  voci: VoceOfferta[];
  kwp: number;
  totaleListino: number; // prezzo che pagherebbe un cliente normale
  totaleNettoCliente: number; // dopo sussidi
  costoAlpFree: number; // costo reale stimato per AlpFree (per contracting)
  ammortamentoAnni: number | null; // costoAlpFree / canone annuo (se canone fornito)
};

export function buildOffer(o: OffertaInput, canoneAnnuo?: number): OffertaOutput {
  const voci: VoceOfferta[] = [];
  const modulo: ModuloFV = MODULI_FV.find((m) => m.id === o.moduloId) ?? MODULI_FV[0];
  let kwp = 0;

  if (o.fv && o.numModuli > 0) {
    kwp = (o.numModuli * modulo.potenzaWp) / 1000;
    const costoModuli = o.numModuli * modulo.prezzoChf;
    const costoInverter = kwp * COMPONENTI.inverterPerKwp;
    const costoStruttura = o.numModuli * COMPONENTI.strutturaK2PerModulo;
    const costoInstall = COMPONENTI.installazioneFissa + kwp * COMPONENTI.installazionePerKwp;
    voci.push({ descrizione: `Moduli FV — ${modulo.nome}`, quantita: `${o.numModuli} pz`, totale: costoModuli });
    voci.push({ descrizione: "Inverter", quantita: `${kwp.toFixed(1)} kWp`, totale: costoInverter });
    voci.push({ descrizione: "Struttura di montaggio K2", quantita: `${o.numModuli} pz`, totale: costoStruttura });
    voci.push({ descrizione: "Installazione e messa in servizio", quantita: `${kwp.toFixed(1)} kWp`, totale: costoInstall });
  }
  if (o.batteria) {
    voci.push({ descrizione: "Sistema di accumulo (batteria)", quantita: `${o.batteriaKwh} kWh`, totale: o.batteriaPrezzoChf });
  }
  if (o.wallbox) {
    voci.push({ descrizione: "Wallbox ricarica EV (11 kW)", quantita: "1 pz", totale: o.wallboxPrezzoChf });
  }
  if (o.automazione) {
    voci.push({ descrizione: "Automazione + hardware EMS", quantita: "1 set", totale: o.automazionePrezzoChf });
  }

  const totaleListino = voci.reduce((s, v) => s + v.totale, 0);
  const totaleNettoCliente = Math.max(0, totaleListino - o.sussidioChf);
  // costo AlpFree = listino senza il margine incorporato, meno i sussidi
  const costoAlpFree = Math.max(0, totaleListino * (1 - o.margineListino) - o.sussidioChf);

  let ammortamentoAnni: number | null = null;
  if (canoneAnnuo && canoneAnnuo > 0) {
    ammortamentoAnni = costoAlpFree / canoneAnnuo;
  }

  return { voci, kwp, totaleListino, totaleNettoCliente, costoAlpFree, ammortamentoAnni };
}
