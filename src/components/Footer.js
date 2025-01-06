import React, { useState } from "react";
import "./styles/Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { useLanguage } from "./context/LanguageContext";

const Footer = () => {
  const [theme, setTheme] = useState("light");
  const { language, toggleLanguage, languages } = useLanguage(); // Using Language Context

  // Theme Toggle Handler
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  
    const messages = {
      en: "Welcome!",
      kn: "Murakaza Neza",
      fr: "Bienvenue!",
      sw: "karibuni"
    };

  return (
    <footer className={`footer ${theme}`}>
      
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h3>About Us</h3>
          <div className="aboutUs">
          <h1>{messages[language]}</h1>;
            <p>
              We are a clothing brand committed to quality and style. Our
              mission is to empower individuals to express themselves through
              fashion.
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <div className="quick-links">
            <ul>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/shop">Shop</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
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
                <p>nuovi re</p>
              </div>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <div className="icon-text">
                <i className="fab fa-twitter"></i>
                <p>nuovi re</p>
              </div>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <div className="icon-text">
                <i className="fab fa-instagram"></i>
                <p>nuovi re</p>
              </div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <div className="icon-text">
                <i className="fab fa-linkedin-in"></i>
                <p>nuovi re</p>
              </div>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              <div className="icon-text">
                <i className="fab fa-tiktok"></i>
                <p>nuovi re</p>
              </div>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer">
              <div className="icon-text">
                <i className="fab fa-pinterest"></i>
                <p>nuovi re</p>
              </div>
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="contact">
            <p>Email: nuovire@gmail.com</p>
            <p>Phone: +250 795458850</p>
            <p>Address: Kigali, Rwanda</p>
          </div>
        </div>
      </div>

      {/* Language and Theme Toggle Section */}
     

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} NUOVI RE<sup>®</sup>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
