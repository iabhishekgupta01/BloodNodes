import { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <div className="logo-section">
          <div className="logo">
            <span className="logo-icon">🩸</span>
            <span className="logo-text">BloodNode</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/camps" className="nav-link">Camps</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        {/* Auth Buttons - Desktop */}
        <div className="auth-buttons-desktop">
          <button className="btn-login"><Link to="/login">Login</Link></button>
          <button className="btn-register"><Link to="/register">Register</Link></button>
        </div>

        {/* Mobile Hamburger Menu */}
        <button 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="nav-mobile">
          <Link to="/" className="nav-link-mobile">Home</Link>
          <Link to="/camps" className="nav-link-mobile">Camps</Link>
          <Link to="/about" className="nav-link-mobile">About</Link>
          <Link to="/contact" className="nav-link-mobile">Contact</Link>
          <button className="btn-login-mobile"><Link to="/login">Login</Link></button>
          <button className="btn-register-mobile"><Link to="/register">Register</Link></button>
        </nav>
      )}
    </header>
  );
}

export default Header;
