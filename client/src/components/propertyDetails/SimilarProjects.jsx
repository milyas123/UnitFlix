import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { MoveLeft, MoveRight } from "lucide-react";
import ProjectCard from "../landingPage/cards/ProjectCard";

const SimilarProjects = () => {
  const projectsSwiperRef = useRef(null);
  
  return (
    <div className="mt-24">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-[24px]">
          Similar Projects from Developer
        </h1>
        <div className="flex items-center gap-3">
          <MoveLeft
            size={30}
            className="cursor-pointer"
            onClick={() => projectsSwiperRef.current.swiper.slidePrev()}
          />
          <MoveRight
            size={30}
            className="cursor-pointer"
            onClick={() => projectsSwiperRef.current.swiper.slideNext()}
          />
        </div>
      </div>
      <div className="mt-5">
        <Swiper
          ref={projectsSwiperRef}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
          spaceBetween={16}
          modules={[Navigation]}
          className="h-[415px]"
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
