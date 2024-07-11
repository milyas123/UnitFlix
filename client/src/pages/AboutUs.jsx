import DreamHomeSteps from "@/components/aboutUs/DreamHomeSteps";
import FAQs from "@/components/aboutUs/FAQs";
import Hero from "@/components/aboutUs/Hero";
import MissionVisionSection from "@/components/aboutUs/MissionVisionSection";
import Team from "@/components/aboutUs/Team";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import ScrollToTop from "@/components/common/ScrollToTop";
import StickyIcons from "@/components/common/StickyIcons";

import useScrollProgress from "@/hooks/useScrollProgress";

const AboutUs = () => {
  const showTopButton = useScrollProgress("mission-section");

  return (
    <>
      <Navbar />
      <Hero />
      <div className="w-[84%] mx-auto">
        <div id="mission-section">
          <MissionVisionSection />
        </div>
        <DreamHomeSteps />
        <Team />
        <FAQs />
      </div>
      <Footer />
      <StickyIcons showIcons={showTopButton} />
      {showTopButton && <ScrollToTop />}
    </>
  );
};

export default AboutUs;
