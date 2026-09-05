"use client";

import { useState } from "react";
import { computeContracting, chf } from "@/lib/calc";
import { buildOffer, type OffertaInput } from "@/lib/calc.internal";
import { MOBILITY, ENERGY, CONTRACTING, kwhAnnoDefault } from "@/lib/catalog";
import {
  MODULI_FV,
  BATTERIA,
  WALLBOX,
  TERMOPOMPA,
  AUTOMAZIONE,
  TIER_EMS,
  SUSSIDI,
  MARGINE_LISTINO_DEFAULT,
} from "@/lib/catalog.internal";

const card: React.CSSProperties = {
  background: "#fff",
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: "12px",
  padding: "1.5rem",
  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
};
const label: React.CSSProperties = { display: "block", fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.4rem" };
const field: React.CSSProperties = { width: "100%", padding: "0.55rem 0.75rem", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.15)", fontSize: "0.95rem" };
const row: React.CSSProperties = { display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.8rem", padding: "0.5rem 0", borderBottom: "1px solid #f1f5f9" };

export default function Offerta() {
  const [o, setO] = useState<OffertaInput>({
    fv: true,
    numModuli: 20,
    moduloId: MODULI_FV[0].id,
    batteria: true,
    batteriaKwh: BATTERIA.tagli[0].kwh,
    batteriaPrezzoChf: BATTERIA.tagli[0].prezzoChf,
    wallbox: true,
    wallboxPrezzoChf: WALLBOX.prezzoChf,
    termopompa: false,
    termopompaPrezzoChf: TERMOPOMPA.prezzoChf,
    automazione: true,
    automazionePrezzoChf: AUTOMAZIONE.prezzoChf,
    sussidioChf: SUSSIDI.pronovoBase + SUSSIDI.pronovoPerKwp * 8,
    margineListino: MARGINE_LISTINO_DEFAULT,
  });
  const [tierEms, setTierEms] = useState(TIER_EMS[1].id);
  const [contracting, setContracting] = useState(true);

  // termopompa: "no" | "nuova" (a costo, con arbitraggio fossile) | "gia" (già installata)
  const [tpMode, setTpMode] = useState<"no" | "nuova" | "gia">("no");
  const [spesaRisc, setSpesaRisc] = useState(TERMOPOMPA.spesaFossileOggiChf);
  const [kwhRisc, setKwhRisc] = useState(TERMOPOMPA.kWhElettriciAnno);

  // leva margine: sconto sul canone (%). Più basso = canone più alto = più margine.
  const [scontoPct, setScontoPct] = useState(Math.round(CONTRACTING.scontoCanone * 100));

  // situazione cliente per stimare canone/margine contracting
  const [kmAnno, setKmAnno] = useState(MOBILITY.kmAnnoDefault);
  const [kwhAnno, setKwhAnno] = useState(kwhAnnoDefault);

  const set = <K extends keyof OffertaInput>(k: K, v: OffertaInput[K]) => setO((p) => ({ ...p, [k]: v }));

  // solo la termopompa NUOVA aggiunge arbitraggio (sostituisce il fossile).
  // Se il cliente la ha già, il consumo è di norma già nel suo kWh/anno.
  const tpNuova = tpMode === "nuova";
  const cliente = computeContracting({
    kmAnno,
    situazioneAuto: "sto_valutando",
    lPer100km: MOBILITY.lPer100kmDefault,
    prezzoCarburante: MOBILITY.prezzoCarburanteDefault,
    kwhAnno,
    tariffaCtKwh: ENERGY.tariffaCtKwh,
    tetto: "si",
    immobile: "primaria",
    speseRiscaldamentoOggi: tpNuova ? spesaRisc : 0,
    kWhRiscaldamento: tpNuova ? kwhRisc : 0,
    scontoCanone: scontoPct / 100,
  });
  const canoneAnnuo = cliente.canoneProposto;
  const emsMensile = TIER_EMS.find((t) => t.id === tierEms)?.chfMese ?? 0;

  const res = buildOffer({ ...o, termopompa: tpNuova }, contracting ? canoneAnnuo : undefined);
  const modulo = MODULI_FV.find((m) => m.id === o.moduloId) ?? MODULI_FV[0];
  const margineContracting = contracting ? canoneAnnuo - cliente.costoResiduo : 0;

  const toggle = (attivo: boolean, on: () => void) => (
    <span style={{ fontSize: "0.8rem", fontWeight: 700, color: attivo ? "var(--primary-color)" : "#94a3b8", cursor: "pointer" }} onClick={on}>
      {attivo ? "● incluso" : "○ escluso"}
    </span>
  );

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "1.4rem", alignItems: "start" }}>
      {/* ---------------- MODULI ---------------- */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
        <div style={card}>
          <div style={{ ...row, borderBottom: "none", marginBottom: "0.6rem" }}>
            <h3 style={{ fontSize: "1.05rem", margin: 0 }}>☀️ Impianto fotovoltaico</h3>
            {toggle(o.fv, () => set("fv", !o.fv))}
          </div>
          {o.fv && (
            <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
              <div style={{ flex: "2 1 200px" }}>
                <label style={label}>Modulo</label>
                <select style={field} value={o.moduloId} onChange={(e) => set("moduloId", e.target.value)}>
                  {MODULI_FV.map((m) => (
                    <option key={m.id} value={m.id}>{m.nome} · {chf(m.prezzoChf)}</option>
                  ))}
                </select>
              </div>
              <div style={{ flex: "1 1 110px" }}>
                <label style={label}>N. moduli</label>
                <input type="number" style={field} value={o.numModuli} onChange={(e) => set("numModuli", Number(e.target.value))} />
              </div>
              <div style={{ flex: "1 1 100%", fontSize: "0.82rem", color: "#94a3b8", marginTop: "0.3rem" }}>
                Potenza: <b>{((o.numModuli * modulo.potenzaWp) / 1000).toFixed(1)} kWp</b>
              </div>
            </div>
          )}
        </div>

        <div style={card}>
          <div style={{ ...row, borderBottom: "none", marginBottom: "0.6rem" }}>
            <h3 style={{ fontSize: "1.05rem", margin: 0 }}>🔋 Batteria di accumulo</h3>
            {toggle(o.batteria, () => set("batteria", !o.batteria))}
          </div>
          {o.batteria && (
            <select
              style={field}
              value={o.batteriaKwh}
              onChange={(e) => {
                const t = BATTERIA.tagli.find((x) => x.kwh === Number(e.target.value))!;
                setO((p) => ({ ...p, batteriaKwh: t.kwh, batteriaPrezzoChf: t.prezzoChf }));
              }}
            >
              {BATTERIA.tagli.map((t) => (
                <option key={t.kwh} value={t.kwh}>{t.kwh} kWh · {chf(t.prezzoChf)}</option>
              ))}
            </select>
          )}
        </div>

        <div style={card}>
          <div style={{ ...row, borderBottom: "none" }}>
            <h3 style={{ fontSize: "1.05rem", margin: 0 }}>🚗 Wallbox ricarica EV</h3>
            {toggle(o.wallbox, () => set("wallbox", !o.wallbox))}
          </div>
        </div>

        <div style={card}>
          <div style={{ ...row, borderBottom: "none", marginBottom: tpMode !== "no" ? "0.6rem" : 0 }}>
            <h3 style={{ fontSize: "1.05rem", margin: 0 }}>🔥 Termopompa</h3>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: tpMode !== "no" ? "var(--primary-color)" : "#94a3b8" }}>
              {tpMode === "nuova" ? "● da installare" : tpMode === "gia" ? "● già presente" : "○ nessuna"}
            </span>
          </div>
          <select style={field} value={tpMode} onChange={(e) => setTpMode(e.target.value as "no" | "nuova" | "gia")}>
            <option value="no">Nessuna termopompa</option>
            <option value="nuova">Sì — da installare (nuovo impianto)</option>
            <option value="gia">Il cliente ce l&apos;ha già</option>
          </select>
          {tpMode === "nuova" && (
            <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", marginTop: "0.8rem" }}>
              <div style={{ flex: "1 1 120px" }}>
                <label style={label}>Prezzo installata (CHF)</label>
                <input type="number" step="500" style={field} value={o.termopompaPrezzoChf} onChange={(e) => set("termopompaPrezzoChf", Number(e.target.value))} />
              </div>
              <div style={{ flex: "1 1 120px" }}>
                <label style={label}>Spesa riscaldamento oggi (CHF/anno)</label>
                <input type="number" step="100" style={field} value={spesaRisc} onChange={(e) => setSpesaRisc(Number(e.target.value))} />
                <span style={{ fontSize: "0.72rem", color: "#94a3b8" }}>Gasolio/gas sostituito → entra nel canone</span>
              </div>
              <div style={{ flex: "1 1 120px" }}>
                <label style={label}>Consumo elettrico aggiunto (kWh/anno)</label>
                <input type="number" step="100" style={field} value={kwhRisc} onChange={(e) => setKwhRisc(Number(e.target.value))} />
              </div>
            </div>
          )}
          {tpMode === "gia" && (
            <p style={{ fontSize: "0.75rem", color: "#94a3b8", marginTop: "0.5rem", lineHeight: 1.5 }}>
              Nessun costo d&apos;installazione. Il consumo della termopompa è di norma già nel kWh/anno del cliente: assicurati che il valore inserito sotto lo includa.
            </p>
          )}
        </div>

        <div style={card}>
          <div style={{ ...row, borderBottom: "none", marginBottom: o.automazione ? "0.6rem" : 0 }}>
            <h3 style={{ fontSize: "1.05rem", margin: 0 }}>🏠 Automazione + EMS</h3>
            {toggle(o.automazione, () => set("automazione", !o.automazione))}
          </div>
          {o.automazione && (
            <div>
              <label style={label}>Fascia abbonamento EMS</label>
              <select style={field} value={tierEms} onChange={(e) => setTierEms(e.target.value)}>
                {TIER_EMS.map((t) => (
                  <option key={t.id} value={t.id}>{t.nome} · {chf(t.chfMese)}/mese — {t.descrizione}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div style={{ ...card, background: "#f8fafc" }}>
          <h4 style={{ fontSize: "0.95rem", marginBottom: "0.8rem" }}>Parametri economici (modificabili)</h4>
          <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 140px" }}>
              <label style={label}>Sussidi (CHF)</label>
              <input type="number" step="100" style={field} value={o.sussidioChf} onChange={(e) => set("sussidioChf", Number(e.target.value))} />
              <span style={{ fontSize: "0.72rem", color: "#94a3b8" }}>Stima Pronovo+TI, verificare</span>
            </div>
            <div style={{ flex: "1 1 140px" }}>
              <label style={label}>Margine listino (%)</label>
              <input type="number" step="1" style={field} value={Math.round(o.margineListino * 100)} onChange={(e) => set("margineListino", Number(e.target.value) / 100)} />
              <span style={{ fontSize: "0.72rem", color: "#94a3b8" }}>Per stimare costo reale AlpFree</span>
            </div>
            <div style={{ flex: "1 1 140px" }}>
              <label style={label}>Sconto canone (%)</label>
              <input type="number" step="1" style={field} value={scontoPct} onChange={(e) => setScontoPct(Number(e.target.value))} />
              <span style={{ fontSize: "0.72rem", color: "#94a3b8" }}>Più basso = canone più alto = più margine</span>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- RIEPILOGO ---------------- */}
      <div style={{ position: "sticky", top: "90px", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
        <div style={card}>
          <h3 style={{ fontSize: "1.05rem", marginBottom: "1rem" }}>Offerta cliente</h3>
          {res.voci.map((v, k) => (
            <div key={k} style={row}>
              <span style={{ fontSize: "0.88rem" }}>{v.descrizione}<br /><span style={{ color: "#94a3b8", fontSize: "0.78rem" }}>{v.quantita}</span></span>
              <b style={{ whiteSpace: "nowrap" }}>{chf(v.totale)}</b>
            </div>
          ))}
          <div style={{ ...row, borderBottom: "none", marginTop: "0.4rem" }}>
            <span style={{ color: "var(--text-secondary)" }}>Totale listino</span>
            <b>{chf(res.totaleListino)}</b>
          </div>
          <div style={row}>
            <span style={{ color: "var(--text-secondary)" }}>− Sussidi stimati</span>
            <b style={{ color: "var(--primary-color)" }}>− {chf(o.sussidioChf)}</b>
          </div>
          <div style={{ ...row, borderBottom: "none", fontSize: "1.15rem" }}>
            <b>Netto cliente (acquisto)</b>
            <b>{chf(res.totaleNettoCliente)}</b>
          </div>
          {o.automazione && (
            <div style={{ ...row, borderBottom: "none", color: "#94a3b8", fontSize: "0.85rem" }}>
              <span>+ EMS abbonamento</span>
              <span>{chf(emsMensile)}/mese</span>
            </div>
          )}
        </div>

        {/* Blocco contracting — SOLO per Mehmet */}
        <div style={{ ...card, background: "linear-gradient(135deg, #0f172a 0%, #1a2744 100%)", color: "#fff", border: "none" }}>
          <div style={{ ...row, borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
            <h3 style={{ fontSize: "1.05rem", margin: 0, color: "#fff" }}>📊 Vista contracting (interna)</h3>
            {toggle(contracting, () => setContracting(!contracting))}
          </div>
          {contracting && (
            <>
              <div style={{ display: "flex", gap: "0.7rem", margin: "0.9rem 0" }}>
                <div style={{ flex: 1 }}>
                  <label style={{ ...label, color: "#94a3b8" }}>km/anno cliente</label>
                  <input type="number" step="1000" style={field} value={kmAnno} onChange={(e) => setKmAnno(Number(e.target.value))} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ ...label, color: "#94a3b8" }}>kWh/anno cliente</label>
                  <input type="number" step="100" style={field} value={kwhAnno} onChange={(e) => setKwhAnno(Number(e.target.value))} />
                </div>
              </div>
              <div style={{ ...row, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <span style={{ color: "#94a3b8" }}>Costo reale AlpFree (netto sussidi)</span>
                <b>{chf(res.costoAlpFree)}</b>
              </div>
              <div style={{ ...row, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <span style={{ color: "#94a3b8" }}>Canone cliente</span>
                <b>{chf(canoneAnnuo)}/anno</b>
              </div>
              <div style={{ ...row, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <span style={{ color: "#94a3b8" }}>Margine annuo (canone − residuo)</span>
                <b style={{ color: margineContracting > 0 ? "#4caf50" : "#ff6b6b" }}>{chf(margineContracting)}</b>
              </div>
              <div style={{ ...row, borderBottom: "none" }}>
                <span style={{ color: "#94a3b8" }}>Ammortamento impianto</span>
                <b style={{ color: "#ffb300" }}>
                  {res.ammortamentoAnni ? `${res.ammortamentoAnni.toFixed(1)} anni` : "—"}
                </b>
              </div>
              <p style={{ fontSize: "0.75rem", color: "#94a3b8", marginTop: "0.6rem", lineHeight: 1.5 }}>
                Margine sul carburante escluso il residuo. L&apos;ammortamento usa il costo reale AlpFree (listino − margine − sussidi) diviso il canone annuo.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
