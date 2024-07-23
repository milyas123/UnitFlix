import Filters from "../landingPage/Filters";

const Header = () => {
  return (
    <div className="h-[460px] md:h-[210px] lg:min-h-[240px] lg:h-[45vh] lg:max-h-[280px] xl:max-h-[340px] xl:h-[100vh] 2xl:min-h-[385px] 2xl:h-[45vh] 2xl:max-h-[425px] relative">
      <img
        src="/assets/imgs/properties-hero.png"
        className="absolute object-cover size-full"
        alt=""
      />
      <div className="absolute z-10 size-full flex justify-center items-center">
        <div className="text-center text-white space-y-4 md:space-y-1.5 lg:space-y-3.5 xl:space-y-5 2xl:space-y-6">
          <h1 className="font-semibold text-[36px] md:text-xl lg:text-[26px] xl:text-[32px] 2xl:text-5xl">Properties For Sale</h1>
          <p className="font-light text-[16px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px]">Home / Properties For Sale</p>
        </div>
      </div>
      <div className="absolute z-20 w-full -bottom-[26rem] md:-bottom-6 lg:-bottom-7 xl:-bottom-10 2xl:-bottom-11">
        <Filters />
      </div>
    </div>
  );
};

export default Header;
