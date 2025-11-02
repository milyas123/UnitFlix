import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { formatCurrency } from "@/lib/utils";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";
import PropertyTags from "@/website/components/common/PropertyTags.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import AnimLazyLoader from "@/website/components/common/AnimLazyLoader.jsx";

const ProjectCard = ({ project, isLimited, onRegisterInterest, showRegisterInterest }) => {
  const textSizes =
    "text-[16px] md:text-[7px] lg:text-[10px] xl:text-[12px] 2xl:text-[15px]";

  return (
    <Link className='contents' reloadDocument to={`/property-details/${project?.id}`}>
      <div className={`group cursor-pointer ${isLimited ? 'w-full md:w-[90%] md:min-w-[150px] md:max-w-[200px] lg:w-[95%] lg:min-w-[225px] lg:max-w-[270px] xl:w-[92%] xl:min-w-[290px] xl:max-w-[320px] 2xl:w-[95%] 2xl:min-w-[345px] 2xl:max-w-[400px]' : 'shadow-lg md:w-[95%] md:max-w-[190px] md:rounded-md lg:w-[99%] lg:max-w-[250px] xl:max-w-[295px] 2xl:max-w-[400px] 2xl:rounded-xl'}`}>
        <div className={`relative`}>
          <div className={'relative'}>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              navigation={true}
              className={`rounded-t-lg ${isLimited ? 'rounded-t-xl  2xl:rounded-t-xl md:rounded-t-md lg:rounded-t-lg shadow-lg shadow-pastelGrey h-[320px] md:h-[160px] lg:h-[180px] xl:h-[200px] 2xl:h-[300px]' : 'h-[300px] md:h-[140px] lg:h-[160px] xl:h-[180px] 2xl:h-[280px]'}`}
              style={{
                "--swiper-navigation-size": "16px",
                "--swiper-navigation-color": "#FFFFFF",
                "--swiper-pagination-color": "#FFFFFF",
              }}
            >
              {project?.files.map((image) => (
                <SwiperSlide key={image.id} className="relative">
                  <AnimLazyLoader className='size-full'>
                    <img loading='lazy'
                      className={`size-full object-cover`}
                      src={image?.url}
                      alt="Dubai South"
                    />
                  </AnimLazyLoader>
                  <div
                    className={`absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-20 transition-all duration-300 ease-in-out z-10 ${isLimited ? "rounded-lg" : "rounded-xl  2xl:rounded-xl md:rounded-md lg:rounded-lg"}`}></div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='absolute top-2 w-[92%] left-2 flex items-center gap-2 z-[100]'>
            <PropertyTags property={project} />
          </div>
          <div
            className={`z-[300] bg-white px-3 py-4 md:p-2 lg:p-3 2xl:p-3.5 relative border border-lightGrey bottom-0 left-0 right-0 rounded-b-lg`}>
            <h2
              className={`mb-1.5 text-left font-semibold md:mb-0.5 lg:mb-1 xl:mb-1.5 2xl:mb-2 ${textSizes}`}
            >
              {project?.title} at {project?.propertyLocation.name} by {project?.propertyDeveloper.name}
            </h2>
            <p className={`text-left'} ${textSizes}`}>
              {
                project?.tags
              }
            </p>
            <p className={`mt-1.5 text-center font-semibold text-gray-700 md:mt-0.5 lg:mt-1 xl:mt-1.5 2xl:mt-2 ${textSizes} flex flex-col items-start`} >
              <p>Starting From</p> <p className='text-mirage text-[20px] font-bold md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px]'>{formatCurrency(project?.price)}</p>
            </p>
            {
              showRegisterInterest &&
              <div className="mt-2 flex justify-start md:mt-1.5 lg:mt-2 xl:mt-3 2xl:mt-4">
                <Button
                  className={`font-semibold hover:bg-white hover:text-mirage md:h-2 md:px-2 lg:h-6 lg:px-3 xl:h-7 xl:px-4 2xl:h-8 ${textSizes}`}
                  onClick={onRegisterInterest}>
                  Register Your Interest
                </Button>
              </div>
            }
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
