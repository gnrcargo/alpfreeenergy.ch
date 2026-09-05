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
  const costoTotaleOggi = costoCarburanteOggi + costoElettricoOggi;

  const kWhPerMobilita = i.kmAnno * MOBILITY.evKwhPerKm;
  const kWhTotaliNuovi = i.kwhAnno + kWhPerMobilita;

  // costo residuo: quota NON coperta da autoconsumo + tassa di rete (mai a zero)
  const costoResiduo =
    (kWhTotaliNuovi * (1 - CONTRACTING.quotaAutoconsumo) * i.tariffaCtKwh) / 100 +
    ENERGY.tassaReteAnnua;

  const canoneProposto = costoTotaleOggi * (1 - CONTRACTING.scontoCanone);
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
