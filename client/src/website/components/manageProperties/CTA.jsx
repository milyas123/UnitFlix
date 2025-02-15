import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import website from "@/data/website.json";
import LazyLoad from "react-lazyload";
import SpinnerContainer from "@/website/components/common/SpinnerContainer.jsx";

const CTA = () => {
  return (
    <div className="relative m-2 mb-[2.5rem] h-[436px] overflow-hidden rounded-md sm:m-0 md:mb-[4rem] md:h-[210px] lg:mb-[6rem] lg:h-[250px] xl:mb-[7rem] xl:h-[330px] 2xl:mb-[9rem] 2xl:h-[400px]">
        <LazyLoad className="h-full w-full" placeholder={<SpinnerContainer />}>
            <img
                src={website.managePage.section4.backgroundImage}
                className="h-full w-full object-cover"
                alt="call-to-action"
            />
        </LazyLoad>
        <div className="absolute inset-0 rounded-lg bg-black bg-opacity-50"/>
        <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center text-white md:gap-5 lg:gap-7 xl:gap-8 2xl:gap-10">
        <p className="font-regular text-[12px] md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[15px]">
          - {website.managePage.section4.subHeading}
        </p>
        <h2 className="text-[24px] font-semibold md:text-[18px] lg:text-[21px] xl:text-[28px] 2xl:text-[32px]">
            {website.managePage.section4.heading}
        </h2>
        <Link to="/contact-us">
          <Button className="gap-2 rounded-lg border-transparent bg-white text-mirage hover:border-2 hover:border-white hover:bg-transparent hover:text-white md:h-[30px] md:px-6 lg:h-[35px] lg:px-8 xl:h-[40px] xl:px-10 2xl:h-[45px] 2xl:px-12">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CTA;
