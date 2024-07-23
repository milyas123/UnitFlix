import Filters from "./Filters";

const Hero = () => {
  return (
    <section className="relative h-[800px] md:h-[385px] lg:h-[80vh] lg:max-h-[520px] lg:min-h-[440px] xl:min-h-[615px] xl:h-[100vh] 2xl:min-h-[700px] 2xl:h-[80.5vh] 2xl:max-h-[770px]">
      <img
        src="/assets/imgs/hero-section-img.jpg"
        className="absolute inset-0 size-full object-cover object-top"
        alt=""
      />
      <div className="absolute inset-0 z-50 bg-black bg-opacity-50"></div>
      <div className="absolute z-50 flex size-full items-center justify-center">
        <div className="space-y-4 text-center text-white md:space-y-2 lg:space-y-3.5 2xl:space-y-4">
          <h1 className="mx-7 text-[44px] font-semibold md:text-[23px] lg:text-[28px] xl:text-[36px] 2xl:text-[44px]">
            Find Your Perfect Place
          </h1>
          <p className="font-regular text-[30px] md:text-[18px] lg:text-[22px] xl:text-[26px] 2xl:text-[34px]">
            Discover, Invest, Live
          </p>
        </div>
      </div>
      <div className="absolute -bottom-[22rem] z-[200] w-full md:-bottom-6 xl:-bottom-10">
        <Filters />
      </div>
    </section>
  );
};

export default Hero;
