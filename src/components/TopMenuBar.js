import React, { useState } from 'react';
import { FaBars, FaTimes, FaSearch, FaBell, FaHeart, FaCartArrowDown } from 'react-icons/fa';
import './TopMenuBar.css';

const TopMenuBar = () => {
        /*  humburger toggle */

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

        /*  cart toggle */

  const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
      setIsCartOpen(!isCartOpen);
    };

     /*  search toggle */

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

   /*  Notification toggle */

   const [isNotificationOpen, setIsNotificationOpen] = useState(false);

   const toggleNotification = () => {
     setIsNotificationOpen(!isNotificationOpen);
   };

    /*  Favorite toggle */

  const [isFavoriteOpen, setIsFavoriteOpen] = useState(false);

  const toggleFavorite = () => {
    setIsFavoriteOpen(!isFavoriteOpen);
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
        <div className="blankSpace"></div>
      <div className="icons">
      <FaSearch className="menu-icon" onClick={toggleSearch} />
      <FaBell className="menu-icon" onClick={toggleNotification}/>
      <FaHeart className="menu-icon"  onClick={toggleFavorite}/>
      <FaCartArrowDown className="menu-icon" onClick={toggleCart} />
      </div>

      <div className={`cart ${isCartOpen ? 'cart-open' : ''}`}>
        cart
      </div>

      <div className={`notification ${isNotificationOpen ? 'notification-open' : ''}`}>
        Notification
      </div>

      <div className={`search ${isSearchOpen ? 'search-open' : ''}`}>
        search
      </div>

      <div className={`favorite ${isFavoriteOpen ? 'favorite-open' : ''}`}>
        Favorite
      </div>

    </div>

  );
};

export default TopMenuBar;
