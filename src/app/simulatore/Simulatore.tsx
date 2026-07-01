"use client";

import { useState } from "react";

// Parametri Svizzera, verificati giu 2026
const P = {
  grid: 0.277, // CHF/kWh rete elettrica
  dieselP: 2.11, // CHF/L
  petrolP: 1.89, // CHF/L
  dieselK: 3.3, // kWh per litro (diesel)
  petrolK: 2.6, // kWh per litro (benzina)
  co2d: 2.64, // kg CO2 per litro diesel
  co2p: 2.31, // kg CO2 per litro benzina
};

const PRESETS = [
  { label: "Chalet piccolo", kwh: 4000 },
  { label: "Chalet medio", kwh: 6500 },
  { label: "Chalet grande", kwh: 10000 },
];

const chf = (n: number) =>
  n.toLocaleString("de-CH", { style: "currency", currency: "CHF", maximumFractionDigits: 0 });
const num = (n: number) => n.toLocaleString("de-CH", { maximumFractionDigits: 0 });

export default function Simulatore() {
  const [kwh, setKwh] = useState(6500);

  const dL = kwh / P.dieselK;
  const pL = kwh / P.petrolK;
  const costGrid = kwh * P.grid;
  const costDiesel = dL * P.dieselP;
  const costPetrol = pL * P.petrolP;
  const tonsCo2 = dL * P.co2d / 1000;

  const cards = [
    {
      icon: "💡",
      lab: "Rete elettrica",
      cost: chf(costGrid),
      det: "se comprassi tutto dalla rete",
    },
    {
      icon: "⛽",
      lab: "Generatore diesel",
      cost: chf(costDiesel),
      det: `≈ ${num(dL)} L · ${num(dL * P.co2d)} kg CO₂`,
    },
    {
      icon: "⛽",
      lab: "Generatore a benzina",
      cost: chf(costPetrol),
      det: `≈ ${num(pL)} L · ${num(pL * P.co2p)} kg CO₂`,
    },
  ];

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      {/* Pannello input */}
      <div className="glass-panel" style={{ padding: "2rem", marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "1.5rem" }}>
          {PRESETS.map((preset) => {
            const active = kwh === preset.kwh;
            return (
              <button
                key={preset.kwh}
                onClick={() => setKwh(preset.kwh)}
                style={{
                  border: active ? "1px solid var(--primary-color)" : "1px solid rgba(0,0,0,0.12)",
                  background: active ? "var(--primary-color)" : "#f1f5f9",
                  color: active ? "#fff" : "var(--text-secondary)",
                  borderRadius: "50px",
                  padding: "0.6rem 1.4rem",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  fontFamily: "var(--font-heading)",
                  transition: "all 0.2s ease",
                }}
              >
                {preset.label}
              </button>
            );
          })}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", maxWidth: "620px", margin: "0 auto", flexWrap: "wrap", justifyContent: "center" }}>
          <span style={{ color: "var(--text-secondary)", fontWeight: 500 }}>Consumo annuo</span>
          <input
            type="range"
            min={2000}
            max={15000}
            step={100}
            value={kwh}
            onChange={(e) => setKwh(Number(e.target.value))}
            style={{ flex: 1, minWidth: "220px", accentColor: "var(--primary-color)" }}
          />
          <span style={{ fontWeight: 800, fontSize: "1.25rem", whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums", color: "var(--text-primary)" }}>
            {num(kwh)} kWh
          </span>
        </div>
      </div>

      {/* Confronto costi */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.2rem" }}>
        {cards.map((c) => (
          <div key={c.lab} className="glass-panel" style={{ padding: "1.8rem", textAlign: "center" }}>
            <div style={{ fontSize: "2rem" }}>{c.icon}</div>
            <div style={{ color: "#94a3b8", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginTop: "0.4rem" }}>
              {c.lab}
            </div>
            <div style={{ fontSize: "2rem", fontWeight: 800, margin: "0.4rem 0", color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}>
              {c.cost}
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{c.det}</div>
          </div>
        ))}
      </div>

      {/* Punch CO2 */}
      <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1a2744 100%)", color: "white", borderRadius: "16px", padding: "2.5rem", textAlign: "center", margin: "1.5rem 0" }}>
        <div style={{ fontSize: "2.4rem", fontWeight: 800, color: "#ffb300", fontFamily: "var(--font-heading)" }}>
          {tonsCo2.toFixed(1).replace(".", ",")} tonnellate
        </div>
        <p style={{ margin: "0.6rem 0 0", color: "#94a3b8", fontSize: "1.05rem" }}>
          di CO₂ che il tuo chalet <b style={{ color: "#fff" }}>non emette</b>, ogni anno, restando indipendente.
        </p>
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
        <a
          href="https://wa.me/41786571066?text=Ciao%20Guner%2C%20ho%20provato%20il%20simulatore%20e%20vorrei%20parlare%20dell'indipendenza%20energetica%20per%20il%20mio%20chalet"
          className="btn btn-primary"
          style={{ fontSize: "1.05rem", padding: "1rem 2.5rem" }}
        >
          Parla con una persona
        </a>
        <span style={{ display: "block", color: "#94a3b8", fontSize: "0.85rem", marginTop: "0.9rem" }}>
          Dietro AlpFree c&apos;è sempre qualcuno che segue il tuo chalet. Non un&apos;app: una persona.
        </span>
      </div>

      {/* Note */}
      <div style={{ textAlign: "center", color: "#94a3b8", fontSize: "0.8rem", marginTop: "2rem", lineHeight: 1.7 }}>
        Stime indicative (Svizzera, giu 2026): rete 0.277 CHF/kWh · diesel 2.11 CHF/L · benzina 1.89 CHF/L ·
        resa generatore ~3,3 kWh/L (diesel) / 2,6 (benzina), ridotta in altitudine.
        <br />
        Non vendiamo risparmio. Vendiamo sovranità, controllo e indipendenza.
      </div>
    </div>
  );
}
