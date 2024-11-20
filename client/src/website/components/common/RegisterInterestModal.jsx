import { SquareX } from "lucide-react";
import InquiryForm from "./InquiryForm";

const RegisterInterestModal = ({ onClose, propertyId }) => {
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative flex w-[95%] items-center justify-between rounded-md bg-white md:h-[21.5rem] md:w-[35rem] md:gap-x-4 md:p-3 lg:h-auto lg:w-[40rem] lg:gap-x-5 lg:p-4 xl:w-[54rem] xl:gap-x-6 xl:p-5 2xl:w-[64rem] 2xl:gap-x-7 2xl:rounded-xl 2xl:p-6">
        <SquareX
          size={25}
          className="absolute right-2 top-3 cursor-pointer text-2xl font-bold text-gray-800 hover:text-gray-800 md:right-4 md:top-4 lg:right-5 lg:top-6 xl:right-7 xl:top-7 2xl:right-8 2xl:top-8"
          onClick={onClose}
        />

        <div className="mx-auto flex w-[93%] flex-col gap-7 pb-3.5 pt-2 md:mx-0 md:w-[50%] md:gap-6 md:pb-0 md:pt-0 lg:gap-7 2xl:gap-8">
          <div className="space-y-1">
            <h1 className="text-[24px] font-semibold md:text-[14px] lg:text-[18px] xl:text-[24px] 2xl:text-[30px]">
              Register Your Interest
            </h1>
          </div>

          <InquiryForm propertyId={propertyId} />
        </div>

        <img
          src="/assets/imgs/otp.png"
          className="hidden w-[48%] object-cover object-center md:flex md:h-[320px] md:rounded-md lg:h-[400px] xl:h-[510px] 2xl:h-[640px] 2xl:rounded-xl"
          alt="OTP Verification"
        />
      </div>
    </div>
  );
};

export default RegisterInterestModal;
