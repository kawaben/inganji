import React from 'react';

import './App.css';
import ToggleList from './components/TopMenuBar';
import Parallax  from './components/body';
import ShopCategories from './components/forEveryone';

function App() {
  return (
    <div>
      
      <ToggleList/>
      <Parallax/>
      <ShopCategories/>
      
    </div>
  );
}

export default App;
