import type { Metadata } from "next";
import Offerta from "./Offerta";

// Area interna: NON indicizzare.
export const metadata: Metadata = {
  title: "Strumento offerta (interno) — AlpFree",
  robots: { index: false, follow: false },
};

export default function InternoPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#eef1f5", paddingBottom: "80px" }}>
      <header style={{ background: "#0f172a", color: "#fff", padding: "1.1rem 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.15rem" }}>
            AlpFree <span style={{ color: "#ffb300" }}>· Strumento offerta</span>
          </div>
          <span style={{ fontSize: "0.8rem", color: "#94a3b8" }}>Uso interno — prezzi e margini</span>
        </div>
      </header>

      <section style={{ padding: "2.2rem 0" }}>
        <div className="container">
          <p style={{ maxWidth: "1100px", margin: "0 auto 1.6rem", color: "var(--text-secondary)", fontSize: "0.95rem" }}>
            Seleziona i moduli che vuole il cliente: pannelli, batteria, wallbox, automazione/EMS.
            Stesso motore del calcolatore pubblico — i numeri coincidono. La colonna scura mostra
            costo reale AlpFree, margine e ammortamento (solo per te).
          </p>
          <Offerta />
        </div>
      </section>
    </main>
  );
}
