import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../translation/context/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";


import portfolioSolohiyat from "../../assets/images/portfolio-solohiyat.png";
import portfolioMit from "../../assets/images/portfolio-mit.png";
import portfolioTopskill from "../../assets/images/portfolio-topskill.png";
import portfolioDors from "../../assets/images/portfolio-dors.png";
import portfolioAdm from "../../assets/images/portfolio-adm.png";
import portfolioNohunt from "../../assets/images/portfolio-nohunt.png";
import portfolioVeneniya from "../../assets/images/portfolio-veneniya.png";
import portfolioKvarenda from "../../assets/images/portfolio-kvarenda.png";
import arrowRight from "../../assets/images/slide-arrow-right.svg";
import arrowLeft from "../../assets/images/slide-arrow-left.svg";


export default function PortfolioSection() {
  const { translations } = useContext(LanguageContext);

  const swiperRef = useRef(null);

  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <div className="info">
          <h2 className="main_title title" data-aos="fade-down">
            <span>{translations["portfolio.title.spn"]}</span>
            {translations["portfolio.title"]}
          </h2>
          <p className="portfolio_text">{translations["portfolio.desc"]} <span>{translations["portfolio.desc.year"]}</span></p>
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
                    <img src={portfolioVeneniya} alt="" />
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
