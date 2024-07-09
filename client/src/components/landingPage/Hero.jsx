import Filters from "./Filters";

const Hero = () => {
  return (
    <section className="h-[71vh] relative">
      <img
        src="/assets/imgs/hero-section-img.jpg"
        className="absolute top-0 object-cover size-full object-top"
        alt=""
      />
      <div className="absolute z-50 bg-black bg-opacity-50 inset-0"></div>
      <div className="absolute z-50 size-full flex justify-center items-center">
        <div className="text-center text-white md:space-y-1.5 lg:space-y-3.5 xl:space-y-5 2xl:space-y-6">
          <h1 className="font-semibold md:text-xl lg:text-[26px] xl:text-[32px] 2xl:text-5xl">Find Your Perfect Place</h1>
          <p className="font-regular md:text-md lg:text-xl xl:text-2xl 2xl:text-4xl">Discover, Invest, Live</p>
        </div>
      </div>
      <div className="absolute w-full z-[200] -bottom-12">
        <Filters />
      </div>
    </section>
  );
};

export default Hero;
