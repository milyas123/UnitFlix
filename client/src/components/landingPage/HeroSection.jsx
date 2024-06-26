import Filters from "./Filters";

const HeroSection = () => {
  return (
    <>
      <div className="h-screen relative overflow-hidden">
        <img
          src="/assets/imgs/hero-section-img.jpg"
          className="absolute top-0"
          alt=""
        />
        <div className="absolute z-50 bg-black bg-opacity-50 inset-0"></div>
        <div className="absolute z-50 size-full flex justify-center items-center">
          <div className="text-center text-white space-y-6">
            <h1 className="font-semibold text-5xl">Find Your Perfect Place</h1>
            <p className="font-regular text-4xl">Discover, Invest, Live</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
