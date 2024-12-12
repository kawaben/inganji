// Import necessary dependencies
import React, { useEffect,useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsCategory from "./product"; // Import the product data
import Footer from "./Footer";
import ToggleList from './TopMenuBar';
import "./styles/ProductGrid.css";
import "./styles/ProductCard.css";



// ProductCard component
function ProductCard({ product, addToCart }) {
  const [currentImage, setCurrentImage] = useState(product.image);
  const [selectedColor, setSelectedColor] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isAddedToBag, setIsAddedToBag] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setCurrentImage(product.images[color]);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (selectedColor && product.hoverImages[selectedColor]) {
      setCurrentImage(product.hoverImages[selectedColor]);
    } else {
      setCurrentImage(product.hoverImage || product.image);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (selectedColor) {
      setCurrentImage(product.images[selectedColor]);
    } else {
      setCurrentImage(product.image);
    }
  };

  const handleAddToBag = () => {
    addToCart(product);
    setIsAddedToBag(true);
    setTimeout(() => setIsAddedToBag(false), 3000); // Reset after 3 seconds
  };

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <div className="productcard">
      <div
        className="prod-image-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={currentImage}
          alt={product.name}
          className="prod-image"
        />
        <button
          className={`prod-hover-button ${isAddedToBag ? "added" : ""}`}
          onClick={handleAddToBag}
          disabled={isAddedToBag}
        >
          {isAddedToBag ? "Added To Bag" : "Add To Bag"}
        </button>
       
        <button
            className={`favorite-icon ${isFavorite ? "favorite" : ""}`}
            onClick={toggleFavorite}
            aria-label="Toggle Favorite"
          >
            ❤
          </button>
       
       



      </div>

      <div className="prod-color-selector">
        {product.images &&
          Object.keys(product.images).map((color) => (
            <div
              key={color}
              className="prod-color-circle"
              style={{ backgroundColor: color }}
              onClick={() => handleColorChange(color)}
            ></div>
          ))}
      </div>

      {isAddedToBag && <div className="cart-pop-up-message">Item Is added to bag!</div>}

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







// ProductGrid component
function ProductGrid({ itemsPerPage = 6, relatedItems = [] }) {
  const { category } = useParams();
  const navigate = useNavigate();
  const products = productsCategory[category] || [];
  const [currentPage, setCurrentPage] = useState(1);
  const [cart, setCart] = useState([]);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log("Cart updated:", cart);
  };

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
    <>

      <ToggleList/>
      <div className="category">
        <div className="filter-sidebar">
          <h1>Available Today</h1>
          <p>
            <span role="img" aria-label="location">📍</span> Items may be available for pickup. {" "}
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
                <ProductCard key={index} product={product} addToCart={addToCart} />
              ))}
            </div>

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
      </div>
      <Footer />
    </>
  );
}







export { ProductCard, ProductGrid };
