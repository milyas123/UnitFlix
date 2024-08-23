import BreadCrumb from "@/website/components/common/BreadCrumb.jsx";

const Header = ({purpose}) => {
      return (
        <div className="relative h-[460px] md:h-[210px] lg:h-[45vh] lg:max-h-[280px] lg:min-h-[240px] xl:h-[100vh] xl:max-h-[340px] 2xl:h-[45vh] 2xl:max-h-[425px] 2xl:min-h-[385px]">
          <img
            src="/assets/imgs/properties-hero.png"
            className="absolute size-full object-cover"
            alt=""
          />
          <div className="absolute z-10 flex size-full items-center justify-center">
            <div className="space-y-4 text-center text-white md:space-y-1.5 lg:space-y-3.5 xl:space-y-5 2xl:space-y-6">
              <h1 className="text-[36px] font-semibold md:text-xl lg:text-[26px] xl:text-[32px] 2xl:text-5xl">
                Properties {purpose === 0 ? 'For Sale' : (purpose === 1 ? 'For Rent' : '') }
              </h1>
              <p className="text-[16px] font-light md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px]">
                <BreadCrumb text={'Home'} link={'/'} /> / Properties {purpose === 0 ? 'For Sale' : (purpose === 1 ? 'For Rent' : '') }
              </p>
            </div>
          </div>
        </div>
      );
};

export default Header;
