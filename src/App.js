import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import './components/styles/grobal.css';
import './App.css';
import ToggleList from './components/TopMenuBar';
import Parallax from './components/body';
import AsSeenOnYou from './components/asSeenOnYou';
import Footer from './components/Footer';
import HelpButton from './components/help';
import AppRoutes from './routes/route';
import FirstParallax from './components/firstPallarax'


import ProductList from './components/ProductList'






function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const location = useLocation(); // Hook to get the current location

  // Check if the current route is the homepage or other static routes
  const isHomePage = location.pathname === '/';

  return (
    <div>
      {/* Render static components only on the homepage */}
      {isHomePage && (
        <>
          <ToggleList />
          <FirstParallax/>
          
         
        </>
      )}
      {/* Render dynamic routes */}
      <AppRoutes />
      {isHomePage && (
        <>
        <Parallax />
          <AsSeenOnYou />
          <Footer />
          <HelpButton />
          <ProductList/>
        </>
      )}
    </div>
  );
}

export default App;
