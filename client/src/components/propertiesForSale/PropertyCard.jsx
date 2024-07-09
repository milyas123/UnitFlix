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
    <Link to="/property-details">
      <div className="w-[360px] md:w-[175px] lg:w-[230px] xl:w-[280px] 2xl:w-[340px] 2xl:h-[460px] rounded-lg overflow-hidden border border-lightGrey">
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
            className="md:h-[180px] 2xl:h-[300px]"
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
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="p-2 md:p-1 lg:p-1.5 xl:p-2 2xl:p-3 flex flex-col gap-y-3.5 md:gap-y-1.5 2xl:gap-y-3.5">
          <div className="font-semibold md:text-[6px] lg:text-[9px] xl:text-[11px] 2xl:text-[13px] flex flex-row flex-wrap md:justify-between md:whitespace-nowrap">
            <span className="border-r border-lightGrey pe-1">
              Single Row Middle
            </span>
            <span className="border-r border-lightGrey px-1">2BHK</span>
            <span className="border-r border-lightGrey px-1">Vacant</span>
            <span className="md:ps-1">Study Room</span>
          </div>

          <div className="flex items-center justify-start gap-x-0.5 text-[14px] md:text-[6px] lg:text-[9px] xl:text-[11px] 2xl:text-[13px]">
            <MdOutlineLocationOn size={17} className="-ms-1" />
            The Cedars, Yas Acres, Yas Island, Abu Dhabi
          </div>

          <div className="font-semibold text-[12px] md:text-[5px] lg:text-[7px] xl:text-[9px] 2xl:text-[11px] flex flex-row justify-between whitespace-nowrap">
            <span className="border-r border-lightGrey pe-1 font-bold text-mirage text-[16px] md:text-[6px] lg:text-[9px] xl:text-[11px] 2xl:text-[13px]">
              Townhouse
            </span>
            <span className="border-r border-lightGrey px-1 flex items-center gap-x-1">
              <Bed size={17} /> 10 Beds
            </span>
            <span className="border-r border-lightGrey px-1 flex items-center gap-x-1">
              <Shower size={17} /> 2 Baths
            </span>
            <span className="ps-1 flex items-center gap-x-1">
              <Area size={17} /> 500 sqft
            </span>
          </div>

          <p className="font-bold text-[20px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px]">
            <span className="text-[14px] md:text-[6px] lg:text-[9px] xl:text-[11px] 2xl:text-[13px]">AED</span> 3,500,000
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
