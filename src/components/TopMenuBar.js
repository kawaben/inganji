import React, { useState, useEffect, useRef } from 'react';
import './styles/TopMenuBar.css';
import './styles/grobal.css';
import SearchPage from './search';
import NotificationPage from './Notification';
import FavoriteItemPage from './favorite';
import CartPage from './cart';
import { FaBars, FaTimes, FaSearch, FaBell, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useNavigate,Link } from 'react-router-dom';



const categories = [
  {
    category: "male",
    name:'MEN',
  },
  {
    category: "accesories",
    name:'ACCESORIES',
  },
  {
    category: "female",
    name:'WOMEN',
  },
  {
    category: "kids",
    name:'KIDS',
  },
];






const ToggleList = () => {

  const navigate = useNavigate();
    const handleCardClick = (category) => {
    navigate(`/Category/${category}`);
    };


  const [openToggle, setOpenToggle] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const toggleRef = useRef(null); // Reference for toggles container

  const handleToggle = (id) => {
    setOpenToggle((prev) => (prev === id ? null : id)); // Toggle on click
  };

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Close toggle when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!isSmallScreen && openToggle !== null) {
        if (
          toggleRef.current &&
          !toggleRef.current.contains(e.target) && // Click outside the toggles
          !document.querySelector(`.icon[data-id="${openToggle}"]`).contains(e.target) // Exclude click on the icon
        ) {
          setOpenToggle(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openToggle, isSmallScreen]);

  const toggles = [
    { id: 1, title: <FaSearch className='menu-icon' />, content: <SearchPage /> },
    { id: 2, title: <FaBell className='menu-icon' />, content: <NotificationPage /> },
    { id: 3, title: <FaHeart className='menu-icon' />, content: <FavoriteItemPage /> },
    { id: 4, title: <FaShoppingCart className='menu-icon' />, content: <CartPage /> },
    {
      id: 5,
      title: <FaBars />,
      content: (

        // ==============  phones Menu bar ===================
        <nav className='nav-links'>
          {categories.map((category, index) => (

            <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a key={category.category}
                onClick={() => handleCardClick(category.category)}
                tabIndex="0" // Make the div focusable
                role="button" // Indicate this element is interactive
                aria-label={`View details for ${category.category}`}
              >{category.name}</a></li>


            
            </ul>


          ))}

         
        </nav>
      ),
    },
  ];

  return (
    <div className='top-menu-bar'>
      <div className="logo">
      <Link to="/">
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.svg`}
          alt="Logo"
        />
      </Link>
</div>


      {/*             ====== big screen navigation menu*/}
      
      <nav className='menu'>

          {categories.map((category, index) => (

          
          <a key={category.category}
              onClick={() => handleCardClick(category.category)}
              tabIndex="0" // Make the div focusable
              role="button" // Indicate this element is interactive
              aria-label={`View details for ${category.category}`}
            >{category.name}</a>


                ))}

      </nav>

      <div className='blankSpace'></div>
      <div className='icons' ref={toggleRef}>
        {toggles.map((toggle) => (
          <div key={toggle.id} className={`toggle-item ${toggle.id === 5 ? 'humburger' : ''}`}>
            <div
              className='icon'
              data-id={toggle.id} // For identifying the icon
              onClick={() => handleToggle(toggle.id)}
              style={{ color: openToggle === toggle.id ? 'var(--secondary-color)' : 'inherit' }}

            >
              {openToggle === toggle.id && toggle.id === 5 ? (
                <FaTimes />
              ) : (
                toggle.title
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
