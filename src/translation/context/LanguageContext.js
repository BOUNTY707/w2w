import { createContext, useState, useEffect } from "react";
import en from "../en.json";
import ru from "../ru.json";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem("lang") || "en");
  const [translations, setTranslations] = useState(language === "en" ? en : ru);

  useEffect(() => {
    localStorage.setItem("lang", language);
    setTranslations(language === "en" ? en : ru);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};
