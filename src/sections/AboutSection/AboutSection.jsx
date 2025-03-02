import React, { useContext, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { LanguageContext } from "../../translation/context/LanguageContext";
// images
import avatar from "../../assets/images/avatar.svg";
import plus from "../../assets/images/plus.svg";
import videoWork from "../../assets/videos/work-video.mp4";

export default function AboutSection() {
  const { translations } = useContext(LanguageContext);

  // Vide play
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false); // Video tugaganda play icon qayta chiqadi
  };

  return (
    <div className="about" id="about">
      <div className="container">
        <div className="about_block">
          <div className="top">
            <h2 className="main_title title" data-aos="fade-right">
              {translations["about.title"]}
            </h2>
            <p data-aos="fade-left">
              {translations["about.desc"]}
            </p>
          </div>

          <div className="about_cards">
            <div className="card" data-aos="fade-right">
              <div className="texts">
                <b>13+</b>
                <span>{translations["about.teammates"]}</span>
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

            <div className="about_video" data-aos="fade-left">
              <div className="video">
                <video ref={videoRef} onEnded={handleVideoEnd}>
                  <source src={videoWork} type="video/mp4" />
                </video>
              </div>
              <button className="play_btn" onClick={handlePlayPause}>
                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
