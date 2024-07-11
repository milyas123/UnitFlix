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
import StickyIcons from "@/components/common/StickyIcons";

import useScrollProgress from "@/hooks/useScrollProgress";

const LandingPage = () => {
  const showButtons = useScrollProgress("discover-section");

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
      <StickyIcons showIcons={showButtons} />
      
      {showButtons && <ScrollToTop />}
    </>
  );
};

export default LandingPage;
