import { HiSparkles } from 'react-icons/hi2';
import stickerImg from '../../assets/svg/bow-sticker.svg'; 
import './ThankYou.scss';

const ThankYou = () => {
  return (
    <section className="thankyou-section">
      
      <div className="thankyou-content">
        <span className="thankyou-tag">
          <HiSparkles /> &nbsp; PARTENERII BINELUI &nbsp; <HiSparkles />
        </span>
        
        <h2 className="thankyou-title">
          În spatele fiecărui gest,<br />
          sunt oameni care cred.
        </h2>
        
        <h3 className="thankyou-subtitle">
          Vă mulțumim că faceți loc generozității.
        </h3>
        
        <p className="thankyou-desc">
          Un spectacol caritabil prinde viață prin încredere și implicare.<br />
          Le mulțumim tuturor celor care aleg să susțină arta, comunitatea<br />
          și cauza care ne aduce împreună.
        </p>
        
        <div className="thankyou-note">
          Lista sponsorilor și partenerilor va fi publicată după confirmare.
        </div>
      </div>

      {/* Stickerul din STÂNGA */}
      <img src={stickerImg} alt="" className="thankyou-sticker sticker-left" aria-hidden="true" />
      
      {/* Stickerul din DREAPTA JOS */}
      <img src={stickerImg} alt="" className="thankyou-sticker sticker-right" aria-hidden="true" />

    </section>
  );
};

export default ThankYou;