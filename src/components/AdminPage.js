import React from "react";
import './styles/grobal.css';
import ProductImages from "./Display";
import ProductList from "./ProductList";
import ImageUpload from "./ImageUpload";

function AdminPage() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Admin Page</h1>
      <p>Welcome, Admin! Manage your application here.</p>
      {/* Add admin features and functionality here */}
      <ProductImages />
      <ProductList />
    <ImageUpload />
    </div>
  );
}

export default AdminPage;
