import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/ProductCardPage.css';
import './styles/grobal.css';
import './styles/ProductDetails.css';
import { useLanguage } from './context/LanguageContext';

const products = [
  {
    id: 1,
    name: 'Pen Art on White Tee',
    price: 15.00,
    image: `${process.env.PUBLIC_URL}/images/6.png`,
  },
  {
    id: 2,
    name: 'King of Clubs',
    price: 15.00,
    image: `${process.env.PUBLIC_URL}/images/10.jpg`,
  },
  {
    id: 3,
    name: 'Queen of clubs(Color)',
    price: 15.00,
    image: `${process.env.PUBLIC_URL}/images/13.jpg`,
  },
  {
    id: 4,
    name: 'I am King',
    price: 15.00,
    image: `${process.env.PUBLIC_URL}/images/11.jpg`,
  },
  {
    id: 5,
    name: 'Gta PK',
    price: 15.00,
    image: `${process.env.PUBLIC_URL}/images/14.jpg`,
  },
];

 function ProductCardsPage  ()  {
  const { language } = useLanguage();
  const title = {
    en: "Shop Our Collection",
    kn: "Gura Icyegeranyo Cyacu",
    fr: "Magasinez notre collection",
    sw: "Nunua Mkusanyiko Wetu"
  };

  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };


  return (
    <div className="product-cards-page">
      <h1 className="page-title">{title[language]}</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleCardClick(product.id)}

            tabIndex="0" 
            role="button" 
            aria-label={`View details for ${product.name}`}
            
          >
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCardsPage;
