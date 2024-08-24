import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import Bed from "../svgs/Bed";
import Shower from "../svgs/Shower";
import Area from "../svgs/Area";

import { Link } from "react-router-dom";
import { MdOutlineLocationOn } from "react-icons/md";

import { formatCurrency } from "@/lib/utils";
import { useAppContext } from "@/AppContext";
import LazyLoad from "react-lazyload";
import Tag from "@/website/components/common/Tag.jsx";
import FeaturedIcon from "@/website/components/common/FeaturedIcon.jsx";
import PropertyTags from "@/website/components/common/PropertyTags.jsx";

const PropertyCard = ({ property }) => {
  const { locations } = useAppContext();
  console.log(property)

  return (
    <Link to={`/property-details/${property?.id}`} reloadDocument className="contents">
      <div
          className="w-full relative overflow-hidden rounded-lg border border-lightGrey md:w-[90%] md:min-w-[150px] md:max-w-[200px] lg:w-[95%] lg:min-w-[225px] lg:max-w-[270px] xl:w-[92%] xl:min-w-[290px] xl:max-w-[320px] 2xl:w-[95%] 2xl:min-w-[345px] 2xl:max-w-[400px] h-[505px] md:h-[239px] lg:h-[286px] xl:h-[348.5px] 2xl:h-[469.75px]">
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
              pagination={{clickable: true}}
              navigation={true}
              className="h-[350px] md:h-[160px] lg:h-[180px] xl:h-[200px] 2xl:h-[300px]"
              style={{
                "--swiper-navigation-size": "16px",
                "--swiper-navigation-color": "#FFFFFF",
                "--swiper-pagination-color": "#FFFFFF",
              }}
          >
            {property?.files.map((image) => (
                <SwiperSlide key={image.id} className="relative">
                  <LazyLoad className='size-full'>
                    <img
                        src={image.url}
                        alt={`${image?.url}`}
                        className="size-full object-cover"
                    />
                  </LazyLoad>
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex flex-col gap-y-3.5 p-2 md:gap-y-1.5 md:px-2 md:py-1.5 lg:gap-y-2 lg:p-2.5 xl:gap-y-2.5 xl:p-3 2xl:p-[12px]">
          <div
              className="flex flex-row flex-wrap font-semibold md:text-[6px] lg:text-[8px] xl:text-[11px] 2xl:text-[13.5px]">
            {property?.tags}
          </div>

          <div
              className="flex items-center justify-start gap-x-0.5 text-[14px] md:text-[6px] lg:text-[8px] xl:text-[11px] 2xl:text-[13.5px]">
            <MdOutlineLocationOn
                size={17}
                className="-ms-0.5 size-5 md:size-2 lg:size-3 xl:size-4 2xl:size-5"
            />
            {locations.find((loc) => loc.id === property?.location)?.name}
          </div>

          {property?.category === 0 && (
              <div
                  className="flex flex-row whitespace-nowrap text-[12px] font-semibold md:text-[5px] lg:text-[7.5px] xl:gap-x-1 xl:text-[9px] 2xl:gap-x-2 2xl:text-[11.5px]">
              <span className="flex items-center gap-x-1 border-r border-lightGrey px-1 md:px-0.5 lg:px-1">
                <Bed/> {property?.beds} Beds
              </span>
                <span className="flex items-center gap-x-1 border-r border-lightGrey px-1 md:px-0.5 lg:px-1">
                <Shower/> {property?.baths} Baths
              </span>
                <span className="flex items-center gap-x-1 ps-1 md:ps-0.5 lg:ps-1">
                <Area/> {property?.area.toLocaleString()} sqft
              </span>
              </div>
          )}

          <p className="text-[20px] font-bold md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px]">
            {formatCurrency(property?.price)}
          </p>
        </div>
        <div className='absolute top-2 left-2 flex items-center gap-2 z-[5]'>
          <PropertyTags property={property} />
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
