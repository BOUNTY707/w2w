import React from "react";
import HomeSection from "../../sections/HomeSection/HomeSection";
import AboutSection from "../../sections/AboutSection/AboutSection";
import PortfolioSection from "../../sections/PortfolioSection/PortfolioSection";
import ProductiveSection from "../../sections/ProductiveSection/ProductiveSection";
import ServicesSection from "../../sections/ServicesSection/ServicesSection";
import OfferSection from "../../sections/OfferSection";
import PriceListSections from "../../sections/PriceListSection/PriceListSection";
import WorkSection from "../../sections/WorkSection/WorkSection";
import ContactSection from "../../sections/ContactSection/ContactSection";

export default function HomePage() {
  return (
    <div>
      <HomeSection />
      <AboutSection />
      <PortfolioSection />
      <ProductiveSection />
      <ServicesSection />
      <OfferSection />
      <ProductiveSection />
      <PriceListSections />
      <WorkSection />
      <ContactSection />
    </div>
  );
}
