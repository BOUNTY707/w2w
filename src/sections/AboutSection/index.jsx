import React, { useContext, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { LanguageContext } from "../../translation/context/LanguageContext";
import "./index.style.scss";
// images
import avatarFazliddin from "../../assets/images/avatar-fazliddin.jpg";
import avatarNuriddin from "../../assets/images/avatar-nuriddin.jpg";
import avatarIbrokhim from "../../assets/images/avatar-ibrohim.jpg";
import avatarAzamat from "../../assets/images/avatar-azamat.jpg";
import avatarJavohir from "../../assets/images/avatar-javohir.jpg";
import avatarSulton from "../../assets/images/avatar-sulton.jpg";
import avatarOyimtillo from "../../assets/images/avatar-oyimtillo.jpg";
import avatarZilola from "../../assets/images/avatar-zilola.jpg";
import avatarMoxira from "../../assets/images/avatar-moxira.jpg";
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
    setIsPlaying(false); 
  };

  // Avatar add and remove
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleTeamVisibility = () => {
    setIsExpanded(!isExpanded);
  };


  const images = [
    avatarJavohir, avatarNuriddin, avatarFazliddin, avatarOyimtillo,
    avatarIbrokhim, avatarZilola, avatarAzamat, avatarMoxira, avatarSulton
  ]


  return (
    <div className="about" id="about">
      <div className="container">
        <div className="about_block">
          <div className="top">
            <h2 className="main_title title" data-aos="fade-right" dangerouslySetInnerHTML={{
                __html: translations["about.title"].replaceAll("{","<span>").replaceAll("}","</span>")
                }}>
            </h2>
            <p data-aos="fade-left"
              dangerouslySetInnerHTML={{
                __html: translations["about.desc"].replaceAll("{","<span>").replaceAll("}","</span>")
              }}>
            </p>
          </div>

          <div className="about_cards">
            <div className="card" data-aos="fade-right">
              <div className="texts">
                <b>13+</b>
                <span>{translations["about.teammates"]}</span>
              </div>

              <div className="team">
                <motion.div className="team_imgs"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                >
                  {[...images, ...images, ...images].map((img, index) => (
                    <a href="#!" key={index}>
                      <img src={img} alt="productive" />
                    </a>
                  ))}
                </motion.div>
                <motion.div className="team_imgs"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                >
                  {[...images, ...images, ...images].map((img, index) => (
                    <a href="#!" key={index}>
                      <img src={img} alt="productive" />
                    </a>
                  ))}
                </motion.div>
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
