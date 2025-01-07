import React, { useState } from "react";
import "./styles/toggles.css";
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
      {/* Language Selector */}
      <div className="language-toggle">
        <label htmlFor="language"></label>
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


      {/* Checkbox Toggle for Theme */}
      <div className="toggle">
        <div className="toggle-wrapper">
          <input
            id="toggle-checkbox"
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <div className="toggle-container">
            <div className="toggle-button">
              <div className="toggle-button-circles-container">
                {Array.from({ length: 12 }).map((_, idx) => (
                  <div key={idx} className="toggle-button-circle"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controls;
