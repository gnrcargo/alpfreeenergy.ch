import Script from "next/script";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AlpFree Energy",
    "image": "https://alpfreeenergy.ch/logo.png",
    "@id": "https://alpfreeenergy.ch",
    "url": "https://alpfreeenergy.ch",
    "telephone": "+41786571066",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Cantonale",
      "addressLocality": "Lugano",
      "postalCode": "6900",
      "addressCountry": "CH"
    },
    "service": {
      "@type": "Service",
      "name": "Installazione Impianti Fotovoltaici",
      "description": "Progettazione e installazione di impianti solari premium per indipendenza energetica."
    }
  };

  return (
    <>
      <Script
        id="alpfree-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="navbar">
        <div className="container nav-container">
          <div className="nav-brand">
            AlpFree<span>Energy</span>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#soluzioni">Soluzioni</a></li>
            <li><a href="#vision">Vision</a></li>
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
                AlpFree Energy offre soluzioni fotovoltaiche premium curate da <strong>Guner</strong> per garantirti 
                l&apos;indipendenza energetica. Riduciamo i costi, massimizziamo l&apos;efficienza.
              </p>
              <div className="hero-cta animate-fade-in-up delay-200">
                <a href="#soluzioni" className="btn btn-primary">Esplora Sistemi</a>
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
                <h3>Impianti Fotovoltaici</h3>
                <p>Tecnologia svizzera di ultima generazione per un&apos;efficienza energetica senza precedenti.</p>
              </div>

              <div className="feature-card glass-panel">
                <div className="icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="6" width="16" height="12" rx="2" ry="2"></rect><line x1="2" y1="9" x2="2" y2="15"></line><line x1="2" y1="12" x2="6" y2="12"></line></svg>
                </div>
                <h3>Sistemi di Accumulo</h3>
                <p>Libertà totale. Conserva la tua energia e rendi la tua casa un ecosistema autonomo.</p>
              </div>

              <div className="feature-card glass-panel">
                <div className="icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
                </div>
                <h3>Design & Sostenibilità</h3>
                <p>Integrazione architettonica perfetta. Bellezza e risparmio energetico in un unico pacchetto.</p>
              </div>
              
            </div>
          </div>
        </section>

        {/* GEO-OPTIMIZED CONTENT SECTION */}
        <section id="vision" style={{ padding: '100px 0', backgroundColor: '#f1f5f9' }}>
          <div className="container">
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '2.8rem', textAlign: 'center', marginBottom: '50px' }}>Perché investire nel Solare nel 2026?</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
                <div className="glass-panel" style={{ padding: '30px' }}>
                  <h4>Indipendenza dai Prezzi</h4>
                  <p>Le fluttuazioni del mercato energetico non saranno più un problema. Produci la tua energia a costo zero.</p>
                </div>
                <div className="glass-panel" style={{ padding: '30px' }}>
                  <h4>Valore dell&apos;Immobile</h4>
                  <p>Un sistema AlpFree Energy aumenta istantaneamente il valore commerciale e la classe energetica della tua proprietà.</p>
                </div>
                <div className="glass-panel" style={{ padding: '30px' }}>
                  <h4>Incentivi Federali</h4>
                  <p>Sfrutta le attuali detrazioni e sussidi per la transizione energetica in Svizzera. Guner ti guiderà in ogni pratica.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PREMIM FOOTER */}
        <footer id="contatti" className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-brand">
                <h3>AlpFree<span>Energy</span></h3>
                <p>Verso un futuro energetico libero e sostenibile. Qualità premium, servizio artigianale.</p>
              </div>
              <div className="footer-column">
                <h4>Navigazione</h4>
                <ul className="footer-links">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#soluzioni">Soluzioni</a></li>
                  <li><a href="#vision">La Nostra Vision</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Contattaci</h4>
                <ul className="footer-links">
                  <li><strong>Responsabile:</strong> Guner</li>
                  <li><strong>Telefono:</strong> <a href="tel:0786571066">078 657 10 66</a></li>
                  <li><strong>Supporto:</strong> <a href="https://wa.me/41786571066">WhatsApp Chat</a></li>
                  <li><strong>Località:</strong> Lugano, Svizzera</li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} AlpFree Energy. Tutti i diritti riservati.</p>
            </div>
          </div>
        </footer>

        {/* WHATSAPP FLOAT */}
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
