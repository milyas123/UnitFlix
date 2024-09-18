import {useRef, useState} from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ProjectCard from "./cards/ProjectCard";

import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import ArrowLeft from "../svgs/ArrowLeft";
import ArrowRight from "../svgs/ArrowRight";
import useSwiperNavigation from "@/hooks/useSwiperNavigation";
import RegisterInterestModal from "@/website/components/common/RegisterInterestModal.jsx";
import website from "@/data/website.json";

const Discover = ({ projects }) => {
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
        <div className="relative mt-[22rem] flex items-center justify-center bg-whiteLilac md:mt-0 md:h-[430px] md:pt-0 lg:h-[95vh] lg:max-h-[530px] lg:min-h-[500px] xl:min-h-[655px] xl:h-[100vh] 2xl:min-h-[825px] 2xl:h-[860px]">
          <div className="mx-auto flex w-full flex-col px-2.5 py-[4.5rem] md:w-[65%] md:gap-3 md:px-0 md:py-0 lg:mt-0 lg:gap-12 2xl:-mt-2 2xl:gap-14">
            <div className="flex flex-col justify-between md:flex-row md:items-start">
              <div className="space-y-2 md:space-y-0.5 xl:space-y-1 2xl:space-y-1.5">
                <h1 className="text-[22px] font-semibold md:text-[14px] lg:text-[18px] xl:text-[22px] 2xl:text-[28px]">
                  {website.landingPage.trendingProjects.heading}
                </h1>
                <p className="text-[14px] text-smokeyGrey md:text-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px]">
                  {website.landingPage.trendingProjects.description}
                </p>
              </div>

              <Link
                  to="/search?page=1"
                  className="hidden items-center gap-1.5 border-b-2 border-transparent transition duration-200 ease-in-out hover:border-mirage md:flex"
              >
                <p className="font-semibold text-mirage md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
                  See All Properties
                </p>
                <BsArrowUpRight className="md:text-sm 2xl:text-xl" />
              </Link>
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
                        isEnd && "cursor-default opacity-40"
                    }`}
                    onClick={() => projectsRef.current.swiper.slideNext()}
                    disabled={isEnd}
                />
              </div>
              <Link
                  to="/properties-for-sale"
                  className="flex items-center gap-1.5 border-b-2 border-transparent transition duration-200 ease-in-out hover:border-mirage md:hidden"
              >
                <p className="font-semibold text-mirage md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]">
                  See All Properties
                </p>
                <BsArrowUpRight className="md:text-sm 2xl:text-xl" />
              </Link>
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
                  className="h-[470px] md:h-[255px] lg:h-[310px] xl:h-[390px] 2xl:h-[500px]"
                  style={{
                    "--swiper-pagination-color": "#181a20",
                  }}
              >
                {projects?.map((project, index) => (
                    <SwiperSlide key={index}>
                      <ProjectCard project={project} isLimited={false} onRegisterInterest={(e) => registerInterest(e, project)} />
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
