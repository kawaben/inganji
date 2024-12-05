import React from 'react';
import './styles/forEveryone.css';
import './styles/grobal.css';

const ShopCategories = () => {
  const categories = [
    {
        title: 'Shop / Men',
      image: `${process.env.PUBLIC_URL}/images/4.jpg`,
    },
    {
      title: 'Shop / Accessories',
      image: `${process.env.PUBLIC_URL}/images/5.jpg`,
    },
    {
      title: 'Shop / Women',
      image: `${process.env.PUBLIC_URL}/images/6.jpg`,
    },
    {
      title: 'Shop / Kids',
      image: `${process.env.PUBLIC_URL}/images/7.jpg`,
    },
  ];

  return (
    <div className="shop-container">
      <h2>SOMETHING FOR EVERYONE</h2>
      <div className="shop-grid">
        {categories.map((category, index) => (
          <div className="shop-item" key={index}>
            <img src={category.image} alt={category.title} />
            
            <p>{category.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCategories;
