import React from 'react';
import { FaHome, FaInfoCircle, FaConciergeBell, FaEnvelope } from 'react-icons/fa'; // Import icons
import './TopMenuBar.css';

const TopMenuBar = () => {
  return (
    <div className="top-menu-bar">
      <div className="logo">BrandLogo</div>
      <nav className="menu">
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
