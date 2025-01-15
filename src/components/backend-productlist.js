import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

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

  return (
    <div className="product-list-container">
      <h1>Product List</h1>
      {error && <p className="error">{error}</p>}
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image_url}
              alt={product.name}
              className="product-image"
            />
            <div className="product-name">{product.name}</div>
            <div className="product-price">{product.price}</div>
            <div className="product-description">{product.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
