const Header = () => {
  return (
    <div className="h-[45vh] relative">
      <img
        src="/assets/imgs/properties-hero.png"
        className="absolute object-cover size-full"
        alt=""
      />
      <div className="absolute z-10 size-full flex justify-center items-center">
        <div className="text-center text-white space-y-6">
          <h1 className="font-semibold text-[36px] md:text-[20px] lg:text-[30px] xl:text-[40px] 2xl:text-5xl">Contact Us</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
