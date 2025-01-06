import React, { useState } from "react";
import "./styles/Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { useLanguage } from "./context/LanguageContext";
const Controls = () => {
    const [theme, setTheme] = useState("light");
    const { language, toggleLanguage, languages } = useLanguage(); // Using Language Context
  
    // Theme Toggle Handler
    const toggleTheme = () => {
      const newTheme = theme === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newTheme);
      setTheme(newTheme);
    };
    return (
<div className="footer-controls">
<div className="language-toggle">
  <label htmlFor="language">Language:</label>
  <select
    id="language"
    value={language}
    onChange={(e) => toggleLanguage(e.target.value)}
    className="language-select"
  >
    {Object.entries(languages).map(([code, label]) => (
      <option key={code} value={code}>
        {label}
      </option>
    ))}
  </select>
</div>

<div className="theme-button">
  <label htmlFor="theme">Theme:</label>
  <button onClick={toggleTheme}>
    Switch to {theme === "light" ? "Dark" : "Light"} Theme
  </button>
</div>
</div>
)
}

export default  Controls;