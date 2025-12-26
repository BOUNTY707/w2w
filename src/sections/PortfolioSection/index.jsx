import React, { useContext, useRef, useEffect } from "react";
import { LanguageContext } from "../../translation/context/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./index.style.scss";

// Images
import arrowRight from "../../assets/images/arrow-right-white.svg";
import arrowLeft from "../../assets/images/arrow-left-white.svg";
import dots from "../../assets/images/dote.svg";
import siteMenu from "../../assets/images/site-menu.svg";
import vectorLeft from "../../assets/images/vector-left.svg";
import vectorRight from "../../assets/images/vector-right.svg";
import security from "../../assets/images/security.svg";
import lock from "../../assets/images/lock.svg";
import refresh from "../../assets/images/refresh.svg";
import share from "../../assets/images/share.svg";
import sitePlus from "../../assets/images/site_plus.svg";
import copy from "../../assets/images/copy.svg";

export default function PortfolioSection() {
  const { translations } = useContext(LanguageContext);

  const swiperRef = useRef(null);
  const siteNameRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    const updateSiteName = () => {
      setTimeout(() => {
        const activeSlide = document.querySelector(".swiper-slide-active");
        if (activeSlide) {
          const iframe = activeSlide.querySelector("iframe");
          if (iframe && siteNameRef.current) {
            siteNameRef.current.textContent = iframe.title; 
          }
        }
      }, 30);
    };

    swiperRef.current.on("slideChangeTransitionEnd", updateSiteName);
    updateSiteName();

    return () => {
      swiperRef.current.off("slideChangeTransitionEnd", updateSiteName);
    };
  }, []);

  const copyToClipboard = () => {
    if (siteNameRef.current) {
      navigator.clipboard.writeText(siteNameRef.current.textContent);
    }
  };

  const refreshIframe = () => {
    const activeSlide = document.querySelector(".swiper-slide-active");
    if (activeSlide) {
      const iframe = activeSlide.querySelector("iframe");
      if (iframe) {
        iframe.src = iframe.src; // Reload iframe
      }
    }
  };

  const openInNewTab = () => {
    const activeSlide = document.querySelector(".swiper-slide-active");
    if (activeSlide) {
      const iframe = activeSlide.querySelector("iframe");
      if (iframe && iframe.src) {
        window.open(iframe.src, "_blank");
      }
    }
  };


  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <div className="info">
          <h2
            className="main_title title"
            data-aos="fade-down"
            dangerouslySetInnerHTML={{
              __html: translations["portfolio.title"]
                .replaceAll("{", "<span>")
                .replaceAll("}", "</span>"),
            }}
          ></h2>
          <p
            className="portfolio_text"
            dangerouslySetInnerHTML={{
              __html: translations["portfolio.desc"]
                .replaceAll("{", "<span>")
                .replaceAll("}", "</span>"),
            }}
          ></p>
        </div>

        <div className="slider">
          <div className="slider_head">
            <div className="left">
              <div className="dots_btn" aria-label="Open menu">
                <img src={dots} alt="Menu dots" loading="lazy" />
              </div>
              <button
                className="siteMenu_btn"
                aria-label="Site menu"
                role="button"
              >
                <img src={siteMenu} alt="Site menu icon" loading="lazy" />
              </button>
              <div className="slider_arrows">
                <button
                  className="arrow-left swiper-btn-prev"
                  aria-label="Previous slide"
                >
                  <img src={vectorLeft} alt="Previous slide" loading="lazy" />
                </button>
                <button
                  className="arrow-right swiper-btn-next"
                  aria-label="Next slide"
                >
                  <img src={vectorRight} alt="Next slide" loading="lazy" />
                </button>
              </div>
              <button
                className="secuty_btn"
                aria-label="Security options"
                role="button"
              >
                <img src={security} alt="Security icon" loading="lazy" />
              </button>

              <div className="slider_name">
                <div className="site_name">
                  <img className="lock" src={lock} alt="Lock icon" loading="lazy" />
                  <span ref={siteNameRef}>adm.uz</span>
                </div>
                <button
                  className="refresh"
                  onClick={refreshIframe}
                  aria-label="Refresh site"
                >
                  <img src={refresh} alt="Refresh site" loading="lazy" />
                </button>
              </div>
            </div>

            <div className="right">
              <button
                className="share"
                onClick={openInNewTab}
                aria-label="Open in new tab"
              >
                <img src={share} alt="Share site" loading="lazy" />
              </button>
              <button className="plus" aria-label="Add to collection">
                <img src={sitePlus} alt="Add to collection" loading="lazy" />
              </button>
              <button
                className="copy"
                onClick={copyToClipboard}
                aria-label="Copy site name"
              >
                <img src={copy} alt="Copy site name" loading="lazy" />
              </button>
            </div>
          </div>

          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Navigation, Pagination, EffectFade]}
            slidesPerView={1}
            spaceBetween={0}
            effect="fade"
            loop={true}
            navigation={{
              nextEl: ".swiper-btn-next",
              prevEl: ".swiper-btn-prev",
            }}
            pagination={{ clickable: true }}
            className="portfolioSlide"
          >
            <SwiperSlide>
              <div className="slide_card">
                <iframe
                  src="https://adm.uz/"
                  title="adm.uz"
                  className="site_iframe"
                  loading="lazy"
                ></iframe>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_card">
                <iframe
                  src="https://edumasterevent.uz"
                  title="edumasterevent.uz"
                  className="site_iframe"
                  loading="lazy"
                ></iframe>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_card">
                <iframe
                  src="https://www.thedoors.uz/"
                  title="thedoors.uz"
                  className="site_iframe"
                  loading="lazy"
                ></iframe>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_card">
                <iframe
                  src="https://ujlinks.uz"
                  title="ujlinks.uz"
                  className="site_iframe"
                  loading="lazy"
                ></iframe>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_card">
                <iframe
                  src="https://online.alisherisaev.uz/"
                  title="online.alisherisaev.uz"
                  className="site_iframe"
                  loading="lazy"
                ></iframe>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_card">
                <iframe
                  src="https://www.topskill.uz/"
                  title="topskill.uz"
                  className="site_iframe"
                  loading="lazy"
                ></iframe>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next swiper-btn-next">
            <img src={arrowRight} alt="Next" loading="lazy" />
          </div>
          <div className="swiper-button-prev swiper-btn-prev">
            <img src={arrowLeft} alt="Previous" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
}