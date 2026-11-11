// Schimbăm importul din .png în .svg și presupunem că l-ai pus în folderul de svg-uri
import treeSvg from '../../assets/svg/brad-faq.svg'; 
import wire1 from '../../assets/svg/wire1.svg';
import wire2 from '../../assets/svg/wire2.svg';
import wire3 from '../../assets/svg/wire3.svg';
import wire4 from '../../assets/svg/wire4.svg';
import wire5 from '../../assets/svg/wire5.svg';
import wire6 from '../../assets/svg/wire6.svg';

import './Faq.scss';

const FaqCard = ({ num, question, side, top, left, right, wireSrc }) => {
  return (
    <div 
      className={`faq-item ${side}`} 
      style={{ top: `${top}%`, left: left ? `${left}%` : 'auto', right: right ? `${right}%` : 'auto' }}
    >
      <img src={wireSrc} alt="" className="faq-wire" aria-hidden="true" />
      <div className="faq-card">
        <div className="faq-card-hole" />
        <span className="faq-card-num">{num}</span>
        <p className="faq-card-q">{question}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <section className="faq-section">
      <div className="faq-intro">
        <span className="faq-subtitle">03 / BINE DE ȘTIUT</span>
        <h2 className="faq-title">Ai întrebări?<br/>Suntem aici.</h2>
      </div>

      <div className="faq-tree-wrapper">
        {/* Folosim SVG-ul direct în eticheta img, React știe să îl randeze perfect */}
        <img src={treeSvg} alt="Brad" className="faq-tree-main" />

        {/* Partea Stângă */}
        <FaqCard 
          num="01" 
          question="Ce este Spectacolul Caritabil?" 
          side="left" 
          top={15} right={55} 
          wireSrc={wire1}
        />
        <FaqCard 
          num="03" 
          question="Unde va avea loc?" 
          side="left" 
          top={45} right={55} 
          wireSrc={wire3}
        />
        <FaqCard 
          num="05" 
          question="Ce fel de activități vor fi?" 
          side="left" 
          top={75} right={55} 
          wireSrc={wire5}
        />

        {/* Partea Dreaptă */}
        <FaqCard 
          num="02" 
          question="Care este cauza pentru care se strâng banii?" 
          side="right" 
          top={18} left={55} 
          wireSrc={wire2}
        />
        <FaqCard 
          num="04" 
          question="Cum pot dona?" 
          side="right" 
          top={50} left={55} 
          wireSrc={wire4}
        />
        <FaqCard 
          num="06" 
          question="Cum pot sponsoriza evenimentul?" 
          side="right" 
          top={80} left={55} 
          wireSrc={wire6}
        />
      </div>
    </section>
  );
};

export default Faq;