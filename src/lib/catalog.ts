// =============================================================================
// AlpFree — Catalogo PUBBLICO (sicuro da spedire al browser)
// -----------------------------------------------------------------------------
// SOLO parametri che possono essere visti dal cliente:
//   • usato dal calcolatore pubblico (/contracting) e dallo scoring lead.
//   • NESSUN prezzo di costo, NESSUN margine, NESSUN listino prodotti qui.
//
// I dati sensibili (prezzi, costi, margine, sussidi, fasce EMS) stanno in
//   catalog.internal.ts  → importato SOLO da codice server o dall'area /interno
//   protetta da password. Non deve mai entrare in un bundle pubblico.
// =============================================================================

// --- Parametri energetici Svizzera / Ticino (verificati giu 2026) -----------
export const ENERGY = {
  tariffaCtKwh: 28, // ct/kWh — tariffa elettrica media TI (default, modificabile)
  gridChfKwh: 0.277, // CHF/kWh — usato dal simulatore indipendenza
  tassaReteAnnua: 400, // CHF/anno — quota fissa di rete. NON azzerabile: si paga comunque.
  produzionePerKwp: 1200, // kWh/anno per kWp installato in Ticino
};

// --- Mobilità (arbitraggio del carburante = cuore del margine contracting) ---
export const MOBILITY = {
  lPer100kmDefault: 7.0, // consumo auto a benzina/diesel (L/100km)
  prezzoCarburanteDefault: 1.8, // CHF/L
  kmAnnoDefault: 15000,
  evKwhPerKm: 0.18, // consumo medio EV (kWh/km)
};

// --- Contracting (solo parametri mostrati al cliente) ------------------------
// Il margine reale NON è qui: sta in catalog.internal.ts. Questi due valori
// sono già dichiarati apertamente al cliente nel blocco "Come abbiamo calcolato".
export const CONTRACTING = {
  quotaAutoconsumo: 0.65, // con batteria, valore PRUDENTE (non ottimistico)
  scontoCanone: 0.15, // il canone parte 15% sotto la spesa attuale del cliente
};

export const kwhAnnoDefault = 5000;

// --- Contatti (pubblici) -----------------------------------------------------
export const CONTATTI = {
  telefono: "078 657 10 66",
  telefonoTel: "0786571066",
  whatsapp: "41786571066",
  responsabile: "Guner",
};
