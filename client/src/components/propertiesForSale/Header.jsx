import Filters from "../landingPage/Filters";

const Header = () => {
  return (
    <div className="h-[55vh] md:h-[50vh] relative">
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
      <div className="absolute z-20 w-full -bottom-[26rem] md:-bottom-12">
        <Filters />
      </div>
    </div>
  );
};

export default Header;
