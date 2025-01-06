import React, { createContext, useState, useContext } from "react";

// Create Context
const LanguageContext = createContext();

// Language options
const languages = {
  en: "English",
  fr: "French",
  sw: "Swahili",
  kn: "Kinyarwanda"
};

// Create Provider Component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Default language: English

  // Function to toggle language
  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom Hook to use the Language Context
export const useLanguage = () => {
  return useContext(LanguageContext);
};
