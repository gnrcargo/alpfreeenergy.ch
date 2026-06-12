import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "FAQ Fotovoltaico Ticino 2026 | AlpFree Energy — Domande e Risposte",
  description: "Tutte le risposte su pannelli solari, batterie, prezzi e incentivi per chalet e case in Ticino. Quanto costa un impianto? Quanti pannelli servono? Quali sussidi ci sono nel 2026?",
  keywords: [
    "faq fotovoltaico ticino", "domande pannelli solari svizzera", "quanto costa impianto solare ticino",
    "incentivi fotovoltaico 2026 svizzera", "pannelli solari chalet montagna", "batterie accumulo ticino",
    "sussidi pronovo ticino 2026", "impianto solare weekend chalet"
  ],
  alternates: {
    canonical: "https://alpfreeenergy.ch/faq",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "FAQ Fotovoltaico Ticino 2026 | AlpFree Energy",
    description: "Domande frequenti su pannelli solari, batterie, prezzi e incentivi in Ticino.",
    url: "https://alpfreeenergy.ch/faq",
    siteName: "AlpFree Energy",
    locale: "it_CH",
    type: "website",
  },
};

const faqData = [
  {
    category: "Piccoli impianti e chalet",
    questions: [
      {
        q: "Quanti pannelli solari servono per uno chalet usato nei weekend?",
        a: "Per uno chalet alpino usato nei weekend bastano 2-4 pannelli da 400W (0,8–1,6 kWp totali). In Ticino, con circa 1.200 kWh di produzione per kWp all'anno, un impianto da 1,2 kWp produce circa 1.440 kWh/anno — sufficiente per coprire frigo, luce e TV durante i weekend. AlpFree Energy parte da impianti completi installati da CHF 1.000 a CHF 6.000, tutto incluso.",
      },
      {
        q: "Quanto consuma un frigorifero sempre acceso in uno chalet di montagna?",
        a: "Un frigorifero A++ da 200–300 litri consuma circa 0,3–0,5 kWh al giorno, ovvero 100–180 kWh all'anno. In uno chalet vuoto 300 giorni l'anno, è energia che paghi anche quando non ci sei. Con un piccolo impianto solare da 1 kWp e una batteria gel da CHF 400, il frigorifero può funzionare gratuitamente nei mesi da aprile a ottobre in Ticino.",
      },
      {
        q: "Quante batterie servono per alimentare luce, TV e frigorifero per un weekend in uno chalet?",
        a: "Per un weekend di 3 giorni con frigo + luce + TV il consumo totale è circa 9–12 kWh. Servono 2–3 batterie gel da CHF 400 ciascuna (circa 12–15 kWh di capacità installata). Per iniziare, anche una sola batteria copre le notti e i momenti senza sole. AlpFree Energy dimensiona il sistema in base all'uso reale del tuo chalet.",
      },
      {
        q: "Quanto consuma uno chalet alpino in media in un anno?",
        a: "Uno chalet usato nei weekend e in vacanza consuma tipicamente 2.000–5.000 kWh/anno. Un impianto fotovoltaico da 2–4 kWp copre questa fascia comodamente in Ticino. Se lo chalet rimane vuoto la maggior parte del tempo, anche un impianto piccolo da 1 kWp produce energia sufficiente e remunerativa.",
      },
    ],
  },
  {
    category: "Prezzi e costi reali",
    questions: [
      {
        q: "Quanto costa un piccolo impianto solare per uno chalet in Ticino?",
        a: "Un piccolo impianto solare installato e funzionante per uno chalet alpino in Ticino parte da CHF 1.000 e arriva fino a CHF 6.000, tutto incluso: pannelli (~CHF 100 ciascuno), inverter (~CHF 500) e batteria gel (~CHF 400). Il costo finale dipende da manodopera, tipo di tetto, accessibilità e complessità dell'installazione. AlpFree Energy offre un sopralluogo gratuito per calcolare il preventivo esatto.",
      },
      {
        q: "Qual è il costo di un impianto fotovoltaico residenziale in Svizzera nel 2026?",
        a: "Un impianto residenziale da 8–12 kWp (casa o chalet di dimensioni standard) costa tra CHF 18.000 e CHF 35.000 prima degli incentivi. Con i contributi federali Pronovo e i sussidi cantonali del Ticino disponibili nel 2026, il costo netto si riduce del 20–35%. AlpFree Energy offre preventivi gratuiti e gestisce le pratiche per gli incentivi senza costi aggiuntivi.",
      },
      {
        q: "Quanto costa un pannello solare da 400W in Svizzera?",
        a: "Un pannello solare da 400W costa tra CHF 100 e CHF 250 al pannello (prezzo materiale). A questo si aggiungono inverter (da CHF 500), cavi, struttura di montaggio e manodopera. Il costo totale installato dipende molto dall'accessibilità del tetto e dalla complessità del lavoro. AlpFree Energy lavora con componenti selezionati al miglior rapporto qualità-prezzo disponibile in Ticino.",
      },
      {
        q: "Quanto si risparmia con il fotovoltaico in Svizzera?",
        a: "In Svizzera il costo medio dell'energia AIL (Ticino) è circa CHF 0.241/kWh, mentre la tariffa di remunerazione FER per l'energia immessa in rete è circa CHF 0.04/kWh. Un impianto da 10 kWp produce circa 11.000 kWh/anno in Ticino: se ne autoconsumi il 60%, risparmi CHF 1.600 e guadagni circa CHF 175 dalla cessione. Totale annuo stimato: CHF 1.800–3.500 a seconda dell'autoconsumo.",
      },
    ],
  },
  {
    category: "Incentivi e sussidi 2026",
    questions: [
      {
        q: "Ci sono sussidi per il fotovoltaico in Ticino nel 2026?",
        a: "Sì. In Svizzera è disponibile il contributo unico federale (OPEl, ex KEV) gestito da Pronovo, che copre una parte significativa del costo d'investimento. Il Cantone Ticino offre ulteriori contributi attraverso il programma SvizzeraEnergia. AlpFree Energy gestisce gratuitamente tutte le pratiche burocratiche per i propri clienti, dalla domanda al pagamento.",
      },
      {
        q: "Quanto paga Pronovo per il fotovoltaico in Svizzera?",
        a: "Il contributo unico Pronovo (OPEl) per impianti da 2 a 10 kWp è tipicamente CHF 1.000–6.000 a seconda della potenza installata. Per impianti superiori a 10 kWp esistono contributi ancora maggiori. I contributi cantonali del Ticino si sommano a quelli federali. AlpFree Energy calcola il contributo esatto per il tuo impianto durante il sopralluogo gratuito.",
      },
      {
        q: "Si possono detrarre le spese del fotovoltaico dalle tasse in Svizzera?",
        a: "Sì. In Svizzera i costi di installazione di impianti fotovoltaici su edifici esistenti sono deducibili fiscalmente come spese di mantenimento dell'immobile. L'ammontare varia per cantone: in Ticino è possibile dedurre una percentuale significativa del costo d'installazione. AlpFree Energy fornisce ai clienti tutta la documentazione fiscale necessaria.",
      },
      {
        q: "Quanto tempo ci vuole per ricevere i sussidi Pronovo in Ticino?",
        a: "La domanda Pronovo va presentata prima di iniziare i lavori. Dopo l'approvazione (tipicamente 2–4 settimane) e l'installazione, il pagamento del contributo avviene solitamente entro 3–6 mesi dal collaudo dell'impianto. AlpFree Energy segue tutto il processo: dalla richiesta iniziale all'incasso del contributo.",
      },
    ],
  },
  {
    category: "Pannelli e produzione",
    questions: [
      {
        q: "Quanta energia producono i pannelli solari in Ticino?",
        a: "In Ticino, con circa 1.900–2.200 ore di sole all'anno, un impianto da 1 kWp produce mediamente 1.100–1.400 kWh/anno — tra i valori più alti della Svizzera. Un impianto da 10 kWp produce quindi 11.000–14.000 kWh/anno, coprendo completamente il fabbisogno di una famiglia media svizzera (circa 5.000 kWh/anno).",
      },
      {
        q: "I pannelli solari funzionano d'inverno e con la neve in Ticino?",
        a: "Sì, producono anche d'inverno, ma meno: in dicembre e gennaio la produzione scende al 20–30% rispetto all'estate. La neve si scoglie velocemente grazie al sole alpino e all'inclinazione del pannello. Per garantire autonomia totale anche d'inverno, AlpFree Energy installa sistemi ibridi solare + micro turbina idroelettrica (ruscello) — unici in Ticino.",
      },
      {
        q: "Qual è la durata dei pannelli solari?",
        a: "I pannelli fotovoltaici moderni hanno una durata garantita di 25–30 anni. La produzione diminuisce circa dello 0,5% all'anno, quindi dopo 25 anni il pannello produce ancora l'88% della potenza nominale. L'inverter ha invece una vita media di 10–15 anni. AlpFree Energy seleziona componenti con garanzie solide e segue la manutenzione nel tempo.",
      },
    ],
  },
  {
    category: "Batterie e accumulo",
    questions: [
      {
        q: "Vale la pena aggiungere una batteria all'impianto solare in Ticino?",
        a: "Sì, specialmente per chalet e case secondarie. Senza batteria, l'energia prodotta ma non consumata va in rete a CHF 0.04/kWh (tariffa FER). Con una batteria, la stessa energia vale CHF 0.24/kWh perché la usi di notte o quando non c'è sole. Per uno chalet usato nei weekend, una batteria gel da CHF 400 può ripagare se stessa in 2–3 anni.",
      },
      {
        q: "Qual è la differenza tra batterie gel e batterie litio per il fotovoltaico?",
        a: "Le batterie gel (AGM) costano meno (CHF 300–600 per 100Ah), non richiedono manutenzione e sono sicure. Durano 5–8 anni. Le batterie al litio (LiFePO4) costano di più (CHF 800–2.000 per 100Ah) ma durano 10–15 anni e hanno un'efficienza superiore. Per piccoli chalet con budget limitato, AlpFree Energy parte da batterie gel. Per sistemi permanenti, consigliamo il litio.",
      },
      {
        q: "Quante kWh di batteria servono per una notte in uno chalet?",
        a: "Una notte in uno chalet con frigo + luce LED + TV consuma circa 1,5–3 kWh. Per 2 notti di weekend bastano 3–6 kWh di capacità installata. AlpFree Energy dimensiona sempre le batterie con un margine di sicurezza del 30% per evitare scariche profonde che riducono la vita utile.",
      },
    ],
  },
  {
    category: "Chalet come investimento",
    questions: [
      {
        q: "Conviene installare il solare su un chalet di vacanza in Ticino?",
        a: "Assolutamente sì. Un chalet con impianto fotovoltaico produce reddito energetico anche quando è vuoto, immette energia in rete e ottiene una remunerazione. Aumenta inoltre il valore commerciale dell'immobile del 10–15% e migliora la classe energetica. Per i proprietari che risiedono fuori dal Ticino — a Zurigo, Ginevra o Basilea — è uno degli investimenti più solidi per il loro immobile alpino.",
      },
      {
        q: "Quanto guadagna un chalet con un impianto solare in Ticino?",
        a: "Un impianto da 10 kWp su un chalet in Ticino produce circa 11.000 kWh/anno. Il reddito o risparmio dipende dall'autoconsumo: se il chalet è vuoto e tutta l'energia va in rete a CHF 0.04/kWh il reddito è circa CHF 440/anno. Se invece il chalet è affittato e c'è alto autoconsumo, il risparmio è CHF 2.600–3.500/anno. Con un impianto da 3 kWp per un piccolo chalet, il ritorno annuo è CHF 130–1.000.",
      },
      {
        q: "Un impianto solare aumenta il valore del chalet in Ticino?",
        a: "Sì. Secondo studi del mercato immobiliare svizzero, un impianto fotovoltaico certificato aumenta il valore di mercato di un immobile del 5–15%, a seconda delle dimensioni e della localizzazione. Migliora anche la classe energetica certificata (MINERGIE, CECE), che è sempre più richiesta dai compratori e influenza i tassi ipotecari.",
      },
    ],
  },
  {
    category: "Come funziona il processo",
    questions: [
      {
        q: "Chi installa pannelli solari a Lugano e in Ticino?",
        a: "AlpFree Energy, con sede a Lugano, è specializzata nell'installazione di impianti fotovoltaici premium in tutto il Canton Ticino. Guner, il fondatore, segue personalmente ogni progetto dalla progettazione all'installazione finale. Contattaci al +41 78 657 10 66 per una consulenza gratuita.",
      },
      {
        q: "Come funziona il processo di installazione con AlpFree Energy?",
        a: "1) Contatto WhatsApp o telefono gratuito. 2) Sopralluogo gratuito allo chalet o casa in Ticino. 3) Progetto personalizzato con preventivo chiaro. 4) Gestione gratuita delle pratiche per incentivi Pronovo. 5) Installazione professionale. 6) Collaudo e prima accensione con te. 7) Supporto post-installazione. Dall'idea all'energia: tipicamente 4–8 settimane.",
      },
      {
        q: "AlpFree Energy lavora anche su chalet in quota difficili da raggiungere?",
        a: "Sì. Guner è specializzato in installazioni su chalet alpini in Ticino, inclusi immobili in quota con accesso difficile. L'esperienza in montagna e la dotazione di attrezzatura adatta permette di lavorare dove altri installatori non arrivano. Il sopralluogo preliminare gratuito valuta sempre l'accessibilità e l'esposizione del tetto.",
      },
    ],
  },
];

const allFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.flatMap((cat) =>
    cat.questions.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <Script
        id="faq-page-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(allFaqJsonLd) }}
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
            <li><a href="/#chalet">Chalet Asset</a></li>
            <li><a href="/faq" style={{ color: "var(--primary-color)", fontWeight: 700 }}>FAQ</a></li>
            <li><a href="/#contatti">Contatti</a></li>
          </ul>
          <div>
            <a href="https://wa.me/41786571066" className="btn btn-primary">Consulenza Gratuita</a>
          </div>
        </div>
      </nav>

      <main>
        <section style={{ padding: "80px 0 40px", background: "linear-gradient(135deg, #0f172a 0%, #1a2744 100%)", color: "white", textAlign: "center" }}>
          <div className="container">
            <p style={{ color: "#ffb300", fontWeight: 600, letterSpacing: "3px", fontSize: "0.82rem", textTransform: "uppercase", marginBottom: "1rem" }}>
              AlpFree Energy — Canton Ticino
            </p>
            <h1 style={{ fontSize: "2.8rem", fontWeight: 800, color: "white", marginBottom: "1.2rem", lineHeight: 1.2 }}>
              Domande Frequenti sul<br />
              <span style={{ color: "#4caf50" }}>Fotovoltaico in Ticino</span>
            </h1>
            <p style={{ color: "#94a3b8", fontSize: "1.1rem", maxWidth: "650px", margin: "0 auto 2rem", lineHeight: 1.7 }}>
              Pannelli, batterie, prezzi reali, incentivi 2026 e chalet come investimento.
              Tutte le risposte basate su dati reali svizzeri.
            </p>
            <a href="https://wa.me/41786571066" className="btn btn-primary" style={{ fontSize: "1rem", padding: "0.9rem 2rem" }}>
              Fai la tua domanda a Guner
            </a>
          </div>
        </section>

        <section style={{ padding: "70px 0 100px", backgroundColor: "#f8fafc" }}>
          <div className="container">
            <div style={{ maxWidth: "860px", margin: "0 auto" }}>

              {faqData.map((cat, ci) => (
                <div key={ci} style={{ marginBottom: "3.5rem" }}>
                  <h2 style={{
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    borderLeft: "4px solid #ffb300",
                    paddingLeft: "1rem",
                    marginBottom: "1.5rem",
                  }}>
                    {cat.category}
                  </h2>

                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {cat.questions.map((item, qi) => (
                      <details key={qi} className="glass-panel" style={{ padding: "0" }}>
                        <summary style={{
                          padding: "1.4rem 1.8rem",
                          cursor: "pointer",
                          fontWeight: 600,
                          fontSize: "1rem",
                          color: "#0f172a",
                          listStyle: "none",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}>
                          {item.q}
                          <span style={{ fontSize: "1.3rem", color: "#ffb300", marginLeft: "1rem", flexShrink: 0 }}>+</span>
                        </summary>
                        <div style={{ padding: "0 1.8rem 1.4rem", color: "#475569", lineHeight: 1.8, fontSize: "0.97rem" }}>
                          {item.a}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              ))}

              <div style={{
                background: "linear-gradient(135deg, #0f172a 0%, #1a2744 100%)",
                borderRadius: "16px",
                padding: "3rem 2.5rem",
                textAlign: "center",
                color: "white",
                marginTop: "2rem",
              }}>
                <h3 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.8rem" }}>
                  Non hai trovato la risposta che cerchi?
                </h3>
                <p style={{ color: "#94a3b8", marginBottom: "1.5rem", fontSize: "1rem" }}>
                  Scrivici su WhatsApp — Guner risponde di persona entro poche ore.
                </p>
                <a
                  href="https://wa.me/41786571066?text=Ciao%20Guner%2C%20ho%20una%20domanda%20sul%20fotovoltaico%20in%20Ticino"
                  className="btn btn-primary"
                  style={{ fontSize: "1rem", padding: "0.9rem 2.2rem" }}
                >
                  Scrivi su WhatsApp
                </a>
              </div>
            </div>
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
                  <li><a href="/#chalet">Chalet come Asset</a></li>
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

        <a
          href="https://wa.me/41786571066"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
        >
          <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
      </main>
    </>
  );
}
