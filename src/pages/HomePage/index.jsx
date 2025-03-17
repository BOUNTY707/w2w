import React from "react";
import HomeSection from "../../sections/HomeSection";
import AboutSection from "../../sections/AboutSection";
import PortfolioSection from "../../sections/PortfolioSection";
import ProductiveSection from "../../sections/ProductiveSection";
import ServicesSection from "../../sections/ServicesSection";
import OfferSection from "../../sections/OfferSection";
import PriceListSections from "../../sections/PriceListSection";
import WorkSection from "../../sections/WorkSection";
import ContactSection from "../../sections/ContactSection";
import TestimonialsSection from "../../sections/TestimonialsSection";

export default function HomePage() {
  return (
    <div>
      <div className="blur"></div>
      <HomeSection />
      <AboutSection />
      <PortfolioSection />
      <ProductiveSection />
      {/* <ServicesSection /> */}
      <OfferSection />
      <ProductiveSection />
      <PriceListSections />
      <TestimonialsSection />
      <WorkSection />
      <ContactSection />
    </div>
  );
}
