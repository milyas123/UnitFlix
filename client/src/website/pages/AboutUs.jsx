import {lazy} from 'react';
import Layout from "@/website/Layout";
const DreamHomeSteps = lazy(() => import("@/website/components/aboutUs/DreamHomeSteps"));
const FAQs = lazy(() => import("@/website/components/aboutUs/FAQs"));
import Hero from "@/website/components/aboutUs/Hero";
const MissionVisionSection = lazy(() => import("@/website/components/aboutUs/MissionVisionSection"));
const Team = lazy(() => import("@/website/components/aboutUs/Team"));
import ScrollToTop from "@/website/components/common/ScrollToTop";
import StickyIcons from "@/website/components/common/StickyIcons";

import useScrollProgress from "@/hooks/useScrollProgress";
import AnimLazyLoader from "@/website/components/common/AnimLazyLoader.jsx";

const AboutUs = () => {
  const showTopButton = useScrollProgress("mission-section");

  return (
    <Layout>
      <Hero />
      <div className="p-2 md:mx-auto md:w-[80%]">
          <AnimLazyLoader>
              <div id="mission-section">
                  <MissionVisionSection/>
              </div>
          </AnimLazyLoader>
          <AnimLazyLoader>
              <DreamHomeSteps/>
          </AnimLazyLoader>
          <AnimLazyLoader>
              <Team/>
          </AnimLazyLoader>
          <AnimLazyLoader>
              <FAQs/>
          </AnimLazyLoader>
      </div>
        <StickyIcons showIcons={showTopButton} />
      {showTopButton && <ScrollToTop />}
    </Layout>
  );
};

export default AboutUs;
