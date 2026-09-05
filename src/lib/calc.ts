// =============================================================================
// AlpFree — Motore di calcolo PUBBLICO (puro, sicuro per il browser)
// -----------------------------------------------------------------------------
// Solo la matematica mostrata al cliente + utility di formato. La costruzione
// dell'offerta con prezzi/margine sta in calc.internal.ts (mai lato client).
// =============================================================================

import { ENERGY, MOBILITY, CONTRACTING } from "./catalog";

// ----------------------------------------------------------------------------
// Calcolo contracting (mostrato al cliente)
// ----------------------------------------------------------------------------
export type SituazioneAuto = "gia_elettrica" | "sto_valutando" | "benzina_diesel";
export type Tetto = "si" | "parziale" | "no" | "non_so";
export type Immobile = "primaria" | "secondaria";

export type ContractingInput = {
  kmAnno: number;
  situazioneAuto: SituazioneAuto;
  lPer100km: number;
  prezzoCarburante: number;
  kwhAnno: number;
  tariffaCtKwh: number;
  tetto: Tetto;
  immobile: Immobile;
  // --- Riscaldamento (opzionali: termopompa). Default 0 = nessun effetto,
  //     così il calcolatore pubblico esistente non cambia. ---
  speseRiscaldamentoOggi?: number; // CHF/anno che il cliente spende OGGI in gasolio/gas
  kWhRiscaldamento?: number; // kWh/anno elettrici aggiunti dalla termopompa
  // sconto sul canone (0.15 = 15% sotto la spesa attuale). Se assente, usa il default.
  scontoCanone?: number;
};

export type ContractingOutput = {
  costoCarburanteOggi: number;
  costoElettricoOggi: number;
  costoTotaleOggi: number;
  kWhPerMobilita: number;
  kWhTotaliNuovi: number;
  costoResiduo: number;
  canoneProposto: number;
  risparmioCliente: number;
  // true = il risparmio sulla mobilità si realizza SOLO passando all'elettrico
  mobilitaCondizionata: boolean;
};

export function computeContracting(i: ContractingInput): ContractingOutput {
  const contaMobilita = i.situazioneAuto !== "gia_elettrica"; // se già EV, il carburante non è più una spesa
  const costoCarburanteOggi = contaMobilita
    ? (i.kmAnno / 100) * i.lPer100km * i.prezzoCarburante
    : 0;
  const costoElettricoOggi = (i.kwhAnno * i.tariffaCtKwh) / 100;
  // spesa di riscaldamento fossile oggi (0 se non applicabile): la termopompa la
  // sostituisce con elettricità solare → entra nella spesa che il canone cattura.
  const speseRiscaldamentoOggi = i.speseRiscaldamentoOggi ?? 0;
  const costoTotaleOggi = costoCarburanteOggi + costoElettricoOggi + speseRiscaldamentoOggi;

  const kWhPerMobilita = i.kmAnno * MOBILITY.evKwhPerKm;
  const kWhRiscaldamento = i.kWhRiscaldamento ?? 0;
  const kWhTotaliNuovi = i.kwhAnno + kWhPerMobilita + kWhRiscaldamento;

  // costo residuo: quota NON coperta da autoconsumo + tassa di rete (mai a zero)
  const costoResiduo =
    (kWhTotaliNuovi * (1 - CONTRACTING.quotaAutoconsumo) * i.tariffaCtKwh) / 100 +
    ENERGY.tassaReteAnnua;

  const sconto = i.scontoCanone ?? CONTRACTING.scontoCanone;
  const canoneProposto = costoTotaleOggi * (1 - sconto);
  const risparmioCliente = costoTotaleOggi - canoneProposto;

  // avviso onesto: se è a benzina/diesel e non intende cambiare, la parte
  // mobilità è potenziale, non acquisita.
  const mobilitaCondizionata = i.situazioneAuto === "benzina_diesel";

  return {
    costoCarburanteOggi,
    costoElettricoOggi,
    costoTotaleOggi,
    kWhPerMobilita,
    kWhTotaliNuovi,
    costoResiduo,
    canoneProposto,
    risparmioCliente,
    mobilitaCondizionata,
  };
}

// ----------------------------------------------------------------------------
// Utility di formattazione (de-CH, come nel resto del sito)
// ----------------------------------------------------------------------------
export const chf = (n: number) =>
  n.toLocaleString("de-CH", { style: "currency", currency: "CHF", maximumFractionDigits: 0 });
export const num = (n: number) =>
  n.toLocaleString("de-CH", { maximumFractionDigits: 0 });
