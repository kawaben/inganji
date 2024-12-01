import React, { useState } from 'react';
import './TopMenuBar.css';

import { FaBars, FaTimes, FaSearch, FaBell, FaHeart, FaCartArrowDown, FaShoppingCart } from 'react-icons/fa';

/*import { FaBars, FaTimes, FaSearch, FaBell, FaHeart, FaCartArrowDown } from 'react-icons/fa';

  

/*
const TopMenuBar = () => {
        humburger toggle 

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

        /*  cart toggle 

  const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
      setIsCartOpen(!isCartOpen);
    };

     /*  search toggle 

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

   /*  Notification toggle 

   const [isNotificationOpen, setIsNotificationOpen] = useState(false);

   const toggleNotification = () => {
     setIsNotificationOpen(!isNotificationOpen);
   };

    /*  Favorite toggle 

  const [isFavoriteOpen, setIsFavoriteOpen] = useState(false);

  const toggleFavorite = () => {
    setIsFavoriteOpen(!isFavoriteOpen);
  };

  */


  const ToggleList = () => {
    const [openToggle, setOpenToggle] = useState(null); // Store the ID of the currently open toggle
  
    const handleToggle = (id) => {
      setOpenToggle((prev) => (prev === id ? null : id)); // Close if already open, else open the new toggle
    };

    const toggles = [
      { id: 1, title: <FaSearch className="menu-icon" />, content: "Search" },
      { id: 2, title: <FaBell className="menu-icon" />, content: "Notification" },
      { id: 3, title: <FaHeart className="menu-icon" />, content: "Favorite" },
      { id: 4, title: <FaShoppingCart className="menu-icon" />, content: "Cart" },
      { id: 5, title: <FaBars className="menu-icon" />, content: "Humburger" },
    ];




    return (
      <div className='top-menu-bar'>
        <div className="logo">BrandLogo</div>

        <nav className='menu'>
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

        <div className='blankSpace'></div>
        {toggles.map((toggle) => (
          <div key={toggle.id} className={`toggle-item ${toggle.id === 5 ? "humburger" : ""}`} >
            <button className='icons' onClick={() => handleToggle(toggle.id)}>
            {openToggle === toggle.id && toggle.id === 5 ? (
              <FaTimes className="menu-icon" /> // Change to close icon
            ) : (
              toggle.title // Show default icon or title
            )}
              
            </button>
            {openToggle === toggle.id && (
              <div className="toggles">
                {toggle.content}
              </div>
            )}
          </div>
        ))}

        

      </div>
    );

  };
/*
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

  );*/


export default ToggleList;
