import './Partners.scss';

const Partners = () => {
  return (
    <section className="partners-section">
      
      {/* Etichetă de sus */}
      <span className="partners-tag">ÎMPREUNĂ PUTEM MAI MULT</span>

      {/* Container principal împărțit în două coloane */}
      <div className="partners-container">
        
        {/* Coloana Stângă: Mesajul Principal */}
        <div className="partners-left">
          <h2 className="partners-title">
            Binele are nevoie<br />de parteneri.
          </h2>
          <p className="partners-desc">
            Fiecare contribuție poate susține o seară cu sens. Dacă împărtășești valorile noastre, te invităm să construim împreună următoarea ediție.
          </p>
        </div>

        {/* Coloana Dreaptă: Beneficiile + Butonul */}
        <div className="partners-right">
          <div className="benefit-item">
            <span className="benefit-num">01</span>
            <span className="benefit-text">Susții o cauză care contează</span>
          </div>
          
          <div className="benefit-item">
            <span className="benefit-num">02</span>
            <span className="benefit-text">Dai voce talentului</span>
          </div>
          
          <div className="benefit-item">
            <span className="benefit-num">03</span>
            <span className="benefit-text">Aduci comunitatea împreună</span>
          </div>

          {/* Butonul de acțiune */}
          <a href="/contact" className="partners-btn">
            Vreau să devin partener &nbsp; ↗
          </a>
        </div>

      </div>

    </section>
  );
};

export default Partners;