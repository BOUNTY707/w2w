import React, { useContext, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LanguageContext } from "../../translation/context/LanguageContext";


// Images
import testimonialImg from "../../assets/images/person1.webp";
import logo from "../../assets/images/logo.svg";
import uz from "../../assets/images/uz.png";
import arrowRight from "../../assets/images/slide-arrow-right.svg";
import arrowLeft from "../../assets/images/slide-arrow-left.svg";

export default function TestimonialsSection() {
  const { translations } = useContext(LanguageContext);
  
  const swiperRef = useRef(null);

  return (
    <div className="testimonials" id="testimonials">
      <div className="container">
        <div className="block">
          <h2 className="main_title title" data-aos="fade-down"
            dangerouslySetInnerHTML={{
            __html: translations["testim.title"].replaceAll("{","<span>").replaceAll("}","</span>")
            }}>
          </h2>
          <div className="slider" data-aos="fade-up">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Navigation, Pagination]}
              slidesPerView={2}
              spaceBetween={82}
              loop={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                300: { slidesPerView: 1, spaceBetween: 30 },
                776: { slidesPerView: 1.5, spaceBetween: 60 },
                991: { slidesPerView: 1.7, spaceBetween: 60 },
                1200: { slidesPerView: 2, spaceBetween: 82 },
              }}
              className="testimonialSlide"
            >
              {[
                {
                  name: translations["testim.card_name"],
                  position: translations["testim.card_work"],
                  text: translations["testim.card_desc"],
                  img: testimonialImg,
                  country: translations["testim.card_country"],
                  flag: uz,
                },
                {
                  name: translations["testim.card_name"],
                  position: translations["testim.card_work"],
                  text: translations["testim.card_desc"],
                  img: testimonialImg,
                  country: translations["testim.card_country"],
                  flag: uz,
                },
                {
                  name: translations["testim.card_name"],
                  position: translations["testim.card_work"],
                  text: translations["testim.card_desc"],
                  img: testimonialImg,
                  country: translations["testim.card_country"],
                  flag: uz,
                },
                {
                  name: translations["testim.card_name"],
                  position: translations["testim.card_work"],
                  text: translations["testim.card_desc"],
                  img: testimonialImg,
                  country: translations["testim.card_country"],
                  flag: uz,
                },
              ].map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="slide_card">
                    <a href="#!" className="slide_img">
                      <img src={item.img} alt={item.name} />
                    </a>
                    <div className="slide_info">
                      <div className="top">
                        <img src={logo} alt="Logo" />
                        <span>
                          <img src={item.flag} alt={item.country} />{" "}
                          {item.country}
                        </span>
                      </div>
                      <p>{item.text}</p>
                      <div className="bottom">
                        <h4>{item.name}</h4>
                        <b>{item.position}</b>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
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
    </div>
  );
}
