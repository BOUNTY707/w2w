import React, { useContext, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LanguageContext } from "../../translation/context/LanguageContext";
import "./index.style.scss";

// Images
import reviewsImg from "../../assets/images/review-img1.png";
import reviewsImg2 from "../../assets/images/review-img2.png";
import reviewsImg3 from "../../assets/images/review-img3.png";
import logo from "../../assets/images/logo.svg";
import arrowRight from "../../assets/images/slide-arrow-right.svg";
import arrowLeft from "../../assets/images/slide-arrow-left.svg";

// Helper function to safely insert HTML
const getTranslatedText = (key, translations) => 
  translations[key].replaceAll("{", "<span>").replaceAll("}", "</span>");

const swiperConfig = {
  modules: [Navigation, Pagination],
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: { clickable: true },
  breakpoints: {
    300: { slidesPerView: 1 },
    776: { slidesPerView: 1.5 },
    991: { slidesPerView: 1.7 },
    1200: { slidesPerView: 2 },
  },
};

export default function TestimonialsSection() {
  const { translations } = useContext(LanguageContext);
  const swiperRef = useRef(null);
  const images = [reviewsImg, reviewsImg2, reviewsImg3];
  
  const { testimCards } = translations;

  return (
    <div className="testimonials" id="testimonials">
      <div className="container">
        <div className="block">
          <h2 className="main_title title" data-aos="fade-down"
            dangerouslySetInnerHTML={{ __html: getTranslatedText("testim.title", translations) }} />
          
          <div className="slider" data-aos="fade-up">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              {...swiperConfig}
              className="testimonialSlide"
            >
              {testimCards.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="slide_card">
                    <a href="#!" className="slide_img">
                      <img src={images[index % images.length]} alt={item.name} loading="lazy" />
                      <div className="overlay">
                        <img src={logo} alt="Logo" className="logo" loading="lazy" />
                        <div className="card_name">
                          <b>{item.name}</b>
                          <span>{item.link}</span>
                        </div>
                      </div>
                    </a>
                    <div className="slide_info">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="swiper-button-prev">
              <img src={arrowLeft} alt="Previous" loading="lazy" />
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next">
              <img src={arrowRight} alt="Next" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}