import { useState } from 'react';
import treeSvg from '../../assets/svg/brad-faq.svg';
import wire1 from '../../assets/svg/wire1.svg';
import wire2 from '../../assets/svg/wire2.svg';
import wire4 from '../../assets/svg/wire4.svg';

import './Faq.scss';

const FaqCard = ({
  num,
  question,
  answer,
  side,
  top,
  left,
  right,
  wireSrc,
  wireTransform,
  isOpen,
  onToggle,
}) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <div
      className={`faq-item ${side} ${isOpen ? 'is-open' : ''}`}
      style={{
        '--order': Number(num),
        top: `${top}%`,
        left: left !== undefined ? `${left}%` : 'auto',
        right: right !== undefined ? `${right}%` : 'auto',
      }}
    >
      <img
        src={wireSrc}
        alt=""
        className="faq-wire"
        aria-hidden="true"
        style={{ transform: wireTransform }}
      />
      <div
        className="faq-card"
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
      >
        {/* Partea 1: Întrebarea */}
        <div className="faq-card-header">
          <div className="faq-card-hole" />
          <div className="faq-card-meta">
            <span className="faq-card-num">{num}</span>
            <span className="faq-card-toggle" aria-hidden="true">
              {isOpen ? '−' : '+'}
            </span>
          </div>
          <p className="faq-card-q">{question}</p>
        </div>

        {/* Partea 2: Răspunsul */}
        <div className="faq-card-answer">
          <div className="faq-card-answer-inner">
            <p>{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openNum, setOpenNum] = useState(null);

  const toggleCard = (num) => {
    setOpenNum((prev) => (prev === num ? null : num));
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-intro">
          <span className="faq-subtitle">03 / BINE DE ȘTIUT</span>
          <h2 className="faq-title">
            Ai întrebări?
            <br />
            Suntem aici.
          </h2>
        </div>

        <div className="faq-tree-wrapper">
          <img src={treeSvg} alt="Brad" className="faq-tree-main" />

          <div className="faq-cards-layer">
            {/* PARTEA STÂNGĂ (1, 3, 5) */}
            <FaqCard
              num="01"
              question="Ce este Spectacolul Caritabil?"
              answer="Este un eveniment anual studențesc unde muzica și teatrul se împletesc pentru a susține o cauză nobilă din comunitate."
              side="left"
              top={30}
              right={75}
              wireSrc={wire1}
              wireTransform="translate(10px, -3px)"
              isOpen={openNum === '01'}
              onToggle={() => toggleCard('01')}
            />
            <FaqCard
              num="03"
              question="Unde va avea loc?"
              answer="Spectacolul va avea loc în Aula Magna, clădirea Rectoratului UPB. Detaliile de acces vor fi trimise pe email."
              side="left"
              top={60}
              right={98}
              wireSrc={wire1}
              wireTransform="translate(5px, 0px)"
              isOpen={openNum === '03'}
              onToggle={() => toggleCard('03')}
            />
            <FaqCard
              num="05"
              question="Ce fel de activități vor fi?"
              answer="Vei putea asista la momente muzicale, piese de teatru, și vei avea acces la o tombolă caritabilă cu premii surpriză."
              side="left"
              top={84}
              right={105}
              wireSrc={wire1}
              wireTransform="translate(0px, 0px)"
              isOpen={openNum === '05'}
              onToggle={() => toggleCard('05')}
            />

            {/* PARTEA DREAPTĂ (2, 4, 6) */}
            <FaqCard
              num="02"
              question="Care este cauza pentru care se strâng banii?"
              answer="În acest moment suntem în căutarea cauzei pe care o vom susține anul acesta, analizând cu atenție toate opțiunile pentru a face cea mai bună alegere și a aduce o schimbare reală."
              side="right"
              top={35}
              left={79}
              wireSrc={wire2}
              wireTransform="translate(-5px, -10px)"
              isOpen={openNum === '02'}
              onToggle={() => toggleCard('02')}
            />
            <FaqCard
              num="04"
              question="Cum pot dona?"
              answer="Poți achiziționa un bilet online, sau poți dona direct la urnele amenajate în seara evenimentului."
              side="right"
              top={62}
              left={95}
              wireSrc={wire4}
              wireTransform="translate(0px, -16px)"
              isOpen={openNum === '04'}
              onToggle={() => toggleCard('04')}
            />
            <FaqCard
              num="06"
              question="Cum pot sponsoriza evenimentul?"
              answer="Ne poți contacta la adresa office@osfiir.ro pentru a primi pachetele noastre de sponsorizare."
              side="right"
              top={85}
              left={105}
              wireSrc={wire4}
              wireTransform="translate(5px, -15px)"
              isOpen={openNum === '06'}
              onToggle={() => toggleCard('06')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;