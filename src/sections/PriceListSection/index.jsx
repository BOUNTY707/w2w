import React, { useContext } from "react";
import { LanguageContext } from "../../translation/context/LanguageContext";
import "./index.style.scss";

export default function PriceListSections() {
  const { translations } = useContext(LanguageContext);

  return (
    <div className="price" id="price">
      <div className="container">
        <div className="block">
          <div className="price_info">
            <h3 className="price_title" data-aos="fade-up" dangerouslySetInnerHTML={{
                __html: translations["price.title"].replaceAll("{","<span>").replaceAll("}","</span>")
                }}>
            </h3>
            <p className="price_text" data-aos="fade-up">{translations["price.desc"]}</p>
            <a href="#contact" className="price_btn" data-aos="fade-up">{translations["price.btn"]}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
