import Layout from "@/Layout";
import Hero from "@/components/landingPage/Hero";
import Discover from "@/components/landingPage/Discover";
import Help from "@/components/landingPage/Help";
import AboutUs from "@/components/landingPage/AboutUs";
import ContactUs from "@/components/landingPage/ContactUs";
import CTA from "@/components/landingPage/CTA";
import ExperienceAndFeedback from "@/components/landingPage/ExperienceAndFeedback";
import ScrollToTop from "@/components/common/ScrollToTop";
import StickyIcons from "@/components/common/StickyIcons";

import useScrollProgress from "@/hooks/useScrollProgress";

const LandingPage = () => {
  const showButtons = useScrollProgress("discover-section");

  return (
    <Layout>
      <div className="flex flex-col size-full">
        <Hero />

      </div>
      <div id="discover-section">
        <Discover />
      </div>
      <Help />
      <AboutUs />
      <ContactUs />
      <CTA />
      <ExperienceAndFeedback />

      <StickyIcons showIcons={showButtons} />

      {showButtons && <ScrollToTop />}
    </Layout>
  );
};

export default LandingPage;
