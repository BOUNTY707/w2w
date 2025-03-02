import React, { useContext } from "react";
import { LanguageContext } from "../../../translation/context/LanguageContext";

// Images
import logo from "../../../assets/images/logo.svg";
import instagram from "../../../assets/images/instagram.svg";
import telegram from "../../../assets/images/telegram.svg";
import facebook from "../../../assets/images/facebook.svg";
import gmail from "../../../assets/images/gmail.svg";
import phone from "../../../assets/images/phone.svg";
import copyright from "../../../assets/images/copyright.svg";

export default function Footer() {
  const { translations } = useContext(LanguageContext);
  return (
    <footer>
      <div className="container">
        <div className="footer_block">
          <div
            className="footer_info"
            data-aos="zoom-in"
            data-aos-duration="600"
          >
            <a href="index.html" className="ftr_logo">
              <img src={logo} alt="" />
              W2W
            </a>
            <p>
              {translations["footer.desc"]}
            </p>
            <div className="social_links">
              <b>{translations["footer.social"]}</b>
              <div className="social_link">
                <a href="#!">
                  <img src={instagram} alt="" />
                </a>
                <a href="#!">
                  <img src={telegram} alt="" />
                </a>
                <a href="#!">
                  <img src={facebook} alt="" />
                </a>
              </div>
            </div>
          </div>

          <ul
            className="footer_links"
            data-aos="zoom-in"
            data-aos-duration="750"
          >
            <li>
              <a href="#home">{translations["footer.home"]}</a>
            </li>
            <li>
              <a href="#about">{translations["footer.about"]}</a>
            </li>
            <li>
              <a href="#portfolio">{translations["footer.portfolio"]}</a>
            </li>
            <li>
              <a href="#contact">{translations["footer.contact"]}</a>
            </li>
            <li>
              <a href="#testimonials">{translations["footer.testimonials"]}</a>
            </li>
          </ul>

          <div
            className="footer_contact"
            data-aos="zoom-in"
            data-aos-duration="900"
          >
            <a href="mailto:info@w2w.uz" className="ftr_link">
              <img src={gmail} alt="" />
              info@w2w.uz
            </a>
            <a href="tel:+998955353555" className="ftr_link ftr_phone">
              <img src={phone} alt="" />
              +998955353555
            </a>
            <a href="#!" className="ftr_link">
              <img src={copyright} alt="" />
              {translations["footer.copyRight"]}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
