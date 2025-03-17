import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../translation/context/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./index.style.scss"


import portfolioSolohiyat from "../../assets/images/portfolio-solohiyat.png";
import portfolioMit from "../../assets/images/portfolio-mit.png";
import portfolioTopskill from "../../assets/images/portfolio-topskill.png";
import portfolioDors from "../../assets/images/portfolio-dors.png";
import portfolioAdm from "../../assets/images/portfolio-adm.png";
import portfolioNohunt from "../../assets/images/portfolio-nohunt.png";
import portfolioUybaza from "../../assets/images/portfolio-uybaza.png";
import portfolioKvarenda from "../../assets/images/portfolio-kvarenda.png";
import arrowRight from "../../assets/images/arrow-right-white.svg";
import arrowLeft from "../../assets/images/arrow-left-white.svg";


export default function PortfolioSection() {
  const { translations } = useContext(LanguageContext);

  const swiperRef = useRef(null);

  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <div className="info">
          <h2 className="main_title title" data-aos="fade-down" dangerouslySetInnerHTML={{
             __html: translations["portfolio.title"].replaceAll("{","<span>").replaceAll("}","</span>")
            }}>
          </h2>
          <p className="portfolio_text" dangerouslySetInnerHTML={{
              __html: translations["portfolio.desc"].replaceAll("{","<span>").replaceAll("}","</span>")
            }}>
          </p>
        </div>
        <div className="slider" data-aos="fade-up">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Navigation, Pagination, EffectFade]}
              slidesPerView={1}
              spaceBetween={0}
              effect="fade"
              loop={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{ clickable: true }}
              className="portfolioSlide"
            >
              <SwiperSlide>
                <div className="slide_card">
                  <a href="#!" className="slide_img">
                    <img src={portfolioSolohiyat} alt="" />
                    {/* <iframe src="https://w2w.uz" frameborder="0"></iframe> */}
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide_card">
                  <a href="#!" className="slide_img">
                    <img src={portfolioMit} alt="" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide_card">
                  <a href="#!" className="slide_img">
                    <img src={portfolioTopskill} alt="" />
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="slide_card">
                  <a href="#!" className="slide_img">
                    <img src={portfolioDors} alt="" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide_card">
                  <a href="#!" className="slide_img">
                    <img src={portfolioAdm} alt="" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide_card">
                  <a href="#!" className="slide_img">
                    <img src={portfolioNohunt} alt="" />
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="slide_card">
                  <a href="#!" className="slide_img">
                    <img src={portfolioUybaza} alt="" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide_card">
                  <a href="#!" className="slide_img">
                    <img src={portfolioKvarenda} alt="" />
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next">
              <img src={arrowRight} alt="Next" />
            </div>
            <div className="swiper-button-prev">
              <img src={arrowLeft} alt="Previous" />
            </div>
          </div>
      </div>
    </div>
  );
}
