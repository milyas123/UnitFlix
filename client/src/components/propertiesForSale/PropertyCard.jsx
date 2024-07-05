import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import { MdOutlineLocationOn } from "react-icons/md";
import Bed from "../svgs/Bed";
import Shower from "../svgs/Shower";
import Area from "../svgs/Area";

const PropertyCard = () => {
  return (
    <div className="w-[340px] h-[460px] rounded-lg overflow-hidden border border-lightGrey">
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
          className="h-[300px]"
          style={{
            "--swiper-navigation-size": "16px",
            "--swiper-navigation-color": "#FFFFFF",
            "--swiper-pagination-color": "#FFFFFF",
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
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

      <div className="p-3 flex flex-col gap-y-3.5">
        <div className="font-semibold text-[13px] flex flex-row justify-between whitespace-nowrap">
          <span className="border-r border-lightGrey pe-1">Single Row Middle</span>
          <span className="border-r border-lightGrey px-1">2BHK</span>
          <span className="border-r border-lightGrey px-1">Vacant</span>
          <span className="ps-1">Study Room</span>
        </div>

        <div className="flex items-center justify-start gap-x-0.5 text-[12px]">
          <MdOutlineLocationOn size={20} className="-ms-1" />
          The Cedars, Yas Acres, Yas Island, Abu Dhabi
        </div>

        <div className="font-semibold text-[11px] flex flex-row justify-between whitespace-nowrap">
          <span className="border-r border-lightGrey pe-1 font-bold text-mirage text-[13px]">
            Townhouse
          </span>
          <span className="border-r border-lightGrey px-1 flex items-center gap-x-1">
            <Bed size={20} /> 10 Beds
          </span>
          <span className="border-r border-lightGrey px-1 flex items-center gap-x-1">
            <Shower size={20} /> 2 Baths
          </span>
          <span className="ps-1 flex items-center gap-x-1">
            <Area size={20} /> 500 sqft
          </span>
        </div>

        <p className="font-bold text-[22px]">
          <span className="text-[14px]">AED</span> 3,500,000
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
