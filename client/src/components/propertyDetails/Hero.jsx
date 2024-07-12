const Hero = () => {
  return (
    <>
      <div className="relative h-[95vh] md:h-[80vh]">
        <img
          src="/assets/imgs/hero-section-img.jpg"
          className="absolute inset-0 size-full object-cover object-top"
          alt=""
        />
        <div className="absolute inset-0 z-50 bg-black bg-opacity-60"></div>
        <div className="absolute z-50 flex size-full items-center justify-center">
          <div className="space-y-2.5 text-center text-white md:space-y-1 lg:space-y-1.5 2xl:space-y-2">
            <h1 className="text-[32px] font-semibold md:text-[23px] lg:text-[26px] xl:text-[36px] 2xl:text-[43px]">
              One by Bingati at Business Bay, Dubai
            </h1>
            <p className="text-[14px] font-light md:text-[12px] lg:text-[13px] xl:text-[18px] 2xl:text-[22px]">
              Home / Properties For Sale / One By Bingati
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
