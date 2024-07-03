import React from "react";
import { Button } from "../ui/button";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="h-screen relative">
      <img
        src="/assets/imgs/cta.webp"
        className="object-cover size-full"
        alt="call-to-action"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 flex flex-col justify-center gap-4 items-center text-white text-center">
        <p className="text-[15px] font-regular">BUY OR SELL</p>
        <h2 className="font-semibold text-[36px]">
          Looking to Buy a new property or sell an existing one?
          <br />
          Homez provides an awesome solution!
        </h2>
        <div className="flex items-center gap-5">
          <Button className="rounded-lg gap-2 py-6">
            Submit Property <BsArrowUpRight size={20} />
          </Button>
          <Link to="/properties-for-sale">
            <Button className="rounded-lg bg-white text-mirage hover:text-white border-white hover:bg-transparent gap-2 py-6">
              Browse Properties <BsArrowUpRight size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
