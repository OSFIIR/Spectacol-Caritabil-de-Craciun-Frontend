import { Link } from 'react-router-dom';
import backgroundFrame from '../../assets/svg/frame-hero.svg'; // Asigură-te că ai exportat rama din spate
import bowSticker from '../../assets/svg/bow-sticker.svg'; // Fundița de sus
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      {/* Imaginea de fundal (rama) */}
      <img className="hero-background" src={backgroundFrame} alt="Background Frame" />
      
      {/* Sticker-ul cu fundița de sus */}
      <img className="hero-bow" src={bowSticker} alt="Fundiță" />

      <div className="hero-content">
        <p className="hero-subtitle">✦ O SCENĂ. O COMUNITATE. O FAPTĂ BUNĂ. ✦</p>
        
        <h1 className="hero-title">Spectacolul Caritabil</h1>
        
        <h2 className="hero-tagline">O seară de emoție. Un gest care contează.</h2>
        
        <p className="hero-description">
          Muzica ne aduce împreună. Generozitatea ne duce mai departe.
          <br />
          Fii parte dintr-un spectacol în care aplauzele se transformă în bine.
        </p>

        <div className="hero-actions">
          <Link to="/donate" className="btn btn-primary">
            Vreau să ajut ↗
          </Link>
          <a href="#about" className="btn btn-secondary">
            Descoperă spectacolul ↓
          </a>
          <Link to="/artists" className="btn btn-dark">
            Vezi programul ↗
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;