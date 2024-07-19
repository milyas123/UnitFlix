import { Button } from "../../ui/button";

const ProjectCard = () => {
  const textSizes =
    "text-[16px] md:text-[7px] lg:text-[10px] xl:text-[12px] 2xl:text-[15px]";

  return (
    <div className="shadow-lg md:w-[185px] md:rounded-md lg:w-[99%] lg:max-w-[250px] xl:max-w-[295px] 2xl:max-w-[400px] 2xl:rounded-xl">
      <div className="relative">
        <img
          className="h-[310px] w-full rounded-xl object-cover shadow-lg shadow-pastelGrey md:h-[140px] md:rounded-md lg:h-[190px] lg:rounded-lg xl:h-[250px] 2xl:h-[310px] 2xl:rounded-xl"
          src="/assets/imgs/discover.jpg"
          alt="Dubai South"
        />
        <div className="absolute -bottom-[90px] left-4 right-4 z-[300] rounded-xl bg-white px-3 py-4 shadow-lg md:-bottom-16 md:left-2 md:right-2 md:rounded-md md:p-2 lg:-bottom-14 lg:left-3.5 lg:right-3.5 lg:rounded-lg lg:p-3 xl:-bottom-16 xl:left-5 xl:right-5 2xl:-bottom-24 2xl:left-6 2xl:right-6 2xl:rounded-xl 2xl:p-3.5">
          <h2
            className={`text-center font-semibold md:mb-0.5 lg:mb-1 xl:mb-1.5 2xl:mb-2 ${textSizes}`}
          >
            Azizi Venice at Dubai South
          </h2>
          <p className={`text-center ${textSizes}`}>
            Luxurious 1-3 Bedroom Waterfront Apartments & Villas
          </p>
          <p
            className={`text-center font-semibold text-gray-700 md:mt-0.5 lg:mt-1 xl:mt-1.5 2xl:mt-2 ${textSizes}`}
          >
            Starting From <br /> AED 2,000,000
          </p>
          <div className="flex justify-center md:mt-1.5 lg:mt-2 xl:mt-3 2xl:mt-4">
            <Button
              className={`font-semibold md:h-2 md:px-2 lg:h-6 lg:px-3 xl:h-7 xl:px-4 2xl:h-8 ${textSizes}`}
            >
              Register Your Interest
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
