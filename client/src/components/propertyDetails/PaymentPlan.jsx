const PaymentPlan = () => {
  return (
    <div className="mt-16">
      <h1 className="font-semibold text-[24px]">Payment Plan</h1>

      <div className="mt-4 space-y-4">
        <div className="flex justify-between items-end">
          <div className="w-[24%] text-center flex flex-col items-center">
            <div className="border-b-8 border-mirage pb-4 w-full flex justify-center">
              <img src="/assets/imgs/20.png" alt="" />
            </div>
          </div>

          <div className="w-[50%] ms-auto">
            <div className="border-b-8 border-mirage pb-4 w-full flex flex-col items-center justify-center gap-1.5">
              <h2 className="text-[20px] text-sunriseOrange font-semibold">
                During Construction
              </h2>
              <p className="text-[14px]">1st - 28th Installment</p>
            </div>
          </div>

          <div className="w-[24%] ms-auto">
            <div className="border-b-8 border-mirage pb-4 w-full flex justify-center">
              <img src="/assets/imgs/30.png" alt="" />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-start">
          <div className="w-[24%] text-center flex flex-col items-center">
            <div className="w-full flex flex-col items-center justify-center gap-1.5">
              <h2 className="text-[20px] text-sunriseOrange font-semibold">
                Down Payment
              </h2>
              <p className="text-[14px]">On Booking Date</p>
            </div>
          </div>

          <div className="w-[50%] ms-auto">
            <div className="w-full flex justify-center">
              <img src="/assets/imgs/50.png" alt="" />
            </div>
          </div>

          <div className="w-[24%] ms-auto">
            <div className="w-full flex flex-col items-center justify-center gap-1.5">
              <h2 className="text-[20px] text-sunriseOrange font-semibold">
                On Handover
              </h2>
              <p className="text-[14px]">100% Completion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPlan;
