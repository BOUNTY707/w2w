import React from "react";

// Images
import arrowRight from "../../assets/images/arrow-right.svg";
import companyLogo1 from "../../assets/images/company-logo1.svg";
import companyLogo2 from "../../assets/images/company-logo2.svg";
import companyLogo3 from "../../assets/images/company-logo3.svg";
import homeImg from "../../assets/images/home-img2.png";
import analizImg from "../../assets/images/analiz-img.svg";

export default function HomeSection() {
  return (
    <div className="home" id="home">
      <div className="container">
        <div className="home_block">
          <div className="info">
            <div className="title_wrap">
              <h1 className="title" data-aos="fade-up">
                <span>Win to Win</span> solutions with digital transformation
              </h1>
              <a
                href="#!"
                className="home_btn"
                data-aos="fade-up"
              >
                Start your project <img src={arrowRight} alt="" />
              </a>
            </div>

            <div
              className="partners"
              data-aos="fade-up"
            >
              <p>Trusted by the world's biggest brands</p>
              <div className="partners_logo">
                <a href="#!">
                  <img src={companyLogo1} alt="" />
                </a>
                <a href="#!">
                  <img src={companyLogo2} alt="" />
                </a>
                <a href="#!">
                  <img src={companyLogo3} alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className="traffic" data-aos="fade-up">
            <div className="top">
              <div className="home_img">
                <div className="img-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46 12L27 31L17 21L2 36" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M34 12H46V24" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <img src={homeImg}alt="" />
              </div>
              <div className="box">
                <b>20+</b>
                <h4>Major projects</h4>
                <div className="line">
                  <div className="bg"></div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="item_info">
                <p>
                  <span></span> Drive More Traffic and Sales{" "}
                </p>
                <h3>
                  Drive <span>more traffic</span> and product sales{" "}
                </h3>
              </div>
              <img src={analizImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
