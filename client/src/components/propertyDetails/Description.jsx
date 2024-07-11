import { Button } from "../ui/button";
import { FiMapPin } from "react-icons/fi";
import { FileDown } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { PiBuildingOfficeLight } from "react-icons/pi";
import { IoReceiptOutline } from "react-icons/io5";

import { LiaBedSolid } from "react-icons/lia";
import { GiResize } from "react-icons/gi";

const Description = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-x-2.5">
            <h1 className="font-semibold text-[32px]">
              One by Bingati Summary
            </h1>
            <Button className="rounded-md bg-sunriseOrange text-white border-sunriseOrange hover:bg-sunriseOrange hover:cursor-default">
              New Launch
            </Button>
          </div>

          <div className="space-y-2">
            <div className="flex items-center text-[14px]">
              <p className="pe-2 border-e">By Bingati Developers</p>
              <p className="ps-2 flex items-center gap-x-1">
                <FiMapPin /> Marina Bay
              </p>
            </div>
            <Button className="rounded-md bg-transparent text-mirage hover:text-white items-center gap-x-1">
              <FileDown />
              Download Brochure
            </Button>
          </div>
        </div>

        <div>
          <h3 className="font-medium text-[16px] text-grey">Starting From</h3>
          <p className="font-bold text-2xl">{formatCurrency(3500000)}</p>
        </div>
      </div>

      <div className="rounded-md border-2 p-5 flex justify-between">
        <div className="w-[33%] flex flex-col gap-y-4">
          <div className="text-[14px] flex justify-between items-center">
            <p className="text-grey flex items-center gap-1.5">
              <PiBuildingOfficeLight size={22} /> Property Type
            </p>
            <p className="font-semibold text-[16px] pe-4 border-e border-grey">
              Villa
            </p>
          </div>

          <div className="text-[14px] flex justify-between items-center">
            <p className="text-grey flex items-center gap-1.5">
              <PiBuildingOfficeLight size={22} /> Property Type
            </p>
            <p className="font-semibold text-[16px] pe-4 border-e border-grey">
              Penthouse
            </p>
          </div>

          <div className="text-[14px] flex justify-between items-center">
            <p className="text-grey flex items-center gap-1.5">
              <PiBuildingOfficeLight size={22} /> Property Type
            </p>
            <p className="font-semibold text-[16px] pe-4 border-e border-grey">
              Appartment
            </p>
          </div>

          <div className="text-[14px] flex justify-between items-center">
            <p className="text-grey flex items-center gap-1.5">
              <IoReceiptOutline size={22} /> Property Type
            </p>
            <p className="font-semibold text-[16px] pe-4 border-e border-grey">
              20%
            </p>
          </div>
        </div>

        <div className="ps-4 w-[33%] flex flex-col gap-y-4">
          <div className="text-[14px] flex justify-between items-center">
            <p className="text-grey flex items-center gap-1.5">
              <LiaBedSolid size={22} /> Unit Type
            </p>
            <p className="font-semibold text-[16px] pe-4 border-e border-grey">
              3 Bedrooms
            </p>
          </div>

          <div className="text-[14px] flex justify-between items-center">
            <p className="text-grey flex items-center gap-1.5">
              <LiaBedSolid size={22} /> Unit Type
            </p>
            <p className="font-semibold text-[16px] pe-4 border-e border-grey">
              2 Bedrooms
            </p>
          </div>

          <div className="text-[14px] flex justify-between items-center">
            <p className="text-grey flex items-center gap-1.5">
              <LiaBedSolid size={22} /> Unit Type
            </p>
            <p className="font-semibold text-[16px] pe-4 border-e border-grey">
              Studio, 1, 2 & 3 Bedrooms
            </p>
          </div>

          <div className="text-[14px] flex justify-between items-center">
            <p className="text-grey flex items-center gap-1.5">
              <LiaBedSolid size={22} /> Payment Plan
            </p>
            <p className="font-semibold text-[16px] pe-4 border-e border-grey">
              70/30
            </p>
          </div>
        </div>

        <div className="ps-4 w-[33%] flex flex-col gap-y-4">
          <div className="text-[14px] flex justify-between items-center">
            <p className="text-grey flex items-center gap-1.5">
              <GiResize size={22} /> Size
            </p>
            <p className="font-semibold text-[16px]">Various Sizes Available</p>
          </div>

          <div className="text-[14px] flex justify-between items-center">
            <p className="text-grey flex items-center gap-1.5">
              <GiResize size={22} /> Size
            </p>
            <p className="font-semibold text-[16px]">Various Sizes Available</p>
          </div>

          <div className="text-[14px] flex justify-between items-center">
            <p className="text-grey flex items-center gap-1.5">
              <GiResize size={22} /> Size
            </p>
            <p className="font-semibold text-[16px]">Various Sizes Available</p>
          </div>

          <div className="text-[14px] flex justify-between items-center">
            <p className="text-grey flex items-center gap-1.5">
              <GiResize size={22} /> Hand Over
            </p>
            <p className="font-semibold text-[16px]">Q4 - 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
