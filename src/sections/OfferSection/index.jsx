import React, { useContext } from "react";
import { LanguageContext } from "../../translation/context/LanguageContext";

// Images
import clarityArrowUp from "../../assets/images/clarity_arrow-top.svg";
import "./index.style.scss"

export default function OfferSection() {
  const { translations } = useContext(LanguageContext);

  return (
    <div className="offer" id="offer">
      <div className="container">
        <div className="block">
          <h3 className="offer_title" data-aos="fade-up" dangerouslySetInnerHTML={{
                __html: translations["offer.title"].replaceAll("{","<span>").replaceAll("}","</span>")
                }}>
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
                <p className="card_text">{translations["card.ux.desc"]}</p>
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
                  <a className="card_tab" href="#!">{translations["card.tab.face"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.manager"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.integrations"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.translation"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.chatbots"]}</a>
                </div>
              </div>
              <div className="card_info">
                <p className="card_text">{translations["card.ai.desc"]}</p>
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
                  <a className="card_tab" href="#!">{translations["card.tab.enterprise"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.solution"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.security"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.network"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.it"]}</a>
                </div>
              </div>
              <div className="card_info">
                <p className="card_text">{translations["card.hardwer.desc"]}</p>
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
                  <a className="card_tab" href="#!">{translations["card.tab.sales"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.workflow"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.data"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.report"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.integration"]}</a>
                </div>
              </div>
              <div className="card_info">
                <p className="card_text">{translations["card.system.desc"]}</p>
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
                <h3>{translations["card.smart"]}</h3>

                <div className="card_tabs">
                  <a className="card_tab" href="#!">{translations["card.tab.light"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.energy"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.voice"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.ai"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.security"]}</a>
                </div>
              </div>
              <div className="card_info">
                <p className="card_text">{translations["card.smart.desc"]}</p>
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
                  <a className="card_tab" href="#!">{translations["card.tab.protection"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.performance"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.app"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.backend"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.ui"]}</a>
                </div>
              </div>
              <div className="card_info">
                <p className="card_text">{translations["card.app.desc"]}</p>
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
                  <a className="card_tab" href="#!">{translations["card.tab.frontend"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.seo"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.ui"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.ecomerce"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.websites"]}</a>
                </div>
              </div>
              <div className="card_info">
                <p className="card_text">{translations["card.web.desc"]}</p>
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
                <h3>{translations["card.erp"]}</h3>

                <div className="card_tabs">
                  <a className="card_tab" href="#!">{translations["card.tab.supply"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.workflow"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.human"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.crm"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.finance"]}</a>
                </div>
              </div>
              <div className="card_info">
                <p className="card_text">{translations["card.erp.desc"]}</p>
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
                <h3>{translations["card.internet"]}</h3>

                <div className="card_tabs">
                  <a className="card_tab" href="#!">{translations["card.tab.industry"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.control"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.analytics"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.devices"]}</a>
                  <a className="card_tab" href="#!">{translations["card.tab.remote"]}</a>
                </div>
              </div>
              <div className="card_info">
                <p className="card_text">{translations["card.internet.desc"]}</p>
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
