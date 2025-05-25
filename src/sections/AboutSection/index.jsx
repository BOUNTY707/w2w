import React, { useContext, useRef, useState } from "react";
<<<<<<< HEAD
import { motion } from "framer-motion";
=======
>>>>>>> 3ef29a325898de486c047745c63e83177dfede6a
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


<<<<<<< HEAD

export default function AboutSection() {
  const { translations } = useContext(LanguageContext);

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
=======
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
>>>>>>> 3ef29a325898de486c047745c63e83177dfede6a
        setIsPlaying(false);
      }
    }
  };
<<<<<<< HEAD

  const handleVideoEnd = () => setIsPlaying(false);

  const images = useRef([
    avatarJavohir, avatarNuriddin, avatarFazliddin, avatarOyimtillo,
    avatarIbrokhim, avatarZilola, avatarAzamat, avatarMoxira, avatarSulton
  ]).current;
=======
  const handleVideoEnd = () => {
    setIsPlaying(false); 
  };

  // Avatar add and remove
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleTeamVisibility = () => {
    setIsExpanded(!isExpanded);
  };
  
>>>>>>> 3ef29a325898de486c047745c63e83177dfede6a

  return (
    <div className="about" id="about">
      <div className="container">
        <div className="about_block">
          <div className="top">
<<<<<<< HEAD
            <h2
              className="main_title title"
              data-aos="fade-right"
              dangerouslySetInnerHTML={{
                __html: translations["about.title"]
                  .replaceAll("{", "<span>")
                  .replaceAll("}", "</span>")
              }}
            />
            <p
              data-aos="fade-left"
              dangerouslySetInnerHTML={{
                __html: translations["about.desc"]
                  .replaceAll("{", "<span>")
                  .replaceAll("}", "</span>")
              }}
            />
=======
            <h2 className="main_title title" data-aos="fade-right" dangerouslySetInnerHTML={{
                __html: translations["about.title"].replaceAll("{","<span>").replaceAll("}","</span>")
                }}>
            </h2>
            <p data-aos="fade-left"
              dangerouslySetInnerHTML={{
                __html: translations["about.desc"].replaceAll("{","<span>").replaceAll("}","</span>")
              }}>
            </p>
>>>>>>> 3ef29a325898de486c047745c63e83177dfede6a
          </div>

          <div className="about_cards">
            <div className="card" data-aos="fade-right">
              <div className="texts">
                <b>13+</b>
                <span>{translations["about.teammates"]}</span>
              </div>

              <div className="team">
<<<<<<< HEAD
                <motion.div
                  className="team_imgs"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                >
                  {Array(3).fill(images).flat().map((img, index) => (
                    <a href="#!" key={`team-${index}-${img}`}>
                      <img src={img} loading="lazy" alt="productive" />
                    </a>
                  ))}
                </motion.div>
=======
                <div className="team_imgs">
                  {[avatarJavohir, avatarNuriddin, avatarFazliddin, avatarOyimtillo, avatarIbrokhim, avatarZilola, avatarAzamat, avatarMoxira, avatarSulton]
                    .slice(0, isExpanded ? undefined : 4)
                    .map((avatar, index) => (
                      <a href="#!" key={index}>
                        <img src={avatar} alt="" />
                      </a>
                    ))}
                </div>
                  <button className={`team_btn ${isExpanded ? "active" : ""}`} onClick={toggleTeamVisibility}>
                    <span className="plus">+</span>
                    <span className="minus">−</span>
                  </button>
>>>>>>> 3ef29a325898de486c047745c63e83177dfede6a
              </div>
            </div>

            <div className="about_video" data-aos="fade-left">
              <div className="video">
<<<<<<< HEAD
                <video
                  ref={videoRef}
                  onEnded={handleVideoEnd}
                  muted
                  playsInline
                  preload="metadata"
                >
=======
                <video ref={videoRef} onEnded={handleVideoEnd}>
>>>>>>> 3ef29a325898de486c047745c63e83177dfede6a
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
