import { Mail, Phone, SquareX, UserRound } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { BiMessageSquareDetail } from "react-icons/bi";
import { Textarea } from "../ui/textarea";

const InquiryModal = ({ onClose }) => {

  return (
    <div className="fixed z-[800] inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-[64rem] rounded-xl bg-white p-6 flex justify-between items-center gap-x-7">
        <SquareX
          size={30}
          className="cursor-pointer absolute top-8 right-8 text-2xl font-bold text-gray-800 hover:text-gray-800"
          onClick={onClose}
        />

        <div className="w-[50%] flex flex-col gap-7 md:gap-6 lg:gap-7 2xl:gap-8">
          <div className="space-y-1">
            <h1 className="font-semibold text-[24px] md:text-[14px] lg:text-[18px] xl:text-[24px] 2xl:text-[30px]">
              Real Estate Inquiry Form
            </h1>
            <p className="text-[15px] md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]">
              As the complexity of buildings to increase
            </p>
          </div>

          <form
            action=""
            className="flex flex-col gap-4 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-8"
          >
            <div className="flex flex-col gap-2.5 md:gap-y-0.5 lg:gap-y-1.5 xl:gap-y-2.5 2xl:gap-y-3">
              <label className="font-semibold md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
                Your Name
              </label>
              <div className="relative flex items-center">
                <Input type="text" id="name" placeholder="Enter your name" />
                <UserRound
                  className="absolute left-1.5 md:left-2 2xl:left-3 text-muted-foreground"
                  size={17}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2.5 md:gap-y-0.5 lg:gap-y-1.5 xl:gap-y-2.5 2xl:gap-y-3">
              <label className="font-semibold md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
                Email
              </label>
              <div className="relative flex items-center">
                <Input
                  type="email"
                  id="email"
                  placeholder="example@domain.com"
                />
                <Mail
                  className="absolute left-1.5 md:left-2 2xl:left-3 text-muted-foreground"
                  size={17}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2.5 md:gap-y-0.5 lg:gap-y-1.5 xl:gap-y-2.5 2xl:gap-y-3">
              <label className="font-semibold md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
                Phone Number
              </label>
              <div className="relative flex items-center">
                <Input
                  type="number"
                  id="phone"
                  placeholder="(+92) 311 7995274"
                />
                <Phone
                  className="absolute left-1.5 md:left-2 2xl:left-3 text-muted-foreground"
                  size={17}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2.5 md:gap-y-0.5 lg:gap-y-1.5 xl:gap-y-2.5 2xl:gap-y-3">
              <label className="font-semibold md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
                Message
              </label>
              <div className="relative flex items-center">
                <Textarea placeholder="I want to buy/rent..." />
                <BiMessageSquareDetail
                  className="absolute left-1.5 top-4 md:top-2 2xl:top-2.5 md:left-2 2xl:left-3 text-muted-foreground"
                  size={19}
                />
              </div>
            </div>

            <Button className="w-full rounded-md hover:bg-transparent hover:text-mirage ">
              Submit
            </Button>
          </form>
        </div>

        <img
          src="/assets/imgs/otp.png"
          className="w-1/2 h-[640px] object-cover object-center rounded-xl"
          alt="OTP Verification"
        />
      </div>
    </div>
  );
};

export default InquiryModal;
