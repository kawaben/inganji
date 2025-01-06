import React, { createContext, useState, useContext } from "react";

// Create the Language Context
const LanguageContext = createContext();

// Define language options
const languages = {
  en: "English",
  fr: "French",
  sw: "Swahili",
  kn: "Kinyarwanda",
};

// Provider Component
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Default language: English

  // Function to update the selected language
  const toggleLanguage = (lang) => {
    if (languages[lang]) {
      setLanguage(lang);
    } else {
      console.warn(`Language "${lang}" is not supported.`);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom Hook to consume the Language Context
const useLanguage = () => useContext(LanguageContext);

export { LanguageProvider, useLanguage };
