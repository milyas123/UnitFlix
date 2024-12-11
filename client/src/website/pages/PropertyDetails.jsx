import { useEffect, useState, lazy } from "react";
import Layout from "@/website/Layout";
const Description = lazy(() => import("@/website/components/propertyDetails/Description"));
const FeaturesAndAmenities = lazy(() => import("@/website/components/propertyDetails/FeaturesAndAmenities"));
const GetInTouch = lazy(() => import("@/website/components/propertyDetails/GetInTouch"));
import Hero from "@/website/components/propertyDetails/Hero";
const Highlights = lazy(() => import("@/website/components/propertyDetails/Highlights"));
const ImageGallery = lazy(() => import("@/website/components/propertyDetails/ImageGallery"));
const Overview = lazy(() => import("@/website/components/propertyDetails/Overview"));
const PaymentPlan = lazy(() => import("@/website/components/propertyDetails/PaymentPlan"));
const SimilarProjects = lazy(() => import("@/website/components/propertyDetails/SimilarProjects"));
const SimilarProperties = lazy(() => import("@/website/components/propertyDetails/SimilarProperties"));
import ScrollToTop from "@/website/components/common/ScrollToTop";
import StickyIcons from "@/website/components/common/StickyIcons";

import axios from "axios";
import { useParams } from "react-router-dom";
import useScrollProgress from "@/hooks/useScrollProgress";
import Spinner from "@/website/components/common/Spinner.jsx";
import AnimLazyLoader from "@/website/components/common/AnimLazyLoader.jsx";

const PropertyDetails = () => {
  const { id } = useParams();
  const serverURL = import.meta.env.VITE_SERVER_URL;
  const showTopButton = useScrollProgress("highlights-section");
  const [isLoading, setIsLoading] = useState(true);
  const [property, setProperty] = useState(null);
  const [relatedProperties, setRelatedProperties] = useState({
    byLocation: [],
    byDeveloper: [],
  });

  const fetchProperty = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get(`${serverURL}/property/${id}`);
      setProperty(response.data?.data);
    } catch (error) {
      console.log(error.message);
    }
    finally {
      setIsLoading(false)
    }
  };

  const fetchRelatedProperties = async (locationId, developerId) => {
    try {
      const requests = [];

      if(locationId) {
        requests.push(axios.get(`${serverURL}/property/location/${locationId}`))
      }

      if(developerId) {
        requests.push(axios.get(`${serverURL}/property/developer/${developerId}`));
      }
      const [locationResponse, developerResponse] = await Promise.all(requests);

      setRelatedProperties({
        byLocation: locationResponse ? locationResponse.data?.data.filter(p => p.id !== property.id) || [] : [],
        byDeveloper: developerResponse ? developerResponse.data?.data.filter(p => p.id !== property.id) || [] : [],
      });
    } catch (error) {
      console.log("Error fetching related properties:", error.message);
    }
  };

  useEffect(() => {
    fetchProperty();
  }, []);

  useEffect(() => {
    if (property?.location || property?.developer) {
      fetchRelatedProperties(property?.location, property?.developer);
    }
  }, [property]);

  return (
    <>
      <Layout>
        {
          isLoading ?
              <div className='h-[400px] flex items-center justify-center pt-[5em]'>
                <Spinner />
              </div> :
              <>
                <Hero purpose={property.purpose}
                    coverImage={property?.files.filter(file => file.purpose === 0).map(file => file.url)[0]}
                    title={property?.title}
                    location={property?.propertyLocation?.name}
                />
                <div className="mx-auto mt-7 flex w-[95%] md:mt-7 md:w-[91%] lg:mt-9 xl:mt-12 2xl:mt-16">
                  <div className="w-full md:w-[74%]">
                    <AnimLazyLoader>
                      <Description
                          property={property}
                          title={property?.title}
                          category={property?.category}
                          status={property?.status}
                          developer={property?.propertyDeveloper?.name}
                          location={property?.propertyLocation?.name}
                          brochure={property?.files.find((file) => file.purpose === 2)?.url}
                          price={property?.price}
                          propertyDetails={property?.category === 0 ? [{
                            propertyType: property.type.name,
                            unitType: `${property.beds} Bedroom`,
                            size: `${property.area.toLocaleString()} Sqft`
                          }] : property?.propertyDetails}
                          downPayment={property?.downPayment}
                          paymentPlan={property?.paymentPlan}
                          handOver={property?.handOver}
                          purpose={property?.purpose}
                      />
                    </AnimLazyLoader>
                    <AnimLazyLoader>
                      <Overview
                          category={property?.category}
                          overviewText={property?.overview?.text}
                          floorPlan={property?.files.find((file) => file.purpose === 3)?.url}
                      />
                    </AnimLazyLoader>
                    <div id="highlights-section">
                      <AnimLazyLoader>
                        <Highlights highlights={property?.keyHighlights}/>
                      </AnimLazyLoader>
                    </div>
                    <AnimLazyLoader>
                      <FeaturesAndAmenities amenities={property?.features}/>
                    </AnimLazyLoader>
                    {property?.category === 1 && (
                        <AnimLazyLoader>
                          <PaymentPlan paymentPlanData={property?.paymentPlanItems}/>
                        </AnimLazyLoader>
                    )}
                    <AnimLazyLoader>
                      <ImageGallery imgFiles={property?.files}/>
                    </AnimLazyLoader>
                    {property?.category === 0 ? (
                        <AnimLazyLoader>
                          <SimilarProperties
                              relatedProperties={relatedProperties.byLocation}
                          />
                        </AnimLazyLoader>
                    ) : (
                        <>
                          <AnimLazyLoader>
                            <SimilarProjects relatedProjects={relatedProperties.byDeveloper}/>
                          </AnimLazyLoader>
                          <AnimLazyLoader>
                            <SimilarProperties relatedProperties={relatedProperties.byLocation}/>
                          </AnimLazyLoader>
                        </>
                    )}
                  </div>
                  <div className="ms-auto hidden w-[23.5%] md:block">
                    <div className="sticky top-24">
                      <AnimLazyLoader>
                        <GetInTouch propertyId={property.id} />
                      </AnimLazyLoader>
                    </div>
                  </div>
                </div>
              </>
        }
        <StickyIcons showIcons={showTopButton} propertyId={property?.id} />
        {showTopButton && <ScrollToTop />}
      </Layout>
    </>
  );
};

export default PropertyDetails;
