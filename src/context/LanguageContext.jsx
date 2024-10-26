import { createContext, useContext, useState } from 'react';

// Create a Language Context
const LanguageContext = createContext();

// Custom hook to use the LanguageContext
export const useLanguage = () => {
  return useContext(LanguageContext);
};

// Language Provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language is English

  const toggleLanguage = (lang) => {
    setLanguage(lang); // Set the language to the selected option
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};