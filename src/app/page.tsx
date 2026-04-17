export default function Home() {
  return (
    <>
      <nav className="navbar">
        <div className="container nav-container">
          <div className="nav-brand">
            AlpFree<span>Energy</span>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#soluzioni">Soluzioni</a></li>
            <li><a href="#vantaggi">Vantaggi</a></li>
            <li><a href="#contatti">Contatti</a></li>
          </ul>
          <div>
            <a href="#contatti" className="btn btn-primary">Richiedi Preventivo</a>
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
                AlpFree Energy offre soluzioni fotovoltaiche premium per garantirti 
                l&apos;indipendenza energetica. Riduciamo i costi, massimizziamo l&apos;efficienza.
              </p>
              <div className="hero-cta animate-fade-in-up delay-200">
                <a href="#soluzioni" className="btn btn-primary">Scopri le Soluzioni</a>
                <a href="#contatti" className="btn btn-outline">Parla con un Esperto</a>
              </div>
            </div>
          </div>
        </section>

        <section id="soluzioni" className="features">
          <div className="container">
            <h2 className="section-title">Perché scegliere AlpFree Energy?</h2>
            <div className="features-grid">
              
              <div className="feature-card">
                <div className="icon-wrapper">
                  {/* Solar Panel Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line></svg>
                </div>
                <h3>Impianti Fotovoltaici</h3>
                <p>Progettiamo e installiamo impianti solari su misura con le migliori tecnologie sul mercato per la massima resa.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  {/* Battery Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="6" width="16" height="12" rx="2" ry="2"></rect><line x1="2" y1="9" x2="2" y2="15"></line><line x1="2" y1="12" x2="6" y2="12"></line></svg>
                </div>
                <h3>Sistemi di Accumulo</h3>
                <p>Conserva l&apos;energia prodotta e usala quando ne hai più bisogno. Indipendenza totale dalla rete.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  {/* Leaf/Eco Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
                </div>
                <h3>Sostenibilità Premium</h3>
                <p>Una transizione green senza compromessi. Design elegante, elevate performance e rispetto per l&apos;ambiente.</p>
              </div>
              
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
