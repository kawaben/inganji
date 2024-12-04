import React from 'react';

import './App.css';
import ToggleList from './components/TopMenuBar';
import Parallax  from './components/body';
import AsSeenOnYou from './components/asSeenOnYou';


function App() {
  return (
    <div>
      
      <ToggleList/>
      <Parallax/>
      
      <AsSeenOnYou/>
      
    </div>
  );
}

export default App;
