import React, { useState } from "react";

import "./styles/ProductGrid.css";
import "./styles/ProductCard.css";


function ProductCard({ product }) {
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
}

function  ProductGrid ({ products, itemsPerPage }) {
 

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);


  return (
    <div className="category">

        <div className="filter-sidebar">
            <h1>Available Today</h1>
            <p>
            <span role="img" aria-label="location">📍</span> Items may be available for pickup. 
            <a href="#">Find Nearby Store</a>
            </p>
            <h2>Size</h2>

            <h3>Waist</h3>
            <div className="size-options">
                {["23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"].map((size) => (
                <div className="size-option" key={size}>{size}</div>
                ))}
            </div>

            <h3>Lenght</h3>
            <div className="size-options">
                {["23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"].map((size) => (
                <div className="size-option" key={size}>{size}</div>
                ))}
            </div>
            <h3>Bottom</h3>
            <div className="size-options">
                {["23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"].map((size) => (
                <div className="size-option" key={size}>{size}</div>
                ))}
            </div>

            
        </div>


        <div className="product-grid">
    
                  <div className="product-grid-images">
                      {currentProducts.map((product, index) => (<ProductCard key={index} product={product} />))}
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

         
    </div>

    
    
  );
}




export default ProductGrid;
