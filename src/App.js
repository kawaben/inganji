import React from 'react';

import './App.css';
import ToggleList from './components/TopMenuBar';
import Parallax  from './components/body';
import AsSeenOnYou from './components/asSeenOnYou';
import Footer from './components/Footer'


function App() {
  return (
    <div>
      
      <ToggleList/>
      <Parallax/>
      
      <AsSeenOnYou/>
      <Footer/>
      
    </div>
  );
}

export default App;
