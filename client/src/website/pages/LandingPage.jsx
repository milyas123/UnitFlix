import Layout from "@/website/Layout";
import Hero from "@/website/components/landingPage/Hero";
import Discover from "@/website/components/landingPage/Discover";
import Help from "@/website/components/landingPage/Help";
import AboutUs from "@/website/components/landingPage/AboutUs";
import ContactUs from "@/website/components/landingPage/ContactUs";
import CTA from "@/website/components/landingPage/CTA";
import ExperienceAndFeedback from "@/website/components/landingPage/ExperienceAndFeedback";
import ScrollToTop from "@/website/components/common/ScrollToTop";
import StickyIcons from "@/website/components/common/StickyIcons";

import useScrollProgress from "@/hooks/useScrollProgress";

const LandingPage = () => {
  const showButtons = useScrollProgress("discover-section");

  return (
    <Layout>
      <div className="flex size-full flex-col">
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
