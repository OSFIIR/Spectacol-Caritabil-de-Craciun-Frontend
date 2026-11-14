import { useRef, useState, useEffect } from 'react';
import img1 from '../../assets/photos/scena.png';
import img2 from '../../assets/photos/lumina.png';
import img3 from '../../assets/photos/impreuna.png';
import './Gallery.scss';

const Gallery = () => {
  const photosRef = useRef(null);
  const videosRef = useRef(null);
  const [activeTab, setActiveTab] = useState('photos');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scroll = (direction) => {
    const currentRef = activeTab === 'photos' ? photosRef : videosRef;
    if (currentRef.current) {
      // Dăm scroll fix cât este lățimea vizibilă a caruselului
      const scrollAmount = direction === 'left' 
        ? -currentRef.current.clientWidth 
        : currentRef.current.clientWidth;
      
      currentRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="gallery">
      <div className="gallery-header">
        <span className="gallery-subtitle">02 / EDIȚIA ANTERIOARĂ</span>
        
        <div className="gallery-title-controls">
          <h2 className="gallery-title">Emoții care rămân.</h2>
          
          <div className="gallery-controls">
            
            <span className="gallery-tabs">
              <button 
                className={`tab ${activeTab === 'photos' ? 'active' : ''}`}
                onClick={() => setActiveTab('photos')}
              >
                Fotografii
              </button> 
              <span className="divider">/</span>
              <button 
                className={`tab ${activeTab === 'videos' ? 'active' : ''}`}
                onClick={() => setActiveTab('videos')}
              >
                Filmări
              </button>
            </span>
            
            {/* Săgețile minimaliste */}
            {!isMobile && (
              <div className="gallery-arrows">
                <button 
                  className="arrow-btn" 
                  onClick={() => scroll('left')}
                  aria-label="Înapoi"
                >
                  ←
                </button>
                <button 
                  className="arrow-btn" 
                  onClick={() => scroll('right')}
                  aria-label="Înainte"
                >
                  →
                </button>
              </div>
            )}
          </div>
        </div>

        <p className="gallery-description">
          Un loc pentru amintirile care ne aduc din nou împreună.
        </p>
      </div>

      <div className="gallery-carousel-wrapper">
        
        {/* CARUSEL 1: FOTOGRAFII */}
        <div 
          className={`gallery-carousel photos-carousel ${activeTab === 'photos' ? 'active' : 'hidden'}`} 
          ref={photosRef}
        >
          <figure className="gallery-item large">
            <img src={img1} alt="Pe scenă" loading="lazy" />
            <figcaption>Pe scenă</figcaption>
          </figure>
          <figure className="gallery-item small">
            <img src={img2} alt="În lumina reflectoarelor" loading="lazy" />
            <figcaption>În lumina reflectoarelor</figcaption>
          </figure>
          <figure className="gallery-item small">
            <img src={img3} alt="Împreună pentru bine" loading="lazy" />
            <figcaption>Împreună pentru bine</figcaption>
          </figure>

          <figure className="gallery-item large">
            <img src={img2} alt="Magia scenei" loading="lazy" />
            <figcaption>Magia scenei</figcaption>
          </figure>
          <figure className="gallery-item small">
            <img src={img1} alt="Bucuria muzicii" loading="lazy" />
            <figcaption>Bucuria muzicii</figcaption>
          </figure>
          <figure className="gallery-item small">
            <img src={img3} alt="Voluntarii noștri" loading="lazy" />
            <figcaption>Voluntarii noștri</figcaption>
          </figure>
          
          <div className="carousel-spacer"></div>
        </div>

        {/* CARUSEL 2: FILMĂRI (Aici am lăsat doar item-ul curat, va fi 1 pe ecran) */}
        <div 
          className={`gallery-carousel videos-carousel ${activeTab === 'videos' ? 'active' : 'hidden'}`} 
          ref={videosRef}
        >
          <figure className="gallery-item">
            <img src={img2} alt="Moment Video 1" loading="lazy" />
            <figcaption>Moment video 1</figcaption>
          </figure>
          <figure className="gallery-item">
            <img src={img3} alt="Atmosfera" loading="lazy" />
            <figcaption>Atmosfera</figcaption>
          </figure>
          <figure className="gallery-item">
            <img src={img1} alt="Spectacol Complet" loading="lazy" />
            <figcaption>Spectacol complet</figcaption>
          </figure>
        </div>
      </div>

      <div className="gallery-progress">
        01 — 06
      </div>
    </section>
  );
};

export default Gallery;