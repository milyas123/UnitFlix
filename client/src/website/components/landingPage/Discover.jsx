import React, {useRef, useState} from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ProjectCard from "./cards/ProjectCard";

import { Link } from "react-router-dom";
import {BsArrowRight, BsArrowUpRight} from "react-icons/bs";
import ArrowLeft from "../svgs/ArrowLeft";
import ArrowRight from "../svgs/ArrowRight";
import useSwiperNavigation from "@/hooks/useSwiperNavigation";
import RegisterInterestModal from "@/website/components/common/RegisterInterestModal.jsx";
import website from "@/data/website.json";
import PropertyCard from "@/website/components/propertiesForSale/PropertyCard.jsx";
import {Button} from "@/website/components/ui/button.jsx";

const Discover = ({ properties, type }) => {
  const projectsRef = useRef(null);
  const { isBeginning, isEnd } = useSwiperNavigation(projectsRef);
  const [isRegisterInterestModalShown, setIsRegisterInterestModalShown] = useState(false);
  const [interestedPropertyId, setInterestedPropertyId] = useState();

  const registerInterest = (e, property) => {
    e.preventDefault();
    e.stopPropagation();
    setInterestedPropertyId(property.id);
    setIsRegisterInterestModalShown(true);
  }

  return (
      <>
        <div className="relative flex flex-col items-center justify-center bg-whiteLilac py-5">
          <div className="mx-auto flex w-full flex-col px-2.5 py-[0rem] md:w-[80%] md:gap-3 md:px-0 md:py-0 lg:mt-0 lg:gap-12 2xl:-mt-2 2xl:gap-14">
            <div className="flex flex-col justify-between md:flex-row md:items-start">
              <div className="space-y-2 md:space-y-0.5 xl:space-y-1 2xl:space-y-1.5">
                <h1 className="text-[22px] font-semibold md:text-[14px] lg:text-[18px] xl:text-[22px] 2xl:text-[28px]">
                  {website.landingPage.trendingProjects.heading} {type === 0 ? "Properties" : 'Projects'}
                </h1>
                <p className="text-[14px] text-smokeyGrey md:text-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px]">
                  {type === 0 ? website.landingPage.trendingProperties.description : website.landingPage.trendingProjects.description}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Link
                    to={`/search?page=1&category=${type}`}
                    className="hidden items-center gap-1.5 border-b-2 border-transparent transition duration-200 ease-in-out hover:border-mirage md:flex"
                >
                  <p className="font-semibold text-mirage md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
                    See All {type === 0 ? 'Properties' : 'Projects'}
                  </p>
                  <BsArrowUpRight className="md:text-sm 2xl:text-xl" />
                </Link>
                {
                  type === 0 ?
                      <Link to="/add-property" className='hidden md:flex'>
                        <Button className="gap-x-1.5 rounded-lg hover:bg-white hover:text-mirage md:px-1 lg:px-2 xl:px-2.5 2xl:px-3">
                          List My Property{" "}
                          <BsArrowUpRight className="size-4 md:size-2 lg:size-3 xl:size-4 2xl:size-5" />
                        </Button>
                      </Link> : <></>
                }
              </div>
            </div>
            <div className="mb-1 mt-9 flex items-center justify-between md:-mb-2 md:mt-0 md:justify-end lg:-my-11 2xl:-my-12">
              <div className="flex items-center justify-end gap-x-1.5">
                <ArrowLeft
                    className={`cursor-pointer md:text-xs lg:text-lg ${
                        isBeginning && "cursor-default opacity-40"
                    }`}
                    onClick={() => projectsRef.current.swiper.slidePrev()}
                    disabled={isBeginning}
                />
                <ArrowRight
                    className={`cursor-pointer md:text-xs lg:text-lg ${
                        (isEnd || properties.length <= 3) && "cursor-default opacity-40"
                    }`}
                    onClick={() => projectsRef.current.swiper.slideNext()}
                    disabled={(isEnd || properties.length <= 3)}
                />
              </div>
              <div className="flex items-center justify-end flex-wrap gap-2">
                <Link
                    to={`/search?page=1&category=${type}`}
                    className="flex items-center gap-1.5 border-b-2 border-transparent transition duration-200 ease-in-out hover:border-mirage md:hidden"
                >
                  <p className="font-semibold text-mirage md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]">
                    See All {type === 0 ? 'Properties' : 'Projects'}
                  </p>
                  <BsArrowUpRight className="md:text-sm 2xl:text-xl" />
                </Link>
                {
                  type === 0 ?
                      <Link to="/add-property" className='flex md:hidden'>
                        <Button className="gap-x-1.5 rounded-lg hover:bg-white hover:text-mirage md:px-1 lg:px-2 xl:px-2.5 2xl:px-3">
                          List My Property{" "}
                          <BsArrowUpRight className="size-4 md:size-2 lg:size-3 xl:size-4 2xl:size-5" />
                        </Button>
                      </Link> : <></>
                }
              </div>
            </div>
            <div>
              <Swiper
                  ref={projectsRef}
                  slidesPerView={1}
                  spaceBetween={20}
                  breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 40 },
                    768: { slidesPerView: 3, spaceBetween: 15 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                  }}
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  className={`${type === 0 ? "h-[650px] md:h-[290px] lg:h-[350px] xl:h-[420px] 2xl:h-[590px]" : "h-[450px] md:h-[255px] lg:h-[310px] xl:h-[390px] 2xl:h-[500px]"}`}
                  style={{
                    "--swiper-pagination-color": "#181a20",
                  }}
              >
                {properties?.map((property, index) => (
                    <SwiperSlide key={index}>
                      {
                        property.category === 0 ?
                            <PropertyCard property={property} canRegisterInterest={true} onRegisterInterest={(e) => registerInterest(e, property)} /> :
                            <ProjectCard project={property} isLimited={false} showRegisterInterest={true} onRegisterInterest={(e) => registerInterest(e, property)} />
                      }
                    </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        {
          isRegisterInterestModalShown ?
              <RegisterInterestModal propertyId={interestedPropertyId} onClose={() => setIsRegisterInterestModalShown(false)} /> : <></>
        }
        </>
  );
};

export default Discover;
