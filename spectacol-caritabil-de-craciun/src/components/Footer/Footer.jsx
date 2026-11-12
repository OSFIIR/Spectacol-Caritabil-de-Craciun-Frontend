import { Link } from 'react-router-dom';
import logoOsfiir from '../../assets/svg/logo-osfiir.svg';
import iconLocation from '../../assets/svg/icon-location.svg';
import iconPhone from '../../assets/svg/icon-phone.svg';
import iconEmail from '../../assets/svg/icon-email.svg';

// Importăm iconițele direct din biblioteca react-icons
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import { FiGlobe } from 'react-icons/fi';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Coloana 1: Logo */}
        <div className="footer-col logo-col">
          <img src={logoOsfiir} alt="Logo OSFIIR" className="footer-logo" />
        </div>

        {/* Coloana 2: Contact */}
        <div className="footer-col contact-col">
          <div className="contact-item">
            <img src={iconLocation} alt="Locație" className="contact-icon" />
            <span>Politehnica Corp E, București</span>
          </div>
          <div className="contact-item">
            <img src={iconPhone} alt="Telefon" className="contact-icon" />
            <span>+40 731 080 207</span>
          </div>
          <div className="contact-item">
            <img src={iconEmail} alt="Email" className="contact-icon" />
            <span>office@osfiir.ro</span>
          </div>
        </div>

        {/* Coloana 3: Semnătură, Social Media & Meniu */}
        <div className="footer-col signature-col">
          <div className="signature">
            <h3 className="signature-title">Binele începe cu noi.</h3>
            <p className="signature-subtitle">Spectacolul Caritabil · Împreună, din inimă.</p>
          </div>
          
          <nav className="footer-nav">
            <Link to="/">Acasă</Link>
            <Link to="/artists">Artiști</Link>
            <Link to="/sponsors">Sponsori</Link>
            <Link to="/team">Echipa</Link>
          </nav>

          {/* Iconițele de Social Media / Website poziționate DEDESUBTUL meniului */}
          <div className="social-links">
            <a href="https://www.instagram.com/osfiir/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://www.facebook.com/OSFIIR" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="social-icon" />
            </a>
            <a href="https://www.tiktok.com/@o.s.f.i.i.r" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <FaTiktok className="social-icon" />
            </a>
            <a href="https://osfiir.ro/" target="_blank" rel="noopener noreferrer" aria-label="Website OSFIIR">
              <FiGlobe className="social-icon" />
            </a>
          </div>
        </div>

      </div>

      {/* Partea de jos (Copyright & Legal) */}
      <div className="footer-bottom">
        <div className="footer-separator" />
        <div className="footer-legal">
          <p>© Spectacolul Caritabil. Toate drepturile rezervate.</p>
          <div className="legal-links">
            <Link to="/privacy">Confidențialitate</Link>
            <span className="dot">·</span>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;