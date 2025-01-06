import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaSearch, FaBell, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import './styles/TopMenuBar.css';
import './styles/grobal.css';
import SearchPage from './search';
import NotificationPage from './Notification';
import FavoriteItemPage from './favorite';
import CartPage from './cart';
import { useLanguage } from './context/LanguageContext';

const categoriesData = {
  en: [
    { category: 'male', name: 'MEN' },
    { category: 'accesories', name: 'ACCESSORIES' },
    { category: 'female', name: 'WOMEN' },
    { category: 'kids', name: 'KIDS' },
  ],
  fr: [
    { category: 'male', name: 'HOMME' },
    { category: 'accesories', name: 'ACCESSOIRES' },
    { category: 'female', name: 'FEMME' },
    { category: 'kids', name: 'ENFANTS' },
  ],
  sw: [
    { category: 'male', name: 'WANAUME' },
    { category: 'accesories', name: 'ACCESSORIES' },
    { category: 'female', name: 'WANAWAKE' },
    { category: 'kids', name: 'WATOTO' },
  ],
  kn: [
    { category: 'male', name: 'ABAGABO' },
    { category: 'accesories', name: 'ACCESSORIES' },
    { category: 'female', name: 'ABAGORE' },
    { category: 'kids', name: 'ABANA' },
  ],
};

const ToggleList = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [openToggle, setOpenToggle] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const toggleRef = useRef(null);

  const handleCardClick = (category) => {
    navigate(`/Category/${category}`);
  };

  const handleToggle = (id) => {
    setOpenToggle((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!isSmallScreen && openToggle !== null) {
        if (
          toggleRef.current &&
          !toggleRef.current.contains(e.target) &&
          !document.querySelector(`.icon[data-id="${openToggle}"]`).contains(e.target)
        ) {
          setOpenToggle(null);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openToggle, isSmallScreen]);

  const toggles = [
    { id: 1, title: <FaSearch className="menu-icon" />, content: <SearchPage /> },
    { id: 2, title: <FaBell className="menu-icon" />, content: <NotificationPage /> },
    { id: 3, title: <FaHeart className="menu-icon" />, content: <FavoriteItemPage /> },
    { id: 4, title: <FaShoppingCart className="menu-icon" />, content: <CartPage /> },
    {
      id: 5,
      title: <FaBars />,
      content: (
        <nav className="nav-links">
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {categoriesData[language].map((category) => (
              <li key={category.category}>
                <a
                  onClick={() => handleCardClick(category.category)}
                  tabIndex="0"
                  role="button"
                  aria-label={`View details for ${category.category}`}
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ),
    },
  ];

  return (
    <div className="top-menu-bar">
      <div className="logo">
        <Link to="/">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.svg`}
            alt="Logo"
          />
        </Link>
      </div>
      <nav className="menu">
        {categoriesData[language].map((category) => (
          <a
            key={category.category}
            onClick={() => handleCardClick(category.category)}
            tabIndex="0"
            role="button"
            aria-label={`View details for ${category.category}`}
          >
            {category.name}
          </a>
        ))}
      </nav>
      <div className="blankSpace" />
      <div className="icons" ref={toggleRef}>
        {toggles.map((toggle) => (
          <div key={toggle.id} className={`toggle-item ${toggle.id === 5 ? 'humburger' : ''}`}>
            <div
              className="icon"
              data-id={toggle.id}
              onClick={() => handleToggle(toggle.id)}
              style={{ color: openToggle === toggle.id ? 'var(--secondary-color)' : 'inherit' }}
            >
              {openToggle === toggle.id && toggle.id === 5 ? <FaTimes /> : toggle.title}
            </div>
            {openToggle === toggle.id && <div className="toggles">{toggle.content}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToggleList;
