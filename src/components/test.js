import React, { useState, useEffect } from "react";
import axios from "axios";
import './styles/NewProductCard.css';

const NewProductCard = ({ product }) => {
  // State to manage selected color and images
  const [selectedColor, setSelectedColor] = useState(product.colors[0]); // Default to the first color

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="product-card">
      <img
        src={selectedColor.images[0]}  // Display the first image of the selected color
        alt={product.name}
        className="product-image"
      />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price}</p>
      {product.original_price && (
        <p className="product-original-price">
          <strike>${product.original_price}</strike>
        </p>
      )}
      <div className="color-options">
        {product.colors.map((color, index) => (
          <button
            key={index}
            className="color-button"
            style={{ backgroundColor: color.color_code }}
            onClick={() => handleColorChange(color)}
          >
            {color.color_name}
          </button>
        ))}
      </div>
      <div className="hover-images">
        {selectedColor.hover_images.map((hoverImage, index) => (
          <img
            key={index}
            src={hoverImage}
            alt={`hover-image-${index}`}
            className="hover-image"
          />
        ))}
      </div>
    </div>
  );
};

export default NewProductCard;
