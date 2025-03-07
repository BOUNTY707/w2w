import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { LanguageContext } from "../../translation/context/LanguageContext";


// Images
import productiveImg1 from "../../assets/images/productive_img1.svg";
import productiveImg2 from "../../assets/images/productive_img2.svg";
import productiveImg3 from "../../assets/images/productive_img3.svg";
import productiveImg4 from "../../assets/images/productive_img4.svg";
import productiveImg5 from "../../assets/images/productive_img5.svg";
import productiveImg6 from "../../assets/images/productive_img6.svg";

export default function ProductiveSection() {
    const { translations } = useContext(LanguageContext);
  
  return (
    <div className="productive">
      <div className="container">
        <div className="block">
          <div className="info">
            <h2 className="title" data-aos="fade-up" dangerouslySetInnerHTML={{
              __html: translations["productive.title"].replaceAll("{","<span>").replaceAll("}","</span>")
            }}>
              
            </h2>
            <p className="text" data-aos="fade-up">
              {translations["productive.desc"]}
            </p>
            <a
              href="#contact"
              className="productive_link"
              data-aos="fade-up"
            >
              {translations["productive.btn"]}
            </a>
          </div>

          {/* <div className="slider slider-none">
            <Swiper
              className="productiveSlide"
              direction="vertical"
              slidesPerView={2.8}
              spaceBetween={90}
              loop={true}
              speed={4000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              breakpoints={{
                300: { spaceBetween: 50 },
                576: { spaceBetween: 90 },
              }}
              modules={[Autoplay]}
              data-aos="fade-left"
            >
              {[productiveImg1, productiveImg2, productiveImg3, productiveImg4, productiveImg5, productiveImg6].map(
                (img, index) => (
                  <SwiperSlide key={index}>
                    <div className="productive_img">
                      <img src={img} alt="" />
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>

            <Swiper
              className="productiveSlide2"
              slidesPerView={2.8}
              spaceBetween={90}
              loop={true}
              speed={4000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              breakpoints={{
                300: { spaceBetween: 50 },
                576: { spaceBetween: 90 },
              }}
              modules={[Autoplay]}
              data-aos="fade-up"
            >
              {[productiveImg1, productiveImg2, productiveImg3, productiveImg4, productiveImg5, productiveImg6].map(
                (img, index) => (
                  <SwiperSlide key={index}>
                    <div className="productive_img">
                      <img src={img} alt="" />
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div> */}
        </div>
      </div>
    </div>
  );
}
