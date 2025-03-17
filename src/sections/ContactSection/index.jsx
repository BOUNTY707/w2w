import React, { useContext, useEffect, useRef } from "react";
import IMask from "imask";
import { LanguageContext } from "../../translation/context/LanguageContext";
import "./index.style.scss";

import arrowRight from "../../assets/images/arrow-right.svg";
import formLogo from "../../assets/images/offer-logo.png";

export default function ContactSection() {
  const { translations } = useContext(LanguageContext);

  const phoneRef = useRef(null);

  useEffect(() => {
    if (phoneRef.current) {
      IMask(phoneRef.current, {
        mask: "+000 (00) 000-00-00",
      });
    }
  }, []);

  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="contact_block">
          <h2 className="title" data-aos="fade-down" dangerouslySetInnerHTML={{
              __html: translations["contact.title"].replaceAll("{","<span>").replaceAll("}","</span>")
            }}>
          </h2>
          <form action="" data-aos="fade-up">
            <div className="form_groups">
              <div className="form_group">
                <div className="inp_group">
                  <input type="text" id="name" placeholder={translations["form.name"]} />
                </div>
                <div className="inp_group">
                  <input type="text" placeholder={translations["form.phone"]} id="phone" ref={phoneRef} />
                </div>
              </div>
              <div className="inp_group">
                <textarea
                  id="message"
                  placeholder={translations["form.message"]}
                ></textarea>
              </div>
              <div className="form_bottom">
                <button className="form_btn">
                  {translations["form.btn"]} 
                  <img src={arrowRight} alt="arrowRight" />
                </button>
                <p dangerouslySetInnerHTML={{
                  __html: translations["form.privacy"].replaceAll("{","<span>").replaceAll("}","</span>")
                }}></p>
              </div>
            </div>

            <img className="form_logo" src={formLogo} alt="formLogo" />
          </form>
        </div>
      </div>
    </div>
  );
}
