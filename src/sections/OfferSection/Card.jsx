import React from "react";

export default function Card({ offer }) {

    return (
    <div className="card" data-aos="fade-up">
      <div className="card_left">
        <h3>{translations["card.brand"]}</h3>

        <div className="card_tabs">
          <a className="card_tab" href="#!">
            {translations["card.tab.logo"]}
          </a>
          <a className="card_tab" href="#!">
            {translations["card.tab.illustrations"]}
          </a>
          <a className="card_tab" href="#!">
            {translations["card.tab.presentation"]}
          </a>
          <a className="card_tab" href="#!">
            {translations["card.tab.strategy"]}
          </a>
          <a className="card_tab" href="#!">
            {translations["card.tab.design"]}
          </a>
        </div>
      </div>
      <div className="card_info">
        <p className="card_text">{translations["card.brand.desc"]}</p>
        <div className="card_btns">
          <a className="card_btn" href="#contact">
            {translations["offer.card.btn"]}
          </a>
          <a className="card_arrow" href="#!">
            <img src={clarityArrowUp} />
          </a>
        </div>
      </div>
    </div>
  );
}
