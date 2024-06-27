import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import FeedbackCard from "./cards/FeedbackCard";

const ExperienceAndFeedback = () => {
  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <div className="w-[65%] mx-auto flex justify-between items-center">
        <div className="flex flex-col gap-14">
          <div className="space-y-1.5">
            <h1 className="font-semibold text-[30px]">
              More than 10 Years of Experience
            </h1>
            <p className="text-[14px] font-regular">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-[32px]">85%</h4>
              <p className="text-[15px]">Completed Property</p>
            </div>

            <div>
              <h4 className="font-semibold text-[32px]">99%</h4>
              <p className="text-[15px]">Satisfied Customers</p>
            </div>

            <div>
              <h4 className="font-semibold text-[32px]">95%</h4>
              <p className="text-[15px]">Home ownership</p>
            </div>
          </div>
        </div>

        <div className="">
          <Swiper
            slidesPerView={1}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="h-[400px] w-[400px]"
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <SwiperSlide key={item}>
                <FeedbackCard />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ExperienceAndFeedback;
