import { Link } from 'react-router-dom';
import atmosferaImg from '../../assets/photos/poza1.JPG'; // Asigură-te că ai poza salvată aici
import ilexSticker from '../../assets/svg/sticker-ilex.svg'; // Sticker-ul cu frunzele de ilex
import './AboutShow.scss';

const AboutShow = () => {
  return (
    <section id="about" className="about-show">
      <div className="about-content">
        <span className="about-subtitle">01 / DESPRE SPECTACOL</span>
        
        <h2 className="about-title">
          Pe scenă, talent.<br />
          În sală, solidaritate.
        </h2>
        
        <p className="about-description">
          Spectacolul Caritabil aduce împreună artiști, voluntari și oameni care cred că un gest mic poate face o diferență mare.
        </p>
        
        <p className="about-description">
          O seară dedicată artei și generozității, construită cu implicarea unei comunități. Detaliile cauzei susținute vor fi publicate odată cu anunțul ediției.
        </p>
        
        <Link to="/artists" className="btn-outline">
          Cunoaște artiștii ↗
        </Link>
      </div>

      <div className="about-visuals">
        <img 
          className="about-image" 
          src={atmosferaImg} 
          alt="Atmosfera spectacolului" 
        />
        <img 
          className="about-sticker" 
          src={ilexSticker} 
          alt="Sticker Ilex" 
        />
      </div>
    </section>
  );
};

export default AboutShow;