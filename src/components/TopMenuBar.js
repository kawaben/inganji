import React, { useState } from 'react';
import './styles/TopMenuBar.css';
import SearchPage from './search';
import NotificationPage from './Notification';
import { FaBars, FaTimes, FaSearch, FaBell, FaHeart, FaShoppingCart } from 'react-icons/fa';


  const ToggleList = () => {
    const [openToggle, setOpenToggle] = useState(null); // Store the ID of the currently open toggle
  
    const handleToggle = (id) => {
      setOpenToggle((prev) => (prev === id ? null : id)); // Close if already open, else open the new toggle
    };

    const toggles = [
      { id: 1, title: <FaSearch className="menu-icon" />, content: <SearchPage/> },
      { id: 2, title: <FaBell className="menu-icon" />, content: <NotificationPage/> },
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
        <div className='icons'>
          {toggles.map((toggle) => (
            <div key={toggle.id} className={`toggle-item ${toggle.id === 5 ? "humburger" : ""}`} >
              <div className='icon' onClick={() => handleToggle(toggle.id)}>
              {openToggle === toggle.id && toggle.id === 5 ? (
                <FaTimes className="menu-icon" /> // Change to close icon
              ) : (
                toggle.title // Show default icon or title
              )}
                
              </div>
              {openToggle === toggle.id && (
                <div className="toggles">
                  {toggle.content}
                </div>
              )}
            </div>
          ))}

        </div>

        

      </div>
    );

  };


export default ToggleList;
