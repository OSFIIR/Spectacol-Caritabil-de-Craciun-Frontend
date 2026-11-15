import { useEffect } from 'react';
import fundalSvg from '../../assets/svg/fundal-donatie.svg';
import fundalMobilSvg from '../../assets/svg/fundal-donatie-telefon.svg';
import './DonateHero.scss';

const DonateHero = () => {
  
  useEffect(() => {
    // Încărcăm scriptul Donorbox
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
              
              <a href="#cauza" className="donate-btn">
                Vezi cauza &nbsp; &darr;
              </a>
            </div>
          </div>

          <div className="donate-form-col">
            {/* AM ȘTERS enable-auto-scroll COMPLET DE AICI! */}
            <div 
              className="donate-form-container"
              dangerouslySetInnerHTML={{
                __html: `<dbox-widget campaign="spectacol-caritabil-de-craciun-2026" type="donation_form"></dbox-widget>`
              }}
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DonateHero;