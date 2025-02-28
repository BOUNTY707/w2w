import React from "react";
//images
import avatar from "../../assets/images/avatar.svg";
import plus from "../../assets/images/plus.svg";
import play from "../../assets/images/play.svg";

export default function AboutSection() {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="about_block">
          <div className="top">
            <h2
              className="main_title title"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              About <span>us</span>
            </h2>
            <p data-aos="fade-left" data-aos-duration="600">
              At WIN TO WIN, our goal is to drive technological growth <br />{" "}
              and innovation across Central Asia. As a leading IT outsourcing{" "}
              <br /> company, we are committed to delivering cutting-edge
              solutions <br /> that empower businesses and transform industries.
            </p>
          </div>

          <div className="about_cards">
            <div className="card" data-aos="fade-right" data-aos-duration="600">
              <div className="texts">
                <b>13+</b>
                <span>Teammates</span>
              </div>

              <div className="team">
                <div className="team_imgs">
                  <a href="#!">
                    <img src={avatar} alt="" />
                  </a>
                  <a href="#!">
                    <img src={avatar} alt="" />
                  </a>
                  <a href="#!">
                    <img src={avatar} alt="" />
                  </a>
                  <a href="#!">
                    <img src={avatar} alt="" />
                  </a>
                </div>
                <button className="team_btn">
                  <img src={plus} alt="" />
                </button>
              </div>
            </div>

            <div
              className="about_video"
              data-aos="fade-left"
              data-aos-duration="600"
            >
              <div className="video">
                <h3>HOW WE WORK</h3>
              </div>
              <button className="play_btn">
                <svg width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32.2499 14.1472C33.1304 14.6155 33.867 15.3145 34.3806 16.1693C34.8942 17.0242 35.1656 18.0027 35.1656 19C35.1656 19.9973 34.8942 20.9759 34.3806 21.8307C33.867 22.6856 33.1304 23.3846 32.2499 23.8529L8.76121 36.6257C4.97904 38.6827 0.333374 36.006 0.333374 31.7747V6.2272C0.333374 1.9922 4.97904 -0.682632 8.76121 1.37253L32.2499 14.1472Z" fill="#5C5D5F"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
