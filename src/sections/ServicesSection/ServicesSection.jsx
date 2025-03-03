import React, { useContext } from "react";
import { LanguageContext } from "../../translation/context/LanguageContext";

// Images
import arrowLeft from "../../assets/images/arrow-left.svg";
import clarityArrow from "../../assets/images/clarity_arrow-line2.svg";

export default function ServicesSection() {
  const { translations } = useContext(LanguageContext);

  return (
    <div className="services" id="services">
      <div className="container">
        <div className="block">
          <h2 className="main_title title" data-aos="zoom-out" >
            <span>{translations["serv.title.spn"]}</span>{translations["serv.title"]}
          </h2>

          <div className="services_info" data-aos="zoom-out">
            <div className="info">
              <h2>{translations["serv.info.title"]} <span>{translations["serv.info.title.spn"]}</span> </h2>
              <div className="link">
                <a className="services_btn" href="#contact">Let’s start your project</a>
                <img src={arrowLeft} alt="" />
              </div>
            </div>
            <a href="#!" className="clarity_arrow">
              <img src={clarityArrow} alt=""/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
