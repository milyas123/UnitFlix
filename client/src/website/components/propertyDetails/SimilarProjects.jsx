import "swiper/css";
import "swiper/css/pagination";
import {useRef, useState} from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import ProjectCard from "../landingPage/cards/ProjectCard";

import useSwiperNavigation from "@/hooks/useSwiperNavigation";
import ArrowLeft from "../svgs/ArrowLeft";
import ArrowRight from "../svgs/ArrowRight";
import RegisterInterestModal from "@/website/components/common/RegisterInterestModal.jsx";

const SimilarProjects = ({ relatedProjects }) => {
  const projectsSwiperRef = useRef(null);
  const { isBeginning, isEnd } = useSwiperNavigation(projectsSwiperRef);
  const [isRegisterInterestModalShown, setIsRegisterInterestModalShown] = useState(false);
  const [interestedPropertyId, setInterestedPropertyId] = useState();

  if(!relatedProjects || relatedProjects.length === 0) {
      return (<></>)
  }

    const registerInterest = (e, property) => {
      e.preventDefault();
      e.stopPropagation();
      setInterestedPropertyId(property.id);
      setIsRegisterInterestModalShown(true);
    }

  return (
    <>
        <div className="mt-8 md:mt-10 lg:mt-12 xl:mt-16 2xl:mt-24">
            <div className="flex items-center justify-between">
                <h1 className="text-[16px] font-medium md:text-[12px] lg:text-[15px] xl:text-[18px] 2xl:text-[24px]">
                    Similar Projects from Developer
                </h1>
                <div className="flex items-center justify-end gap-x-1.5">
                    <ArrowLeft
                        className={`cursor-pointer md:text-xs lg:text-lg ${
                            isBeginning && "cursor-default opacity-40"
                        }`}
                        onClick={() => projectsSwiperRef.current.swiper.slidePrev()}
                        disabled={isBeginning}
                    />
                    <ArrowRight
                        className={`cursor-pointer md:text-xs lg:text-lg ${
                            isEnd && "cursor-default opacity-40"
                        }`}
                        onClick={() => projectsSwiperRef.current.swiper.slideNext()}
                        disabled={isEnd}
                    />
                </div>
            </div>
            <div className="mt-4 md:mt-2 lg:mt-3 xl:mt-4 2xl:mt-5">
                <Swiper
                    ref={projectsSwiperRef}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 3 },
                    }}
                    spaceBetween={16}
                    modules={[Navigation]}
                    className="h-[450px] md:h-[220px] lg:h-[260px] xl:h-[330px] 2xl:h-[420px]"
                >
                    {relatedProjects?.map((project) => (
                        <SwiperSlide key={window.crypto.randomUUID()}>
                            <ProjectCard project={project} onRegisterInterest={(e) => registerInterest(e, project)}  />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
        {
            isRegisterInterestModalShown ?
                <RegisterInterestModal propertyId={interestedPropertyId} onClose={() => setIsRegisterInterestModalShown(false)} /> : <></>
        }
    </>
  );
};

export default SimilarProjects;
