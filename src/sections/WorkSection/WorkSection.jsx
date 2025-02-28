import React from "react";

// Images
import arrowRightBlack from "../../assets/images/arrow-right-black.svg";


export default function WorkSection() {
  return (
    <div className="work">
      <div className="container">
        <div className="block">
          <h2
            className="work_title"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            Let’s <span>start working!</span>
          </h2>
          <a href="#!" className="work_btn" data-aos="fade-left" data-aos-duration="600" >
            Get Started 
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5L19 12L12 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
