import React, { useContext } from "react";
import { LanguageContext } from "../../translation/context/LanguageContext";

// Images
import clarityArrowUp from "../../assets/images/clarity_arrow-top.svg";

export default function OfferSection() {
  const { translations } = useContext(LanguageContext);

  return (
    <div className="offer" id="offer">
      <div className="container">
        <div className="block">
          <h3 className="offer_title" data-aos="fade-up" >
            <span>{translations["offer.title.spn"]}</span> {translations["offer.title"]}
          </h3>

          <div className="cards">
            <div className="card" data-aos="fade-up">
              <div className="card_left">
                <h3>{translations["card.brand"]}</h3>

                <div className="card_tabs">
                  <a className="card_tab" href="#!">{translations["card.tab.logo"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.illustrations"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.presentation"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.strategy"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.marketing"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.design"]}</a>
                </div>
              </div>
              <div className="card_info">
                <p className="card_text">{translations["card.brand.desc"]}</p>
                <div className="card_btns">
                  <a className="card_btn" href="#contact">{translations["offer.card.btn"]}</a>
                  <a className="card_arrow" href="#!">
                    <img src={clarityArrowUp} />
                  </a>
                </div>
              </div>
            </div>
            <div className="card" data-aos="fade-up">
              <div className="card_left">
                <h3>{translations["card.ux"]}</h3>

                <div className="card_tabs">
                  <a className="card_tab" href="#!">{translations["card.tab.personas"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.user"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.testing"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.prototyp"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.visual"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.wireframing"]}</a>
                </div>
              </div>
              <div className="card_info">
                <p className="card_text">{translations["card.brand.desc"]}</p>
                <div className="card_btns">
                  <a className="card_btn" href="#contact">{translations["offer.card.btn"]}</a>
                  <a className="card_arrow" href="#!">
                    <img src={clarityArrowUp} />
                  </a>
                </div>
              </div>
            </div>
            <div className="card" data-aos="fade-up">
              <div className="card_left">
                <h3>{translations["card.ai"]}</h3>

                <div className="card_tabs">
                  <a className="card_tab" href="#!">{translations["card.tab.learn"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.optimizers"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.architecture"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.Data"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.activation"]}</a>
                </div>
              </div>
              <div className="card_info">
                <p className="card_text">{translations["card.brand.desc"]}</p>
                <div className="card_btns">
                  <a className="card_btn" href="#contact">{translations["offer.card.btn"]}</a>
                  <a className="card_arrow" href="#!">
                    <img src={clarityArrowUp} />
                  </a>
                </div>
              </div>
            </div>
            <div className="card" data-aos="fade-up">
              <div className="card_left">
                <h3>{translations["card.hardware"]}</h3>

                <div className="card_tabs">
                  <a className="card_tab" href="#!">{translations["card.tab.components"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.periphery"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.server"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.network"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.pc"]}</a>
                </div>
              </div>
              <div className="card_info">
                <p className="card_text">{translations["card.brand.desc"]}</p>
                <div className="card_btns">
                  <a className="card_btn" href="#contact">{translations["offer.card.btn"]}</a>
                  <a className="card_arrow" href="#!">
                    <img src={clarityArrowUp} />
                  </a>
                </div>
              </div>
            </div>
            <div className="card" data-aos="fade-up">
              <div className="card_left">
                <h3>{translations["card.system"]}</h3>

                <div className="card_tabs">
                  <a className="card_tab" href="#!">{translations["card.tab.customer"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.marketing"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.sales"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.strategy"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.reports"]}</a>
                </div>
              </div>
              <div className="card_info">
                <p className="card_text">{translations["card.brand.desc"]}</p>
                <div className="card_btns">
                  <a className="card_btn" href="#contact">{translations["offer.card.btn"]}</a>
                  <a className="card_arrow" href="#!">
                    <img src={clarityArrowUp} />
                  </a>
                </div>
              </div>
            </div>
            <div className="card" data-aos="fade-up">
              <div className="card_left">
                <h3>{translations["card.brand"]}</h3>

                <div className="card_tabs">
                  <a className="card_tab" href="#!">{translations["card.tab.logo"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.illustrations"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.presentation"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.strategy"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.marketing"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.design"]}</a>
                </div>
              </div>
              <div className="card_info">
                <p className="card_text">{translations["card.brand.desc"]}</p>
                <div className="card_btns">
                  <a className="card_btn" href="#contact">{translations["offer.card.btn"]}</a>
                  <a className="card_arrow" href="#!">
                    <img src={clarityArrowUp} />
                  </a>
                </div>
              </div>
            </div>
            <div className="card" data-aos="fade-up">
              <div className="card_left">
                <h3>{translations["card.app"]}</h3>

                <div className="card_tabs">
                  <a className="card_tab" href="#!">{translations["card.tab.frontend"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.backend"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.functionality"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.safety"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.testing"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.support"]}</a>
                </div>
              </div>
              <div className="card_info">
                <p className="card_text">{translations["card.brand.desc"]}</p>
                <div className="card_btns">
                  <a className="card_btn" href="#contact">{translations["offer.card.btn"]}</a>
                  <a className="card_arrow" href="#!">
                    <img src={clarityArrowUp} />
                  </a>
                </div>
              </div>
            </div>
            <div className="card" data-aos="fade-up">
              <div className="card_left">
                <h3>{translations["card.web"]}</h3>

                <div className="card_tabs">
                  <a className="card_tab" href="#!">{translations["card.tab.integrations"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.backend"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.frontend"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.optimization"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.testing"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.CMS"]}</a>
                </div>
              </div>
              <div className="card_info">
                <p className="card_text">{translations["card.brand.desc"]}</p>
                <div className="card_btns">
                  <a className="card_btn" href="#contact">{translations["offer.card.btn"]}</a>
                  <a className="card_arrow" href="#!">
                    <img src={clarityArrowUp} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
