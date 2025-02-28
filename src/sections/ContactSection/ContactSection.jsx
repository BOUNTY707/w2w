import React, { useEffect, useRef } from "react";
import IMask from "imask";

export default function ContactSection() {
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
          <h2 className="title" data-aos="fade-down" data-aos-duration="600">
            Contact to us
          </h2>
          <form action="" data-aos="fade-up" data-aos-duration="600">
            <div className="form_groups">
              <div className="form_group">
                <div className="inp_group">
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name..."
                  />
                </div>
                <div className="inp_group">
                  <label htmlFor="phone">Phone number</label>
                  <input
                    type="text"
                    placeholder="+998 (88) 800-50-66"
                    id="phone"
                    ref={phoneRef} // Reaktdagi ref orqali IMask ulash
                  />
                </div>
              </div>
              <div className="form_group">
                <div className="inp_group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="user@gmail.com" />
                </div>
                <div className="inp_group">
                  <label htmlFor="company">Your company</label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Enter your name..."
                  />
                </div>
              </div>
            </div>
            <div className="inp_group">
              <label htmlFor="message">Message for us</label>
              <textarea
                id="message"
                placeholder="Enter the message..."
              ></textarea>
            </div>
            <button className="form_btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
