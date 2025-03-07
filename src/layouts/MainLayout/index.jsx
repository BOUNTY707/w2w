import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeSection from "../../sections/HomeSection/HomeSection";
import AboutSection from "../../sections/AboutSection/AboutSection";
import PortfolioSection from "../../sections/PortfolioSection/PortfolioSection";
import ProductiveSection from "../../sections/ProductiveSection/ProductiveSection";
import ServicesSection from "../../sections/ServicesSection/ServicesSection";
import OfferSection from "../../sections/OfferSection/OfferSection";
import TestimonialsSection from "../../sections/TestimonialsSection/TestimonialsSection";
import WorkSection from "../../sections/WorkSection/WorkSection";
import PriceListSections from "../../sections/PriceListSection/PriceListSection";
import ContactSection from "../../sections/ContactSection/ContactSection";

export default function MainLayout({ children }) {
  // AOS animation
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <div>
      <Navbar />
      {children}

      <HomeSection />
      <AboutSection />
      <PortfolioSection />
      <ProductiveSection />
      <ServicesSection />
      <OfferSection />
      <ProductiveSection />
      <PriceListSections />
      {/*<TestimonialsSection />*/}
      <WorkSection />
      <ContactSection />

      <Footer />
    </div>
  );
}
