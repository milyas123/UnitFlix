import React, { useState, useEffect } from "react";

const PaymentPlan = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mt-5 md:mt-7 lg:mt-10 xl:mt-12 2xl:mt-14">
      <h1 className="text-[24px] font-medium md:text-[12px] lg:text-[15px] xl:text-[18px] 2xl:text-[24px]">
        Payment Plan
      </h1>

      <div className="mt-8 flex h-[36rem] flex-row justify-center md:mt-1.5 md:h-auto md:flex-col md:space-y-2 lg:mt-2 xl:mt-3 xl:space-y-4 2xl:mt-4">
        <div className="flex w-[50%] flex-col items-end md:w-auto md:flex-row md:justify-between">
          <div className="flex h-[8.5rem] flex-col items-center text-center md:h-auto md:w-[24%]">
            <div className="xl:border-b-5 2xl:border-b-6 flex h-full w-full items-center justify-center border-r-4 border-mirage pe-2 md:border-b-2 md:border-r-0 md:pb-2 md:pe-0 lg:border-b-4 xl:pb-4">
              <img
                src={
                  isMobile ? "/assets/imgs/mob-20.png" : "/assets/imgs/20.png"
                }
                className="size-[80px] object-contain md:size-[50px] lg:size-[60px] xl:size-[80px] 2xl:size-[100px]"
                alt=""
              />
            </div>
          </div>

          <div className="mt-auto h-[18rem] md:ms-auto md:h-auto md:w-[50%]">
            <div className="xl:border-b-5 2xl:border-b-6 flex h-full w-full flex-col items-center justify-center border-r-4 border-mirage pb-4 pe-2 md:gap-0.5 md:border-b-2 md:border-r-0 md:pe-0 lg:gap-1 lg:border-b-4 2xl:gap-1.5">
              <h2 className="text-[16px] font-semibold text-sunriseOrange md:text-[10px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px]">
                During Construction
              </h2>
              <p className="text-[12px] md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
                1st - 28th Installment
              </p>
            </div>
          </div>

          <div className="mt-auto h-[8.5rem] md:ms-auto md:h-auto md:w-[24%]">
            <div className="xl:border-b-5 2xl:border-b-6 flex h-full w-full items-center justify-center border-r-4 border-mirage pe-2 md:border-b-2 md:border-r-0 md:pb-2 md:pe-0 lg:border-b-4 xl:pb-4">
              <img
                src={
                  isMobile ? "/assets/imgs/mob-30.png" : "/assets/imgs/30.png"
                }
                className="size-[80px] object-contain md:size-[50px] lg:size-[60px] xl:size-[80px] 2xl:size-[100px]"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex w-[50%] flex-col items-start ps-2.5 md:w-auto md:flex-row md:items-start md:justify-between md:ps-0">
          <div className="flex h-[8.5rem] flex-col items-center text-center md:h-auto md:w-[24%]">
            <div className="flex h-full w-full flex-col items-center justify-center md:gap-0.5 lg:gap-1 2xl:gap-1.5">
              <h2 className="text-[16px] font-semibold text-sunriseOrange md:text-[10px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px]">
                Down Payment
              </h2>
              <p className="text-[12px] md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
                On Booking Date
              </p>
            </div>
          </div>

          <div className="mt-auto h-[18rem] md:ms-auto md:h-auto md:w-[50%]">
            <div className="flex h-full w-full items-center justify-center">
              <img
                src={
                  isMobile ? "/assets/imgs/mob-50.png" : "/assets/imgs/50.png"
                }
                className="size-[80px] object-contain md:size-[50px] lg:size-[60px] xl:size-[80px] 2xl:size-[100px]"
                alt=""
              />
            </div>
          </div>

          <div className="mt-auto h-[8.5rem] md:ms-auto md:h-auto md:w-[24%]">
            <div className="flex h-full w-full flex-col items-center justify-center md:gap-0.5 lg:gap-1 2xl:gap-1.5">
              <h2 className="text-[16px] font-semibold text-sunriseOrange md:text-[10px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px]">
                On Handover
              </h2>
              <p className="text-[12px] md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
                100% Completion
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPlan;
