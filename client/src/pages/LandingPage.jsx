import { useEffect, useState } from "react";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/landingPage/Hero";
import Filters from "@/components/landingPage/Filters";
import Discover from "@/components/landingPage/Discover";
import Help from "@/components/landingPage/Help";
import AboutUs from "@/components/landingPage/AboutUs";
import ContactUs from "@/components/landingPage/ContactUs";
import CTA from "@/components/landingPage/CTA";
import ExperienceAndFeedback from "@/components/landingPage/ExperienceAndFeedback";
import Footer from "@/components/common/Footer";

const LandingPage = () => {
  const [showIcons, setShowIcons] = useState(false);
  const [iconsClass, setIconsClass] = useState("hide-icons");

  useEffect(() => {
    const handleScroll = () => {
      const discoverElement = document.getElementById("discover-section");
      if (discoverElement) {
        const { top } = discoverElement.getBoundingClientRect();
        if (top <= 0) {
          setIconsClass("show-icons");
          setShowIcons(true);
        } else {
          setIconsClass("hide-icons");
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
      <div className="absolute w-full z-[100] -bottom-12">
        <Filters />
      </div>
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
          className={`w-[55px] h-[55px] animated-icon cursor-pointer`}
          alt="callcenter-vector"
          onClick={handleCallClick}
        />
        <img
          src="/assets/imgs/whatsapp-icon.png"
          className={`w-[50px] h-[50px] animated-icon cursor-pointer`}
          alt="whatsapp-icon"
          onClick={handleWhatsappClick}
        />
      </div>
    </>
  );
};

export default LandingPage;
