const PaymentPlan = () => {
  return (
    <div className="md:mt-7 lg:mt-10 xl:mt-12 2xl:mt-14">
      <h1 className="font-medium md:text-[12px] lg:text-[15px] xl:text-[18px] 2xl:text-[24px]">
        Payment Plan
      </h1>

      <div className="md:mt-1.5 md:space-y-2 lg:mt-2 xl:mt-3 xl:space-y-4 2xl:mt-4">
        <div className="flex items-end justify-between">
          <div className="flex w-[24%] flex-col items-center text-center">
            <div className="xl:border-b-5 2xl:border-b-6 flex w-full justify-center border-mirage md:border-b-2 md:pb-2 lg:border-b-4 xl:pb-4">
              <img
                src="/assets/imgs/20.png"
                className="object-contain md:size-[50px] lg:size-[60px] xl:size-[80px] 2xl:size-[100px]"
                alt=""
              />
            </div>
          </div>

          <div className="ms-auto w-[50%]">
            <div className="xl:border-b-5 2xl:border-b-6 flex w-full flex-col items-center justify-center border-mirage pb-4 md:gap-0.5 md:border-b-2 lg:gap-1 lg:border-b-4 2xl:gap-1.5">
              <h2 className="font-semibold text-sunriseOrange md:text-[10px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px]">
                During Construction
              </h2>
              <p className="md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
                1st - 28th Installment
              </p>
            </div>
          </div>

          <div className="ms-auto w-[24%]">
            <div className="xl:border-b-5 2xl:border-b-6 flex w-full justify-center border-mirage md:border-b-2 md:pb-2 lg:border-b-4 xl:pb-4">
              <img
                src="/assets/imgs/30.png"
                className="object-contain md:size-[50px] lg:size-[60px] xl:size-[80px] 2xl:size-[100px]"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex items-start justify-between">
          <div className="flex w-[24%] flex-col items-center text-center">
            <div className="flex w-full flex-col items-center justify-center md:gap-0.5 lg:gap-1 2xl:gap-1.5">
              <h2 className="font-semibold text-sunriseOrange md:text-[10px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px]">
                Down Payment
              </h2>
              <p className="md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
                On Booking Date
              </p>
            </div>
          </div>

          <div className="ms-auto w-[50%]">
            <div className="flex w-full justify-center">
              <img
                src="/assets/imgs/50.png"
                className="object-contain md:size-[50px] lg:size-[60px] xl:size-[80px] 2xl:size-[100px]"
                alt=""
              />
            </div>
          </div>

          <div className="ms-auto w-[24%]">
            <div className="flex w-full flex-col items-center justify-center md:gap-0.5 lg:gap-1 2xl:gap-1.5">
              <h2 className="font-semibold text-sunriseOrange md:text-[10px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px]">
                On Handover
              </h2>
              <p className="md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
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
