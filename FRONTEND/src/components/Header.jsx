import { useState, useEffect } from 'react';
import './Header.css';

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
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Auth Buttons - Desktop */}
        <div className="auth-buttons-desktop">
          <button className="btn-login">Login</button>
          <button className="btn-register">Register</button>
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
          <a href="#home" className="nav-link-mobile">Home</a>
          <a href="#about" className="nav-link-mobile">About</a>
          <a href="#contact" className="nav-link-mobile">Contact</a>
          <button className="btn-login-mobile">Login</button>
          <button className="btn-register-mobile">Register</button>
        </nav>
      )}
    </header>
  );
}

export default Header;
