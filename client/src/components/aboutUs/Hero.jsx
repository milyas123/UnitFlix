import { Button } from "../ui/button";

const Hero = () => {
  return (
    <>
      <div className="relative h-[88vh] overflow-hidden md:h-[82vh]">
        <img
          src="/assets/imgs/hero-section-img.jpg"
          className="absolute size-full object-cover object-top"
          alt=""
        />
        <div className="absolute inset-0 z-50 bg-black bg-opacity-50"></div>
        <div className="absolute z-50 mx-auto flex size-full items-center justify-center">
          <div className="mx-auto space-y-3 text-center text-white md:w-[76%] md:space-y-2.5 md:text-left lg:space-y-3.5 xl:space-y-4 2xl:space-y-5">
            <h1 className="text-[24px] font-semibold md:text-[35px] lg:text-[40px] xl:text-[54px] 2xl:text-[66px]">
              More than just Real Estate, <br /> We Build Dreams
            </h1>
            <p className="text-[16px] font-medium md:text-[11px] md:leading-[12px] lg:text-[14px] lg:leading-[14px] xl:text-[19px] 2xl:text-[23px] 2xl:leading-6">
              We understand buying a home is more than just a transaction.
              <br className="hidden md:flex" />
              Its about building a future, creating memories and finding a place
              to belong
            </p>
            <Button className="rounded-md bg-white px-2 text-mirage hover:border-white hover:text-white md:h-7 md:px-3 lg:h-8 lg:px-4 xl:h-9 xl:px-5 2xl:h-10 2xl:px-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
