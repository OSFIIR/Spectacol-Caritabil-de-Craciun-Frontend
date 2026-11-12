import { useRef, useState } from 'react';
import imagineArtist from '../../assets/svg/card-artist-gol.svg'; 
import './ArtistsCarousel.scss';

const ArtistCard = ({ imageSrc, name, description }) => {
  return (
    <div className="artist-card">
      <img src={imageSrc} alt={name} className="artist-image" />
      
      {/* Noul strat: Overlay-ul care întunecă imaginea și arată textul */}
      <div className="artist-overlay">
        <p className="artist-description">{description}</p>
      </div>
      
      {/* Numele artistului (rămâne deasupra overlay-ului) */}
      <div className="artist-name-box">
        {name}
      </div>
    </div>
  );
};

const ArtistsCarousel = () => {
  const carouselRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const page = Math.round(scrollLeft / clientWidth) + 1;
      if (page !== currentPage) {
        setCurrentPage(page);
      }
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -carouselRef.current.clientWidth, behavior: 'smooth' }); 
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: carouselRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  return (
    <section className="artists-carousel-section">
      
      <div className="carousel-header">
        <div className="header-left">
          <h3 className="carousel-subtitle">Arta de a dărui</h3>
        </div>
        <div className="header-center">
          <h2 className="carousel-title">HEADLINERS</h2>
        </div>
        <div className="header-right">
          <span className="carousel-counter">{`0${currentPage} / 03`}</span>
          <div className="carousel-controls">
            <button onClick={scrollLeft} className="control-btn" aria-label="Înapoi">←</button>
            <button onClick={scrollRight} className="control-btn" aria-label="Înainte">→</button>
          </div>
        </div>
      </div>

      <div className="carousel-track" ref={carouselRef} onScroll={handleScroll}>
        
        {/* PAGINA 1 */}
        <div className="carousel-page">
          <ArtistCard 
            imageSrc={imagineArtist} 
            name="NUME ARTIST 01" 
            description="Câștigător al premiilor X și Y, un adevărat talent care își aduce contribuția pentru o cauză nobilă." 
          />
          <ArtistCard 
            imageSrc={imagineArtist} 
            name="NUME ARTIST 02" 
            description="Cu o voce inconfundabilă, artistul nostru promite un spectacol de neuitat plin de emoție." 
          />
          <ArtistCard 
            imageSrc={imagineArtist} 
            name="NUME ARTIST 03" 
            description="Un maestru al instrumentelor cu coarde, ne onorează cu prezența sa extraordinară." 
          />
        </div>

        {/* PAGINA 2 */}
        <div className="carousel-page">
          <ArtistCard imageSrc={imagineArtist} name="NUME ARTIST 04" description="Descriere artist 04..." />
          <ArtistCard imageSrc={imagineArtist} name="NUME ARTIST 05" description="Descriere artist 05..." />
          <ArtistCard imageSrc={imagineArtist} name="NUME ARTIST 06" description="Descriere artist 06..." />
        </div>

        {/* PAGINA 3 */}
        <div className="carousel-page">
          <ArtistCard imageSrc={imagineArtist} name="NUME ARTIST 07" description="Descriere artist 07..." />
          <ArtistCard imageSrc={imagineArtist} name="NUME ARTIST 08" description="Descriere artist 08..." />
          <ArtistCard imageSrc={imagineArtist} name="NUME ARTIST 09" description="Descriere artist 09..." />
        </div>

      </div>

    </section>
  );
};

export default ArtistsCarousel;