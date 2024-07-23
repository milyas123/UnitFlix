import Layout from "@/website/Layout";
import CTA from "@/website/components/manageProperties/CTA";
import Hero from "@/website/components/manageProperties/Hero";
import PropertyActivities from "@/website/components/manageProperties/PropertyActivities";
import PropertyIntro from "@/website/components/manageProperties/PropertyIntro";
import Testimonials from "@/website/components/manageProperties/Testimonials";
import ScrollToTop from "@/website/components/common/ScrollToTop";
import StickyIcons from "@/website/components/common/StickyIcons";

import useScrollProgress from "@/hooks/useScrollProgress";

const ManageProperties = () => {
  const showTopButton = useScrollProgress("intro-section");

  return (
    <Layout>
      <Hero />
      <div className="md:mx-auto md:w-[77%]">
        <div id="intro-section">
          <PropertyIntro />
        </div>
        <PropertyActivities />
        <Testimonials />
        <CTA />
      </div>
      <StickyIcons showIcons={showTopButton} />
      {showTopButton && <ScrollToTop />}
    </Layout>
  );
};

export default ManageProperties;
