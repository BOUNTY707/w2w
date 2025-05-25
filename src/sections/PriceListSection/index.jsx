import React, { useContext } from "react";
import { LanguageContext } from "../../translation/context/LanguageContext";
import "./index.style.scss";

export default function PriceListSections() {
<<<<<<< HEAD
  const { translations = {} } = useContext(LanguageContext);

  const title = translations["price.title"]?.replaceAll("{", "<span>").replaceAll("}", "</span>");
  const desc = translations["price.desc"];
  const btnText = translations["price.btn"];
=======
  const { translations } = useContext(LanguageContext);
>>>>>>> 3ef29a325898de486c047745c63e83177dfede6a

  return (
    <div className="price" id="price">
      <div className="container">
        <div className="block">
          <div className="price_info">
<<<<<<< HEAD
            <h3 
              className="price_title" 
              data-aos="fade-up" 
              dangerouslySetInnerHTML={{ __html: title }} 
            />
            <p className="price_text" data-aos="fade-up">{desc}</p>
            <a href="#contact" className="price_btn" data-aos="fade-up">{btnText}</a>
=======
            <h3 className="price_title" data-aos="fade-up" dangerouslySetInnerHTML={{
                __html: translations["price.title"].replaceAll("{","<span>").replaceAll("}","</span>")
                }}>
            </h3>
            <p className="price_text" data-aos="fade-up">{translations["price.desc"]}</p>
            <a href="#contact" className="price_btn" data-aos="fade-up">{translations["price.btn"]}</a>
>>>>>>> 3ef29a325898de486c047745c63e83177dfede6a
          </div>
        </div>
      </div>
    </div>
  );
}
<<<<<<< HEAD




=======
>>>>>>> 3ef29a325898de486c047745c63e83177dfede6a
