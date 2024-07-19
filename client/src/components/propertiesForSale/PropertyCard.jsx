import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import { MdOutlineLocationOn } from "react-icons/md";
import Bed from "../svgs/Bed";
import Shower from "../svgs/Shower";
import Area from "../svgs/Area";
import { Link } from "react-router-dom";

const PropertyCard = () => {
  return (
    <Link to="/property-details" className="contents">
      <div className="w-full overflow-hidden rounded-lg border border-lightGrey md:w-[195px] lg:w-[95%] lg:min-w-[225px] lg:max-w-[270px] xl:w-[315px] xl:max-w-[400px] 2xl:h-[450px] 2xl:w-[95%] 2xl:min-w-[362px]">
        <style jsx>{`
          .property-card .swiper-pagination-bullet {
            background-color: #ffffff;
            opacity: 0.4;
          }

          .property-card .swiper-pagination-bullet-active {
            background-color: #ffffff;
            opacity: 1;
          }
        `}</style>
        <div className="property-card">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation={true}
            className="md:h-[160px] lg:h-[180px] xl:h-[200px] 2xl:h-[300px]"
            style={{
              "--swiper-navigation-size": "16px",
              "--swiper-navigation-color": "#FFFFFF",
              "--swiper-pagination-color": "#FFFFFF",
            }}
          >
            {[1, 2, 3, 4, 5].map((item) => (
              <SwiperSlide key={item} className="relative">
                <img
                  src="/assets/imgs/building-img.jpg"
                  alt=""
                  className="size-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex flex-col gap-y-3.5 p-2 md:gap-y-1.5 md:px-2 md:py-1.5 lg:gap-y-2 lg:p-2.5 xl:gap-y-2.5 xl:p-3 2xl:p-[12px]">
          <div className="flex flex-row flex-wrap font-semibold md:whitespace-nowrap md:text-[6.5px] lg:text-[8px] xl:text-[12px] 2xl:text-[14px]">
            <span className="border-r border-lightGrey pe-1">
              Single Row Middle
            </span>
            <span className="border-r border-lightGrey px-1">2BHK</span>
            <span className="border-r border-lightGrey px-1">Vacant</span>
            <span className="md:ps-1">Study Room</span>
          </div>

          <div className="flex items-center justify-start gap-x-0.5 text-[14px] md:text-[6.5px] lg:text-[8px] xl:text-[12px] 2xl:text-[14px]">
            <MdOutlineLocationOn
              size={17}
              className="-ms-0.5 size-5 md:size-2 lg:size-3 xl:size-4 2xl:size-5"
            />
            The Cedars, Yas Acres, Yas Island, Abu Dhabi
          </div>

          <div className="flex flex-row whitespace-nowrap text-[12px] font-semibold md:text-[6px] lg:text-[7px] xl:gap-x-1 xl:text-[10px] 2xl:gap-x-2 2xl:text-[12px]">
            <span className="border-r border-lightGrey pe-1 text-[16px] font-bold text-mirage md:text-[7px] lg:text-[8px] xl:pe-1.5 xl:text-[12px] 2xl:text-[14px]">
              Townhouse
            </span>
            <span className="flex items-center gap-x-1 border-r border-lightGrey px-1">
              <Bed /> 10 Beds
            </span>
            <span className="flex items-center gap-x-1 border-r border-lightGrey px-1">
              <Shower /> 2 Baths
            </span>
            <span className="flex items-center gap-x-1 ps-1">
              <Area /> 500 sqft
            </span>
          </div>

          <p className="text-[20px] font-bold md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px]">
            <span className="text-[14px] md:text-[6px] lg:text-[9px] xl:text-[11px] 2xl:text-[13px]">
              AED
            </span>{" "}
            3,500,000
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
