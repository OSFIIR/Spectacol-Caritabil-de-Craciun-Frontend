import { NavLink, Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import logo from '../../assets/svg/logo.svg';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Spectacolul Caritabil" />
      </Link>
      
      <div className="navbar-menu">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Acasă
        </NavLink>
        <NavLink 
          to="/artists" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Artiști
        </NavLink>
        <NavLink 
          to="/sponsors" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Sponsori
        </NavLink>
        <NavLink 
          to="/team" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Echipa
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Contact
        </NavLink>
      </div>

      <Link to="/donate" className="btn-donate">
        Susține cauza <FiArrowUpRight />
      </Link>
    </nav>
  );
};

export default Navbar;