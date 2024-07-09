import { useEffect, useState } from "react";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/landingPage/Hero";
import Discover from "@/components/landingPage/Discover";
import Help from "@/components/landingPage/Help";
import AboutUs from "@/components/landingPage/AboutUs";
import ContactUs from "@/components/landingPage/ContactUs";
import CTA from "@/components/landingPage/CTA";
import ExperienceAndFeedback from "@/components/landingPage/ExperienceAndFeedback";
import Footer from "@/components/common/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";

import useScrollProgress from "@/hooks/useScrollProgress";

const LandingPage = () => {
  const [showIcons, setShowIcons] = useState(false);
  const showTopButton = useScrollProgress("discover-section");

  useEffect(() => {
    const handleScroll = () => {
      const discoverElement = document.getElementById("discover-section");
      if (discoverElement) {
        const { top } = discoverElement.getBoundingClientRect();
        if (top <= 0) {
          setShowIcons(true);
        } else {
          setShowIcons(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCallClick = () => {
    window.location.href = "tel:+123456789";
  };

  const handleWhatsappClick = () => {
    window.location.href = "https://wa.me/123456789";
  };

  return (
    <>
      <Navbar />
      <Hero />
      <div id="discover-section">
        <Discover />
      </div>
      <Help />
      <AboutUs />
      <ContactUs />
      <CTA />
      <ExperienceAndFeedback />
      <Footer />

      {/* Sticky Icons */}
      <div
        className={`fixed top-1/2 right-5 transform -translate-y-1/2 flex flex-col items-center space-y-2 ${
          showIcons ? "show-icons" : "hide-icons"
        }`}
      >
        <img
          src="/assets/imgs/call-vector.png"
          className={`size-[55px] animated-icon cursor-pointer`}
          alt="callcenter-vector"
          onClick={handleCallClick}
        />
        <img
          src="/assets/imgs/whatsapp-icon.png"
          className={`size-[50px] animated-icon cursor-pointer`}
          alt="whatsapp-icon"
          onClick={handleWhatsappClick}
        />
      </div>
      {showTopButton && <ScrollToTop />}
    </>
  );
};

export default LandingPage;
