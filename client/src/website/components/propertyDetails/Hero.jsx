import BreadCrumb from "@/website/components/common/BreadCrumb.jsx";
import AnimLazyLoader from "@/website/components/common/AnimLazyLoader.jsx";

const Hero = ({ title, location, coverImage, purpose }) => {
  return (
    <>
      <div className="relative h-[795px] md:h-[385px] lg:h-[80vh] lg:max-h-[520px] lg:min-h-[440px] xl:h-[100vh] xl:min-h-[615px] 2xl:h-[80.5vh] 2xl:max-h-[770px] 2xl:min-h-[700px]">
        <AnimLazyLoader className={"absolute inset-0 size-full"}>
          <img
              src={coverImage}
              className="absolute inset-0 size-full object-cover object-center"
              alt=""
          />
        </AnimLazyLoader>
        <div className="absolute inset-0 z-50 bg-black bg-opacity-20"></div>
        <div className="absolute z-50 flex size-full items-center justify-center">
          <div className="space-y-2.5 text-center text-white md:space-y-1 lg:space-y-1.5 2xl:space-y-2 px-2 md:px-0 max-w-[100%] md:max-w-[500px] lg:max-w-[700px] xl:max-w-[1000px] 2xl:max-w-[1200px]">
            <h1 className="text-[32px] font-semibold md:text-[23px] lg:text-[26px] xl:text-[36px] 2xl:text-[43px]">
              {`${title} at ${location}`}
            </h1>
            <p className="text-[14px] font-light md:text-[12px] lg:text-[13px] xl:text-[18px] 2xl:text-[22px]">
              <BreadCrumb text={'Home'} link={'/'} /> / <BreadCrumb text={`Properties For ${purpose === 0 ? 'Sale' : 'Rent'}`} link={`/search?page=1&purpose=${purpose}`} /> / {location}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
