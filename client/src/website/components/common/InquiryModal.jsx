import {lazy} from 'react';
import { SquareX } from "lucide-react";
const InquiryForm = lazy(() => import("./InquiryForm"));
import website from '../../../data/website.json';
import AnimLazyLoader from "@/website/components/common/AnimLazyLoader.jsx";

const InquiryModal = ({ onClose, propertyId }) => {
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative flex w-[95%] items-center justify-between rounded-md bg-white md:h-[23.5rem] md:w-[35rem] md:gap-x-4 md:p-3 lg:h-auto lg:w-[40rem] lg:gap-x-5 lg:p-5 xl:w-[54rem] xl:gap-x-6 xl:p-6 2xl:w-[64rem] 2xl:gap-x-7 2xl:rounded-xl 2xl:p-8">
        <SquareX
          size={25}
          className="block absolute md:hidden right-2 top-2 cursor-pointer text-2xl font-bold text-gray-800 hover:text-gray-800"
          onClick={onClose}
        />

        <div className="mx-auto flex w-[93%] flex-col gap-7 pb-3.5 pt-2 md:mx-0 md:w-[50%] md:gap-3 lg:gap-7 2xl:gap-8">
          <div className="space-y-1">
            <h1 className="text-[24px] font-semibold md:text-[14px] lg:text-[18px] xl:text-[24px] 2xl:text-[30px]">
              Real Estate Inquiry Form
            </h1>
            <p className="text-[15px] md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]">
              {website.contactPage.cta}
            </p>
          </div>

          <AnimLazyLoader>
            <InquiryForm propertyId={propertyId} />
          </AnimLazyLoader>
        </div>

        <div className='w-[48%] h-full relative md:rounded-md overflow-hidden hidden md:block'>
          <img
              src="/assets/imgs/inquiry.webp"
              className="w-[100%] object-cover object-center md:h-[320px] lg:h-[440px] xl:h-[560px] 2xl:h-[640px] 2xl:rounded-xl"
              alt="OTP Verification"
          />
          <div className='absolute top-0 left-0 w-full h-full bg-black/50'></div>
          <img src={website.navbar.logo}
               className="absolute z-[2] top-0 left-1 2xl:h-[100px] 2xl:w-[100px] xl:h-[90px] xl:w-[90px] lg:h-[80px] lg:w-[80px] md:h-[60px] md:w-[60px]"
               alt="Logo"
          />
          <SquareX
              className="absolute right-2 top-2 cursor-pointer md:size-[24px] lg:size-[26px] xl:size-[28px] 2xl:size-[30px] font-bold text-gray-100 hover:text-gray-300 z-[3]"
              onClick={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default InquiryModal;
