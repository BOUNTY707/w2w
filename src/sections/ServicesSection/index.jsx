import React, { useContext } from "react";
import { LanguageContext } from "../../translation/context/LanguageContext";
import "./index.style.scss";

// Images
import arrowLeft from "../../assets/images/arrow-left.svg";
import clarityArrow from "../../assets/images/clarity_arrow-line2.svg";

const getTranslatedText = (key, translations) => 
  translations[key].replaceAll("{", "<span>").replaceAll("}", "</span>");

export default function ServicesSection() {
  const { translations } = useContext(LanguageContext);

  return (
    <div className="services" id="services">
      <div className="container">
        <div className="block">
          <h2 
            className="main_title title" 
            data-aos="zoom-out" 
            dangerouslySetInnerHTML={{ __html: getTranslatedText("serv.title", translations) }}
          />
          
          <div className="services_info" data-aos="zoom-out">
            <div className="info">
              <h2 
                dangerouslySetInnerHTML={{ __html: getTranslatedText("serv.info.title", translations) }}
              />
              
              <div className="link">
                <a className="services_btn" href="#contact">
                  {translations["serv.info.btn"] || "Let’s start your project"}
                </a>
                <img src={arrowLeft} alt="Arrow" loading="lazy" />
              </div>
            </div>
            
            <a href="#!" className="clarity_arrow">
              <img src={clarityArrow} alt="Clarity Arrow" loading="lazy" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}