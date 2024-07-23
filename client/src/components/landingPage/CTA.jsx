import React from "react";
import { Button } from "../ui/button";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="relative h-[70vh]">
      <img
        src="/assets/imgs/cta.webp"
        className="size-full object-cover"
        alt="call-to-action"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center text-white">
        <p className="font-regular md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
          BUY OR SELL
        </p>
        <h2 className="text-[24px] font-semibold md:text-[22px] lg:text-[26px] xl:text-[32px] 2xl:text-[36px]">
          Looking to Buy a new property or sell an existing one?
          <br />
          Homez provides an awesome solution!
        </h2>
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-1.5 md:text-[9px] lg:gap-2 lg:text-[11px] xl:gap-3.5 xl:text-[13px] 2xl:gap-5 2xl:text-[15px]">
          <Link to="/add-property">
            <Button className="h-10 w-[200px] rounded-lg hover:bg-white hover:text-mirage md:h-7 md:w-auto lg:h-8 xl:h-9 2xl:gap-2 2xl:py-6">
              Submit Property <BsArrowUpRight size={20} />
            </Button>
          </Link>
          <Link to="/properties-for-sale">
            <Button className="h-10 w-[200px] rounded-lg border-white bg-white text-mirage hover:bg-transparent hover:text-white md:h-7 md:w-auto lg:h-8 xl:h-9 2xl:gap-2 2xl:py-6">
              Browse Properties <BsArrowUpRight size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
