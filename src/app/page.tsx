import Script from "next/script";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://alpfreeenergy.ch/#business",
  "name": "AlpFree Energy",
  "description": "Installazione impianti fotovoltaici premium in Ticino. Specializzati in soluzioni solari per ville, chalet e immobili di pregio nel Canton Ticino, Svizzera.",
  "image": "https://alpfreeenergy.ch/alpfree_logo_mix.png",
  "url": "https://alpfreeenergy.ch",
  "telephone": "+41786571066",
  "priceRange": "Da CHF 1.000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Cantonale",
    "addressLocality": "Lugano",
    "postalCode": "6900",
    "addressCountry": "CH",
    "addressRegion": "Ticino"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 46.0037,
    "longitude": 8.9511
  },
  "areaServed": [
    { "@type": "City", "name": "Lugano" },
    { "@type": "City", "name": "Locarno" },
    { "@type": "City", "name": "Bellinzona" },
    { "@type": "City", "name": "Mendrisio" },
    { "@type": "City", "name": "Ascona" },
    { "@type": "AdministrativeArea", "name": "Canton Ticino" }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "18:00"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Soluzioni Fotovoltaiche AlpFree Energy",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Installazione Impianto Fotovoltaico Residenziale Ticino",
          "description": "Progettazione e installazione di impianti solari per abitazioni private, ville e chalet nel Canton Ticino"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sistema di Accumulo Energia",
          "description": "Batterie di accumulo per massimizzare l'autoconsumo e l'indipendenza energetica dalla rete"
        }
      }
    ]
  }
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Chi installa pannelli solari a Lugano e in Ticino?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AlpFree Energy, con sede a Lugano, è specializzata nell'installazione di impianti fotovoltaici premium in tutto il Canton Ticino. Guner, il fondatore, segue personalmente ogni progetto dalla progettazione all'installazione finale. Contattaci al +41 78 657 10 66 per una consulenza gratuita."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto guadagna un chalet con un impianto solare in Ticino?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un impianto fotovoltaico da 10 kWp su un chalet in Ticino produce circa 10.000-12.000 kWh all'anno. Con il prezzo attuale dell'energia a CHF 0.28-0.32/kWh, il risparmio o reddito annuo stimato è di CHF 2.800-3.500. Il ritorno sull'investimento tipico è tra 8 e 12 anni, con incentivi cantonali che riducono il costo iniziale del 20-30%."
      }
    },
    {
      "@type": "Question",
      "name": "Ci sono sussidi e incentivi per il fotovoltaico in Ticino nel 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sì. In Svizzera è disponibile il contributo unico federale (KEV/SBB) gestito da Pronovo, che copre una parte significativa del costo d'investimento. Il Cantone Ticino offre ulteriori contributi cantonali attraverso il programma SvizzeraEnergia. AlpFree Energy gestisce gratuitamente tutte le pratiche burocratiche per i propri clienti."
      }
    },
    {
      "@type": "Question",
      "name": "Qual è il costo di un impianto fotovoltaico in Svizzera?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il costo di un impianto fotovoltaico in Svizzera varia in base alla dimensione. Un impianto residenziale standard da 8-12 kWp costa tra CHF 18.000 e CHF 35.000 prima degli incentivi. Con i contributi federali e cantonali disponibili nel 2026, il costo netto si riduce del 20-35%. AlpFree Energy offre preventivi gratuiti e personalizzati per ogni proprietà."
      }
    },
    {
      "@type": "Question",
      "name": "Conviene installare il solare su un chalet di vacanza in Ticino?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Assolutamente sì. Un chalet con impianto fotovoltaico produce reddito energetico anche quando è vuoto, immette energia in rete e ottiene una remunerazione. Aumenta inoltre il valore commerciale dell'immobile del 10-15% e migliora la classe energetica. Per i proprietari che risiedono fuori dal Ticino è uno degli investimenti più solidi per il loro immobile alpino."
      }
    },
    {
      "@type": "Question",
      "name": "Quanti pannelli solari servono per uno chalet di montagna usato nei weekend?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Per uno chalet alpino usato nei weekend bastano 2-4 pannelli da 400W (0,8-1,6 kWp totali). In Ticino, con circa 1.200 kWh di produzione per kWp all'anno, un impianto da 1,2 kWp produce circa 1.440 kWh/anno — sufficiente per coprire frigo, luce e TV durante i weekend. AlpFree Energy parte da impianti completi installati da CHF 1.000 a CHF 6.000, tutto incluso."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto consuma un frigorifero sempre acceso in uno chalet di montagna?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un frigorifero A++ da 200-300 litri consuma circa 0,3-0,5 kWh al giorno, ovvero 100-180 kWh all'anno. In uno chalet vuoto 300 giorni l'anno, è energia che paghi anche quando non ci sei. Con un piccolo impianto solare da 1 kWp e una batteria gel da CHF 400, il frigorifero può funzionare gratuitamente nei mesi da aprile a ottobre in Ticino."
      }
    },
    {
      "@type": "Question",
      "name": "Quante batterie servono per alimentare luce, TV e frigorifero per un weekend in uno chalet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Per un weekend di 3 giorni con frigo + luce + TV il consumo totale è circa 9-12 kWh. Servono 2-3 batterie gel da CHF 400 ciascuna (circa 12-15 kWh di capacità installata). Per iniziare, anche una sola batteria gel copre le notti e i momenti senza sole. AlpFree Energy dimensiona il sistema in base all'uso reale del tuo chalet."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto costa un piccolo impianto solare per uno chalet in Ticino?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un piccolo impianto solare installato e funzionante per uno chalet alpino in Ticino parte da CHF 1.000 e arriva fino a CHF 6.000, tutto incluso: pannelli (circa CHF 100 ciascuno), inverter (circa CHF 500) e batteria gel (circa CHF 400). Il costo finale dipende da manodopera, tipo di tetto, accessibilità e complessità dell'installazione. AlpFree Energy offre un sopralluogo gratuito per calcolare il preventivo esatto per la tua situazione."
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      <Script
        id="alpfree-localbusiness-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Script
        id="alpfree-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <nav className="navbar">
        <div className="container nav-container">
          <div className="nav-brand">
            <img src="/alpfree_logo_new.png" alt="AlpFree Energy Logo" style={{ height: '45px', width: 'auto', objectFit: 'contain', verticalAlign: 'middle' }} />
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#soluzioni">Soluzioni</a></li>
            <li><a href="#chalet">Chalet Asset</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="#contatti">Contatti</a></li>
          </ul>
          <div>
            <a href="https://wa.me/41786571066" className="btn btn-primary">Consulenza Gratuita</a>
          </div>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-bg"></div>
          <div className="container">
            <div className="hero-content">
              <h1 className="animate-fade-in-up">
                L&apos;energia del futuro, <span className="highlight">Oggi.</span>
              </h1>
              <p className="animate-fade-in-up delay-100">
                AlpFree Energy installa impianti fotovoltaici premium in <strong>Canton Ticino</strong>.
                Guner segue ogni progetto personalmente: dal sopralluogo gratuito alla produzione di energia.
              </p>
              <div className="hero-cta animate-fade-in-up delay-200">
                <a href="#chalet" className="btn btn-primary">Chalet come Asset</a>
                <a href="tel:0786571066" className="btn btn-outline">Parla con Guner</a>
              </div>
            </div>
          </div>
        </section>

        <section id="soluzioni" className="features">
          <div className="container">
            <h2 className="section-title">Soluzioni <span className="text-gradient">Premium</span></h2>
            <div className="features-grid">

              <div className="feature-card glass-panel">
                <div className="icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line></svg>
                </div>
                <h3>Impianti Fotovoltaici Ticino</h3>
                <p>Installazione professionale a Lugano, Locarno, Bellinzona e in tutto il Canton Ticino. Tecnologia di ultima generazione.</p>
              </div>

              <div className="feature-card glass-panel">
                <div className="icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="6" width="16" height="12" rx="2" ry="2"></rect><line x1="2" y1="9" x2="2" y2="15"></line><line x1="2" y1="12" x2="6" y2="12"></line></svg>
                </div>
                <h3>Sistemi di Accumulo</h3>
                <p>Batterie ad alta capacità per massimizzare l&apos;autoconsumo e ridurre la dipendenza dalla rete energetica svizzera.</p>
              </div>

              <div className="feature-card glass-panel">
                <div className="icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
                </div>
                <h3>Gestione Pratiche Incentivi</h3>
                <p>AlpFree Energy gestisce gratuitamente i contributi federali Pronovo e i sussidi cantonali del Ticino. Zero burocrazia per te.</p>
              </div>

            </div>
          </div>
        </section>

        {/* CHALET COME ASSET ENERGETICO */}
        <section id="chalet" style={{ padding: '100px 0', background: 'linear-gradient(135deg, #0f172a 0%, #1a2744 100%)', color: 'white' }}>
          <div className="container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <p style={{ color: '#ffb300', fontWeight: 600, letterSpacing: '3px', fontSize: '0.82rem', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                Il paradigma dell&apos;investimento intelligente
              </p>
              <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.15, color: 'white' }}>
                Il tuo chalet produce reddito.<br />
                <span style={{ color: '#4caf50' }}>Anche quando sei a Zurigo.</span>
              </h2>
              <p style={{ fontSize: '1.15rem', color: '#94a3b8', marginBottom: '60px', lineHeight: 1.8, maxWidth: '700px', margin: '0 auto 60px' }}>
                La maggior parte dei proprietari di chalet in Ticino vive a Zurigo, Ginevra o Basilea.
                Il tuo immobile alpino è vuoto 10 mesi l&apos;anno. Un impianto AlpFree Energy trasforma
                ogni metro quadrato di tetto in un asset finanziario che lavora per te, 365 giorni l&apos;anno.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2px', marginBottom: '60px', background: 'rgba(255,255,255,0.04)', borderRadius: '16px', overflow: 'hidden' }}>
                <div style={{ padding: '40px 24px' }}>
                  <div style={{ fontSize: '2.6rem', fontWeight: 800, color: '#4caf50', marginBottom: '0.5rem' }}>3.200 CHF</div>
                  <div style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.5 }}>reddito annuo stimato<br />(impianto 10 kWp)</div>
                </div>
                <div style={{ padding: '40px 24px', background: 'rgba(255,255,255,0.03)' }}>
                  <div style={{ fontSize: '2.6rem', fontWeight: 800, color: '#ffb300', marginBottom: '0.5rem' }}>8–12 anni</div>
                  <div style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.5 }}>ROI tipico<br />con incentivi cantonali</div>
                </div>
                <div style={{ padding: '40px 24px' }}>
                  <div style={{ fontSize: '2.6rem', fontWeight: 800, color: '#4caf50', marginBottom: '0.5rem' }}>+15%</div>
                  <div style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.5 }}>valore immobile<br />con impianto certificato</div>
                </div>
              </div>

              <a
                href="https://wa.me/41786571066?text=Salve%2C%20vorrei%20una%20valutazione%20gratuita%20per%20il%20mio%20chalet%20in%20Ticino"
                className="btn btn-primary"
                style={{ fontSize: '1.05rem', padding: '1rem 2.5rem' }}
              >
                Valutazione gratuita per il tuo chalet
              </a>
            </div>
          </div>
        </section>

        {/* GEO + AEO OPTIMIZED */}
        <section id="vision" style={{ padding: '100px 0', backgroundColor: '#f1f5f9' }}>
          <div className="container">
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '50px' }}>
                Perché il Solare in Ticino nel 2026?
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
                <div className="glass-panel" style={{ padding: '30px' }}>
                  <h4>Indipendenza Energetica</h4>
                  <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', lineHeight: 1.7 }}>Le fluttuazioni dei prezzi energetici in Svizzera non saranno più un problema. Produci la tua energia con l&apos;abbondante sole ticinese.</p>
                </div>
                <div className="glass-panel" style={{ padding: '30px' }}>
                  <h4>Valore dell&apos;Immobile</h4>
                  <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', lineHeight: 1.7 }}>Un sistema AlpFree Energy aumenta il valore commerciale e la classe energetica della tua proprietà. Asset reale, non solo risparmio.</p>
                </div>
                <div className="glass-panel" style={{ padding: '30px' }}>
                  <h4>Incentivi Federali e Cantonali</h4>
                  <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', lineHeight: 1.7 }}>Contributi Pronovo, sussidi SvizzeraEnergia Ticino, detrazioni fiscali. Guner gestisce tutto gratuitamente per te.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ — AEO OTTIMIZZATO */}
        <section id="faq" style={{ padding: '100px 0', backgroundColor: '#ffffff' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 className="section-title">Domande Frequenti</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                <div className="glass-panel" style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--primary-color)' }}>
                    Chi installa pannelli solari a Lugano e in Ticino?
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    AlpFree Energy, con sede a Lugano, è specializzata nell&apos;installazione di impianti fotovoltaici
                    premium in tutto il Canton Ticino. Guner, il fondatore, segue personalmente ogni progetto dalla
                    progettazione all&apos;installazione. Contattaci al +41 78 657 10 66 per una consulenza gratuita.
                  </p>
                </div>

                <div className="glass-panel" style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--primary-color)' }}>
                    Quanto guadagna un chalet con un impianto solare in Ticino?
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    Un impianto da 10 kWp su un chalet in Ticino produce circa 10.000–12.000 kWh/anno.
                    Con il prezzo attuale dell&apos;energia (CHF 0.28–0.32/kWh), il reddito o risparmio annuo stimato
                    è di CHF 2.800–3.500. Il ROI tipico è tra 8 e 12 anni grazie agli incentivi cantonali.
                  </p>
                </div>

                <div className="glass-panel" style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--primary-color)' }}>
                    Ci sono sussidi per il fotovoltaico in Ticino nel 2026?
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    Sì. In Svizzera è disponibile il contributo unico federale gestito da Pronovo.
                    Il Cantone Ticino offre ulteriori contributi attraverso il programma SvizzeraEnergia.
                    AlpFree Energy gestisce gratuitamente tutte le pratiche burocratiche per i propri clienti.
                  </p>
                </div>

                <div className="glass-panel" style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--primary-color)' }}>
                    Qual è il costo di un impianto fotovoltaico in Svizzera?
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    Un impianto residenziale da 8–12 kWp costa tra CHF 18.000 e CHF 35.000 prima degli incentivi.
                    Con i contributi federali e cantonali nel 2026, il costo netto si riduce del 20–35%.
                    AlpFree Energy offre preventivi gratuiti personalizzati per ogni proprietà in Ticino.
                  </p>
                </div>

                <div className="glass-panel" style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--primary-color)' }}>
                    Conviene il solare su un chalet di vacanza in Ticino?
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    Assolutamente sì. Un chalet con fotovoltaico produce reddito energetico anche quando è vuoto,
                    immette energia nella rete e riceve una remunerazione. Aumenta il valore dell&apos;immobile
                    del 10–15% e migliora la classe energetica. Per i proprietari residenti fuori dal Ticino
                    è uno degli investimenti più solidi per il loro immobile alpino.
                  </p>
                </div>

                <div className="glass-panel" style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--primary-color)' }}>
                    Quanti pannelli servono per uno chalet usato nei weekend?
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    Per uno chalet alpino usato nei weekend bastano <strong>2-4 pannelli da 400W</strong>.
                    In Ticino, con circa 1.200 kWh di produzione per kWp all&apos;anno, coprono frigo, luce e TV
                    per tutti i weekend. AlpFree Energy parte da impianti completi installati
                    da <strong>CHF 1.000 a CHF 6.000</strong>, tutto incluso.
                  </p>
                </div>

                <div className="glass-panel" style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--primary-color)' }}>
                    Quanto consuma un frigorifero sempre acceso in uno chalet vuoto?
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    Un frigorifero A++ consuma circa <strong>0,3-0,5 kWh al giorno</strong> — energia che paghi
                    anche quando non ci sei. Con un pannello solare e una batteria gel da CHF 400, il frigorifero
                    del tuo chalet può funzionare gratuitamente da aprile a ottobre in Ticino.
                  </p>
                </div>

                <div className="glass-panel" style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--primary-color)' }}>
                    Quanto costa un piccolo impianto solare per uno chalet in Ticino?
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    Un impianto completo installato parte da <strong>CHF 1.000 fino a CHF 6.000</strong>:
                    pannelli (~CHF 100 cad.), inverter (~CHF 500), batteria gel (~CHF 400).
                    Il costo varia in base a tetto, accessibilità e complessità.
                    AlpFree Energy offre un <strong>sopralluogo gratuito</strong> per il preventivo esatto.
                  </p>
                </div>

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
                  <li><a href="#home">Home</a></li>
                  <li><a href="#soluzioni">Soluzioni</a></li>
                  <li><a href="#chalet">Chalet come Asset</a></li>
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
