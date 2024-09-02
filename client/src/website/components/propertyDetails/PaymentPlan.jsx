import { useState, useEffect } from "react";
import PaymentPlanItemFrame from "@/website/components/propertyDetails/PaymentPlanItemFrame.jsx";
import PaymentPlanLine from "@/website/components/propertyDetails/PaymentPlanLine.jsx";

const PaymentPlan = ({ paymentPlanData }) => {
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

      <div className="mt-8 flex flex-row justify-center md:mt-1.5 md:h-auto md:flex-col md:space-y-2 lg:mt-2 xl:mt-3 xl:space-y-4 2xl:mt-4">
        <div className="flex flex-col items-center gap-y-2 md:gap-y-0 gap-x-2 md:flex-row relative md:h-[200px] lg:h-[250px]">
          {
            paymentPlanData.map((paymentPlanItem, index) => {
              return (
                  <>
                    <div className={`flex h-[8.5rem] flex-col items-center text-center md:h-auto relative`}
                        style={{width: `${isMobile ? 100 : paymentPlanItem.amount}%`}}>
                      {
                        index % 2 === 0 ?
                            <div className='w-full flex flex-row gap-x-[1em] md:gap-x-0 md:flex-col items-center text-center translate-x-[17%] md:translate-x-0'>
                              <PaymentPlanItemFrame
                                  className="size-[90px] md:size-[50px] lg:size-[60px] xl:size-[80px] 2xl:size-[100px]"
                                  value={`${paymentPlanItem.amount}%`}
                                  isMobile={isMobile}
                              />
                              <PaymentPlanLine/>
                              <div className={`flex h-[8.5rem] flex-col items-center text-center md:h-auto w-[180px] md:w-full`}>
                                <div
                                    className="flex h-full w-full flex-col items-center justify-center md:gap-0.5 lg:gap-1 2xl:gap-1.5">
                                  <h2 className="text-[16px] font-semibold text-sunriseOrange md:text-[10px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px] text-nowrap">
                                    {paymentPlanItem?.title}
                                  </h2>
                                  <p className="text-[12px] md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px] text-nowrap">
                                    {paymentPlanItem?.description}
                                  </p>
                                </div>
                              </div>
                            </div> :
                            <div className='w-full flex flex-row gap-x-[1em] md:gap-x-0 md:flex-col items-center text-center -translate-x-[12.5%] md:translate-x-0 md:translate-y-[19%] lg:translate-y-[18%] xl:translate-y-[24%]'>
                              <div className={`flex h-[8.5rem] flex-col items-center text-center md:h-auto w-[180px] md:w-full`}>
                                <div
                                    className="flex h-full w-full flex-col items-center justify-center md:gap-0.5 lg:gap-1 2xl:gap-1.5">
                                  <h2 className="text-[16px] font-semibold text-sunriseOrange md:text-[10px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px] text-nowrap">
                                    {paymentPlanItem?.title}
                                  </h2>
                                  <p className="text-[12px] md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px] text-nowrap">
                                    {paymentPlanItem?.description}
                                  </p>
                                </div>
                              </div>
                              <PaymentPlanLine />
                              <PaymentPlanItemFrame
                                  className="size-[90px] md:size-[50px] lg:size-[60px] xl:size-[80px] 2xl:size-[100px]"
                                  value={`${paymentPlanItem.amount}%`}
                                  inverted={true}
                                  isMobile={isMobile}
                              />
                            </div>
                      }
                    </div>
                  </>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default PaymentPlan;
