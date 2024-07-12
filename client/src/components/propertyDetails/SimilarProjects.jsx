import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { MoveLeft, MoveRight } from "lucide-react";
import ProjectCard from "../landingPage/cards/ProjectCard";

import useSwiperNavigation from "@/hooks/useSwiperNavigation";

const SimilarProjects = () => {
  const projectsSwiperRef = useRef(null);
  const { isBeginning, isEnd } = useSwiperNavigation(projectsSwiperRef);

  return (
    <div className="md:mt-10 lg:mt-12 xl:mt-16 2xl:mt-24">
      <div className="flex items-center justify-between">
        <h1 className="font-medium md:text-[12px] lg:text-[15px] xl:text-[18px] 2xl:text-[24px]">
          Similar Projects from Developer
        </h1>
        <div className="flex items-center gap-3">
          <MoveLeft
            size={20}
            className={`cursor-pointer ${isBeginning && "cursor-default opacity-40"}`}
            onClick={() => projectsSwiperRef.current.swiper.slidePrev()}
            disabled={isBeginning}
          />
          <MoveRight
            size={20}
            className={`cursor-pointer ${isEnd && "cursor-default opacity-40"}`}
            onClick={() => projectsSwiperRef.current.swiper.slideNext()}
            disabled={isEnd}
          />
        </div>
      </div>
      <div className="md:mt-2 lg:mt-3 xl:mt-4 2xl:mt-5">
        <Swiper
          ref={projectsSwiperRef}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
          spaceBetween={16}
          modules={[Navigation]}
          className="md:h-[220px] lg:h-[260px] xl:h-[330px] 2xl:h-[420px]"
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <SwiperSlide key={item}>
              <ProjectCard key={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SimilarProjects;
