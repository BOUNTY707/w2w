import React, { useContext } from "react";
import { LanguageContext } from "../../translation/context/LanguageContext";

// Images
import servicesIcon1 from "../../assets/images/services-icon1.svg";
import servicesIcon2 from "../../assets/images/services-icon2.svg";
import servicesIcon3 from "../../assets/images/services-icon3.svg";
import servicesIcon4 from "../../assets/images/services-icon4.svg";
import servicesIcon5 from "../../assets/images/services-icon5.svg";
import servicesIcon6 from "../../assets/images/services-icon6.svg";
import servicesIcon7 from "../../assets/images/services-icon7.svg";
import servicesIcon8 from "../../assets/images/services-icon8.svg";

export default function ServicesSection() {
  const { translations } = useContext(LanguageContext);

  return (
    <div className="services" id="services">
      <div className="container">
        <div className="block">
          <h2
            className="main_title title"
            data-aos="zoom-out"
          >
            <span>{translations["serv.title.spn"]}</span>{translations["serv.title"]}
          </h2>

          <div className="cards_wrap">
            <div className="cards">
              <a
                href="#!"
                className="card"
                data-aos="zoom-in"
              >
                <h4>{translations["serv.card.system"]}</h4>
                <img src={servicesIcon1} alt="" />
              </a>
              <a
                href="#!"
                className="card"
                data-aos="zoom-in"
              >
                <h4>{translations["serv.card.brand"]}</h4>
                <img src={servicesIcon2} alt="" />
              </a>
              <a
                href="#!"
                className="card"
                data-aos="zoom-in"
              >
                <h4>{translations["serv.card.ai"]}</h4>
                <img src={servicesIcon3} alt="" />
              </a>
            </div>
            <div className="cards">
              <a
                href="#!"
                className="card"
                data-aos="zoom-in"
              >
                <h4>{translations["serv.card.smart"]}</h4>
                <img src={servicesIcon4} alt="" />
              </a>
              <a
                href="#!"
                className="card"
                data-aos="zoom-in"
              >
                <h4>{translations["serv.card.hardware"]}</h4>
                <img src={servicesIcon5} alt="" />
              </a>
              <a
                href="#!"
                className="card"
                data-aos="zoom-in"
              >
                <h4>{translations["serv.card.web"]}</h4>
                <img src={servicesIcon6} alt="" />
              </a>
            </div>
            <div className="cards">
              <a
                href="#!"
                className="card"
                data-aos="zoom-in"
              >
                <h4>{translations["serv.card.ux"]}</h4>
                <img src={servicesIcon7} alt="" />
              </a>
              <a
                href="#!"
                className="card"
                data-aos="zoom-in"
              >
                <h4>{translations["serv.card.app"]}</h4>
                <img src={servicesIcon8} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
