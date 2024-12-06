import React from 'react';

import './components/styles/grobal.css';
import './App.css';
import ToggleList from './components/TopMenuBar';
import Parallax  from './components/body';
import AsSeenOnYou from './components/asSeenOnYou';
import Footer from './components/Footer'
import HelpButton from './components/help'



function App() {

  return (
    <div>
      
      <ToggleList/>
      <Parallax/>
      
      <AsSeenOnYou/>
      <Footer/>
      <HelpButton/>
      
    </div>
  );
}

export default App;
