import React, { useState } from "react";
import "./styles/Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


const Footer = () => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("English");

  // Theme Toggle Handler
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  };

  // Language Change Handler
  const changeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <footer className={`footer ${theme}`}>
        
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h3>About Us</h3>
          <div className="aboutUs">
            <p>
                We are a clothing brand committed to quality and style. Our mission
                is to empower individuals to express themselves through fashion.
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <div className="quick-links">
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <div className="icon-text">
              <i className="fab fa-facebook-f"></i>
              <p>Inganji Official</p>
            </div>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <div className="icon-text">
              <i className="fab fa-twitter"></i>
              <p>Inganji Official</p>
              </div>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <div className="icon-text">
              <i className="fab fa-instagram"></i>
              <p>Inganji Official</p>
              </div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <div className="icon-text">
              <i className="fab fa-linkedin-in"></i>
              <p>Inganji Official</p>
              </div>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
            <div className="icon-text">
              <i className="fab fa-tiktok"></i>
              <p>Inganji Official</p>
              </div>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer">
                <div className="icon-text">
              <i className="fab fa-pinterest"></i>
              <p>Inganji Official</p>
              </div>
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
            
          <h3>Contact Us</h3>
          <div className="contact">
            <p>Email: support@clothingbrand.com</p>
            <p>Phone: +1 123 456 7890</p>
            <p>Address: 123 Fashion Ave, New York, NY 10001</p>
            </div>
                 </div>
      </div>

      {/* Language and Theme Toggle Section */}
      <div className="footer-controls">
        <div className="language-toggle">
          <label htmlFor="language">Language:</label>
          <select
            id="language"
            value={language}
            onChange={changeLanguage}
            className="language-select"
          >
            <option value="English">English</option>
            <option value="Spanish">Español</option>
            <option value="French">Français</option>
            <option value="German">Deutsch</option>
          </select>
        </div>

        <div className="theme-button">
          <label htmlFor="theme">Theme:</label>
          <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} INGANJI<sup>®</sup>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
