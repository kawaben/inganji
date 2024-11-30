import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaConciergeBell, FaEnvelope } from 'react-icons/fa';
import './TopMenuBar.css';

const TopMenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="top-menu-bar">
      <div className="logo">BrandLogo</div>

      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

       <nav className={`menu ${isMenuOpen ? 'menu-open' : ''}`}>
        <a href="#home">
           link1
        </a>
        <a href="#about">
           link2
        </a>
        <a href="#services">
           link3
        </a>
        <a href="#contact">
           link4
        </a>
      </nav>

      <div className="icons">
      <FaHome className="menu-icon" />
      <FaInfoCircle className="menu-icon" />
      <FaConciergeBell className="menu-icon" />
      <FaEnvelope className="menu-icon" />
      </div>

    </div>
  );
};

export default TopMenuBar;
