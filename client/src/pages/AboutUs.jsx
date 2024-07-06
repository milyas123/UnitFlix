import DreamHomeSteps from "@/components/aboutUs/DreamHomeSteps";
import FAQs from "@/components/aboutUs/FAQs";
import Hero from "@/components/aboutUs/Hero";
import MissionVisionSection from "@/components/aboutUs/MissionVisionSection";
import Team from "@/components/aboutUs/Team";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import ScrollToTop from "@/components/common/ScrollToTop";

import useScrollProgress from "@/hooks/useScrollProgress";

const AboutUs = () => {
  const showTopButton = useScrollProgress("steps-section");

  return (
    <>
      <Navbar />
      <Hero />
      <div className="w-[84%] mx-auto">
        <MissionVisionSection />
        <div id="steps-section">
          <DreamHomeSteps />
        </div>
        <Team />
        <FAQs />
      </div>
      <Footer />
      {showTopButton && <ScrollToTop />}
    </>
  );
};

export default AboutUs;
