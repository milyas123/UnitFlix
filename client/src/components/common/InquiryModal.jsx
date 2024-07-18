import { Mail, Phone, SquareX, UserRound } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { BiMessageSquareDetail } from "react-icons/bi";
import { Textarea } from "../ui/textarea";

const InquiryModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[800] flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative flex items-center justify-between bg-white md:h-[21.5rem] md:w-[35rem] md:gap-x-4 md:rounded-md md:p-3 lg:h-auto lg:w-[40rem] lg:gap-x-5 lg:p-4 xl:w-[54rem] xl:gap-x-6 xl:p-5 2xl:w-[64rem] 2xl:gap-x-7 2xl:rounded-xl 2xl:p-6">
        <SquareX
          size={25}
          className="absolute cursor-pointer text-2xl font-bold text-gray-800 hover:text-gray-800 md:right-4 md:top-4 lg:right-5 lg:top-6 xl:right-7 xl:top-7 2xl:right-8 2xl:top-8"
          onClick={onClose}
        />

        <div className="flex w-[50%] flex-col gap-7 md:gap-6 lg:gap-7 2xl:gap-8">
          <div className="space-y-1">
            <h1 className="text-[24px] font-semibold md:text-[14px] lg:text-[18px] xl:text-[24px] 2xl:text-[30px]">
              Real Estate Inquiry Form
            </h1>
            <p className="text-[15px] md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]">
              As the complexity of buildings to increase
            </p>
          </div>

          <form
            action=""
            className="flex flex-col gap-4 md:gap-3.5 lg:gap-5 xl:gap-6 2xl:gap-7"
          >
            <div className="flex flex-col gap-2.5 md:gap-y-0.5 lg:gap-y-1.5 xl:gap-y-2.5 2xl:gap-y-3">
              <label className="font-semibold md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
                Your Name
              </label>
              <div className="relative flex items-center">
                <Input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="md:ps-7 lg:ps-7 xl:ps-8 2xl:ps-9"
                />
                <UserRound
                  className="absolute left-1.5 text-muted-foreground md:left-1.5 xl:left-2 2xl:left-3"
                  size={19}
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
                  className="md:ps-7 lg:ps-7 xl:ps-8 2xl:ps-9"
                />
                <Mail
                  className="absolute left-1.5 text-muted-foreground md:left-1.5 xl:left-2 2xl:left-3"
                  size={19}
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
                  className="md:ps-7 lg:ps-7 xl:ps-8 2xl:ps-9"
                />
                <Phone
                  className="absolute left-1.5 text-muted-foreground md:left-1.5 xl:left-2 2xl:left-3"
                  size={19}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2.5 md:gap-y-0.5 lg:gap-y-1.5 xl:gap-y-2.5 2xl:gap-y-3">
              <label className="font-semibold md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
                Message
              </label>
              <div className="relative flex items-center">
                <Textarea
                  rows={4}
                  placeholder="I want to buy/rent..."
                  className="md:ps-7 lg:ps-7 xl:ps-8 2xl:ps-9"
                />
                <BiMessageSquareDetail
                  className="absolute left-1.5 top-4 text-muted-foreground md:left-1.5 md:top-1 lg:top-1.5 xl:left-2 xl:top-[11px] 2xl:left-3 2xl:top-4"
                  size={19}
                />
              </div>
            </div>

            <Button className="w-full rounded-md hover:bg-transparent hover:text-mirage md:h-7 lg:h-8 xl:h-9 2xl:h-10">
              Submit
            </Button>
          </form>
        </div>

        <img
          src="/assets/imgs/otp.png"
          className="w-[48%] object-cover object-center md:h-[320px] md:rounded-md lg:h-[400px] xl:h-[510px] 2xl:h-[640px] 2xl:rounded-xl"
          alt="OTP Verification"
        />
      </div>
    </div>
  );
};

export default InquiryModal;
