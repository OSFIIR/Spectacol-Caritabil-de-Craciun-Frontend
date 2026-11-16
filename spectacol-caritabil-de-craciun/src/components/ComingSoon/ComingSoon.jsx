import { Link } from 'react-router-dom';
import './ComingSoon.scss';

const ComingSoon = () => {
  return (
    <section className="coming-soon-section">
      <div className="coming-soon-card">
        
        <h1 className="coming-soon-title">
          ÎN CURÂND
        </h1>
        
        <p className="coming-soon-desc">
          Pregătim ceva magic pentru tine. Lucrăm de zor la această secțiune pentru a aduce emoția spectacolului și mai aproape. Rămâi pe aproape, vom reveni în scurt timp cu detalii!
        </p>
        
        <Link to="/" className="coming-soon-btn">
          &larr; Înapoi Acasă
        </Link>
        
      </div>
    </section>
  );
};

export default ComingSoon;