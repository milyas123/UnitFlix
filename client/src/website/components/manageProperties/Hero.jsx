import { Button } from "../ui/button";
import website from "@/data/website.json";
import AnimLazyLoader from "@/website/components/common/AnimLazyLoader.jsx";

const Hero = () => {

  const onLearnMore = () => {
    const missionSection = document.querySelector("#intro-section");
    if(missionSection) {
      missionSection.scrollIntoView({behavior: "smooth"});
    }
  }

  return (
    <>
      <div className="relative h-[800px] overflow-hidden md:h-[395px] lg:h-[82vh] lg:max-h-[530px] lg:min-h-[450px] xl:min-h-[625px] xl:h-[100vh] 2xl:min-h-[710px] 2xl:h-[82vh] 2xl:max-h-[800px]">
        <AnimLazyLoader className={"absolute size-full"}>
          <img
              src={website.managePage.backgroundImage}
              className="absolute size-full object-cover object-top"
              alt=""
          />
        </AnimLazyLoader>
        <div className="absolute inset-0 z-50 bg-black bg-opacity-0"></div>
        <div className="absolute z-50 mx-auto flex size-full items-center justify-center">
          <div className="mx-auto px-2 space-y-3 text-center text-white md:w-[76%] md:space-y-2.5 md:text-left lg:space-y-3.5 xl:space-y-4 2xl:space-y-5">
            <h1 className="text-[24px] font-semibold md:w-[70%] md:text-[35px] lg:text-[40px] xl:text-[54px] 2xl:text-[66px]">
              {website.managePage.heading}
            </h1>
            <p className="font-regular text-[16px] md:w-[40%] md:text-[11px] lg:w-[45%] lg:text-[14px] xl:text-[19px] 2xl:text-[23px]">
              {website.managePage.subHeading}
            </p>
            <Button className="rounded-md border-transparent bg-white px-2 text-mirage hover:border-white hover:text-white md:h-7 md:px-3 lg:h-8 lg:px-4 xl:h-9 xl:px-5 2xl:h-10 2xl:px-6" onClick={onLearnMore}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
