import type { Metadata } from "next";
import Script from "next/script";
import Calcolatore from "./Calcolatore";

export const metadata: Metadata = {
  title: "Contracting Energetico Chalet Ticino — Canone unico, zero investimento | AlpFree",
  description:
    "AlpFree installa e possiede l'impianto (fotovoltaico + batteria + ricarica auto). Tu paghi un canone mensile, indicizzato all'energia. Calcola il tuo canone.",
  keywords: [
    "contracting energetico ticino",
    "impianto fotovoltaico senza investimento",
    "canone energetico chalet",
    "ricarica auto elettrica fotovoltaico ticino",
    "solare a canone svizzera",
    "AlpFree contracting",
  ],
  alternates: { canonical: "https://alpfreeenergy.ch/contracting" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Contracting Energetico — Canone unico, zero investimento | AlpFree",
    description:
      "Un solo canone al posto di bolletta e carburante. AlpFree possiede e gestisce l'impianto; tu resti sovrano di casa tua.",
    url: "https://alpfreeenergy.ch/contracting",
    siteName: "AlpFree Energy",
    locale: "it_CH",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://alpfreeenergy.ch" },
    { "@type": "ListItem", position: 2, name: "Contracting Energetico", item: "https://alpfreeenergy.ch/contracting" },
  ],
};

export default function ContractingPage() {
  return (
    <>
      <Script
        id="contracting-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <nav className="navbar">
        <div className="container nav-container">
          <div className="nav-brand">
            <a href="/">
              <img src="/alpfree_logo_new.png" alt="AlpFree Energy Logo" style={{ height: "45px", width: "auto", objectFit: "contain", verticalAlign: "middle" }} />
            </a>
          </div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/#soluzioni">Soluzioni</a></li>
            <li><a href="/contracting" style={{ color: "var(--primary-color)", fontWeight: 700 }}>Contracting</a></li>
            <li><a href="/simulatore">Simulatore</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/#contatti">Contatti</a></li>
          </ul>
          <div>
            <a href="https://wa.me/41786571066" className="btn btn-primary">Consulenza Gratuita</a>
          </div>
        </div>
      </nav>

      <main>
        <section style={{ padding: "120px 0 40px", background: "linear-gradient(135deg, #0f172a 0%, #1a2744 100%)", color: "white", textAlign: "center" }}>
          <div className="container">
            <p style={{ color: "#ffb300", fontWeight: 600, letterSpacing: "3px", fontSize: "0.82rem", textTransform: "uppercase", marginBottom: "1rem" }}>
              AlpFree Energy — Contracting
            </p>
            <h1 style={{ fontSize: "2.8rem", fontWeight: 800, color: "white", marginBottom: "1.2rem", lineHeight: 1.2 }}>
              Un solo canone.<br />
              <span style={{ color: "#4caf50" }}>Zero investimento iniziale.</span>
            </h1>
            <p style={{ color: "#94a3b8", fontSize: "1.1rem", maxWidth: "680px", margin: "0 auto", lineHeight: 1.7 }}>
              AlpFree installa e possiede l&apos;impianto — fotovoltaico, batteria, ricarica per l&apos;auto.
              Tu paghi un canone al posto di bolletta e carburante. Indicizzato all&apos;energia, mai fisso.
            </p>
          </div>
        </section>

        <section style={{ padding: "60px 0 100px", backgroundColor: "#f8fafc" }}>
          <div className="container">
            <Calcolatore />
          </div>
        </section>

        <footer id="contatti" className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-brand">
                <h3>AlpFree<span>Energy</span></h3>
                <p>Installazione fotovoltaico premium in Canton Ticino. Qualità svizzera, servizio artigianale.</p>
              </div>
              <div className="footer-column">
                <h4>Navigazione</h4>
                <ul className="footer-links">
                  <li><a href="/">Home</a></li>
                  <li><a href="/#soluzioni">Soluzioni</a></li>
                  <li><a href="/contracting">Contracting</a></li>
                  <li><a href="/simulatore">Simulatore</a></li>
                  <li><a href="/faq">FAQ</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Contattaci</h4>
                <ul className="footer-links">
                  <li><strong>Responsabile:</strong> Guner</li>
                  <li><strong>Telefono:</strong> <a href="tel:0786571066">078 657 10 66</a></li>
                  <li><strong>WhatsApp:</strong> <a href="https://wa.me/41786571066">Chat diretta</a></li>
                  <li><strong>Zona:</strong> Lugano &amp; Canton Ticino</li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} AlpFree Energy — Installazione Fotovoltaico Ticino. Tutti i diritti riservati.</p>
            </div>
          </div>
        </footer>

        <a href="https://wa.me/41786571066" target="_blank" rel="noopener noreferrer" className="whatsapp-float">
          <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
      </main>
    </>
  );
}
