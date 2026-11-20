import { useEffect } from 'react';
import fundalSvg from '../../assets/svg/fundal-donatie.svg';
import fundalMobilSvg from '../../assets/svg/fundal-donatie-telefon.svg';
import './DonateHero.scss';

const DonateHero = () => {
  
  useEffect(() => {
    // Încărcăm scriptul Donorbox pentru varianta de desktop
    const scriptId = 'donorbox-widget-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'module';
      script.src = 'https://donorbox.org/widgets.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="donate-section">
      <div className="donate-plaque-wrapper">
        
        <picture>
          <source media="(max-width: 1200px)" srcSet={fundalMobilSvg} />
          <img src={fundalSvg} alt="" className="plaque-svg-bg" aria-hidden="true" />
        </picture>
        
        <div className="plaque-content">
          
          <div className="donate-text-col">
            <h1 className="donate-title">
              TRANSFORMĂ<br />EMOȚIA<br />ÎN SPERANȚĂ.
            </h1>
            
            <h2 className="donate-subtitle">
              Fiecare gest contează. Fii parte din<br />spectacolul care schimbă vieți.
            </h2>
            
            <div className="desc-box">
              <p className="donate-desc">
                Fiecare gest contează, iar generozitatea ta poate transforma emoția
                acestui spectacol în speranță reală. Organizat de OSFIIR, acest
                spectacol își propune să aducă împreună oameni cu suflet mare
                pentru a oferi un sprijin concret celor care au cea mai mare nevoie.
                Indiferent de suma aleasă, contribuția ta devine parte din povestea
                unei schimbări în bine. Donează acum și ajută-ne să transformăm
                aplauzele în zâmbete!
              </p>
              
              <a href="/artists" className="donate-btn">
                Vezi cauza &nbsp; &#8599;
              </a>
            </div>
          </div>

          <div className="donate-form-col">
            
            {/* 1. VARIANTA DESKTOP: Widget Încorporat (se ascunde pe mobil) */}
            <div 
              className="donate-widget-desktop"
              dangerouslySetInnerHTML={{
                __html: `<dbox-widget campaign="spectacol-caritabil-de-craciun-2026" type="donation_form"></dbox-widget>`
              }}
            />

            {/* 2. VARIANTA MOBIL: Card cu Buton (se ascunde pe desktop) */}
            <div className="donate-button-mobile">
              <h3 className="action-title">Susține Campania</h3>
              <p className="action-text">
                Efectuează o donație rapidă și 100% securizată prin platforma oficială Donorbox.
              </p>

              <a 
                className="custom-donorbox-btn" 
                href="https://donorbox.org/spectacol-caritabil-de-craciun-2026?"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  role="presentation" 
                  src="https://donorbox.org/images/white_logo.svg" 
                  alt="Donorbox" 
                  className="dbox-logo"
                />
                Donează Acum
              </a>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DonateHero;