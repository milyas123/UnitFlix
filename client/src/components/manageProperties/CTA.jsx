import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="relative m-2 sm:m-0 mb-[2.5rem] md:mb-[4rem] h-[436px] md:h-[210px] lg:mb-[6rem] lg:h-[250px] xl:mb-[7rem] xl:h-[330px] 2xl:mb-[9rem] 2xl:h-[400px]">
      <img
        src="/assets/imgs/cta.webp"
        className="size-full object-cover"
        alt="call-to-action"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center text-white">
        <p className="font-regular text-[12px] md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[15px]">
          - Manage Properties
        </p>
        <h2 className="text-[24px] font-semibold md:text-[18px] lg:text-[21px] xl:text-[28px] 2xl:text-[32px]">
          Ready to Maximize Your Revenue
        </h2>
        <div className="flex items-center gap-5">
          <Link to="/contact-us">
            <Button className="gap-2 rounded-lg bg-white text-mirage hover:border-2 hover:border-white hover:bg-transparent hover:text-white">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
