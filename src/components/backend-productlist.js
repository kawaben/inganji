import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  // Fetching product data
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/allproducts");
        setProducts(response.data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Error fetching products. Please try again later.");
      }
    };

    fetchProducts();
  }, []);

  // Handle changing of color for a product
  const handleColorChange = (product, color) => {
    product.selectedColor = color;
    setProducts([...products]);
  };

  return (
    <div className="product-list-container">
      <h1>Product List</h1>
      {error && <p className="error">{error}</p>}
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            {/* Display the image based on selected color */}
            <img
              src={product.selectedColor ? product.selectedColor.images[0] : product.image_url}
              alt={product.name}
              className="product-image"
            />
            <div className="product-name">{product.name}</div>
            <div className="product-price">${product.price}</div>
            <div className="product-description">{product.description}</div>

            {/* Color selection buttons */}
            <div className="color-options">
              {product.colors && product.colors.map((color, index) => (
                <button
                  key={index}
                  className="color-button"
                  style={{ backgroundColor: color.color_code }}
                  onClick={() => handleColorChange(product, color)}
                >
                  {color.color_name}
                </button>
              ))}
            </div>

            {/* Display hover images if available */}
            <div className="hover-images">
              {product.selectedColor &&
                product.selectedColor.hover_images &&
                product.selectedColor.hover_images.map((hoverImage, index) => (
                  <img
                    key={index}
                    src={hoverImage}
                    alt={`hover-image-${index}`}
                    className="hover-image"
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
