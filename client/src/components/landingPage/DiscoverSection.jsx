import { BsArrowUpRight } from "react-icons/bs";
import PropertyCard from "./PropertyCard";
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const DiscoverSection = () => {
  return (
    <div className="bg-whiteLilac h-screen py-[6.5rem]">
      <div className="w-[65%] mx-auto flex flex-col gap-14">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <h1 className="font-semibold text-[30px]">
              Discover Trending Projects
            </h1>
            <p className="text-[16px] text-smokeyGrey">
              Aliquam lacinia diam quis lacus euismod
            </p>
          </div>

          <div className="flex items-center gap-1.5">
            <p className="text-mirage font-semibold text-[15px]">
              See All Properties
            </p>
            <BsArrowUpRight size={20} />
          </div>
        </div>

        <div>
          <Swiper
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1400: { slidesPerView: 3 },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="h-[500px]"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <SwiperSlide key={item}>
                <PropertyCard />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;
