import React from 'react';

import './App.css';
import ToggleList from './components/TopMenuBar';
import Parallax  from './components/body';
import ShopCategories from './components/forEveryone';
import AsSeenOnYou from './components/asSeenOnYou';
import ProductCardsPage from './components/productCardPage'

function App() {
  return (
    <div>
      
      <ToggleList/>
      <Parallax/>
      <ShopCategories/>
      <AsSeenOnYou/>
      <ProductCardsPage/>
    </div>
  );
}

export default App;
