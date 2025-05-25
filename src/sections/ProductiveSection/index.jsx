import React, { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../../translation/context/LanguageContext";
import "./index.style.scss";

// Images
import productiveImg1 from "../../assets/images/productive_img1.svg";
import productiveImg2 from "../../assets/images/productive_img2.svg";
import productiveImg3 from "../../assets/images/productive_img3.svg";
import productiveImg4 from "../../assets/images/productive_img4.svg";
import productiveImg5 from "../../assets/images/productive_img5.svg";
import productiveImg6 from "../../assets/images/productive_img6.svg";
import productiveImg7 from "../../assets/images/productive_img7.svg";
import productiveImg8 from "../../assets/images/productive_img8.svg";
import productiveImg9 from "../../assets/images/productive_img9.svg";
import productiveImg10 from "../../assets/images/productive_img10.svg";
import productiveImg11 from "../../assets/images/productive_img11.svg";
import productiveImg12 from "../../assets/images/productive_img12.svg";
import productiveImg13 from "../../assets/images/productive_img13.svg";
import productiveImg14 from "../../assets/images/productive_img14.svg";
import productiveImg15 from "../../assets/images/productive_img15.svg";

const images = [
  productiveImg1, productiveImg2, productiveImg3, productiveImg4, productiveImg5,
  productiveImg6, productiveImg7, productiveImg8, productiveImg9, productiveImg10,
  productiveImg11, productiveImg12, productiveImg13, productiveImg14, productiveImg15
];

export default function ProductiveSection() {
  const { translations } = useContext(LanguageContext);

  return (
    <div className="productive">
      <div className="container">
        <div className="block">
          <div className="info">
            <h2
              className="title"
              data-aos="fade-up"
              dangerouslySetInnerHTML={{
                __html: translations["productive.title"]
                  .replaceAll("{", "<span>")
                  .replaceAll("}", "</span>"),
              }}
            ></h2>
            <p className="text" data-aos="fade-up">
              {translations["productive.desc"]}
            </p>
            <a href="#contact" className="productive_link" data-aos="fade-up">
              {translations["productive.btn"]}
            </a>
          </div>

          <div className="slider slider-one">
            <motion.div className="productive_imgs effect_up"
              animate={{ y: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              {[...images, ...images].map((img, index) => (
                <div key={index} className="productive_img">
<<<<<<< HEAD
                  <img src={img} alt="productive" loading="lazy" />
=======
                  <img src={img} alt="productive" />
>>>>>>> 3ef29a325898de486c047745c63e83177dfede6a
                </div>
              ))}
            </motion.div>
          </div>
          <div className="slider slider-two">
            <motion.div className="productive_imgs effect_left"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              {[...images, ...images].map((img, index) => (
                <div key={index} className="productive_img">
<<<<<<< HEAD
                  <img src={img} alt="productive" loading="lazy" />
=======
                  <img src={img} alt="productive" />
>>>>>>> 3ef29a325898de486c047745c63e83177dfede6a
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
