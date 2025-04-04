import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsCategory from "./product"; // Import the product data
import Footer from './Footer'
import "./styles/ProductGrid.css";
import "./styles/ProductCard.css";

const ProductCard = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(product.image);

  

  const handleColorChange = (color) => {
    setCurrentImage(product.images[color]);
  };

  return (
    <div className="productcard">
      <div className="prod-image-container">
        <img src={currentImage} alt={product.name} />
        <button className="prod-hover-button">View Details</button>
      </div>
      <div className="prod-color-selector">

      {product.images ? Object.keys(product.images).map((color) => (
          <div
            key={color}
            className="prod-color-circle"
            style={{ backgroundColor: color }}
            onClick={() => handleColorChange(color)}
          ></div>
        )) : null}

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






function ProductGrid({ itemsPerPage = 6 }) {
  const { category } = useParams();
  const navigate = useNavigate();

  // Use imported productsCategory
  const products = productsCategory[category] || [];

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  if (!products.length) {
    return (
      <div className="product-not-found">
        <p>Sorry, this category is not yet available.</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    
        <div className="category">
          <div className="filter-sidebar">
            <h1>Available Today</h1>
            <p>
              <span role="img" aria-label="location">📍</span> Items may be available for pickup.{" "}
              <a href="#">Find Nearby Store</a>
            </p>
            <h2>Filters</h2>
            <h3>Size</h3>
            <div className="size-options">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <div className="size-option" key={size}>{size}</div>
              ))}
            </div>
          </div>
          <div className="grid-container">   
            <div className="product-grid">
              <div className="product-grid-images">
                {currentProducts.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>

              {/* Pagination Controls */}
              <div className="Pagination-Control">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`pagination-button ${currentPage === page ? "active" : ""}`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>

            <Footer/>
          </div>
        </div>
        
    
    
  );

  
}



export default ProductGrid;
