import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeSection from "../../sections/HomeSection/HomeSection";
import AboutSection from "../../sections/AboutSection/AboutSection";
import PortfolioSection from "../../sections/PortfolioSection/PortfolioSection";
import ProductiveSection from "../../sections/ProductiveSection/ProductiveSection";
import ServicesSection from "../../sections/ServicesSection/ServicesSection";
import TestimonialsSection from "../../sections/TestimonialsSection/TestimonialsSection";
import WorkSection from "../../sections/WorkSection/WorkSection";
import ContactSection from "../../sections/ContactSection/ContactSection";

export default function MainLayout({ children }) {

  return (
    
    <div>
      <Navbar />
      {children}

      <HomeSection />
      <AboutSection />
      <PortfolioSection />
      <ProductiveSection />
      <ServicesSection />
      <ProductiveSection />
      <TestimonialsSection />
      <WorkSection />
      <ContactSection />

      <Footer />
    </div>
  );
}
