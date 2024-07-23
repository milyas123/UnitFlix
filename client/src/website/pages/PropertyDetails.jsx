import Layout from "@/website/Layout";
import Description from "@/website/components/propertyDetails/Description";
import FeaturesAndAmenities from "@/website/components/propertyDetails/FeaturesAndAmenities";
import GetInTouch from "@/website/components/propertyDetails/GetInTouch";
import Hero from "@/website/components/propertyDetails/Hero";
import Highlights from "@/website/components/propertyDetails/Highlights";
import ImageGallery from "@/website/components/propertyDetails/ImageGallery";
import Overview from "@/website/components/propertyDetails/Overview";
import PaymentPlan from "@/website/components/propertyDetails/PaymentPlan";
import SimilarProjects from "@/website/components/propertyDetails/SimilarProjects";
import SimilarProperties from "@/website/components/propertyDetails/SimilarProperties";
import ScrollToTop from "@/website/components/common/ScrollToTop";
import StickyIcons from "@/website/components/common/StickyIcons";

import useScrollProgress from "@/hooks/useScrollProgress";

const PropertyDetails = () => {
  const showTopButton = useScrollProgress("highlights-section");

  return (
    <Layout>
      <Hero />
      <div className="mx-auto mt-7 flex w-[95%] md:mt-7 md:w-[91%] lg:mt-9 xl:mt-12 2xl:mt-16">
        <div className="w-full md:w-[74%]">
          <Description />
          <div id="highlights-section">
            <Highlights />
          </div>
          <Overview />
          <FeaturesAndAmenities />
          <PaymentPlan />
          <ImageGallery />
          <SimilarProjects />
          <SimilarProperties />
        </div>
        <div className="ms-auto hidden w-[23.5%] md:block">
          <div className="sticky top-24">
            <GetInTouch />
          </div>
        </div>
      </div>

      <StickyIcons showIcons={showTopButton} />
      {showTopButton && <ScrollToTop />}
    </Layout>
  );
};

export default PropertyDetails;
