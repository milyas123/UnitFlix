import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import CTA from "@/components/manageProperties/CTA";
import Hero from "@/components/manageProperties/Hero";
import PropertyActivities from "@/components/manageProperties/PropertyActivities";
import PropertyIntro from "@/components/manageProperties/PropertyIntro";
import Testimonials from "@/components/manageProperties/Testimonials";
import ScrollToTop from "@/components/common/ScrollToTop";
import StickyIcons from "@/components/common/StickyIcons";

import useScrollProgress from "@/hooks/useScrollProgress";

const ManageProperties = () => {
  const showTopButton = useScrollProgress("intro-section");

  return (
    <>
      <Navbar />
      <Hero />
      <div className="mx-auto md:w-[80%]">
        <div id="intro-section">
          <PropertyIntro />
        </div>
        <PropertyActivities />
        <Testimonials />
        <CTA />
      </div>
      <Footer />
      <StickyIcons showIcons={showTopButton} />
      {showTopButton && <ScrollToTop />}
    </>
  );
};

export default ManageProperties;
