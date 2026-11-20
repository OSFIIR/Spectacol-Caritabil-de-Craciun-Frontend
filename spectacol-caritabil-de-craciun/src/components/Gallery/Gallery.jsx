import { useRef, useState, useEffect } from 'react';
import img1 from '../../assets/photos/poza2.JPG';
import img2 from '../../assets/photos/poza3.JPG';
import img3 from '../../assets/photos/poza4.jpg';
import img4 from '../../assets/photos/poza6.JPG';
import img5 from '../../assets/photos/poza5.JPG';
import img6 from '../../assets/photos/poza7.JPG';
import img7 from '../../assets/photos/poza8.jpg';
import img8 from '../../assets/photos/poza9.JPG';
import img9 from '../../assets/photos/poza10.JPG';
import img10 from '../../assets/photos/poza11.jpg';
import img11 from '../../assets/photos/poza12.jpg';
import img12 from '../../assets/photos/poza13.jpg';
import img13 from '../../assets/photos/poza14.jpg';
import img14 from '../../assets/photos/poza15.jpg';
import img15 from '../../assets/photos/poza16.jpg';
import img16 from '../../assets/photos/poza17.jpg';
import img17 from '../../assets/photos/poza18.jpg';
import img18 from '../../assets/photos/poza1.JPG';
import video1 from '../../assets/videos/video1.mp4';
import video2 from '../../assets/videos/video2.mp4';
import video3 from '../../assets/videos/video3.mp4';
import './Gallery.scss';

const Gallery = () => {
  const photosRef = useRef(null);
  const videosRef = useRef(null);
  const [activeTab, setActiveTab] = useState('photos');
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Setăm câte elemente avem în fiecare tab
  const totalItems = activeTab === 'photos' ? 6 : 3;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Formatează cifrele (adaugă 0 în față pentru < 10)
  const formatNumber = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  // Când schimbăm tab-ul, resetăm indexul la 0 și ducem scroll-ul la început
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentIndex(0);
    
    const currentRef = tab === 'photos' ? photosRef : videosRef;
    if (currentRef.current) {
      currentRef.current.scrollLeft = 0;
    }
  };

  // Urmărim progresul de scroll (merge perfect și la swipe pe mobil)
  const handleScroll = (e) => {
    const { scrollLeft, scrollWidth, clientWidth } = e.target;
    const maxScroll = scrollWidth - clientWidth;
    
    if (maxScroll <= 0) return;
    
    const scrollPercentage = scrollLeft / maxScroll;
    // Calculăm pe ce element ne aflăm în funcție de procentajul de scroll
    const index = Math.round(scrollPercentage * (totalItems - 1));
    setCurrentIndex(index);
  };

  const scroll = (direction) => {
    const currentRef = activeTab === 'photos' ? photosRef : videosRef;
    if (currentRef.current) {
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
                onClick={() => handleTabChange('photos')}
              >
                Fotografii
              </button> 
              <span className="divider">/</span>
              <button 
                className={`tab ${activeTab === 'videos' ? 'active' : ''}`}
                onClick={() => handleTabChange('videos')}
              >
                Filmări
              </button>
            </span>
            
            {/* Săgețile minimaliste pe desktop */}
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
          onScroll={handleScroll}
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
            <img src={img4} alt="Magia scenei" loading="lazy" />
            <figcaption>Magia scenei</figcaption>
          </figure>
          <figure className="gallery-item small">
            <img src={img5} alt="Bucuria muzicii" loading="lazy" />
            <figcaption>Bucuria muzicii</figcaption>
          </figure>
          <figure className="gallery-item small">
            <img src={img6} alt="Voluntarii noștri" loading="lazy" />
            <figcaption>În lumina reflectoarelor</figcaption>
          </figure>

          <figure className="gallery-item large">
            <img src={img7} alt="Magia scenei" loading="lazy" />
            <figcaption>Magia scenei</figcaption>
          </figure>
          <figure className="gallery-item small">
            <img src={img8} alt="Bucuria muzicii" loading="lazy" />
            <figcaption>Bucuria muzicii</figcaption>
          </figure>
          <figure className="gallery-item small">
            <img src={img9} alt="Voluntarii noștri" loading="lazy" />
            <figcaption>În lumina reflectoarelor</figcaption>
          </figure>

          <figure className="gallery-item large">
            <img src={img10} alt="Magia scenei" loading="lazy" />
            <figcaption>Magia scenei</figcaption>
          </figure>
          <figure className="gallery-item small">
            <img src={img11} alt="Bucuria muzicii" loading="lazy" />
            <figcaption>Bucuria muzicii</figcaption>
          </figure>
          <figure className="gallery-item small">
            <img src={img12} alt="Voluntarii noștri" loading="lazy" />
            <figcaption>În lumina reflectoarelor</figcaption>
          </figure>

          <figure className="gallery-item large">
            <img src={img15} alt="Magia scenei" loading="lazy" />
            <figcaption>Magia scenei</figcaption>
          </figure>
          <figure className="gallery-item small">
            <img src={img13} alt="Bucuria muzicii" loading="lazy" />
            <figcaption>Bucuria muzicii</figcaption>
          </figure>
          <figure className="gallery-item small">
            <img src={img14} alt="Voluntarii noștri" loading="lazy" />
            <figcaption>În lumina reflectoarelor</figcaption>
          </figure>

          <figure className="gallery-item large">
            <img src={img16} alt="Magia scenei" loading="lazy" />
            <figcaption>Împreună pentru bine</figcaption>
          </figure>
          <figure className="gallery-item small">
            <img src={img17} alt="Bucuria muzicii" loading="lazy" />
            <figcaption>Bucuria muzicii</figcaption>
          </figure>
          <figure className="gallery-item small">
            <img src={img18} alt="Voluntarii noștri" loading="lazy" />
            <figcaption>În lumina reflectoarelor</figcaption>
          </figure>
          
          <div className="carousel-spacer"></div>
        </div>

        {/* CARUSEL 2: FILMĂRI */}
        <div 
          className={`gallery-carousel videos-carousel ${activeTab === 'videos' ? 'active' : 'hidden'}`} 
          ref={videosRef}
          onScroll={handleScroll}
        >
          <figure className="gallery-item">
            <video 
              src={video1} 
              controls 
              preload="metadata" 
              playsInline
              title="Moment Video 1"
            />
            <figcaption>Moment video 1</figcaption>
          </figure>

          <figure className="gallery-item">
            <video 
              src={video2} 
              controls 
              preload="metadata" 
              playsInline
              title="Atmosfera"
            />
            <figcaption>Moment video 2</figcaption>
          </figure>

          <figure className="gallery-item">
            <video 
              src={video3} 
              controls 
              preload="metadata" 
              playsInline
              title="Spectacol Complet"
            />
            <figcaption>Moment video 3</figcaption>
          </figure>
        </div>
      </div>

      {/* TEXTUL DINAMIC: ex. 01 — 06 sau 01 — 03 */}
      <div className="gallery-progress">
        {formatNumber(currentIndex + 1)} — {formatNumber(totalItems)}
      </div>
    </section>
  );
};

export default Gallery;