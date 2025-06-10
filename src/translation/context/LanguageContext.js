import { createContext, useState, useEffect } from "react";
import en from "../en.json";
import ru from "../ru.json";
import uz from "../uz.json"; 

export const LanguageContext = createContext();

const languages = { en, ru, uz };

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem("lang") || "en");

  const [translations, setTranslations] = useState(languages[language] || en);

  useEffect(() => {
    localStorage.setItem("lang", language);
    setTranslations(languages[language] || en);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};
