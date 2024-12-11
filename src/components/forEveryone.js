import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/forEveryone.css';
import './styles/grobal.css';

const categories = [
  {
      title: 'Shop / Men',
    image: `${process.env.PUBLIC_URL}/images/m1.jpg`,
    category: "male",
  },
  {
    title: 'Shop / Accessories',
    image: `${process.env.PUBLIC_URL}/images/a1.jpg`,
    category: "accesories",
  },
  {
    title: 'Shop / Women',
    image: `${process.env.PUBLIC_URL}/images/f1.jpg`,
    category: "female",
  },
  {
    title: 'Shop / Kids',
    image: `${process.env.PUBLIC_URL}/images/k1.jpg`,
    category: "kids",
  },
];


function ShopCategories  ()  {
  
  const navigate = useNavigate();

  const handleCardClick = (category) => {
    navigate(`/Category/${category}`);
  };

  return (
    <div className="shop-container">
            <h2>SOMETHING FOR EVERYONE</h2>
            <div className="shop-grid">
              {categories.map((category, index) => (
                <div className="shop-item" 
                key={category.category}
                onClick={() => handleCardClick(category.category)}
                tabIndex="0" // Make the div focusable
                role="button" // Indicate this element is interactive
                aria-label={`View details for ${category.category}`}

                
                >
                  <img src={category.image} alt={category.title} />
                  
                  <p>{category.title}</p>
                </div>))}
            </div>
    </div>
  );
};

export default ShopCategories;
