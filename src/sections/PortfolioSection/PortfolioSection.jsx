import React, { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LanguageContext } from "../../translation/context/LanguageContext";


// Images
import portfolioImg1 from "../../assets/images/portfolio-img1.png";
import portfolioImg2 from "../../assets/images/portfolio-img2.png";
import portfolioImg3 from "../../assets/images/portfolio-img3.png";

export default function PortfolioSection() {
  const { translations } = useContext(LanguageContext);

  // AOS animatsiyalarini boshlash
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const images = [
    portfolioImg1,
    portfolioImg2,
    portfolioImg3,
    portfolioImg1,
    portfolioImg2,
    portfolioImg3,
  ];

  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="main_title title" data-aos="fade-down">
          <span>{translations["portfolio.title.spn"]}</span>
          {translations["portfolio.title"]}
        </h2>
        <div className="block">
          {images.map((img, index) => (
            <a
              href="#!"
              key={index}
              className="portfolio_img"
              data-aos="fade-up"
            >
              <img src={img} alt="" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
