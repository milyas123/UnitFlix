import { useEffect, useState } from "react";

import Description from "@/website/components/propertyDetails/Description";
import FeaturesAndAmenities from "@/website/components/propertyDetails/FeaturesAndAmenities";
import Hero from "@/website/components/propertyDetails/Hero";
import Highlights from "@/website/components/propertyDetails/Highlights";
import ImageGallery from "@/website/components/propertyDetails/ImageGallery";
import Overview from "@/website/components/propertyDetails/Overview";
import PaymentPlan from "@/website/components/propertyDetails/PaymentPlan";
import ScrollToTop from "@/website/components/common/ScrollToTop";

import axios from "axios";
import { useParams } from "react-router-dom";
import useScrollProgress from "@/hooks/useScrollProgress";

const AdminPreviewProperty = () => {
  const { id } = useParams();
  const serverURL = import.meta.env.VITE_SERVER_URL;
  const showTopButton = useScrollProgress("highlights-section");

  const [property, setProperty] = useState(null);

  const fetchProperty = async () => {
    try {
      const response = await axios.get(`${serverURL}/request/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      
      setProperty(response.data?.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchProperty();
  }, []);

  return (
    <>
      <Hero
          coverImage={property?.files.filter(file => file.purpose === 0).map(file => file.url)[0]}
          title={property?.title}
          location={property?.propertyLocation?.name}
      />
      <div className="mx-auto mt-7 flex w-[95%] md:mt-7 md:w-[91%] lg:mt-9 xl:mt-12 2xl:mt-16">
        <div className="w-full">
          <Description
            title={property?.title}
            status={property?.status}
            developer={property?.propertyDeveloper?.name}
            location={property?.propertyLocation?.name}
            brochure={property?.files.find((file) => file.purpose === 2)?.url}
            price={property?.price}
            propertyDetails={property?.category === 0 ? [{propertyType: property.type.name, unitType: `${property.beds} Bedroom`, size: `${property.area.toLocaleString()} Sqft`}] : property?.propertyDetails}
            downPayment={property?.downPayment}
            paymentPlan={property?.paymentPlan}
            handOver={property?.handOver}
            purpose={property?.purpose}
            property={property}
            category={property?.category}
          />
          <div id="highlights-section">
            <Highlights highlights={property?.keyHighlights} />
          </div>
          <Overview
            overviewText={property?.overview?.text}
            floorPlan={property?.files.find((file) => file.purpose === 3)?.url}
          />
          <FeaturesAndAmenities amenities={property?.features} />
          <ImageGallery imgFiles={property?.files} />
        </div>
      </div>

      {showTopButton && <ScrollToTop />}
    </>
  );
};

export default AdminPreviewProperty;
