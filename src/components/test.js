import React, { useState } from 'react';
import './styles/grobal.css';

const Themeb = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.style.setProperty('--primary-color', '#e74c3c');
      document.documentElement.style.setProperty('--background-color', '#2c3e50');
      document.documentElement.style.setProperty('--text-color', '#ecf0f1');
      setTheme('dark');
    } else {
      document.documentElement.style.setProperty('--primary-color', '#3498db');
      document.documentElement.style.setProperty('--background-color', '#ffffff');
      document.documentElement.style.setProperty('--text-color', '#333333');
      setTheme('light');
    }
  };

  return (
    <div>
      <h1>Theming Example</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Themeb;
