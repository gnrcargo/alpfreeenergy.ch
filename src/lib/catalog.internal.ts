// =============================================================================
// AlpFree — Catalogo INTERNO (RISERVATO) — prezzi, costi, margine, sussidi
// -----------------------------------------------------------------------------
// ⚠️  NON importare questo file da un componente pubblico o da "use client"
//     raggiungibile senza password. Uso consentito:
//       • codice server (route API, server component)
//       • area /interno, protetta da Basic Auth via middleware
//
// I prezzi prodotti sono quelli reali dello strumento d'offerta di Mehmet
// (simulatore_fotovoltaico.html, giu 2026).
// =============================================================================

// margine di listino incorporato nelle offerte: serve a stimare il costo REALE
// per AlpFree quando possiede l'impianto (Mehmet è l'installatore e se lo toglie).
export const MARGINE_LISTINO_DEFAULT = 0.22;

// --- Sussidi (STIME — verificare sempre su pronovo.ch e SvizzeraEnergia TI) ---
export const SUSSIDI = {
  pronovoBase: 200, // CHF forfait di base
  pronovoPerKwp: 380, // CHF per kWp
  cantoneTiPerKwp: 0, // eventuale contributo cantonale aggiuntivo (default 0)
};

// --- Prodotti (prezzi di listino/offerta reali) ------------------------------
export type ModuloFV = {
  id: string;
  nome: string;
  potenzaWp: number;
  prezzoChf: number; // prezzo per pezzo
  superficieM2: number;
};

export const MODULI_FV: ModuloFV[] = [
  { id: "trina425", nome: "Trina Solar Vertex S 425Wp", potenzaWp: 425, prezzoChf: 190, superficieM2: 2.0 },
  { id: "jinko450", nome: "Jinko Solar Eagle 450Wp", potenzaWp: 450, prezzoChf: 210, superficieM2: 2.1 },
  { id: "longi400", nome: "Longi Hi-MO 5 400Wp", potenzaWp: 400, prezzoChf: 175, superficieM2: 1.9 },
  { id: "sunpower410", nome: "SunPower Maxeon 3 410Wp", potenzaWp: 410, prezzoChf: 230, superficieM2: 1.85 },
];

// Costi componenti impianto (dallo strumento d'offerta di Mehmet)
export const COMPONENTI = {
  inverterPerKwp: 200, // CHF/kWp
  strutturaK2PerModulo: 35, // CHF/modulo
  installazioneFissa: 2500, // CHF
  installazionePerKwp: 150, // CHF/kWp
};

// Accumulo (batteria): ~600 CHF/kWh dallo strumento (10kWh→6000, 20kWh→9000)
export const BATTERIA = {
  tagli: [
    { kwh: 10, prezzoChf: 6000 },
    { kwh: 15, prezzoChf: 7500 },
    { kwh: 20, prezzoChf: 9000 },
  ],
};

// Wallbox (ricarica EV) — non nello strumento vecchio, prezzo TI tipico installato
export const WALLBOX = {
  prezzoChf: 1800, // wallbox 11 kW smart, installata
};

// Automazione / hardware EMS a casa del cliente (una tantum)
export const AUTOMAZIONE = {
  prezzoChf: 800, // Raspberry Pi + Home Assistant + configurazione ponte AlpFree
};

// --- EMS: abbonamento software (fasce dal doc pricing) -----------------------
export type TierEms = {
  id: string;
  nome: string;
  chfMese: number;
  descrizione: string;
};

export const TIER_EMS: TierEms[] = [
  { id: "visione", nome: "Visione", chfMese: 19, descrizione: "Dashboard, casa digitale, consigli (regole fisse)" },
  { id: "comando", nome: "Comando", chfMese: 49, descrizione: "Ottimizzazione attiva, scenari, allerte, automazioni" },
  { id: "sovranita", nome: "Sovranità", chfMese: 119, descrizione: "Off-grid/blackout, ottimizzazioni su misura, supporto umano prioritario" },
];
