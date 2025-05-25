import React, { useContext, useEffect, useState, useRef, useMemo } from "react";
import { LanguageContext } from "../../translation/context/LanguageContext";

// Images
import arrowRight from "../../assets/images/arrow-right2.svg";
import offerLogo from "../../assets/images/offer-logo.png";
import "./index.style.scss";

export default function OfferSection() {
  const { translations } = useContext(LanguageContext);

  const contentRef = useRef(null);
  const offerWrapRef = useRef(null);
  const [stickyClass, setStickyClass] = useState("");

  const handleScroll = useMemo(() => {
    return () => {
      if (!contentRef.current || !offerWrapRef.current) return;

      const contentTop = contentRef.current.getBoundingClientRect().top; 
      const offerWrapTop = offerWrapRef.current.offsetTop;
      const offerWrapHeight = offerWrapRef.current.offsetHeight;
      const offerWrapBottom = offerWrapTop + offerWrapHeight;
      const scrollY = window.scrollY;

      if (scrollY + 100 >= offerWrapTop && scrollY + contentRef.current.offsetHeight + 100 < offerWrapBottom) {
        setStickyClass("fixed");
      } else if (scrollY + contentRef.current.offsetHeight + 100 >= offerWrapBottom) {
        setStickyClass("absolute");
      } else {
        setStickyClass("");
      }
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const titleHTML = useMemo(() => {
    return translations["offer.title"].replaceAll("{", "<span>").replaceAll("}", "</span>");
  }, [translations]);

  const contentTitleHTML = useMemo(() => {
    return translations["offer.content.title"].replaceAll("{", "<span>").replaceAll("}", "</span>");
  }, [translations]);

  return (
    <section className="offer" id="offer">
      <div className="container">
        <article className="block">
          <h2 className="offer_title" data-aos="fade-up" dangerouslySetInnerHTML={{ __html: titleHTML }} />

          <div ref={offerWrapRef} className="offer_wrap">
            <div ref={contentRef} className={`content ${stickyClass}`}>
              <div className="info">
                <h3 className="info_title" dangerouslySetInnerHTML={{ __html: contentTitleHTML }} />
                <p className="info_text">
                  <span></span>
                  {translations["offer.content.text"]}
                </p>
                <a className="info_btn" href="#contact">{translations["offer.content.btn"]}</a>
              </div>
              <img className="offer_logo" src={offerLogo} alt="Offer Logo" loading="lazy" />
            </div>

            <div className="cards">
              {translations.cards.map((card) => (
                <div key={card.id} className="card" data-aos="fade-up">
                  <h3>{card.title}</h3>
                  <div className="card_tabs">
                    {card.tabs.map((tab, index) => (
                      <a key={index} className="card_tab" href="#!">{tab}</a>
                    ))}
                    <a className="card_link" href="#contact">
                      <img src={arrowRight} alt="Arrow" loading="lazy" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}













// import React, { useContext, useEffect, useState, useRef } from "react";
// import { LanguageContext } from "../../translation/context/LanguageContext";

// // Images
// import arrowRight from "../../assets/images/arrow-right2.svg";
// import offerLogo from "../../assets/images/offer-logo.png";
// import "./index.style.scss";

// export default function OfferSection() {
//   const { translations } = useContext(LanguageContext);

//   const contentRef = useRef(null);
//   const offerWrapRef = useRef(null);
//   const [stickyClass, setStickyClass] = useState("");

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!contentRef.current || !offerWrapRef.current) return;

//       const contentTop = contentRef.current.getBoundingClientRect().top; 
//       const offerWrapTop = offerWrapRef.current.offsetTop;
//       const offerWrapHeight = offerWrapRef.current.offsetHeight;
//       const offerWrapBottom = offerWrapTop + offerWrapHeight;
//       const scrollY = window.scrollY;

//       if (scrollY + 100 >= offerWrapTop && scrollY + contentRef.current.offsetHeight + 100 < offerWrapBottom) {
//         setStickyClass("fixed");
//       } else if (scrollY + contentRef.current.offsetHeight + 100 >= offerWrapBottom) {
//         setStickyClass("absolute");
//       } else {
//         setStickyClass("");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="offer" id="offer">
//       <div className="container">
//         <div className="block">
//           <h2 className="offer_title" data-aos="fade-up"
//             dangerouslySetInnerHTML={{
//               __html: translations["offer.title"].replaceAll("{", "<span>").replaceAll("}", "</span>")
//             }}>
//           </h2>

//           <div ref={offerWrapRef} className="offer_wrap">
//             <div ref={contentRef} className={`content ${stickyClass}`}>
//               <div className="info">
//                 <h3 className="info_title"
//                   dangerouslySetInnerHTML={{
//                     __html: translations["offer.content.title"].replaceAll("{", "<span>").replaceAll("}", "</span>")
//                   }}>
//                 </h3>
//                 <p className="info_text">
//                   <span></span>
//                   {translations["offer.content.text"]}
//                 </p>
//                 <a className="info_btn" href="#contact">{translations["offer.content.btn"]}</a>
//               </div>
//               <img className="offer_logo" src={offerLogo} alt="Offer Logo" />
//             </div>

//             <div className="cards">
//               {translations.cards.map((card) => (
//                 <div key={card.id} className="card" data-aos="fade-up">
//                   <h3>{card.title}</h3>
//                   <div className="card_tabs">
//                     {card.tabs.map((tab, index) => (
//                       <a key={index} className="card_tab" href="#!">{tab}</a>
//                     ))}
//                     <a className="card_link" href="#contact">
//                       <img src={arrowRight} alt="Arrow" />
//                     </a>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }