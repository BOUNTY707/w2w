import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../translation/context/LanguageContext";
import "./index.style.scss";

// Images
import arrowRight from "../../assets/images/arrow-right.svg";
import LogoVeneniya from "../../assets/images/companyLogo-veneniya.png";
import LogoAdm from "../../assets/images/companyLogo-adm.png";
import LogoRizo from "../../assets/images/companyLogo-rizoMulk.png";

export default function HomeSection() {
  const { translations } = useContext(LanguageContext);
  
  // Counter State
  const [count, setCount] = useState(0);
  const finalNumber = 20;

  // Counter Animation Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < finalNumber) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const [width, setWidth] = useState("0%");

  useEffect(() => {
    setTimeout(() => {
      setWidth("65%"); 
    }, 200);
  }, []);

  // Analiz bar States
  const [height1, setHeight1] = useState("0px");
  const [height2, setHeight2] = useState("0px");
  const [height3, setHeight3] = useState("0px");

  useEffect(() => {
    setTimeout(() => setHeight1("95px"), 200);
    setTimeout(() => setHeight2("136px"), 400);
    setTimeout(() => setHeight3("166px"), 600);
  }, []);

  return (
    <div className="home" id="home">
      <div className="container">
        <div className="home_block">
          <div className="info">
            <div className="title_wrap">
              <h1
                className="title"
                data-aos="fade-up"
                dangerouslySetInnerHTML={{
                  __html: translations["home.title"]
                    .replaceAll("{", "<span>")
                    .replaceAll("}", "</span>"),
                }}
              />
              <a href="#contact" className="home_btn" data-aos="fade-up">
                {translations["home.btn"]} <img src={arrowRight} alt="arrow" loading="lazy" />
              </a>
            </div>

            <div className="partners" data-aos="fade-up">
              <p>{translations["partners.desc"]}:</p>
              <div className="partners_logo">
                <a href="#!">
                  <img src={LogoVeneniya} alt="Veneniya" loading="lazy" />
                </a>
                <a href="#!">
                  <img src={LogoAdm} alt="ADM" loading="lazy" />
                </a>
                <a href="#!">
                  <img src={LogoRizo} alt="Rizo Mulk" loading="lazy" />
                </a>
              </div>
            </div>
          </div>

          <div className="traffic" data-aos="fade-up">
            <div className="top">
              <div className="home_img">
                <div className="img-icon">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M46 12L27 31L17 21L2 36"
                      stroke="black"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M34 12H46V24"
                      stroke="black"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="box">
                <b id="numTotal">{count}+</b>
                <h4>{translations["traffic.title"]}</h4>
                <div className="line">
                  <div className="bg" style={{ width }}></div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="item_info">
                <p>
                  <span></span> {translations["traffic.sales"]}
                </p>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: translations["traffic.more"]
                      .replaceAll("{", "<span>")
                      .replaceAll("}", "</span>"),
                  }}
                />
              </div>

              <div className="analiz_bar">
                <div className="bar1" style={{ height: height1 }}></div>
                <div className="bar2" style={{ height: height2 }}></div>
                <div className="bar3" style={{ height: height3 }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}












// import React, { useState, useEffect, useContext } from "react";
// import { LanguageContext } from "../../translation/context/LanguageContext";
// import "./index.style.scss";

// // Images
// import arrowRight from "../../assets/images/arrow-right.svg";
// import LogoVeneniya from "../../assets/images/companyLogo-veneniya.png";
// import LogoAdm from "../../assets/images/companyLogo-adm.png";
// import LogoRizo from "../../assets/images/companyLogo-rizoMulk.png";

// export default function HomeSection() {
//   const { translations } = useContext(LanguageContext);
//   // Counter
//   const [count, setCount] = useState(0);
//   const finalNumber = 20;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount((prev) => {
//         if (prev < finalNumber) {
//           return prev + 1;
//         } else {
//           clearInterval(interval);
//           return prev;
//         }
//       });
//     }, 50);

//     return () => clearInterval(interval);
//   }, []);

//   // Progress bar
//   const [width, setWidth] = useState("0%");

//   useEffect(() => {
//     setTimeout(() => {
//       setWidth("65%");
//     }, 200);
//   }, []);

//   // Analiz bar
//   const [height1, setHeight1] = useState("0px");
//   const [height2, setHeight2] = useState("0px");
//   const [height3, setHeight3] = useState("0px");

//   useEffect(() => {
//     setTimeout(() => setHeight1("95px"), 200);
//     setTimeout(() => setHeight2("136px"), 400);
//     setTimeout(() => setHeight3("166px"), 600);
//   }, []);

//   return (
//     <div className="home" id="home">
//       <div className="container">
//         <div className="home_block">
//           <div className="info">
//             <div className="title_wrap">
//               <h1 className="title" data-aos="fade-up" dangerouslySetInnerHTML={{
//                 __html: translations["home.title"].replaceAll("{","<span>").replaceAll("}","</span>")
//                 }}>
//               </h1>
//               <a href="#contact" className="home_btn" data-aos="fade-up">
//                 {translations["home.btn"]} <img src={arrowRight} alt="" />
//               </a>
//             </div>

//             <div className="partners" data-aos="fade-up">
//               <p>{translations["partners.desc"]}:</p>
//               <div className="partners_logo">
//                 <a href="#!">
//                   <img src={LogoVeneniya} alt="" />
//                 </a>
//                 <a href="#!">
//                   <img src={LogoAdm} alt="" />
//                 </a>
//                 <a href="#!">
//                   <img src={LogoRizo} alt="" />
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="traffic" data-aos="fade-up">
//             <div className="top">
//               <div className="home_img">
//                 <div className="img-icon">
//                   <svg
//                     width="48"
//                     height="48"
//                     viewBox="0 0 48 48"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M46 12L27 31L17 21L2 36"
//                       stroke="black"
//                       strokeWidth="4"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M34 12H46V24"
//                       stroke="black"
//                       strokeWidth="4"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//               </div>
//               <div className="box">
//                 <b id="numTotal">{count}+</b>
//                 <h4>{translations["traffic.title"]}</h4>
//                 <div className="line">
//                   <div className="bg" style={{ width }}></div>
//                 </div>
//               </div>
//             </div>

//             <div className="item">
//               <div className="item_info">
//                 <p>
//                   <span></span> {translations["traffic.sales"]}
//                 </p>
//                 <h3 dangerouslySetInnerHTML={{
//                   __html: translations["traffic.more"].replaceAll("{","<span>").replaceAll("}","</span>")
//                   }}>
//                 </h3>
//               </div>
//               <div className="analiz_bar">
//                 <div className="bar1" style={{ height: height1 }}></div>
//                 <div className="bar2" style={{ height: height2 }}></div>
//                 <div className="bar3" style={{ height: height3 }}></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
