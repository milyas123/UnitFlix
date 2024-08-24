import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import PropertyCard from "../propertiesForSale/PropertyCard";

import useSwiperNavigation from "@/hooks/useSwiperNavigation";
import ArrowLeft from "../svgs/ArrowLeft";
import ArrowRight from "../svgs/ArrowRight";
import ProjectCard from "@/website/components/landingPage/cards/ProjectCard.jsx";

const SimilarProperties = ({ relatedProperties }) => {
  const propertiesSwiperRef = useRef(null);
  const { isBeginning, isEnd } = useSwiperNavigation(propertiesSwiperRef);

  if(!relatedProperties || relatedProperties.length === 0) {
      return (
          <div className='h-[100px]'></div>
      )
  }

  return (
    <div className="md:mt-5 lg:mt-8 xl:mt-14 2xl:mt-16">
      <div className="flex items-center justify-between">
        <h1 className="text-[16px] font-medium md:text-[12px] lg:text-[15px] xl:text-[18px] 2xl:text-[24px]">
          Similar Properties in Area
        </h1>
        <div className="flex items-center justify-end gap-x-1.5">
          <ArrowLeft
            className={`cursor-pointer md:text-xs lg:text-lg ${
              isBeginning && "cursor-default opacity-40"
            }`}
            onClick={() => propertiesSwiperRef.current.swiper.slidePrev()}
            disabled={isBeginning}
          />
          <ArrowRight
            className={`cursor-pointer md:text-xs lg:text-lg ${
              isEnd && "cursor-default opacity-40"
            }`}
            onClick={() => propertiesSwiperRef.current.swiper.slideNext()}
            disabled={isEnd}
          />
        </div>
      </div>
      <div className="mt-4 md:mt-2 lg:mt-3 xl:mt-4 2xl:mt-5">
        <Swiper
          ref={propertiesSwiperRef}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
          spaceBetween={12}
          modules={[Navigation]}
          className="h-[600px] md:h-[370px] lg:h-[390px] xl:h-[430px] 2xl:h-[550px]"
        >
          {relatedProperties?.map((property) => (
            <SwiperSlide key={property.id}>
                {
                    property.category === 0 ?
                        <PropertyCard property={property} /> :
                        <ProjectCard project={property} isLimited={true} />
                }
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SimilarProperties;
