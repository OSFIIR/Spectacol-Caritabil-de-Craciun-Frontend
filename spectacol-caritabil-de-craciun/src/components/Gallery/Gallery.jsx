import { useRef } from 'react';
import img1 from '../../assets/photos/scena.png';
import img2 from '../../assets/photos/lumina.png';
import img3 from '../../assets/photos/impreuna.png';
import './Gallery.scss';

const Gallery = () => {
  // Referința pentru a putea controla scroll-ul
  const carouselRef = useRef(null);

  // Funcția care mișcă caruselul
  const scroll = (direction) => {
    if (carouselRef.current) {
      // carouselRef.current.clientWidth calculează exact lățimea vizibilă (1 poză mare + 2 scurte)
      const scrollAmount = direction === 'left' 
        ? -carouselRef.current.clientWidth 
        : carouselRef.current.clientWidth;
        
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
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
              <button className="tab active">Fotografii</button> 
              <span className="divider">/</span>
              <button className="tab">Filmări</button>
            </span>
            
            {/* Am despărțit doar săgețile în <span>-uri click-abile, aspectul e identic! */}
            <span className="gallery-arrows">
              <span onClick={() => scroll('left')} style={{ cursor: 'pointer' }}>←</span> 
              &nbsp; 
              <span onClick={() => scroll('right')} style={{ cursor: 'pointer' }}>→</span>
            </span>
          </div>
        </div>

        <p className="gallery-description">
          Un loc pentru amintirile care ne aduc din nou împreună.
        </p>
      </div>

      {/* Am adăugat ref={carouselRef} aici */}
      <div className="gallery-carousel" ref={carouselRef}>
        <figure className="gallery-item large">
          <img src={img1} alt="Pe scenă" />
          <figcaption>Pe scenă</figcaption>
        </figure>

        <figure className="gallery-item small">
          <img src={img2} alt="În lumina reflectoarelor" />
          <figcaption>În lumina reflectoarelor</figcaption>
        </figure>

        <figure className="gallery-item small">
          <img src={img3} alt="Împreună pentru bine" />
          <figcaption>Împreună pentru bine</figcaption>
        </figure>

        <figure className="gallery-item small">
          <img src={img1} alt="Bucuria muzicii" />
          <figcaption>Bucuria muzicii</figcaption>
        </figure>

        <figure className="gallery-item large">
          <img src={img2} alt="Magia scenei" />
          <figcaption>Magia scenei</figcaption>
        </figure>

        <figure className="gallery-item small">
          <img src={img3} alt="Voluntarii noștri" />
          <figcaption>Voluntarii noștri</figcaption>
        </figure>

        <figure className="gallery-item small">
          <img src={img1} alt="Zâmbete din sală" />
          <figcaption>Zâmbete din sală</figcaption>
        </figure>
      </div>

      <div className="gallery-progress">
        01 — 07 &nbsp;&nbsp;&nbsp; ━
      </div>
    </section>
  );
};

export default Gallery;