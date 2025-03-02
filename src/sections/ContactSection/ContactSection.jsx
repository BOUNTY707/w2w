import React, { useContext, useEffect, useRef } from "react";
import IMask from "imask";
import { LanguageContext } from "../../translation/context/LanguageContext";

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
          <h2 className="title" data-aos="fade-down">
            {translations["contact.title"]}
          </h2>
          <form action="" data-aos="fade-up">
            <div className="form_groups">
              <div className="form_group">
                <div className="inp_group">
                  <label htmlFor="name">{translations["form.name"]}</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name..."
                  />
                </div>
                <div className="inp_group">
                  <label htmlFor="phone">{translations["form.phone"]}</label>
                  <input
                    type="text"
                    placeholder="+998 (88) 800-50-66"
                    id="phone"
                    ref={phoneRef} 
                  />
                </div>
              </div>
              <div className="form_group">
                <div className="inp_group">
                  <label htmlFor="email">{translations["form.email"]}</label>
                  <input type="email" id="email" placeholder="user@gmail.com" />
                </div>
                <div className="inp_group">
                  <label htmlFor="company">{translations["form.company"]}</label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Enter your name..."
                  />
                </div>
              </div>
            </div>
            <div className="inp_group">
              <label htmlFor="message">{translations["form.message"]}</label>
              <textarea
                id="message"
                placeholder="Enter the message..."
              ></textarea>
            </div>
            <button className="form_btn">{translations["form.btn"]}</button>
          </form>
        </div>
      </div>
    </div>
  );
}
