import React, { useContext } from "react";
import { LanguageContext } from "../../../translation/context/LanguageContext";

// Images
import logo from "../../../assets/images/logo.svg";
import instagram from "../../../assets/images/instagram.svg";
import youtube from "../../../assets/images/youtube.svg";
import linkedin from "../../../assets/images/linkedin.svg";
import youtube from "../../../assets/images/youtube.svg";
import linkedin from "../../../assets/images/linkedin.svg";
import facebook from "../../../assets/images/facebook.svg";
import "./index.style.scss";
import "./index.style.scss";

export default function Footer() {
  const { translations } = useContext(LanguageContext);
  return (
    <footer>
      <div className="container">
        <div className="footer_block" data-aos="fade-up">
          <p>{translations["footer.desc"]}</p>
          <a href="/" className="ftr_logo">
            <img src={logo} alt="" />
            W2W
          </a>
          <div className="social_links">
            <b>{translations["footer.social"]}</b>
            <div className="social_link">
              <a href="https://www.instagram.com/w2w.uz" target="_blank">
                <img src={instagram} alt="" />
              </a>
              <a href="#!" target="_blank">
                <img src={facebook} alt="" />
              </a>
              <a href="#!" target="_blank">
                <img src={youtube} alt="" />
              </a>
              <a href="https://www.linkedin.com/company/win2wingroup/" target="_blank">
                <img src={linkedin} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
