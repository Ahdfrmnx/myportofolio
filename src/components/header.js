import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTheme } from '../index';
import './header.css';

const Header = () => {
  const { darkMode } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLogoLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className={`logo ${logoLoaded ? 'loaded' : ''}`}>
          <Link to="/">
            <span className="logo-text">My Portfolio</span>
          </Link>
        </div>
        
        <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link 
                to="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="nav-link"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                onClick={() => setMobileMenuOpen(false)}
                className="nav-link"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/project" 
                onClick={() => setMobileMenuOpen(false)}
                className="nav-link"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="nav-link"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        
        <button 
          className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          <span className={`bar ${isHovered && !mobileMenuOpen ? 'hover-effect' : ''}`}></span>
          <span className={`bar ${isHovered && !mobileMenuOpen ? 'hover-effect' : ''}`}></span>
          <span className={`bar ${isHovered && !mobileMenuOpen ? 'hover-effect' : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;