import React from "react";
import "./styles/Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { useLanguage } from "./context/LanguageContext";

const Footer = () => {
  const { language} = useLanguage(); // Using Language Context
  const about = {
    en:` We are a clothing brand committed to quality and style. Our
              mission is to empower individuals to express themselves through
              fashion.`,
              
    kn: `Turi ikirango cy'imyenda yuzuje ubuziranenge nu uburyo. Intego yacu
     ni uguha imbaraga abantu zo kugaragariza ibitekerezo mu myambarire.`,
    fr:`Nous sommes une marque de vêtements engagée dans la qualité et le style. Notre
              La mission est de permettre aux individus de s'exprimer à travers
              mode.`,

    sw: `Sisi ni chapa ya nguo iliyojitolea kwa ubora na mtindo. Yetu
              dhamira ni kuwawezesha watu kujieleza kupitia
              mtindo.`,
  };
 
  const links = {
    en: { aboutus: "About Us", quick: "Quick Links", follow: "Follow Us", contact: "Contact Us" },
    fr: { aboutus: "À propos de Nous", quick: "Liens Rapides", follow: "Suivez-nous", contact: "Contactez-nous" },
    sw: { aboutus: "Kuhusu Sisi", quick: "Viungo vya Haraka", follow: "Tufuate", contact: "Wasiliana Nasi" },
    kn: { aboutus: "Ibitwerekeyeho", quick: "Imiyoboro Yihuta", follow: "Dukurikire", contact: "Tuvugishe" }
  };

  const qlink = {
    en: { qabout: "About Us", shop: "Shops", blog: "Blog", qcontact: "Contact" },
    fr: { qabout: "À propos de Nous", shop: "Boutiques", blog: "Blogue", qcontact: "Contact" },
    sw: { qabout: "Kuhusu Sisi", shop: "Duka", blog: "Blogu", qcontact: "Wasiliana" },
    kn: { qabout: "Ibitwerekeyeho", shop: "Iduka", blog: "Blog", qcontact: "Tuvugishe" }
  }

  const contacts ={
    en: { email: "E-mail", phone: "Phone", address: "Address", },
    fr: { email: "E-mail", phone: "Téléphone", address: "Adresse", },
    sw: { email: "Barua pepe", phone: "Simu", address: "Anwani", },
    kn: { email: "Imeyili", phone: "Telefoni", address: "Aderesi", }
  }

  return (
    <footer className={`footer`}>
      
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h3>{links[language]?.aboutus}</h3>
          <div className="aboutUs">
            <p>
            {about[language]}
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-section">
          <h3>{links[language]?.quick}</h3>
          <div className="quick-links">
            <ul>
              <li>
                <a href="/about">{qlink[language]?.qabout}</a>
              </li>
              <li>
                <a href="/shop">{qlink[language]?.shop}</a>
              </li>
              <li>
                <a href="/blog">{qlink[language]?.blog}</a>
              </li>
              <li>
                <a href="/contact">{qlink[language]?.qcontact}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3>{links[language]?.follow}</h3>
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
          <h3>{links[language]?.contact}</h3>
          <div className="contact">
            <p>{contacts[language]?.email}: nuovire@gmail.com</p>
            <p>{contacts[language]?.phone}: +250 795458850</p>
            <p>{contacts[language]?.address}: Kigali, Rwanda</p>
          </div>
        </div>
      </div>

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
