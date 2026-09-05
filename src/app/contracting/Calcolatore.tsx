"use client";

import { useState } from "react";
import {
  computeContracting,
  chf,
  num,
  type ContractingInput,
  type SituazioneAuto,
  type Tetto,
  type Immobile,
} from "@/lib/calc";
import { ENERGY, MOBILITY, CONTRACTING, RISCALDAMENTO, kwhAnnoDefault } from "@/lib/catalog";

const card = {
  background: "#fff",
  border: "1px solid rgba(0,0,0,0.07)",
  borderRadius: "12px",
  padding: "1.6rem",
  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
};

const label: React.CSSProperties = {
  display: "block",
  fontWeight: 600,
  fontSize: "0.9rem",
  color: "var(--text-primary)",
  marginBottom: "0.5rem",
};

const field: React.CSSProperties = {
  width: "100%",
  padding: "0.7rem 0.9rem",
  borderRadius: "8px",
  border: "1px solid rgba(0,0,0,0.15)",
  fontSize: "1rem",
  fontFamily: "var(--font-body)",
  background: "#fff",
  color: "var(--text-primary)",
};

export default function Calcolatore() {
  const [i, setI] = useState<ContractingInput>({
    kmAnno: MOBILITY.kmAnnoDefault,
    situazioneAuto: "sto_valutando",
    lPer100km: MOBILITY.lPer100kmDefault,
    prezzoCarburante: MOBILITY.prezzoCarburanteDefault,
    kwhAnno: kwhAnnoDefault,
    tariffaCtKwh: ENERGY.tariffaCtKwh,
    tetto: "si",
    immobile: "primaria",
  });

  // riscaldamento: la spesa fossile la catturiamo SOLO se il cliente passa alla
  // termopompa (che installiamo noi). Chi scalda a legna/gasolio ma non la prende
  // resta un'informazione utile (candidato da convincere), ma NON alza il canone.
  //   "no" = non rilevante | "valuto" = sta valutando la termopompa
  //   "fossile" = scalda a gasolio/gas (nessun effetto sul canone) | "gia" = la ha già
  const [riscMode, setRiscMode] = useState<"no" | "valuto" | "fossile" | "gia">("no");
  const [spesaRisc, setSpesaRisc] = useState(RISCALDAMENTO.spesaFossileDefaultChf);

  const [inviato, setInviato] = useState(false);
  const [invio, setInvio] = useState<"idle" | "corso" | "errore">("idle");
  const [contatto, setContatto] = useState({ nome: "", telefono: "", comune: "", fascia: "Mattina" });

  const set = <K extends keyof ContractingInput>(k: K, v: ContractingInput[K]) =>
    setI((prev) => ({ ...prev, [k]: v }));

  // sia "sto valutando" sia "a gasolio/gas" contano la spesa di riscaldamento:
  // serve a mostrare al cliente quanto spende DAVVERO oggi (il confronto col canone).
  const riscConta = riscMode === "valuto" || riscMode === "fossile";
  const inputCalcolo: ContractingInput = {
    ...i,
    speseRiscaldamentoOggi: riscConta ? spesaRisc : 0,
    kWhRiscaldamento: riscConta ? RISCALDAMENTO.kWhElettriciDefault : 0,
  };

  const r = computeContracting(inputCalcolo);
  const giaElettrica = i.situazioneAuto === "gia_elettrica";

  async function inviaLead(e: React.FormEvent) {
    e.preventDefault();
    setInvio("corso");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: inputCalcolo, contatto }),
      });
      if (!res.ok) throw new Error("bad");
      setInviato(true);
    } catch {
      setInvio("errore");
    }
  }

  return (
    <div style={{ maxWidth: "980px", margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.2rem" }}>
        {/* ---------------- INPUT ---------------- */}
        <div style={card}>
          <h3 style={{ fontSize: "1.15rem", marginBottom: "1.3rem" }}>La tua situazione oggi</h3>

          <div style={{ marginBottom: "1.3rem" }}>
            <label style={label}>
              Chilometri all&apos;anno in auto: <b>{num(i.kmAnno)} km</b>
            </label>
            <input
              type="range"
              min={5000}
              max={40000}
              step={1000}
              value={i.kmAnno}
              onChange={(e) => set("kmAnno", Number(e.target.value))}
              style={{ width: "100%", accentColor: "var(--primary-color)" }}
            />
          </div>

          <div style={{ marginBottom: "1.3rem" }}>
            <label style={label}>La tua auto</label>
            <select style={field} value={i.situazioneAuto} onChange={(e) => set("situazioneAuto", e.target.value as SituazioneAuto)}>
              <option value="sto_valutando">Sto valutando l&apos;elettrico</option>
              <option value="benzina_diesel">A benzina o diesel</option>
              <option value="gia_elettrica">Già elettrica</option>
            </select>
          </div>

          {!giaElettrica && (
            <div style={{ display: "flex", gap: "0.8rem", marginBottom: "1.3rem" }}>
              <div style={{ flex: 1 }}>
                <label style={label}>Consumo (L/100km)</label>
                <input type="number" step="0.1" style={field} value={i.lPer100km} onChange={(e) => set("lPer100km", Number(e.target.value))} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={label}>Carburante (CHF/L)</label>
                <input type="number" step="0.01" style={field} value={i.prezzoCarburante} onChange={(e) => set("prezzoCarburante", Number(e.target.value))} />
              </div>
            </div>
          )}

          <div style={{ display: "flex", gap: "0.8rem", marginBottom: "1.3rem" }}>
            <div style={{ flex: 1 }}>
              <label style={label}>Elettricità (kWh/anno)</label>
              <input type="number" step="100" style={field} value={i.kwhAnno} onChange={(e) => set("kwhAnno", Number(e.target.value))} />
              <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>Lo trovi nella bolletta annuale.</span>
            </div>
            <div style={{ flex: 1 }}>
              <label style={label}>Tariffa (ct/kWh)</label>
              <input type="number" step="1" style={field} value={i.tariffaCtKwh} onChange={(e) => set("tariffaCtKwh", Number(e.target.value))} />
            </div>
          </div>

          <div style={{ display: "flex", gap: "0.8rem" }}>
            <div style={{ flex: 1 }}>
              <label style={label}>Tetto disponibile</label>
              <select style={field} value={i.tetto} onChange={(e) => set("tetto", e.target.value as Tetto)}>
                <option value="si">Sì</option>
                <option value="parziale">Parziale</option>
                <option value="no">No</option>
                <option value="non_so">Non so</option>
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <label style={label}>Immobile</label>
              <select style={field} value={i.immobile} onChange={(e) => set("immobile", e.target.value as Immobile)}>
                <option value="primaria">Residenza primaria</option>
                <option value="secondaria">Residenza secondaria</option>
              </select>
            </div>
          </div>

          {/* riscaldamento / termopompa — stesso schema dell'auto */}
          <div style={{ marginTop: "1.3rem" }}>
            <label style={label}>🔥 Riscaldamento</label>
            <select
              style={field}
              value={riscMode}
              onChange={(e) => {
                const m = e.target.value as typeof riscMode;
                setRiscMode(m);
                // se ha già la termopompa, il consumo elettrico è più alto: alzo il
                // default del campo bolletta (senza sommare a parte = niente doppio conteggio)
                if (m === "gia" && i.kwhAnno <= kwhAnnoDefault) {
                  set("kwhAnno", kwhAnnoDefault + RISCALDAMENTO.kWhElettriciDefault);
                }
              }}
            >
              <option value="no">Non rilevante / non so</option>
              <option value="valuto">Sto valutando una termopompa</option>
              <option value="fossile">Riscaldo a gasolio o gas</option>
              <option value="gia">Ho già una termopompa</option>
            </select>
            {riscConta && (
              <div style={{ marginTop: "0.8rem" }}>
                <label style={label}>Spesa riscaldamento all&apos;anno (CHF)</label>
                <input
                  type="number"
                  step="100"
                  style={field}
                  value={spesaRisc}
                  onChange={(e) => setSpesaRisc(Number(e.target.value))}
                />
                <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>
                  Quanto spendi oggi in legna/gasolio/gas per scaldare: è una spesa che oggi hai davvero. Con la termopompa a energia solare rientra nel canone.
                </span>
              </div>
            )}
            {riscMode === "gia" && (
              <span style={{ display: "block", marginTop: "0.6rem", fontSize: "0.75rem", color: "#94a3b8", lineHeight: 1.6 }}>
                Ho già alzato il consumo qui sopra perché la termopompa pesa in bolletta.
                Correggi il campo <b>Elettricità (kWh/anno)</b> col tuo valore reale
                (spesso 8&apos;000–12&apos;000 kWh): è già tutto lì, non va sommato a parte.
              </span>
            )}
          </div>
        </div>

        {/* ---------------- RISULTATO ---------------- */}
        <div style={{ ...card, background: "linear-gradient(135deg, #0f172a 0%, #1a2744 100%)", color: "#fff", border: "none" }}>
          <p style={{ color: "#ffb300", fontWeight: 600, letterSpacing: "1.5px", fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "1rem" }}>
            Con AlpFree, un canone unico
          </p>

          <div style={{ marginBottom: "1.2rem" }}>
            <div style={{ color: "#94a3b8", fontSize: "0.85rem" }}>Spendi oggi (energia + carburante)</div>
            <div style={{ fontSize: "1.6rem", fontWeight: 700 }}>{chf(r.costoTotaleOggi)}<span style={{ fontSize: "0.9rem", color: "#94a3b8" }}> /anno</span></div>
          </div>

          <div style={{ marginBottom: "1.2rem", paddingTop: "1.2rem", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
            <div style={{ color: "#4caf50", fontSize: "0.85rem", fontWeight: 600 }}>Canone AlpFree proposto</div>
            <div style={{ fontSize: "2.4rem", fontWeight: 800, color: "#fff", fontFamily: "var(--font-heading)" }}>
              {chf(r.canoneProposto)}<span style={{ fontSize: "1rem", color: "#94a3b8" }}> /anno</span>
            </div>
            <div style={{ fontSize: "0.85rem", color: "#94a3b8" }}>
              ≈ {chf(r.canoneProposto / 12)} al mese · indicizzato, non fisso
            </div>
          </div>

          {/* costo residuo SEMPRE visibile — non fingiamo che vada a zero */}
          <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: "8px", padding: "0.9rem 1rem", fontSize: "0.85rem", lineHeight: 1.6 }}>
            <b style={{ color: "#fff" }}>Resta comunque</b> un costo residuo di circa <b style={{ color: "#ffb300" }}>{chf(r.costoResiduo)}/anno</b> (energia non coperta da autoconsumo + tassa di rete, che si paga sempre). Il canone qui sopra è già al netto di tutto.
          </div>

          {r.mobilitaCondizionata && (
            <div style={{ marginTop: "1rem", background: "rgba(255,179,0,0.12)", border: "1px solid rgba(255,179,0,0.3)", borderRadius: "8px", padding: "0.9rem 1rem", fontSize: "0.82rem", lineHeight: 1.6, color: "#ffe6a8" }}>
              Attenzione: hai un&apos;auto a benzina/diesel. Il risparmio sulla mobilità qui incluso si realizza <b>solo passando all&apos;elettrico</b>. Senza quel passaggio, il conto riguarda solo l&apos;elettricità di casa.
            </div>
          )}
        </div>
      </div>

      {/* ---------------- NOTA EMS / INTELLIGENZA ARTIFICIALE ---------------- */}
      <div
        style={{
          ...card,
          marginTop: "1.2rem",
          borderLeft: "4px solid var(--primary-color)",
          background: "#f8fafc",
          display: "flex",
          gap: "0.9rem",
          alignItems: "flex-start",
        }}
      >
        <span style={{ fontSize: "1.6rem", lineHeight: 1 }}>🧠</span>
        <p style={{ margin: 0, color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.7 }}>
          <b style={{ color: "var(--text-primary)" }}>La tua casa non è solo alimentata: è gestita.</b>{" "}
          Con Home Assistant e un&apos;intelligenza artificiale locale, AlpFree ottimizza ogni giorno
          produzione solare, accumulo e consumi — imparando dalle tue abitudini, dalle tariffe e dal meteo.
          Il sistema non invecchia: <b style={{ color: "var(--text-primary)" }}>migliora nel tempo, in autonomia</b>,
          per farti sfruttare al massimo ogni kilowattora che produci.
        </p>
      </div>

      {/* ---------------- COME ABBIAMO CALCOLATO ---------------- */}
      <details style={{ ...card, marginTop: "1.2rem" }}>
        <summary style={{ fontWeight: 600, cursor: "pointer", color: "var(--primary-color)" }}>Come abbiamo calcolato</summary>
        <ul style={{ marginTop: "1rem", paddingLeft: "1.2rem", color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.9 }}>
          <li>Consumo auto elettrica: <b>{MOBILITY.evKwhPerKm} kWh/km</b></li>
          <li>Quota di autoconsumo con batteria: <b>{Math.round(CONTRACTING.quotaAutoconsumo * 100)}%</b> (valore prudente)</li>
          <li>Tassa di rete annua fissa: <b>{chf(ENERGY.tassaReteAnnua)}</b> — non azzerabile</li>
          <li>Canone: <b>{Math.round((1 - CONTRACTING.scontoCanone) * 100)}%</b> della tua spesa attuale</li>
          <li>Fabbisogno stimato con la mobilità: <b>{num(r.kWhTotaliNuovi)} kWh/anno</b></li>
        </ul>
        <p style={{ marginTop: "0.8rem", color: "#94a3b8", fontSize: "0.8rem" }}>
          È una stima sul divario misurabile oggi, non una previsione. Il canone reale si definisce con un sopralluogo.
        </p>
      </details>

      {/* ---------------- CTA / FORM ---------------- */}
      <div style={{ ...card, marginTop: "1.2rem", textAlign: inviato ? "center" : "left" }}>
        {inviato ? (
          <div style={{ padding: "1rem 0" }}>
            <div style={{ fontSize: "2rem" }}>✅</div>
            <h3 style={{ marginTop: "0.6rem" }}>Grazie, {contatto.nome || "a presto"}.</h3>
            <p style={{ color: "var(--text-secondary)" }}>
              Guner ti richiama di persona per una verifica sul posto. Nessuna email automatica, nessun venditore: una persona.
            </p>
          </div>
        ) : (
          <>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.4rem" }}>Richiedi una verifica sul posto</h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", marginBottom: "1.2rem" }}>
              Il numero qui sopra è indicativo. La cifra reale si definisce solo guardando il tuo tetto e le tue bollette. Ti richiama Guner, di persona.
            </p>
            <form onSubmit={inviaLead}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0.8rem", marginBottom: "1rem" }}>
                <input required placeholder="Nome" style={field} value={contatto.nome} onChange={(e) => setContatto({ ...contatto, nome: e.target.value })} />
                <input required placeholder="Telefono" style={field} value={contatto.telefono} onChange={(e) => setContatto({ ...contatto, telefono: e.target.value })} />
                <input required placeholder="Comune" style={field} value={contatto.comune} onChange={(e) => setContatto({ ...contatto, comune: e.target.value })} />
                <select style={field} value={contatto.fascia} onChange={(e) => setContatto({ ...contatto, fascia: e.target.value })}>
                  <option>Mattina</option>
                  <option>Pomeriggio</option>
                  <option>Sera</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary" disabled={invio === "corso"} style={{ fontSize: "1.02rem", padding: "0.9rem 2.2rem" }}>
                {invio === "corso" ? "Invio…" : "Richiedi una verifica sul posto"}
              </button>
              {invio === "errore" && (
                <span style={{ display: "block", marginTop: "0.8rem", color: "#c0392b", fontSize: "0.85rem" }}>
                  Qualcosa non ha funzionato. Scrivici su WhatsApp e ci pensiamo noi.
                </span>
              )}
            </form>
          </>
        )}
      </div>

      <p style={{ textAlign: "center", color: "#94a3b8", fontSize: "0.8rem", marginTop: "2rem", lineHeight: 1.7 }}>
        Stime indicative (Ticino, {new Date().getFullYear()}). Non vendiamo risparmio: mostriamo il divario misurabile oggi.
        <br />
        AlpFree installa, possiede e gestisce l&apos;impianto. Tu paghi un canone, indicizzato all&apos;energia.
      </p>
    </div>
  );
}
