import { Button } from "../ui/button";

const Hero = () => {
  return (
    <>
      <div className="relative h-[82vh] overflow-hidden">
        <img
          src="/assets/imgs/hero-section-img.jpg"
          className="absolute size-full object-cover object-top"
          alt=""
        />
        <div className="absolute inset-0 z-50 bg-black bg-opacity-50"></div>
        <div className="absolute z-50 mx-auto flex size-full items-center justify-center">
          <div className="mx-auto w-[76%] text-white md:space-y-2.5 lg:space-y-3.5 xl:space-y-4 2xl:space-y-5">
            <h1 className="w-[70%] font-semibold md:text-[35px] lg:text-[40px] xl:text-[54px] 2xl:text-[66px]">
              Manage Your Properties Effortlessly
            </h1>
            <p className="font-regular md:w-[40%] md:text-[11px] md:leading-tight lg:w-[45%] lg:text-[14px] xl:text-[19px] 2xl:text-[23px]">
              Maximize Revenue, Minimize Stress: Elevate your property returns
              with effortless management
            </p>
            <Button className="rounded-md bg-white px-2 text-mirage hover:border-white hover:text-white">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
