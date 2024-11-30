import React from 'react';
import './TopMenuBar.css';

const TopMenuBar = () => {
  return (
    <div className="top-menu-bar">
      <div className="logo">BrandLogo</div>
      <nav className="menu">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
};

export default TopMenuBar;
