import { useState, useEffect, useRef } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { Bell, User as UserIcon } from 'lucide-react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { isAuthenticated, role, logout } = useAuth();
  const navigate = useNavigate();
  const avatarRef = useRef(null);
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);

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

  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false);
    navigate('/');
  };

  const toggleAvatar = () => setIsAvatarOpen(v => !v);

  useEffect(() => {
    const onDocClick = (e) => {
      if (avatarRef.current && !avatarRef.current.contains(e.target)) {
        setIsAvatarOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setIsAvatarOpen(false);
    };
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  // Navigation configurations
  const guestLinks = [
    { to: '/', label: 'Home' },
    { to: '/camps', label: 'Camps' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  const userLinks = [
    { to: '/', label: 'Home' },
    { to: '/camps', label: 'Camps' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '/user/dashboard', label: 'Dashboard' },
  ];

  const hospitalLinks = [
    { to: '/', label: 'Home' },
    { to: '/hospital/dashboard', label: 'Dashboard' },
    { to: '/hospital/blood-requests', label: 'Blood Requests' },
    { to: '/camps', label: 'Camps' },
    { to: '/hospital/inventory', label: 'Inventory' },
    { to: '/about', label: 'About' },
    
  ];

  const navItems = isAuthenticated ? (role === 'hospital' ? hospitalLinks : userLinks) : guestLinks;

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
          {navItems.map(i => (
            <Link key={i.to} to={i.to} className="nav-link">{i.label}</Link>
          ))}

          <div className="nav-right">
            {isAuthenticated && (
              <button
                className="btn-notification"
                aria-label="Notifications"
                onClick={() => navigate(role === 'hospital' ? '/hospital/notifications' : '/user/notifications')}
              >
                <Bell size={18} />
                <span className="notif-badge">0</span>
              </button>
            )}

            {isAuthenticated ? (
              <div className="avatar-wrap" ref={avatarRef}>
                <button className="btn-avatar" aria-haspopup="true" onClick={toggleAvatar} aria-expanded={isAvatarOpen}>
                  <UserIcon size={18} />
                </button>
                {isAvatarOpen && (
                  <div className="avatar-dropdown" role="menu">
                    <Link to={role === 'hospital' ? '/hospital/profile' : '/user/profile'} className="dropdown-item">Profile</Link>
                    <Link to={role === 'hospital' ? '/hospital/settings' : '/user/settings'} className="dropdown-item">Settings</Link>
                    <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <div className="auth-buttons-desktop">
                <button className="btn-login"><Link to="/login">Login</Link></button>
                <button className="btn-register"><Link to="/register">Register</Link></button>
              </div>
            )}
          </div>
        </nav>

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
          {navItems.map(i => (
            <Link key={i.to} to={i.to} className="nav-link-mobile" onClick={() => setIsMobileMenuOpen(false)}>{i.label}</Link>
          ))}

          {isAuthenticated ? (
            <>
              <button className="btn-notification-mobile" onClick={() => { navigate(role === 'hospital' ? '/hospital/notifications' : '/user/notifications'); setIsMobileMenuOpen(false); }}>
                <Bell size={18} /> Notifications
              </button>

              <Link to={role === 'hospital' ? '/hospital/profile' : '/user/profile'} className="nav-link-mobile" onClick={() => setIsMobileMenuOpen(false)}>Profile</Link>
              <Link to={role === 'hospital' ? '/hospital/settings' : '/user/settings'} className="nav-link-mobile" onClick={() => setIsMobileMenuOpen(false)}>Settings</Link>
              <button className="btn-logout-mobile" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <button className="btn-login-mobile"><Link to="/login">Login</Link></button>
              <button className="btn-register-mobile"><Link to="/register">Register</Link></button>
            </>
          )}
        </nav>
      )}
    </header>
  );
}

export default Header;
