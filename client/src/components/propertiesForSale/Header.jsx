import Filters from "../landingPage/Filters";

const Header = () => {
  return (
    <div className="h-[50vh] relative">
      <img
        src="/assets/imgs/properties-hero.png"
        className="absolute object-cover size-full"
        alt=""
      />
      <div className="absolute z-10 size-full flex justify-center items-center">
        <div className="text-center text-white space-y-6">
          <h1 className="font-semibold text-5xl">Properties For Sale</h1>
          <p className="font-light text-2xl">Home / Properties For Sale</p>
        </div>
      </div>
      <div className="absolute z-20 w-full -bottom-12">
        <Filters />
      </div>
    </div>
  );
};

export default Header;
