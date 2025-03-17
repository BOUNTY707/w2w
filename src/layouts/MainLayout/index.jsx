import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  // AOS animation
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <div>
      <Navbar />
      {children}

      <Footer />
    </div>
  );
}
