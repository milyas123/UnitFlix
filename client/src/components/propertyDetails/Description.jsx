import { Button } from "../ui/button";
import { FiMapPin } from "react-icons/fi";
import { FileDown } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

import Property from "../svgs/Property";
import Bed from "../svgs/Bed";
import Area from "../svgs/Area";

const Description = () => {
  const titleSizes =
    "text-[14px] md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]";
  const valueSizes =
    "text-[14px] md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]";

  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex flex-col justify-between md:flex-row md:items-center">
        <div>
          <div className="items-center md:flex md:gap-x-1.5 2xl:gap-x-2.5">
            <h1 className="text-[24px] font-semibold md:text-[15px] lg:text-[18px] xl:text-[25px] 2xl:text-[30px]">
              One by Bingati Summary
            </h1>
            <Button className="hidden border-sunriseOrange bg-sunriseOrange font-light text-white hover:cursor-default hover:bg-sunriseOrange md:flex md:h-4 md:rounded md:p-1 lg:h-5 lg:text-[10px] xl:h-6 2xl:h-7 2xl:text-[16px]">
              New Launch
            </Button>
          </div>

          <div className="md:space-y-0.5 lg:space-y-1 xl:space-y-1.5">
            <div className="flex items-center text-[14px] text-smokeyGrey md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
              <p className="border-e pe-1.5 md:pe-1 2xl:pe-2">
                By Bingati Developers
              </p>
              <p className="flex items-center gap-x-1 ps-1.5 md:ps-1 2xl:ps-2">
                <FiMapPin /> Marina Bay
              </p>
            </div>
            <Button className="hidden items-center gap-x-1 rounded-md border bg-transparent text-mirage hover:text-white md:flex md:px-1 md:text-[7px] lg:h-6 lg:text-[9px]">
              <FileDown size={15} />
              Download Brochure
            </Button>
          </div>
        </div>

        <div className="my-2 flex flex-row items-center gap-x-2 md:my-0 md:flex-col md:items-end md:gap-x-0 md:space-y-0.5 lg:space-y-1 xl:space-y-1.5">
          <h3 className="text-[12px] font-medium text-grey md:text-end md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]">
            Starting From
          </h3>
          <p className="text-[20px] font-bold md:text-[10px] lg:text-[13px] xl:text-[18px] 2xl:text-[20px]">
            {formatCurrency(3500000)}
          </p>
        </div>

        <div className="flex items-center justify-between text-[14px] md:hidden">
          <Button className="h-8 border-sunriseOrange bg-sunriseOrange font-light text-white hover:cursor-default hover:bg-sunriseOrange">
            New Launch
          </Button>
          <Button className="h-8 items-center gap-x-1 rounded-md border bg-transparent text-mirage hover:text-white">
            <FileDown size={15} />
            Download Brochure
          </Button>
        </div>
      </div>

      <div className="flex flex-col justify-between rounded border p-2 md:flex-row md:p-2 lg:p-2.5 xl:p-3 2xl:rounded-md 2xl:p-4">
        <div className="flex w-full flex-col gap-y-2.5 border-b pb-2 md:w-[33%] md:gap-y-1.5 md:border-b-0 md:pb-0 lg:gap-y-2.5 xl:gap-y-3.5 2xl:gap-y-5">
          <div className={`flex items-center justify-between ${titleSizes}`}>
            <p className="flex items-center gap-1.5 text-grey md:gap-1 lg:gap-1.5">
              <Property size={18} /> Property Type
            </p>
            <p
              className={`font-semibold md:border-e md:pe-2 lg:pe-3 xl:pe-3.5 2xl:pe-4 ${valueSizes}`}
            >
              Villa
            </p>
          </div>

          <div className={`flex items-center justify-between ${titleSizes}`}>
            <p className="flex items-center gap-1.5 text-grey md:gap-1 lg:gap-1.5">
              <Property size={18} /> Property Type
            </p>
            <p
              className={`font-semibold md:border-e md:pe-2 lg:pe-3 xl:pe-3.5 2xl:pe-4 ${valueSizes}`}
            >
              Penthouse
            </p>
          </div>

          <div className={`flex items-center justify-between ${titleSizes}`}>
            <p className="flex items-center gap-1.5 text-grey md:gap-1 lg:gap-1.5">
              <Property size={18} /> Property Type
            </p>
            <p
              className={`font-semibold md:border-e md:pe-2 lg:pe-3 xl:pe-3.5 2xl:pe-4 ${valueSizes}`}
            >
              Appartment
            </p>
          </div>

          <div className={`flex items-center justify-between ${titleSizes}`}>
            <p className="flex items-center gap-1.5 text-grey md:gap-1 lg:gap-1.5">
              <Property size={18} /> Property Type
            </p>
            <p
              className={`font-semibold md:border-e md:pe-2 lg:pe-3 xl:pe-3.5 2xl:pe-4 ${valueSizes}`}
            >
              20%
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-y-2.5 border-b py-2 md:w-[33%] md:gap-y-1.5 md:border-b-0 md:py-0 md:ps-2 lg:gap-y-2.5 lg:ps-3 xl:gap-y-3.5 xl:ps-3.5 2xl:gap-y-5 2xl:ps-4">
          <div className={`flex items-center justify-between ${titleSizes}`}>
            <p className="flex items-center gap-1.5 text-grey md:gap-1 lg:gap-1.5">
              <Bed size={18} /> Unit Type
            </p>
            <p
              className={`border-grey font-semibold md:border-e md:pe-2 lg:pe-3 xl:pe-3.5 2xl:pe-4 ${valueSizes}`}
            >
              3 Bedrooms
            </p>
          </div>

          <div className={`flex items-center justify-between ${titleSizes}`}>
            <p className="flex items-center gap-1.5 text-grey md:gap-1 lg:gap-1.5">
              <Bed size={18} /> Unit Type
            </p>
            <p
              className={`font-semibold md:border-e md:pe-2 lg:pe-3 xl:pe-3.5 2xl:pe-4 ${valueSizes}`}
            >
              2 Bedrooms
            </p>
          </div>

          <div className={`flex items-center justify-between ${titleSizes}`}>
            <p className="flex items-center gap-1.5 text-grey md:gap-1 lg:gap-1.5">
              <Bed size={18} /> Unit Type
            </p>
            <p
              className={`font-semibold md:border-e md:pe-2 lg:pe-3 xl:pe-3.5 2xl:pe-4 ${valueSizes}`}
            >
              Studio, 1, 2 & 3 Bedrooms
            </p>
          </div>

          <div className={`flex items-center justify-between ${titleSizes}`}>
            <p className="flex items-center gap-1.5 text-grey md:gap-1 lg:gap-1.5">
              <Bed size={18} /> Payment Plan
            </p>
            <p
              className={`font-semibold md:border-e md:pe-2 lg:pe-3 xl:pe-3.5 2xl:pe-4 ${valueSizes}`}
            >
              70/30
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-y-2.5 pt-2 md:w-[33%] md:gap-y-1.5 md:ps-2 md:pt-0 lg:gap-y-2.5 lg:ps-3 xl:gap-y-3.5 xl:ps-3.5 2xl:gap-y-5 2xl:ps-4">
          <div className={`flex items-center justify-between ${titleSizes}`}>
            <p className="flex items-center gap-1.5 text-grey md:gap-1 lg:gap-1.5">
              <Area size={18} /> Size
            </p>
            <p className={`font-semibold ${valueSizes}`}>
              Various Sizes Available
            </p>
          </div>

          <div className={`flex items-center justify-between ${titleSizes}`}>
            <p className="flex items-center gap-1.5 text-grey md:gap-1 lg:gap-1.5">
              <Area size={18} /> Size
            </p>
            <p className={`font-semibold ${valueSizes}`}>
              Various Sizes Available
            </p>
          </div>

          <div className={`flex items-center justify-between ${titleSizes}`}>
            <p className="flex items-center gap-1.5 text-grey md:gap-1 lg:gap-1.5">
              <Area size={18} /> Size
            </p>
            <p className={`font-semibold ${valueSizes}`}>
              Various Sizes Available
            </p>
          </div>

          <div className={`flex items-center justify-between ${titleSizes}`}>
            <p className="flex items-center gap-1.5 text-grey md:gap-1 lg:gap-1.5">
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
