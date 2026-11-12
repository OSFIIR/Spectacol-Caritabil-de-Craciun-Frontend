import treeSvg from '../../assets/svg/brad-faq.svg'; 
import wire1 from '../../assets/svg/wire1.svg';
import wire2 from '../../assets/svg/wire2.svg';
import wire3 from '../../assets/svg/wire3.svg';
import wire4 from '../../assets/svg/wire4.svg';
import wire5 from '../../assets/svg/wire5.svg';
import wire6 from '../../assets/svg/wire6.svg';

import './Faq.scss';

const FaqCard = ({ num, question, answer, side, top, left, right, wireSrc, wireTransform }) => {
  return (
    <div 
      className={`faq-item ${side}`} 
      style={{ top: `${top}%`, left: left ? `${left}%` : 'auto', right: right ? `${right}%` : 'auto' }}
    >
      <img 
        src={wireSrc} 
        alt="" 
        className="faq-wire" 
        aria-hidden="true" 
        style={{ transform: wireTransform }} 
      />
      <div className="faq-card">
        
        {/* Partea 1: Întrebarea */}
        <div className="faq-card-header">
          <div className="faq-card-hole" />
          <span className="faq-card-num">{num}</span>
          <p className="faq-card-q">{question}</p>
        </div>
        
        {/* Partea 2: Răspunsul (Se va deschide în lateral ca o ușă glisantă) */}
        <div className="faq-card-answer">
          <p>{answer}</p>
        </div>

      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-intro">
          <span className="faq-subtitle">03 / BINE DE ȘTIUT</span>
          <h2 className="faq-title">Ai întrebări?<br/>Suntem aici.</h2>
        </div>

        <div className="faq-tree-wrapper">
          <img src={treeSvg} alt="Brad" className="faq-tree-main" />

          {/* PARTEA STÂNGĂ (1, 3, 5 - se deschid spre stânga, sârma iese prin dreapta) */}
          <FaqCard 
            num="01" 
            question="Ce este Spectacolul Caritabil?" 
            answer="Este un eveniment anual studențesc unde muzica și teatrul se împletesc pentru a susține o cauză nobilă din comunitate."
            side="left" 
            top={30} right={75} 
            wireSrc={wire1}
            wireTransform="translate(10px, -3px)" 
          />
          <FaqCard 
            num="03" 
            question="Unde va avea loc?" 
            answer="Spectacolul va avea loc în Aula Magna, clădirea Rectoratului UPB. Detaliile de acces vor fi trimise pe email."
            side="left" 
            top={60} right={98} 
            wireSrc={wire1}
            wireTransform="translate(5px, 0px)"
          />
          <FaqCard 
            num="05" 
            question="Ce fel de activități vor fi?" 
            answer="Vei putea asista la momente muzicale, piese de teatru, și vei avea acces la o tombolă caritabilă cu premii surpriză."
            side="left" 
            top={84} right={105} 
            wireSrc={wire1}
            wireTransform="translate(0px, 0px)"
          />

          {/* PARTEA DREAPTĂ (2, 4, 6 - se deschid spre dreapta, sârma iese prin stânga) */}
          <FaqCard 
            num="02" 
            question="Care este cauza pentru care se strâng banii?" 
            answer="Anul acesta susținem asociația X pentru a ajuta copiii din medii defavorizate să aibă acces la educație."
            side="right" 
            top={35} left={79} 
            wireSrc={wire2}
            wireTransform="translate(-5px, -10px)"
          />
          <FaqCard 
            num="04" 
            question="Cum pot dona?" 
            answer="Poți achiziționa un bilet online, sau poți dona direct la urnele amenajate în seara evenimentului."
            side="right" 
            top={62} left={95} 
            wireSrc={wire4}
            wireTransform="translate(0px, -16px)" /* Ajustat ușor mai sus */
          />
          <FaqCard 
            num="06" 
            question="Cum pot sponsoriza evenimentul?" 
            answer="Ne poți contacta la adresa office@osfiir.ro pentru a primi pachetele noastre de sponsorizare."
            side="right" 
            top={85} left={105} 
            wireSrc={wire4}
            wireTransform="translate(5px, -15px)" 
          />
        </div>
      </div>
    </section>
  );
};

export default Faq;