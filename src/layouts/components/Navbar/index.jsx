import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

// Images
import logo from "../../../assets/images/logo.svg";
import bars from "../../../assets/images/bars.png";
import close from "../../../assets/images/close.png";
import lightModeIcon from "../../../assets/images/mode-light.png";
import darkModeIcon from "../../../assets/images/dark-mode.webp";

export default function Navbar() {
  // Menu state
  const [headIsActive, setHeadIsActive] = useState(false);
  const toggleMenu = () => {
    setHeadIsActive(!headIsActive);
  };

  // Dark mode
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Body ga "no-scroll" class qo‘shish va olib tashlash
  useEffect(() => {
    if (headIsActive) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [headIsActive]);

  // Language state
  const [langIsActive, setLangIsActive] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");

  const toggleLanguage = () => {
    setLangIsActive(!langIsActive);
  };
  const changeLanguage = (lang) => {
    setSelectedLang(lang); 
    setLangIsActive(false);
  };

  return (
    <header className={headIsActive ? "header active" : "header"}>
      <div className="container">
        <div
          className="head_block"
          data-aos="fade-down"
          data-aos-duration="600"
        >
          <div className="navs">
            <a href="index.html" className="logo">
              <img src={logo} alt="" /> <span>W2W</span>
            </a>

            <div className="links">
              <a href="#home">Home</a>
              <a href="#about">About us</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#contact">Contact</a>
              <a href="#testimonials">Testimonials</a>
            </div>
          </div>

          <div className="head_contact">
            <button className="mode" onClick={() => setDarkMode(!darkMode)}>
              <img src={darkMode ? lightModeIcon : darkModeIcon} alt="Theme Toggle" />
            </button>
            <a href="tel:+998955353555" className="phone">
              +998 95 535 35 55
            </a>
            <div className="language_wrap">
              <a href="#!" className="language" onClick={toggleLanguage}>
                {selectedLang}
              </a>

              <div className={`tabs ${langIsActive ? "active" : ""}`}>
                <button className={`tab ${selectedLang === "EN" ? "active" : ""}`} onClick={() => changeLanguage("EN")}>
                  EN
                </button>
                <button className={`tab ${selectedLang === "RU" ? "active" : ""}`} onClick={() => changeLanguage("RU")}>
                  RU
                </button>
                <button className={`tab ${selectedLang === "UZ" ? "active" : ""}`} onClick={() => changeLanguage("UZ")}>
                  UZ
                </button>
              </div>
            </div>

            <button className={`bars ${headIsActive ? "active" : ""}`} onClick={toggleMenu}>
              <FontAwesomeIcon icon={headIsActive ? faTimes : faBars} />
            </button>
          </div>
        </div>
      </div>

      <div className={`header_mob ${headIsActive ? "active" : ""}`}>
        <div className="mob_links">
          <a href="#home" className="mob_link" onClick={() => setHeadIsActive(false)}>Home</a>
          <a href="#about" className="mob_link" onClick={() => setHeadIsActive(false)}>About us</a>
          <a href="#portfolio" className="mob_link" onClick={() => setHeadIsActive(false)}>Portfolio</a>
          <a href="#contact" className="mob_link" onClick={() => setHeadIsActive(false)}>Contact</a>
          <a href="#testimonials" className="mob_link" onClick={() => setHeadIsActive(false)}>Testimonials</a>
        </div>
        <a href="tel:+998955353555" className="phone">+998 95 535 35 55</a>
      </div>
    </header>
  );
}
