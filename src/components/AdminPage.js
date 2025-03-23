import React from "react";
import './styles/grobal.css';
import ProductImages from "./Display";
import ProductList from "./ProductList";
import ImageUpload from "./ImageUpload";
import BackendProductList from "./backend-productlist";
import NewProductCard from "./test"
function AdminPage() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>ADMINSTRATION</h1>
      <p>Welcome, Admin! Manage your application here.</p>
      
      <ProductImages />
      <ProductList />
    <ImageUpload />
    <BackendProductList />
   
    </div>
  );
}

export default AdminPage;
