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
import logo from "../../assets/images/logo.svg";
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
              spaceBetween={30}
              loop={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                300: { slidesPerView: 1 },
                776: { slidesPerView: 1.5 },
                991: { slidesPerView: 1.7 },
                1200: { slidesPerView: 2 },
              }}
              className="testimonialSlide"
            >
              {[
                {
                  name: translations["testim.card_name"],
                  position: translations["testim.card_work"],
                  title: translations["testim.card_title"],
                  text: translations["testim.card_desc"],
                  img: reviewsImg,
                },
                {
                  name: translations["testim.card_name"],
                  position: translations["testim.card_work"],
                  title: translations["testim.card_title"],
                  text: translations["testim.card_desc"],
                  img: reviewsImg2,
                },
                {
                  name: translations["testim.card_name"],
                  position: translations["testim.card_work"],
                  title: translations["testim.card_title"],
                  text: translations["testim.card_desc"],
                  img: reviewsImg,
                },
                {
                  name: translations["testim.card_name"],
                  position: translations["testim.card_work"],
                  title: translations["testim.card_title"],
                  text: translations["testim.card_desc"],
                  img: reviewsImg2,
                },
              ].map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="slide_card">
                    <a href="#!" className="slide_img">
                      <img src={item.img} alt={item.name} />
                      <div className="overlay">
                        <img src={logo} alt="Logo"  className="logo" />

                        <div className="card_name">
                          <b>{item.name}</b>
                          <span>COO of W2W</span>
                        </div>
                      </div>
                    </a>
                    <div className="slide_info">
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-prev">
              <img src={arrowLeft} alt="Previous" />
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next">
              <img src={arrowRight} alt="Next" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
