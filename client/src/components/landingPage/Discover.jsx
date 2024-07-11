import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import ProjectCard from "./cards/ProjectCard";

import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import { MoveLeft, MoveRight } from "lucide-react";

import useSwiperNavigation from "@/hooks/useSwiperNavigation";

const Discover = () => {
  const projectsRef = useRef(null);
  const { isBeginning, isEnd } = useSwiperNavigation(projectsRef);

  return (
    <div className="mt-[22rem] md:mt-0 bg-whiteLilac h-[90vh] flex justify-center items-center relative">
      <div className="py-[6rem] md:py-0 w-full px-2.5 md:px-0 md:w-[65%] mx-auto flex flex-col md:gap-8 lg:gap-12 2xl:gap-14">
        <div className="flex flex-col md:flex-row justify-between md:items-center">
          <div className="space-y-2 md:space-y-0.5 2xl:space-y-2">
            <h1 className="font-semibold text-[22px] md:text-[14px] lg:text-[18px] xl:text-[24px] 2xl:text-[30px]">
              Discover Trending Projects
            </h1>
            <p className="text-smokeyGrey text-[14px] md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]">
              Aliquam lacinia diam quis lacus euismod
            </p>
          </div>

          <Link
            to="/properties-for-sale"
            className="hidden md:flex items-center gap-1.5 border-b-2 border-transparent hover:border-mirage transition duration-200 ease-in-out"
          >
            <p className="text-mirage font-semibold md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]">
              See All Properties
            </p>
            <BsArrowUpRight className="md:text-sm 2xl:text-xl" />
          </Link>
        </div>

        <div className="mt-9 mb-1 md:mt-0 md:mb-1 flex justify-between md:justify-end items-center md:-my-8 lg:-my-9 2xl:-my-10">
          <div className="flex items-center justify-end gap-x-3">
            <MoveLeft
              className={`md:text-xs 2xl:text-xl cursor-pointer ${
                isBeginning && "opacity-40 cursor-default"
              }`}
              onClick={() => projectsRef.current.swiper.slidePrev()}
              disabled={isBeginning}
            />
            <MoveRight
              className={`md:text-xs 2xl:text-xl cursor-pointer ${
                isEnd && "opacity-40 cursor-default"
              }`}
              onClick={() => projectsRef.current.swiper.slideNext()}
              disabled={isEnd}
            />
          </div>
          <Link
            to="/properties-for-sale"
            className="md:hidden flex items-center gap-1.5 border-b-2 border-transparent hover:border-mirage transition duration-200 ease-in-out"
          >
            <p className="text-mirage font-semibold md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]">
              See All Properties
            </p>
            <BsArrowUpRight className="md:text-sm 2xl:text-xl" />
          </Link>
        </div>

        <div>
          <Swiper
            ref={projectsRef}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 3, spaceBetween: 15 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="h-[470px] md:h-[250px] lg:h-[310px] xl:h-[390px] 2xl:h-[500px]"
            style={{
              "--swiper-pagination-color": "#181a20",
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <SwiperSlide key={item}>
                <ProjectCard />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Discover;
