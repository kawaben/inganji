// Import necessary dependencies
import React, { useEffect,useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsCategory from "./product"; // Import the product data
import Footer from "./Footer";
import Controls from "./controls";
import ToggleList from './TopMenuBar';
import "./styles/ProductGrid.css";
import "./styles/ProductCard.css";

import { useLanguage } from "./context/LanguageContext";


const text = {
  en: { 
    available: "Available Today", 
    pickUp:"Items may be available for pickup.", 
    pickUpLink:"Find Nearby Store", 
    filter:"Filters", 
    size:"Size", 
    button:"Add To Bag",
    button2:"Added To Bag",  
    itemadded:"Item Is added to bag!",  
  },

  fr: { 
    available: "Disponible aujourd'hui", 
    pickUp:"Les articles peuvent être disponibles pour le ramassage.", 
    pickUpLink:"Trouver un magasin à proximité", 
    filter:"Filtres", size:"Taille", 
    button:"Ajouter au panier", 
    button2:"Ajouté au panier",
    itemadded:"L'article est ajouté au panier!",
  },
  sw: { 
    available: "Inapatikana Leo", 
    pickUp:"Bidhaa zinaweza kupatikana kwa kuchukuliwa.", 
    pickUpLink:"Pata Duka la Karibu", 
    filter:"Vichujio", 
    size:"Ukubwa", 
    button:"Ongeza kwenye Mfuko", 
    button2:"Imeongezwa kwa Mfuko",
    itemadded:"Bidhaa imeongezwa kwenye begi!",
  },
  kn: { 
    available: "Ibiboneka Uyu munsi", 
    pickUp:"Ibintu birashobora kuboneka kubi twara.", 
    pickUpLink:"Shakisha Iduka rikwegereye", 
    filter:"Muyunguruzi", 
    size:"Ingano", 
    button:"Ongera Kumufuka", 
    button2:"Yongewe Kumufuka",
    itemadded:"Igicuruzwa cyongewe kumufuka!",
  }

};

// ProductCard component
function ProductCard({ product, addToCart }) {

  const { language} = useLanguage(); // Using Language Context

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
          {isAddedToBag ? text[language]?.button2 : text[language]?.button},
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

      {isAddedToBag && <div className="cart-pop-up-message">{text[language]?.itemadded}</div>}

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

 
  const { language} = useLanguage(); // Using Language Context


  
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
      <Controls/>
      <ToggleList/>
      <div className="category">
        <div className="filter-sidebar">
          <h1>{text[language]?.available}</h1>
          <p>
            <span role="img" aria-label="location">📍</span> {text[language]?.pickUp} {" "}
            <a href="#">{text[language]?.pickUpLink}</a>
          </p>
          <h2>{text[language]?.filter}</h2>
          <h3>{text[language]?.size}</h3>
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
