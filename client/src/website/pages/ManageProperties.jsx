import Layout from "@/website/Layout";
import {lazy} from "react";
const CTA = lazy(() => import("@/website/components/manageProperties/CTA"));
import Hero from "@/website/components/manageProperties/Hero";
const PropertyActivities = lazy(() => import("@/website/components/manageProperties/PropertyActivities"));
const PropertyIntro = lazy(() => import("@/website/components/manageProperties/PropertyIntro"));
const Testimonials = lazy(() => import("@/website/components/manageProperties/Testimonials"));
import ScrollToTop from "@/website/components/common/ScrollToTop";
import StickyIcons from "@/website/components/common/StickyIcons";

import useScrollProgress from "@/hooks/useScrollProgress";
import AnimLazyLoader from "@/website/components/common/AnimLazyLoader.jsx";

const ManageProperties = () => {
  const showTopButton = useScrollProgress("intro-section");

  return (
    <Layout>
      <Hero />
      <div className="md:mx-auto md:w-[77%]">
        <div id="intro-section">
          <AnimLazyLoader>
              <PropertyIntro />
          </AnimLazyLoader>
        </div>
        <AnimLazyLoader>
            <PropertyActivities />
        </AnimLazyLoader>
        <AnimLazyLoader>
            <Testimonials />
        </AnimLazyLoader>
        <AnimLazyLoader>
            <CTA />
        </AnimLazyLoader>
      </div>
      <StickyIcons showIcons={showTopButton} />
      {showTopButton && <ScrollToTop />}
    </Layout>
  );
};

export default ManageProperties;
