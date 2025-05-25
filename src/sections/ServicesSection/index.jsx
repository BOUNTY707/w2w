import React, { useContext } from "react";
import { LanguageContext } from "../../translation/context/LanguageContext";
import "./index.style.scss";

// Images
import arrowLeft from "../../assets/images/arrow-left.svg";
import clarityArrow from "../../assets/images/clarity_arrow-line2.svg";

<<<<<<< HEAD
const getTranslatedText = (key, translations) => 
  translations[key].replaceAll("{", "<span>").replaceAll("}", "</span>");

=======
>>>>>>> 3ef29a325898de486c047745c63e83177dfede6a
export default function ServicesSection() {
  const { translations } = useContext(LanguageContext);

  return (
    <div className="services" id="services">
      <div className="container">
        <div className="block">
<<<<<<< HEAD
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
=======
          <h2 className="main_title title" data-aos="zoom-out" dangerouslySetInnerHTML={{
                __html: translations["serv.title"].replaceAll("{","<span>").replaceAll("}","</span>")
                }}>
          </h2>

          <div className="services_info" data-aos="zoom-out">
            <div className="info">  
              <h2 dangerouslySetInnerHTML={{
                __html: translations["serv.info.title"].replaceAll("{","<span>").replaceAll("}","</span>")
                }}>
              </h2>
              <div className="link">
                <a className="services_btn" href="#contact">Let’s start your project</a>
                <img src={arrowLeft} alt="" />
              </div>
            </div>
            <a href="#!" className="clarity_arrow">
              <img src={clarityArrow} alt=""/>
>>>>>>> 3ef29a325898de486c047745c63e83177dfede6a
            </a>
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 3ef29a325898de486c047745c63e83177dfede6a
