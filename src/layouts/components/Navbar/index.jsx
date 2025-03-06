import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { LanguageContext } from "../../../translation/context/LanguageContext";

// Images
import logo from "../../../assets/images/logo.svg";
import lightModeIcon from "../../../assets/images/mode-light.png";
import darkModeIcon from "../../../assets/images/dark-mode.webp";

export default function Navbar() {
  const { language, setLanguage, translations } = useContext(LanguageContext);

  // Menu state
  const [headIsActive, setHeadIsActive] = useState(false);
  const toggleMenu = () => {
    setHeadIsActive(!headIsActive);
  };

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

  // Language state
  const [langIsActive, setLangIsActive] = useState(false);

  const toggleLanguage = () => {
    setLangIsActive(!langIsActive);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
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
              <a href="#home">{translations["nav.link.home"]}</a>
              <a href="#about">{translations["nav.link.about"]}</a>
              <a href="#portfolio">{translations["nav.link.portfolio"]}</a>
              <a href="#contact">{translations["nav.link.contact"]}</a>
              <a href="#testimonials">
                {translations["nav.link.testimonials"]}
              </a>
            </div>
          </div>

          <div className="head_contact">
            <button className="mode" onClick={() => setDarkMode(!darkMode)}>
              <img
                src={darkMode ? lightModeIcon : darkModeIcon}
                alt="Theme Toggle"
              />
            </button>
            <a href="tel:+998955353555" className="phone">
              +998 95 535 35 55
            </a>

            <div className="language_wrap">
              <button className="language">
                {language === "en" ? "EN" : "RU"}
              </button>

              <div className="tabs">
                <button
                  className={`tab ${language === "en" ? "active" : ""}`}
                  onClick={() => changeLanguage("en")}
                >
                  EN
                </button>
                <button
                  className={`tab ${language === "ru" ? "active" : ""}`}
                  onClick={() => changeLanguage("ru")}
                >
                  RU
                </button>
              </div>
            </div>

            <button
              className={`bars ${headIsActive ? "active" : ""}`}
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={headIsActive ? faTimes : faBars} />
            </button>
          </div>
        </div>
      </div>

      <div className={`header_mob ${headIsActive ? "active" : ""}`}>
        <div className="mob_links">
          <a
            href="#home"
            className="mob_link"
            onClick={() => setHeadIsActive(false)}
          >
            {translations["nav.link.home"]}
          </a>
          <a
            href="#about"
            className="mob_link"
            onClick={() => setHeadIsActive(false)}
          >
            {translations["nav.link.about"]}
          </a>
          <a
            href="#portfolio"
            className="mob_link"
            onClick={() => setHeadIsActive(false)}
          >
            {translations["nav.link.portfolio"]}
          </a>
          <a
            href="#contact"
            className="mob_link"
            onClick={() => setHeadIsActive(false)}
          >
            {translations["nav.link.contact"]}
          </a>
          <a
            href="#testimonials"
            className="mob_link"
            onClick={() => setHeadIsActive(false)}
          >
            {translations["nav.link.testimonials"]}
          </a>
        </div>
        <a href="tel:+998955353555" className="phone">
          +998 95 535 35 55
        </a>
      </div>
    </header>
  );
}
