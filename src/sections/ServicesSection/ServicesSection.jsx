import React from "react";

// Images
import servicesIcon1 from "../../assets/images/services-icon1.svg";
import servicesIcon2 from "../../assets/images/services-icon2.svg";
import servicesIcon3 from "../../assets/images/services-icon3.svg";
import servicesIcon4 from "../../assets/images/services-icon4.svg";
import servicesIcon5 from "../../assets/images/services-icon5.svg";
import servicesIcon6 from "../../assets/images/services-icon6.svg";
import servicesIcon7 from "../../assets/images/services-icon7.svg";
import servicesIcon8 from "../../assets/images/services-icon8.svg";

export default function ServicesSection() {
  return (
    <div className="services" id="services">
      <div className="container">
        <div className="block">
          <h2
            className="main_title title"
            data-aos="zoom-out"
            data-aos-duration="600"
          >
            <span>Servic</span>es
          </h2>

          <div className="cards_wrap">
            <div className="cards">
              <a
                href="#!"
                className="card"
                data-aos="zoom-in"
                data-aos-duration="600"
              >
                <h4>CRM Systems</h4>
                <img src={servicesIcon1} alt="" />
              </a>
              <a
                href="#!"
                className="card"
                data-aos="zoom-in"
                data-aos-duration="700"
              >
                <h4>Branding</h4>
                <img src={servicesIcon2} alt="" />
              </a>
              <a
                href="#!"
                className="card"
                data-aos="zoom-in"
                data-aos-duration="800"
              >
                <h4>AI</h4>
                <img src={servicesIcon3} alt="" />
              </a>
            </div>
            <div className="cards">
              <a
                href="#!"
                className="card"
                data-aos="zoom-in"
                data-aos-duration="600"
              >
                <h4>Smart House</h4>
                <img src={servicesIcon4} alt="" />
              </a>
              <a
                href="#!"
                className="card"
                data-aos="zoom-in"
                data-aos-duration="700"
              >
                <h4>Hardware Supply</h4>
                <img src={servicesIcon5} alt="" />
              </a>
              <a
                href="#!"
                className="card"
                data-aos="zoom-in"
                data-aos-duration="800"
              >
                <h4>Web Development</h4>
                <img src={servicesIcon6} alt="" />
              </a>
            </div>
            <div className="cards">
              <a
                href="#!"
                className="card"
                data-aos="zoom-in"
                data-aos-duration="600"
              >
                <h4>UX/UI</h4>
                <img src={servicesIcon7} alt="" />
              </a>
              <a
                href="#!"
                className="card"
                data-aos="zoom-in"
                data-aos-duration="800"
              >
                <h4>Mobile Apps</h4>
                <img src={servicesIcon8} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
