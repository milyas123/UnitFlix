import { LuBadgeCheck } from "react-icons/lu";
import website from "@/data/website.json";
import LazyLoad from "react-lazyload";
import SpinnerContainer from "@/website/components/common/SpinnerContainer.jsx";

const PropertyIntro = () => {
  return (
    <div className="my-6 flex items-center justify-center p-2 sm:my-0 sm:p-0 md:h-[340px] lg:h-[430px] xl:h-[590px] 2xl:h-[720px]">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col gap-y-7 md:w-[56%] md:gap-y-2.5 lg:w-[55%] lg:gap-y-5 xl:gap-y-6 2xl:gap-y-8">
          <h1 className="text-[23px] font-bold md:text-[17px] lg:text-[20px] xl:text-[27px] 2xl:text-[31.5px]">
            {website.managePage.section1.heading}
          </h1>
          <p className="text-[13.5px] md:text-[9px] lg:text-[11px] xl:text-[15px] 2xl:text-[17.5px]">
            {website.managePage.section1.description}
          </p>

          <div className="flex flex-col gap-6 text-[13px] md:gap-2 md:text-[9px] lg:gap-4 lg:text-[11px] xl:gap-5 xl:text-[15px] 2xl:gap-6 2xl:text-[18px]">
            <div className="gap-y-6 md:gap-y-3 md:gap-x-3 lg:gap-y-5 lg:gap-x-5 xl:gap-y-6 xl:gap-x-6 grid grid-cols-2">
              {
                website.managePage.section1.points.map((p, index) => {
                  return (
                      <div className="flex items-center gap-x-2 md:gap-x-0.5 lg:gap-x-2 xl:gap-x-2 2xl:gap-x-2.5 w-full/2" key={index}>
                        <LuBadgeCheck size={30}/>
                        <p>
                          {p}
                        </p>
                      </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="ms-auto md:w-[39%]">
          <LazyLoad className="h-[610px] object-cover md:h-[250px] lg:h-[320px] xl:h-[450px] 2xl:h-[520px]" placeholder={<SpinnerContainer />}>
            <img
                src={website.managePage.section1.image}
                className="h-[610px] object-cover md:h-[250px] lg:h-[320px] xl:h-[450px] 2xl:h-[520px]"
                alt="property-image"
            />
          </LazyLoad>
        </div>
      </div>
    </div>
  );
};

export default PropertyIntro;
