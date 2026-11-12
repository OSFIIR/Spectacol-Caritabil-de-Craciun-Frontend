import stickerFund from '../../assets/svg/bow-sticker.svg'; // Înlocuiește cu căile corecte spre stickerele tale
import stickerIlex from '../../assets/svg/sticker-ilex.svg';
import echipaFoto from '../../assets/photos/echipa-voluntari.png'; // Înlocuiește cu calea spre poza echipei
import './TeamIntro.scss';

const TeamIntro = () => {
  return (
    <section className="team-section">
      
      {/* Partea de Sus: Introducere și Text */}
      <div className="team-intro-container">
        
        {/* Sticker decorativ stânga */}
        <img src={stickerFund} alt="" className="team-sticker sticker-left" aria-hidden="true" />
        
        <div className="team-content">
          <span className="team-tag">OAMENII DIN SPATELE CORTINEI</span>
          
          <h2 className="team-title">
            Multe mâini.<br />Un singur suflet.
          </h2>
          
          <p className="team-desc">
            Înainte de primul aplauz, există o echipă care pune totul în mișcare.<br />
            Cu energie, grijă și dorința de a face bine.
          </p>
        </div>

        {/* Sticker decorativ dreapta */}
        <img src={stickerIlex} alt="" className="team-sticker sticker-right" aria-hidden="true" />

      </div>

      {/* Partea de Jos: Fotografia Echipei */}
      <div className="team-photo-container">
        <img src={echipaFoto} alt="Echipa de voluntari" className="team-photo" />
      </div>

    </section>
  );
};

export default TeamIntro;