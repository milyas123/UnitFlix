import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import TestimonialCard from "./TestimonialCard";
import { MoveLeft, MoveRight } from "lucide-react";

import useSwiperNavigation from "@/hooks/useSwiperNavigation";

const Testimonials = () => {
  const swiperRef = useRef(null);
  const { isBeginning, isEnd } = useSwiperNavigation(swiperRef);

  return (
    <div className="relative rounded-md bg-mirage text-white md:mb-[4rem] lg:mb-[6rem] xl:mb-[7rem] 2xl:mb-[9rem]">
      <div className="absolute z-[300] flex items-center justify-center rounded-full bg-white shadow-2xl md:-top-4 md:left-[6rem] md:size-[30px] lg:-top-7 lg:left-[6.8rem] lg:size-[50px] xl:left-[9rem] xl:size-[70px] 2xl:-top-10 2xl:left-[11.5rem] 2xl:size-[80px]">
        <img
          src="/assets/imgs/quote-up.png"
          className="md:size-[15px] lg:size-[25px] xl:size-[35px] 2xl:size-[40px]"
          alt="quote-image"
        />
      </div>
      <div className="flex items-center md:p-3.5 lg:p-4 xl:p-5 2xl:p-6">
        <div className="w-[28%] text-center">
          <h1 className="text-[24px] font-bold md:text-[18px] lg:text-[21px] xl:text-[28px] 2xl:text-[32px]">
            What Our <br /> Clients Say?
          </h1>
        </div>

        <div className="ms-auto w-[70%]">
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
              ref={swiperRef}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 10 },
                1024: { slidesPerView: 2, spaceBetween: 12 },
              }}
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              className="custom-swiper-pagination md:h-[130px] lg:max-h-[180px] lg:min-h-[160px] xl:h-[210px] xl:max-h-[400px] 2xl:h-[250px]"
              style={{
                "--swiper-pagination-color": "#FFFFFF",
              }}
            >
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <SwiperSlide key={item}>
                  <TestimonialCard />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="relative z-50 -mt-[1.4rem] flex gap-3">
              <MoveLeft
                size={30}
                className={`cursor-pointer ${isBeginning && "cursor-default opacity-40"}`}
                onClick={() => swiperRef.current.swiper.slidePrev()}
                disabled={isBeginning}
              />
              <MoveRight
                size={30}
                className={`cursor-pointer ${isEnd && "cursor-default opacity-40"}`}
                onClick={() => swiperRef.current.swiper.slideNext()}
                disabled={isEnd}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
