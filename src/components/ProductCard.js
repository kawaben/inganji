import React from "react";
import "./styles/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="productcard">
      <img src={product.image} alt={product.name} />
      <div className="prod-color-selector">
          <div
            className="prod-color-circle"
            style={{ backgroundColor: '#ffa500' }}
          ></div>
          <div
            className="prod-color-circle"
            style={{ backgroundColor: '#008000' }}
          ></div>
          <div
            className="prod-color-circle"
            style={{ backgroundColor: '#0000ff' }}
          ></div>
          <div
            className="prod-color-circle"
            style={{ backgroundColor: '#aaa' }}
          ></div>
        </div>
      <h4 className="prod-name">{product.name}</h4>
      <div className="prod-rating">⭐ {product.rating}</div>
      <p className="prod-price">
        ${Array.isArray(product.price) ? product.price.join(" - $") : product.price} 
        <span className="original-price">
          {Array.isArray(product.originalPrice)
            ? `$${product.originalPrice.join(" - $")}`
            : `$${product.originalPrice}`}
        </span>
      </p>
     
    </div>
  );
};

export default ProductCard;
