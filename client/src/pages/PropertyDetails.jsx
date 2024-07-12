import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Description from "@/components/propertyDetails/Description";
import FeaturesAndAmenities from "@/components/propertyDetails/FeaturesAndAmenities";
import GetInTouch from "@/components/propertyDetails/GetInTouch";
import Hero from "@/components/propertyDetails/Hero";
import Highlights from "@/components/propertyDetails/Highlights";
import ImageGallery from "@/components/propertyDetails/ImageGallery";
import Overview from "@/components/propertyDetails/Overview";
import PaymentPlan from "@/components/propertyDetails/PaymentPlan";
import SimilarProjects from "@/components/propertyDetails/SimilarProjects";
import SimilarProperties from "@/components/propertyDetails/SimilarProperties";
import ScrollToTop from "@/components/common/ScrollToTop";
import StickyIcons from "@/components/common/StickyIcons";

import useScrollProgress from "@/hooks/useScrollProgress";

const PropertyDetails = () => {
  const showTopButton = useScrollProgress("highlights-section");

  return (
    <>
      <Navbar />
      <Hero />
      <div className="mx-auto md:mt-7 lg:mt-9 xl:mt-12 2xl:mt-16 flex w-[91%]">
        <div className="w-[75%]">
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
        <div className="ms-auto w-[23.5%]">
          {/* <div className="sticky top-5">
            <GetInTouch />
          </div> */}
        </div>
      </div>
      <Footer />
      <StickyIcons showIcons={showTopButton} />
      {showTopButton && <ScrollToTop />}
    </>
  );
};

export default PropertyDetails;
