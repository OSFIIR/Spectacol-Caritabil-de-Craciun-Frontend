import { useEffect, useState } from 'react';
import logoSvg from '../../assets/svg/logo.svg'; 
import './Preloader.scss';

const Preloader = () => {
  // Inițializăm starea DIRECT cu verificarea din sessionStorage.
  // Astfel, dacă a mai fost pe site, isMounted este 'false' din prima milisecundă.
  const [isMounted, setIsMounted] = useState(() => {
    return !sessionStorage.getItem('hasSeenLoader');
  });
  
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Dacă nu a fost montat (deja văzut), nu facem nimic
    if (!isMounted) return;

    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 4000); 

    const removeTimer = setTimeout(() => {
      setIsMounted(false);
      sessionStorage.setItem('hasSeenLoader', 'true');
    }, 5200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [isMounted]);

  if (!isMounted) return null;

  const snowflakes = Array.from({ length: 50 });

  return (
    <div className={`preloader-overlay ${isFading ? 'fade-out' : ''}`}>
      
      <div className="snow-container">
        {snowflakes.map((_, index) => (
          <div key={index} className="snowflake"></div>
        ))}
      </div>

      <div className="preloader-content">
        {/* Folosim clasa corectă pentru a dimensiona logoul */}
        <div className="logo-container">
          <img src={logoSvg} alt="Spectacolul Caritabil" className="preloader-logo" />
        </div>
        <p className="preloader-text">Se încarcă magia...</p>
        
        <div className="candy-cane-track">
          <div className="candy-cane-fill"></div>
        </div>
      </div>
      
    </div>
  );
};

export default Preloader;