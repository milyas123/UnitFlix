import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import TestimonialCard from "./TestimonialCard";
import { MoveLeft, MoveRight } from "lucide-react";
import { useRef } from "react";

const Testimonials = () => {
  const swiperRef = useRef(null);

  return (
    <div className="w-[90%] mx-auto rounded-md bg-mirage text-white relative mb-[9rem]">
      <div className="absolute z-[300] -top-10 left-[12rem] size-[80px] bg-white rounded-full flex items-center justify-center shadow-2xl">
        <img
          src="/assets/imgs/quote-up.png"
          className="size-[40px]"
          alt="quote-image"
        />
      </div>
      <div className="flex items-center gap-10 p-8">
        <div className="w-[28%] text-center">
          <h1 className="font-bold text-[36px]">
            What Our <br /> Clients Say?
          </h1>
        </div>

        <div className="w-[68%] ms-auto">
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
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 2 },
              }}
              spaceBetween={16}
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              className="h-[275px] custom-swiper-pagination"
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
            <div className="-mt-[1.4rem] relative z-50 flex gap-3">
              <MoveLeft
                size={30}
                className="cursor-pointer"
                onClick={() => swiperRef.current.swiper.slidePrev()}
              />
              <MoveRight
                size={30}
                className="cursor-pointer"
                onClick={() => swiperRef.current.swiper.slideNext()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
