import React from "react";
import { Button } from "../ui/button";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="h-[70vh] relative">
      <img
        src="/assets/imgs/cta.webp"
        className="object-cover size-full"
        alt="call-to-action"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 flex flex-col justify-center gap-4 items-center text-white text-center">
        <p className="font-regular md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
          BUY OR SELL
        </p>
        <h2 className="font-semibold md:text-[22px] lg:text-[26px] xl:text-[32px] 2xl:text-[36px]">
          Looking to Buy a new property or sell an existing one?
          <br />
          Homez provides an awesome solution!
        </h2>
        <div className="flex items-center md:text-[9px] md:gap-1.5 lg:text-[11px] lg:gap-2 xl:text-[13px] xl:gap-3.5 2xl:text-[15px] 2xl:gap-5">
          <Link to="/add-property">
            <Button className="rounded-lg md:h-7 lg:h-8 xl:h-9 2xl:gap-2 2xl:py-6">
              Submit Property <BsArrowUpRight size={20} />
            </Button>
          </Link>
          <Link to="/properties-for-sale">
            <Button className="rounded-lg bg-white text-mirage hover:text-white border-white hover:bg-transparent md:h-7 lg:h-8 xl:h-9 2xl:gap-2 2xl:py-6">
              Browse Properties <BsArrowUpRight size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
