import React, { useState, useEffect  } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Images
import portfolioImg1 from "../../assets/images/portfolio-img1.png";
import portfolioImg2 from "../../assets/images/portfolio-img2.png";
import portfolioImg3 from "../../assets/images/portfolio-img3.png";

export default function PortfolioSection() {
  // More card function
  const [showAll, setShowAll] = useState(false);
  
  // Aos Js
  useEffect(() => {
    AOS.init({ duration: 600, once: true }); // AOS-ni boshlash
  }, []);

  const handleShowMore = () => {
    setShowAll(true);
    setTimeout(() => AOS.refresh(), 100); // Animatsiyalarni yangilash
  };


  const images = [portfolioImg1, portfolioImg2, portfolioImg3, portfolioImg1, portfolioImg2, portfolioImg3, portfolioImg1, portfolioImg2, portfolioImg3];

  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="main_title title" data-aos="fade-down" data-aos-duration="600">
          <span>Port</span>folio
        </h2>
        <div className="block">
          {images.map((img, index) => (
            <a href="#!" key={index} className={`portfolio_img ${index >= 6 && !showAll ? "none" : ""}`} data-aos="fade-up" data-aos-duration={`${600 + (index % 3) * 200}`}>
              <img src={img} alt="" />
            </a>
          ))}
        </div>

        {!showAll && (
          <a href="#!" className="portfolio_more" onClick={handleShowMore} data-aos="fade-up" data-aos-duration="600">
            Get to know more
          </a>
        )}
      </div>
    </div>
  );
}
