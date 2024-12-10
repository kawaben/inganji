import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductCardsPage from '../components/productCardPage';
import ProductDetails from '../components/ProductDetails';
import ProductGrid from '../components/ProductGrid';

import products from "../components/product";

function AppRoutes() {
  return (
    
      <Routes>
        <Route path="/" element={<ProductCardsPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/ProductGrid" element={<ProductGrid  products={products} itemsPerPage={6} />} />
      </Routes>
    
  );
}

export default AppRoutes;
