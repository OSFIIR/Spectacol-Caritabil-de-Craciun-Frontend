import biletFundal from '../../assets/svg/bilet-cauza.svg';
import pioneza from '../../assets/svg/bow-sticker.svg';
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
        <div className="cause-card">
          <img src={pioneza} alt="" className="cause-pin" aria-hidden="true" />
          <img src={biletFundal} alt="" className="cause-bg" aria-hidden="true" />
          
          <div className="cause-content">
            <h3 className="cause-title">CAUZA SUSȚINUTĂ</h3>
            <p className="cause-desc">
              Anul acesta, evenimentul nostru susține cei{' '}
              <strong className="cause-highlight">
                35 de copii internați la secția de oncologie a Spitalului „Marie Curie”
              </strong>
              . În locul cadourilor obișnuite de Crăciun, fiecare contribuție se
              transformă exclusiv în sprijin concret și resurse necesare pentru
              tratamentul și confortul lor în spital.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ArtistsIntro;