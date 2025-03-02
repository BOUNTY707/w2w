import React from "react";
import AppLayout from "./layouts";
import "../src/App.css";
import "../src/assets/fonts/fonts.css";
import { LanguageProvider } from "./translation/context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <AppLayout />
    </LanguageProvider>
  );
}