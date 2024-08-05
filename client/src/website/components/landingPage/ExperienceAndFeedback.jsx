import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import FeedbackCard from "./cards/FeedbackCard";

const ExperienceAndFeedback = () => {
  return (
    <div className="flex items-center justify-center bg-white md:h-[370px] lg:h-[50vh] lg:max-h-[520px] lg:min-h-[440px] xl:min-h-[540px] xl:h-[100vh] 2xl:min-h-[600px] 2xl:h-[70vh] 2xl:max-h-[680px]">
      <div className="mx-auto my-[3rem] flex w-full flex-col items-center justify-between gap-14 px-4 md:w-[65%] md:flex-row md:px-0">
        <div className="flex flex-col gap-4 md:gap-5 lg:gap-7 xl:gap-10 2xl:gap-14">
          <div className="space-y-1.5">
            <h1 className="text-[30px] font-semibold md:whitespace-nowrap md:text-[14px] lg:text-[18px] xl:text-[24px] 2xl:text-[30px]">
              More than 10 Years of Experience
            </h1>
            <p className="font-regular text-[14px] md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>

          <div className="flex items-center justify-between whitespace-nowrap md:gap-10 lg:gap-14 xl:gap-16 2xl:gap-24">
            <div>
              <h4 className="text-[24px] font-semibold md:text-[16px] lg:text-[20px] xl:text-[26px] 2xl:text-[32px]">
                85%
              </h4>
              <p className="text-[12px] md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[15px]">
                Completed Property
              </p>
            </div>

            <div>
              <h4 className="text-[24px] font-semibold md:text-[16px] lg:text-[20px] xl:text-[26px] 2xl:text-[32px]">
                99%
              </h4>
              <p className="text-[12px] md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[15px]">
                Satisfied Customers
              </p>
            </div>

            <div>
              <h4 className="text-[24px] font-semibold md:text-[16px] lg:text-[20px] xl:text-[26px] 2xl:text-[32px]">
                95%
              </h4>
              <p className="text-[12px] md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[15px]">
                Home ownership
              </p>
            </div>
          </div>
        </div>

        <div className="ms-auto w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="h-[400px] md:h-[200px] md:w-[170px] lg:h-[240px] lg:w-[270px] xl:h-[305px] xl:w-[350px] 2xl:h-[400px] 2xl:w-[400px]"
            style={{
              "--swiper-pagination-color": "#181a20",
            }}
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
