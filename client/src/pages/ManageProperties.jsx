import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import CTA from "@/components/manageProperties/CTA";
import Hero from "@/components/manageProperties/Hero";
import PropertyActivities from "@/components/manageProperties/PropertyActivities";
import PropertyIntro from "@/components/manageProperties/PropertyIntro";
import Testimonials from "@/components/manageProperties/Testimonials";
import ScrollToTop from "@/components/common/ScrollToTop";

import useScrollProgress from "@/hooks/useScrollProgress";

const ManageProperties = () => {
  const showTopButton = useScrollProgress("activities-section");

  return (
    <>
      <Navbar />
      <Hero />
      <PropertyIntro />
      <div id="activities-section">
        <PropertyActivities />
      </div>
      <Testimonials />
      <CTA />
      <Footer />
      {showTopButton && <ScrollToTop />}
    </>
  );
};

export default ManageProperties;
