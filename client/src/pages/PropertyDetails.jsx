import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Description from "@/components/propertyDetails/Description";
import FeaturesAndAmenities from "@/components/propertyDetails/FeaturesAndAmenities";
import Hero from "@/components/propertyDetails/Hero";
import Highlights from "@/components/propertyDetails/Highlights";
import Overview from "@/components/propertyDetails/Overview";

const PropertyDetails = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="w-[90%] mx-auto">
        <Description />
        <Highlights />
        <Overview />
        <FeaturesAndAmenities />
      </div>
      <Footer />
    </>
  );
};

export default PropertyDetails;
