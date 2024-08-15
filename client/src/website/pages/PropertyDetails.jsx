import { useEffect, useState } from "react";

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

import axios from "axios";
import { useParams } from "react-router-dom";
import useScrollProgress from "@/hooks/useScrollProgress";

const PropertyDetails = () => {
  const { id } = useParams();
  const serverURL = import.meta.env.VITE_SERVER_URL;
  const showTopButton = useScrollProgress("highlights-section");

  const [property, setProperty] = useState(null);
  const [relatedProperties, setRelatedProperties] = useState({
    byLocation: [],
    byDeveloper: [],
  });

  const fetchProperty = async () => {
    try {
      const response = await axios.get(`${serverURL}/property/${id}`);
      setProperty(response.data?.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchRelatedProperties = async (locationId, developerId) => {
    try {
      const [locationResponse, developerResponse] = await Promise.all([
        axios.get(`${serverURL}/property/location/${locationId}`),
        axios.get(`${serverURL}/property/developer/${developerId}`),
      ]);

      setRelatedProperties({
        byLocation: locationResponse.data?.data || [],
        byDeveloper: developerResponse.data?.data || [],
      });
    } catch (error) {
      console.log("Error fetching related properties:", error.message);
    }
  };

  useEffect(() => {
    fetchProperty();
  }, []);

  useEffect(() => {
    if (property?.location && property?.developer) {
      fetchRelatedProperties(property?.location, property?.developer);
    }
  }, [property]);

  return (
    <Layout>
      <Hero
        title={property?.title}
        location={property?.propertyLocation?.name}
      />
      <div className="mx-auto mt-7 flex w-[95%] md:mt-7 md:w-[91%] lg:mt-9 xl:mt-12 2xl:mt-16">
        <div className="w-full md:w-[74%]">
          <Description
            title={property?.title}
            status={property?.status}
            developer={property?.propertyDeveloper?.name}
            location={property?.propertyLocation?.name}
            brochure={property?.files.find((file) => file.purpose === 2)?.url}
            price={property?.price}
            propertyDetails={property?.propertyDetails}
            downPayment={property?.downPayment}
            paymentPlan={property?.paymentPlan}
            handOver={property?.handOver}
          />
          <div id="highlights-section">
            <Highlights highlights={property?.keyHighlights} />
          </div>
          <Overview
            overviewText={property?.overview?.text}
            floorPlan={property?.files.find((file) => file.purpose === 3)?.url}
          />
          <FeaturesAndAmenities amenities={property?.features} />
          <PaymentPlan paymentPlanData={property?.paymentPlanItems} />
          <ImageGallery imgFiles={property?.files} />
          <SimilarProjects relatedProjects={relatedProperties.byDeveloper} />
          <SimilarProperties relatedProperties={relatedProperties.byLocation} />
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
