import biletFundal from '../../assets/svg/bilet-cauza.svg'; // Exportă bilețelul cu tot cu liniile din interior ca un singur SVG
import pioneza from '../../assets/svg/bow-sticker.svg'; // Exportă pioneza/pin-ul de sus separat
import './ArtistsIntro.scss';

const ArtistsIntro = () => {
  return (
    <section className="artists-intro">
      
      {/* Coloana din Stânga: Textul Principal */}
      <div className="artists-text">
        <span className="artists-subtitle">OAMENII DIN LUMINA REFLECTOARELOR</span>
        <h2 className="artists-title">Talente diferite.<br/>Aceeași inimă.</h2>
        <p className="artists-desc">
          Voci, instrumente și povești care se întâlnesc pe aceeași scenă.<br/>
          Artiștii noștri își dăruiesc talentul pentru o seară cu sens.
        </p>
      </div>

      {/* Coloana din Dreapta: Bilețelul cu Cauza */}
      <div className="artists-cause">
        {/* Folosim SVG-ul ca fundal pentru a putea scrie text real peste el */}
        <div className="cause-card">
          <img src={pioneza} alt="" className="cause-pin" aria-hidden="true" />
          <img src={biletFundal} alt="" className="cause-bg" aria-hidden="true" />
          
          <div className="cause-content">
            <h3 className="cause-title">CAUZA SUSȚINUTĂ</h3>
            <p className="cause-desc">
              Cauza susținută de noi este...
              {/* Aici poți adăuga textul real al cauzei */}
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ArtistsIntro;