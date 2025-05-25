import React, { useContext, useEffect, useRef, useState } from "react";
import IMask from "imask";
import { LanguageContext } from "../../translation/context/LanguageContext";
import "./index.style.scss";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import arrowRight from "../../assets/images/arrow-right.svg";
import formLogo from "../../assets/images/offer-logo.png";
import siteAxios from "../../utils/siteAxios";
import { ToastContainer, toast } from "react-toastify";

export default function ContactSection() {
  const { translations } = useContext(LanguageContext);
  const [loading, setLoading] = useState(false);
  const phoneRef = useRef(null);

  useEffect(() => {
    let mask;
    if (phoneRef.current) {
      mask = IMask(phoneRef.current, {
        mask: "+000 (00) 000-00-00",
      });
    }

    return () => {
      if (mask) {
        mask.destroy();
      }
    };
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const data = {
        phone: e.target.phone.value,
        datas: {
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        },
      };

      const response = await siteAxios.post("/order", data);
      if (response.status === 200 || response.status === 201) {
        e.target.reset();
        toast("Order sent successfully!");
      } else {
        throw new Error("Failed to submit the form");
      }
    } catch (error) {
      toast(error?.response?.data?.message || "Error occurred, please try again!");
    }

    setLoading(false);
  }

  return (
    <div className="contact" id="contact">
      <ToastContainer />
      <div className="container">
        <div className="contact_block">
          <h2
            className="title"
            data-aos="fade-down"
            dangerouslySetInnerHTML={{
              __html: translations["contact.title"]
                .replaceAll("{", "<span>")
                .replaceAll("}", "</span>"),
            }}
          ></h2>

          <form onSubmit={onSubmit} data-aos="fade-up">
            <div className="form_groups">
              <div className="form_group">
                <div className="inp_group">
                  <input
                    required
                    name="name"
                    type="text"
                    id="name"
                    placeholder={translations["form.name1"] || "Name*"}
                  />
                </div>
                <div className="inp_group">
                  <input
                    required
                    name="phone"
                    type="text"
                    id="phone"
                    placeholder={translations["form.phone1"] || "Phone*"}
                    ref={phoneRef}
                  />
                </div>
              </div>
                <div className="inp_group">
                  <input
                    required
                    name="email"
                    type="text"
                    id="email"
                    placeholder={translations["form.email"] || "Email*"}
                  />
                </div>

              <div className="inp_group">
                <textarea
                  required
                  name="message"
                  id="message"
                  placeholder={translations["form.message"] || "Your Message"}
                ></textarea>
              </div>

              <div className="form_bottom">
                <button className="form_btn" disabled={loading}>
                  {loading && <AiOutlineLoading3Quarters className="loading" />}
                  {translations["form.btn"] || "Send"}
                  <img src={arrowRight} alt="arrowRight" loading="lazy" />
                </button>
                <p
                  dangerouslySetInnerHTML={{
                    __html: translations["form.privacy"]
                      .replaceAll("{", "<span>")
                      .replaceAll("}", "</span>"),
                  }}
                ></p>
              </div>
            </div>

            <img className="form_logo" src={formLogo} alt="formLogo" loading="lazy" />
          </form>
        </div>
      </div>
    </div>
  );
}
