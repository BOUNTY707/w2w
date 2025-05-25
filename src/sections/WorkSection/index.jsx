import React, { useContext } from "react";
import { LanguageContext } from "../../translation/context/LanguageContext";
import "./index.style.scss";

const formatText = (text) => text.replaceAll("{", "<span>").replaceAll("}", "</span>");

export default function WorkSection() {
  const { translations } = useContext(LanguageContext);
  const { "work.title": title, "work.btn": buttonText } = translations;
  return (
    <div className="work">
      <div className="container">
        <div className="block">
          <h2 className="work_title" data-aos="fade-right" dangerouslySetInnerHTML={{ __html: formatText(title) }} />
          
          <a href="#contact" className="work_btn" data-aos="fade-left">
            {buttonText} 
            <svg className="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5L19 12L12 19" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
