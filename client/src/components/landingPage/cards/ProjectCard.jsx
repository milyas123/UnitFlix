import { Button } from "../../ui/button";

const ProjectCard = () => {
  const textSizes = "text-[16px] md:text-[7px] lg:text-[10px] xl:text-[12px] 2xl:text-[15px]";

  return (
    <div className="md:w-[170px] md:rounded-md lg:w-[220px] xl:w-[270px] 2xl:w-[320px] 2xl:rounded-xl shadow-lg">
      <div className="relative">
        <img
          className="w-full rounded-xl h-[310px] md:h-[140px] md:rounded-md lg:h-[190px] lg:rounded-lg xl:h-[250px] 2xl:h-[310px] 2xl:rounded-xl object-cover"
          src="/assets/imgs/discover.jpg"
          alt="Dubai South"
        />
        <div className="absolute z-[300] bg-white shadow-lg left-4 right-4 -bottom-[90px] px-3 py-4 rounded-xl md:left-2 md:right-2 md:-bottom-16 md:p-2 md:rounded-md lg:left-3.5 lg:right-3.5 lg:-bottom-14 lg:rounded-lg lg:p-3 xl:right-5 xl:left-5 xl:-bottom-16 2xl:left-6 2xl:right-6 2xl:p-3.5 2xl:-bottom-24 2xl:rounded-xl">
          <h2 className={`text-center font-semibold md:mb-0.5 lg:mb-1 xl:mb-1.5 2xl:mb-2 ${textSizes}`}>
            Azizi Venice at Dubai South
          </h2>
          <p className={`text-center ${textSizes}`}>
            Luxurious 1-3 Bedroom Waterfront Apartments & Villas
          </p>
          <p className={`text-center text-smokeyGrey font-semibold md:mt-0.5 lg:mt-1 xl:mt-1.5 2xl:mt-2 ${textSizes}`}>
            Starting From <br /> AED 2,000,000
          </p>
          <div className="flex justify-center md:mt-1.5 lg:mt-2 xl:mt-3 2xl:mt-4">
            <Button className={`font-semibold md:h-5 md:px-2 lg:h-6 lg:px-3 xl:h-7 xl:px-4 2xl:px-5 2xl:py-6 ${textSizes}`}>
              Register Your Interest
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
