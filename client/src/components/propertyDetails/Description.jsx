import { Button } from "../ui/button";
import { FiMapPin } from "react-icons/fi";
import { FileDown } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

import Property from "../svgs/Property";
import Bed from "../svgs/Bed";
import Area from "../svgs/Area";

const Description = () => {
  const titleSizes =
    "md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]";
  const valueSizes =
    "md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]";

  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center md:gap-x-1.5 2xl:gap-x-2.5">
            <h1 className="text-[24px] font-semibold md:text-[15px] lg:text-[18px] xl:text-[25px] 2xl:text-[30px]">
              One by Bingati Summary
            </h1>
            <Button className="border-sunriseOrange bg-sunriseOrange font-light text-white hover:cursor-default hover:bg-sunriseOrange md:h-4 md:rounded md:p-1 lg:h-5 lg:text-[10px] xl:h-6 2xl:h-7 2xl:text-[16px]">
              New Launch
            </Button>
          </div>

          <div className="md:space-y-0.5 lg:space-y-1 xl:space-y-1.5">
            <div className="flex items-center text-smokeyGrey md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
              <p className="border-e md:pe-1 2xl:pe-2">By Bingati Developers</p>
              <p className="flex items-center gap-x-1 md:ps-1 2xl:ps-2">
                <FiMapPin /> Marina Bay
              </p>
            </div>
            <Button className="items-center gap-x-1 rounded-md border bg-transparent text-mirage hover:text-white md:px-1 md:text-[7px] lg:h-6 lg:text-[9px]">
              <FileDown size={15} />
              Download Brochure
            </Button>
          </div>
        </div>

        <div className="md:space-y-0.5 lg:space-y-1 xl:space-y-1.5">
          <h3 className="text-end font-medium text-grey md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]">
            Starting From
          </h3>
          <p className="text-[30px] font-bold md:text-[10px] lg:text-[13px] xl:text-[18px] 2xl:text-[20px]">
            {formatCurrency(3500000)}
          </p>
        </div>
      </div>

      <div className="flex justify-between md:rounded md:border md:p-2 lg:p-2.5 xl:p-3 2xl:rounded-md 2xl:p-4">
        <div className="flex w-[33%] flex-col md:gap-y-1.5 lg:gap-y-2.5 xl:gap-y-3.5 2xl:gap-y-5">
          <div className={`flex items-center justify-between ${titleSizes}`}>
            <p className="flex items-center text-grey md:gap-1 lg:gap-1.5">
              <Property size={18} /> Property Type
            </p>
            <p
              className={`border-e font-semibold md:pe-2 lg:pe-3 xl:pe-3.5 2xl:pe-4 ${valueSizes}`}
            >
              Villa
            </p>
          </div>

          <div className={`flex items-center justify-between ${titleSizes}`}>
            <p className="flex items-center text-grey md:gap-1 lg:gap-1.5">
              <Property size={18} /> Property Type
            </p>
            <p
              className={`border-e font-semibold md:pe-2 lg:pe-3 xl:pe-3.5 2xl:pe-4 ${valueSizes}`}
            >
              Penthouse
            </p>
          </div>

          <div className={`flex items-center justify-between ${titleSizes}`}>
            <p className="flex items-center text-grey md:gap-1 lg:gap-1.5">
              <Property size={18} /> Property Type
            </p>
            <p
              className={`border-e font-semibold md:pe-2 lg:pe-3 xl:pe-3.5 2xl:pe-4 ${valueSizes}`}
            >
              Appartment
            </p>
          </div>

          <div className={`flex items-center justify-between ${titleSizes}`}>
            <p className="flex items-center text-grey md:gap-1 lg:gap-1.5">
              <Property size={18} /> Property Type
            </p>
            <p
              className={`border-e font-semibold md:pe-2 lg:pe-3 xl:pe-3.5 2xl:pe-4 ${valueSizes}`}
            >
              20%
            </p>
          </div>
        </div>

        <div className="flex w-[33%] flex-col md:gap-y-1.5 md:ps-2 lg:gap-y-2.5 lg:ps-3 xl:gap-y-3.5 xl:ps-3.5 2xl:gap-y-5 2xl:ps-4">
          <div className={`flex items-center justify-between ${titleSizes}`}>
            <p className="flex items-center text-grey md:gap-1 lg:gap-1.5">
              <Bed size={18} /> Unit Type
            </p>
            <p
              className={`border-e border-grey font-semibold md:pe-2 lg:pe-3 xl:pe-3.5 2xl:pe-4 ${valueSizes}`}
            >
              3 Bedrooms
            </p>
          </div>

          <div className={`flex items-center justify-between ${titleSizes}`}>
            <p className="flex items-center text-grey md:gap-1 lg:gap-1.5">
              <Bed size={18} /> Unit Type
            </p>
            <p
              className={`border-e font-semibold md:pe-2 lg:pe-3 xl:pe-3.5 2xl:pe-4 ${valueSizes}`}
            >
              2 Bedrooms
            </p>
          </div>

          <div className={`flex items-center justify-between ${titleSizes}`}>
            <p className="flex items-center text-grey md:gap-1 lg:gap-1.5">
              <Bed size={18} /> Unit Type
            </p>
            <p
              className={`border-e font-semibold md:pe-2 lg:pe-3 xl:pe-3.5 2xl:pe-4 ${valueSizes}`}
            >
              Studio, 1, 2 & 3 Bedrooms
            </p>
          </div>

          <div className={`flex items-center justify-between ${titleSizes}`}>
            <p className="flex items-center text-grey md:gap-1 lg:gap-1.5">
              <Bed size={18} /> Payment Plan
            </p>
            <p
              className={`border-e font-semibold md:pe-2 lg:pe-3 xl:pe-3.5 2xl:pe-4 ${valueSizes}`}
            >
              70/30
            </p>
          </div>
        </div>

        <div className="flex w-[33%] flex-col md:gap-y-1.5 md:ps-2 lg:gap-y-2.5 lg:ps-3 xl:gap-y-3.5 xl:ps-3.5 2xl:gap-y-5 2xl:ps-4">
          <div className={`flex items-center justify-between ${titleSizes}`}>
            <p className="flex items-center text-grey md:gap-1 lg:gap-1.5">
              <Area size={18} /> Size
            </p>
            <p className={`font-semibold ${valueSizes}`}>
              Various Sizes Available
            </p>
          </div>

          <div className={`flex items-center justify-between ${titleSizes}`}>
            <p className="flex items-center text-grey md:gap-1 lg:gap-1.5">
              <Area size={18} /> Size
            </p>
            <p className={`font-semibold ${valueSizes}`}>
              Various Sizes Available
            </p>
          </div>

          <div className={`flex items-center justify-between ${titleSizes}`}>
            <p className="flex items-center text-grey md:gap-1 lg:gap-1.5">
              <Area size={18} /> Size
            </p>
            <p className={`font-semibold ${valueSizes}`}>
              Various Sizes Available
            </p>
          </div>

          <div className={`flex items-center justify-between ${titleSizes}`}>
            <p className="flex items-center text-grey md:gap-1 lg:gap-1.5">
              <Area size={18} /> Hand Over
            </p>
            <p className={`font-semibold ${valueSizes}`}>Q4 - 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
