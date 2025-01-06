import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage, languages } = useLanguage();

  return (
    <div style={{ padding: "10px", textAlign: "center" }}>
      <p>Current Language: {languages[language]}</p>
      <button onClick={() => toggleLanguage("en")}>English</button>
      <button onClick={() => toggleLanguage("es")}>Spanish</button>
      <button onClick={() => toggleLanguage("fr")}>French</button>
    </div>
  );
};

export default LanguageToggle;
