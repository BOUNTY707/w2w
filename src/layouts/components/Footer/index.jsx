import React from "react";

// Images
import logo from "../../../assets/images/logo.svg";
import instagram from "../../../assets/images/instagram.svg";
import telegram from "../../../assets/images/telegram.svg";
import facebook from "../../../assets/images/facebook.svg";
import gmail from "../../../assets/images/gmail.svg";
import phone from "../../../assets/images/phone.svg";
import copyright from "../../../assets/images/copyright.svg";

export default function Footer() {
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum{" "}
            </p>
            <div className="social_links">
              <b>Social media:</b>
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
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
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
              Copy right W2W
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
