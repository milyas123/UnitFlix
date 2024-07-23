import Layout from "@/website/Layout";
import DreamHomeSteps from "@/website/components/aboutUs/DreamHomeSteps";
import FAQs from "@/website/components/aboutUs/FAQs";
import Hero from "@/website/components/aboutUs/Hero";
import MissionVisionSection from "@/website/components/aboutUs/MissionVisionSection";
import Team from "@/website/components/aboutUs/Team";
import ScrollToTop from "@/website/components/common/ScrollToTop";
import StickyIcons from "@/website/components/common/StickyIcons";

import useScrollProgress from "@/hooks/useScrollProgress";

const AboutUs = () => {
  const showTopButton = useScrollProgress("mission-section");

  return (
    <Layout>
      <Hero />
      <div className="p-2 md:mx-auto md:w-[80%]">
        <div id="mission-section">
          <MissionVisionSection />
        </div>
        <DreamHomeSteps />
        <Team />
        <FAQs />
      </div>
      <StickyIcons showIcons={showTopButton} />
      {showTopButton && <ScrollToTop />}
    </Layout>
  );
};

export default AboutUs;
