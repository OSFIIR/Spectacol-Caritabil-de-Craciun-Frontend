import fundalSvg from '../../assets/svg/fundal-donatie.svg'; // Asigură-te că numele e corect
import './DonateHero.scss';

const DonateHero = () => {
  return (
    <section className="donate-section">
      
      <div className="donate-plaque-wrapper">
        
        {/* SVG-ul de fundal plasat cu procentele tale din Figma */}
        <img src={fundalSvg} alt="" className="plaque-svg-bg" aria-hidden="true" />
        
        {/* Conținutul real, suprapus exact peste zona SVG-ului */}
        <div className="plaque-content">
          
          {/* Coloana Stângă - Text */}
          <div className="donate-text-col">
            <h1 className="donate-title">
              TRANSFORMĂ<br />EMOȚIA<br />ÎN SPERANȚĂ.
            </h1>
            
            <h2 className="donate-subtitle">
              Fiecare gest contează. Fii parte din<br />spectacolul care schimbă vieți.
            </h2>
            
            {/* Cutia albastră din Figma: text aliniat la stânga, buton la dreapta */}
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

          {/* Coloana Dreaptă - Formularul */}
          <div className="donate-form-col">
            <div className="donate-form-container">
              {/* IFRAME-UL SAU FORMULARUL AICI */}
              <div className="form-placeholder">
                Formular Donație<br />
                <span>(Iframe Donorbox / Alt sistem)</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DonateHero;