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

const PropertyDetails = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="w-[90%] mx-auto flex mt-16">
        <div className="w-[73%]">
          <Description />
          <Highlights />
          <Overview />
          <FeaturesAndAmenities />
          <PaymentPlan />
          <ImageGallery />
          <SimilarProjects />
          <SimilarProperties />
        </div>
        <div className="w-[25.5%] ms-auto">
          <div className="sticky top-5">
            <GetInTouch />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PropertyDetails;
