import website from "@/data/website.json";
import AnimLazyLoader from "@/website/components/common/AnimLazyLoader.jsx";

const Header = () => {
  return (
    <div className="relative h-[460px] md:h-[210px] lg:h-[45vh] lg:max-h-[280px] lg:min-h-[240px] xl:h-[100vh] xl:max-h-[340px] 2xl:h-[45vh] 2xl:max-h-[425px] 2xl:min-h-[385px]">
        <AnimLazyLoader className={'absolute size-full'}>
            <img
                src={website.contactPage.backgroundImage}
                className="size-full object-cover"
                alt=""
            />
        </AnimLazyLoader>
        <div className="absolute z-10 flex size-full items-center justify-center">
            <div className="space-y-6 text-center text-white">
          <h1 className="text-[36px] font-semibold md:text-[20px] lg:text-[30px] xl:text-[40px] 2xl:text-5xl">
              {website.contactPage.heading}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
