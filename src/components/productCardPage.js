import React from 'react';
import ProductCard from './productCard';
import './styles/ProductCardPage.css';
import './styles/grobal.css';


const ProductCardsPage = () => {
  const products = [
    {
      id: 1,
      name: 'Classic Denim Jacket',
      price: 79.99,
      image: `${process.env.PUBLIC_URL}/images/6.jpg`,
    },
    {
      id: 2,
      name: 'Vintage Blue Jeans',
      price: 59.99,
      image: `${process.env.PUBLIC_URL}/images/10.jpg`,
    },
    {
      id: 3,
      name: 'Cotton Crew Neck T-Shirt',
      price: 25.99,
      image: `${process.env.PUBLIC_URL}/images/13.jpg`,
    },
    {
      id: 4,
      name: 'Leather Belt',
      price: 35.99,
      image: `${process.env.PUBLIC_URL}/images/11.jpg`,
    },
    {
        id: 5,
        name: 'Summer Beinie',
        price: 35.99,
        image: `${process.env.PUBLIC_URL}/images/14.jpg`,
      },
  ];

  return (
    <div className="product-cards-page">
      <h1 className="page-title">Shop Our Collection</h1>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCardsPage;
