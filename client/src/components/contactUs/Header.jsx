const Header = () => {
  return (
    <div className="relative h-[460px] md:h-[210px] lg:h-[45vh] lg:max-h-[280px] lg:min-h-[240px] xl:h-[100vh] xl:max-h-[340px] 2xl:h-[45vh] 2xl:max-h-[425px] 2xl:min-h-[385px]">
      <img
        src="/assets/imgs/properties-hero.png"
        className="absolute size-full object-cover"
        alt=""
      />
      <div className="absolute z-10 flex size-full items-center justify-center">
        <div className="space-y-6 text-center text-white">
          <h1 className="text-[36px] font-semibold md:text-[20px] lg:text-[30px] xl:text-[40px] 2xl:text-5xl">
            Contact Us
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
