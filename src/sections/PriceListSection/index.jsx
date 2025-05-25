import React, { useContext } from "react";
import { LanguageContext } from "../../translation/context/LanguageContext";
import "./index.style.scss";

export default function PriceListSections() {
  const { translations = {} } = useContext(LanguageContext);

  const title = translations["price.title"]?.replaceAll("{", "<span>").replaceAll("}", "</span>");
  const desc = translations["price.desc"];
  const btnText = translations["price.btn"];

  return (
    <div className="price" id="price">
      <div className="container">
        <div className="block">
          <div className="price_info">
            <h3 
              className="price_title" 
              data-aos="fade-up" 
              dangerouslySetInnerHTML={{ __html: title }} 
            />
            <p className="price_text" data-aos="fade-up">{desc}</p>
            <a href="#contact" className="price_btn" data-aos="fade-up">{btnText}</a>
          </div>
        </div>
      </div>
    </div>
  );
}




