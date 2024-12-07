import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductCardsPage from '../components/productCardPage';
import ProductDetails from '../components/ProductDetails';

function AppRoutes() {
  return (
    
      <Routes>
        <Route path="/" element={<ProductCardsPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        
      </Routes>
    
  );
}

export default AppRoutes;
