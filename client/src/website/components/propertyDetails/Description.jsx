import { Button } from "../ui/button";
import { FiMapPin } from "react-icons/fi";
import { formatCurrency } from "@/lib/utils";

import Bed from "../svgs/Bed";
import Area from "../svgs/Area";
import HandOver from "../svgs/HandOver";
import Property from "../svgs/Property";
import DownPayment from "../svgs/DownPayment";
import PaymentPlan from "../svgs/PaymentPlan";
import Download from "../svgs/Download";

const Description = ({
  title,
  status,
  developer,
  location,
  brochure,
  price,
  propertyDetails,
  downPayment,
  paymentPlan,
  handOver,
}) => {
  const titleSizes =
    "text-[14px] md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]";
  const valueSizes =
    "text-[14px] md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]";

  const handleDownloadBrochure = () => {
    const link = document.createElement("a");
    link.href = brochure;
    link.download = "brochure.pdf";
    link.click();
  };

  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex flex-col justify-between md:flex-row md:items-center">
        <div>
          <div className="items-center md:flex md:gap-x-1.5 2xl:gap-x-2.5">
            <h1 className="text-[24px] font-semibold md:text-[15px] lg:text-[18px] xl:text-[25px] 2xl:text-[30px]">
              {title}
            </h1>
            <Button className="hidden border-sunriseOrange bg-sunriseOrange font-light text-white hover:cursor-default hover:bg-sunriseOrange md:flex md:h-4 md:rounded md:p-1 lg:h-5 lg:text-[10px] xl:h-6 2xl:h-7 2xl:text-[16px]">
              {status}
            </Button>
          </div>

          <div className="md:space-y-0.5 lg:space-y-1 xl:space-y-1.5">
            <div className="flex items-center text-[14px] text-smokeyGrey md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
              <p className="border-e border-e-pastelGrey pe-1.5 md:pe-1 2xl:pe-2">
                By {developer}
              </p>
              <p className="flex items-center gap-x-1 ps-1.5 md:ps-1 2xl:ps-2">
                <FiMapPin /> {location}
              </p>
            </div>
            <Button
              className="group hidden items-center gap-x-1 rounded-md border bg-transparent text-mirage hover:text-white md:flex md:px-1 md:text-[7px] lg:h-6 lg:text-[9px]"
              onClick={handleDownloadBrochure}
            >
              <Download className="text-black group-hover:text-white" />
              Download Brochure
            </Button>
          </div>
        </div>

        <div className="my-2 flex flex-row items-center gap-x-2 md:my-0 md:flex-col md:items-end md:gap-x-0 md:space-y-0.5 lg:space-y-1 xl:space-y-1.5">
          <h3 className="text-[12px] font-medium text-davyGrey md:text-end md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]">
            Starting From
          </h3>
          <p className="text-[20px] font-bold md:text-[10px] lg:text-[13px] xl:text-[18px] 2xl:text-[20px]">
            {formatCurrency(price)}
          </p>
        </div>

        <div className="flex items-center justify-between text-[14px] md:hidden">
          <Button className="h-8 border-sunriseOrange bg-sunriseOrange font-light text-white hover:cursor-default hover:bg-sunriseOrange">
            New Launch
          </Button>
          <Button
            className="h-8 items-center gap-x-1 rounded-md border bg-transparent text-mirage hover:text-white"
            onClick={handleDownloadBrochure}
          >
            <Download className="text-black group-hover:text-white" />
            Download Brochure
          </Button>
        </div>
      </div>

      <div className="flex flex-col rounded border p-3.5 md:gap-y-3 md:p-2 lg:gap-y-3.5 lg:p-2.5 xl:gap-y-4 xl:p-3 2xl:gap-y-5 2xl:rounded-md 2xl:p-4">
        {propertyDetails &&
          propertyDetails?.map((propertyDetail) => (
            <div className="flex w-full flex-col justify-between gap-y-4 border-b border-pastelGrey pb-4 md:flex-row md:gap-y-1.5 md:border-b-0 md:pb-0 lg:gap-y-2.5 xl:gap-y-3.5 2xl:gap-y-5">
              <div
                className={`flex w-full items-center justify-between md:border-e md:border-e-pastelGrey md:pe-2 lg:pe-3 xl:pe-3.5 2xl:pe-4 ${titleSizes}`}
              >
                <p className="flex items-center gap-1.5 text-davyGrey md:gap-1 lg:gap-1.5">
                  <Property size={18} /> Property Type
                </p>
                <p className={`font-semibold ${valueSizes}`}>
                  {propertyDetail?.propertyType}
                </p>
              </div>

              <div
                className={`flex w-full items-center justify-between md:border-e md:border-e-pastelGrey md:px-2 lg:px-3 xl:px-3.5 2xl:px-4 ${titleSizes}`}
              >
                <p className="flex items-center gap-1.5 text-davyGrey md:gap-1 lg:gap-1.5">
                  <Bed size={18} /> Unit Type
                </p>
                <p className={`font-semibold ${valueSizes}`}>
                  {propertyDetail?.unitType}
                </p>
              </div>

              <div
                className={`flex w-full items-center justify-between md:ps-2 lg:ps-3 xl:ps-3.5 2xl:ps-4 ${titleSizes}`}
              >
                <p className="flex items-center gap-1.5 text-davyGrey md:gap-1 lg:gap-1.5">
                  <Area size={18} /> Size
                </p>
                <p className={`font-semibold ${valueSizes}`}>
                  {propertyDetail?.size}
                </p>
              </div>
            </div>
          ))}

        <div className="flex w-full flex-col justify-between gap-y-4 pt-4 md:flex-row md:gap-y-1.5 md:pt-0 lg:gap-y-2.5 xl:gap-y-3.5 2xl:gap-y-5">
          <div
            className={`flex w-full items-center justify-between md:border-e md:border-e-pastelGrey md:pe-2 lg:pe-3 xl:pe-3.5 2xl:pe-4 ${titleSizes}`}
          >
            <p className="flex items-center gap-1.5 text-davyGrey md:gap-1 lg:gap-1.5">
              <DownPayment size={18} /> Down Payment
            </p>
            <p className={`font-semibold ${valueSizes}`}>{downPayment}%</p>
          </div>

          <div
            className={`flex w-full items-center justify-between md:border-e md:border-e-pastelGrey md:px-2 lg:px-3 xl:px-3.5 2xl:px-4 ${titleSizes}`}
          >
            <p className="flex items-center gap-1.5 text-davyGrey md:gap-1 lg:gap-1.5">
              <PaymentPlan size={18} /> Payment Plan
            </p>
            <p className={`font-semibold ${valueSizes}`}>{paymentPlan}</p>
          </div>

          <div
            className={`flex w-full items-center justify-between md:ps-2 lg:ps-3 xl:ps-3.5 2xl:ps-4 ${titleSizes}`}
          >
            <p className="flex items-center gap-1.5 text-davyGrey md:gap-1 lg:gap-1.5">
              <HandOver size={18} /> Hand Over
            </p>
            <p className={`font-semibold ${valueSizes}`}>{handOver}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
