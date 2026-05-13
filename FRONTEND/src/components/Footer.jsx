import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Brand Info */}
        <div className="footer-column">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-icon">🩸</span>
              <span className="footer-logo-text">BloodNode</span>
            </div>
            <p className="footer-description">
              Real-time emergency blood coordination powered by BloodNode. Connecting blood donors and hospitals during critical moments to save lives faster.
            </p>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h3 className="footer-column-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
        </div>

        {/* Column 3: Contact & Socials */}
        <div className="footer-column">
          <h3 className="footer-column-title">Connect With Us</h3>
          <div className="footer-contact">
            <p className="footer-email">
              <a href="mailto:support@bloodnode.com">support@bloodnode.com</a>
            </p>
            <p className="footer-phone">
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </p>
          </div>
          
          {/* Social Icons */}
          <div className="footer-socials">
            <a href="#facebook" className="social-icon" title="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#twitter" className="social-icon" title="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 002.856-3.39 9.965 9.965 0 01-2.824.856 4.969 4.969 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#linkedin" className="social-icon" title="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.048-8.836 0-9.755h3.554v1.38c.43-.664 1.199-1.607 2.915-1.607 2.131 0 3.727 1.395 3.727 4.393v5.589zM5.337 9.433c-1.144 0-1.915-.761-1.915-1.719 0-.957.77-1.718 1.959-1.718 1.188 0 1.914.761 1.942 1.718 0 .958-.753 1.719-1.986 1.719zm1.575 10.019H3.762V9.678h3.15v9.774zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#instagram" className="social-icon" title="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25m4.75 3c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm-4.75 1.5c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 2c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} BloodNode. All rights reserved. Made with ❤️ for saving lives.</p>
      </div>
    </footer>
  );
}

export default Footer;
