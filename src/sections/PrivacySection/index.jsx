import React, { useContext } from "react";
import { LanguageContext } from "../../translation/context/LanguageContext";
import "./index.style.scss";


export default function PrivacySection() {
  const { translations } = useContext(LanguageContext);

  return (
    <div className="privacy">
      <div className="container">
        <div className="block">
          <h2 className="title" data-aos="fade-up" dangerouslySetInnerHTML={{
            __html: translations["privacy.title"].replaceAll("{","<span>").replaceAll("}","</span>")
            }}>
          </h2>
          <div className="texts">
            <p dangerouslySetInnerHTML={{
              __html: translations["privacy.text1"].replaceAll("{","<b>").replaceAll("}","</b>")
              }}>
            </p>
            <p dangerouslySetInnerHTML={{
              __html: translations["privacy.text2"].replaceAll("{","<b>").replaceAll("}","</b>")
              }}>
            </p>
            <p dangerouslySetInnerHTML={{
              __html: translations["privacy.text3"].replaceAll("{","<b>").replaceAll("}","</b>")
              }}>
            </p>
            <p dangerouslySetInnerHTML={{
              __html: translations["privacy.text4"].replaceAll("{","<b>").replaceAll("}","</b>")
              }}>
            </p>
            <p dangerouslySetInnerHTML={{
              __html: translations["privacy.text5"].replaceAll("{","<b>").replaceAll("}","</b>")
              }}>
            </p>
            <p dangerouslySetInnerHTML={{
              __html: translations["privacy.text6"].replaceAll("{","<b>").replaceAll("}","</b>")
              }}>
            </p>
            <p dangerouslySetInnerHTML={{
              __html: translations["privacy.text7"].replaceAll("{","<b>").replaceAll("}","</b>")
              }}>
            </p>
            <p dangerouslySetInnerHTML={{
              __html: translations["privacy.text8"].replaceAll("{","<b>").replaceAll("}","</b>")
              }}>
            </p>
            <p dangerouslySetInnerHTML={{
              __html: translations["privacy.text9"].replaceAll("{","<b>").replaceAll("}","</b>")
              }}>
            </p>
            <p dangerouslySetInnerHTML={{
              __html: translations["privacy.text10"].replaceAll("{","<b>").replaceAll("}","</b>")
              }}>
            </p>
            <p dangerouslySetInnerHTML={{
              __html: translations["privacy.text11"].replaceAll("{","<b>").replaceAll("}","</b>")
              }}>
            </p>
          </div>

          <div className="info">
            <p dangerouslySetInnerHTML={{
              __html: translations["privacy.address"].replaceAll("{","<b>").replaceAll("}","</b>")
              }}>
            </p>
            <p dangerouslySetInnerHTML={{
              __html: translations["privacy.phone"].replaceAll("{","<b>").replaceAll("}","</b>")
              }}>
            </p>
            <p dangerouslySetInnerHTML={{
              __html: translations["privacy.email"].replaceAll("{","<b>").replaceAll("}","</b>")
              }}>
            </p>
            <p dangerouslySetInnerHTML={{
              __html: translations["privacy.person"].replaceAll("{","<b>").replaceAll("}","</b>")
              }}>
            </p>
            <p dangerouslySetInnerHTML={{
              __html: translations["privacy.tin"].replaceAll("{","<b>").replaceAll("}","</b>")
              }}>
            </p>
            <p dangerouslySetInnerHTML={{
              __html: translations["privacy.account"].replaceAll("{","<b>").replaceAll("}","</b>")
              }}>
            </p>
            <p dangerouslySetInnerHTML={{
              __html: translations["privacy.code"].replaceAll("{","<b>").replaceAll("}","</b>")
              }}>
            </p>
            <p dangerouslySetInnerHTML={{
              __html: translations["privacy.code2"].replaceAll("{","<b>").replaceAll("}","</b>")
              }}>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
