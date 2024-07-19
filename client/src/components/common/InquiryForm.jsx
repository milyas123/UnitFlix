import { Input } from "../ui/input";
import { Phone, UserRound } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { BiMessageSquareDetail } from "react-icons/bi";
import { Button } from "../ui/button";
import Email from "../svgs/Email";

const InquiryForm = () => {
  return (
    <form
      action=""
      className="flex flex-col gap-y-4 md:gap-y-5 lg:gap-y-6 xl:gap-y-7 2xl:gap-y-8"
    >
      <div className="flex flex-col gap-2.5 md:gap-y-1 lg:gap-y-2 xl:gap-y-3 2xl:gap-y-4">
        <label className="font-semibold md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
          Your Name
        </label>
        <div className="relative flex items-center">
          <Input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="ps-9 md:ps-5 lg:ps-[22px] xl:ps-8 2xl:ps-[38px]"
          />
          <UserRound className="absolute left-2 size-5 text-grey md:left-1.5 md:size-2.5 lg:size-3 xl:left-[9px] xl:size-4 2xl:left-3 2xl:size-5" />
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
            className="ps-9 md:ps-5 lg:ps-[22px] xl:ps-8 2xl:ps-[38px]"
          />
          <Email className="absolute left-2 text-grey md:left-1.5 xl:left-[9px] 2xl:left-3" />
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
            className="ps-9 md:ps-5 lg:ps-[22px] xl:ps-8 2xl:ps-[38px]"
          />
          <Phone className="absolute left-2 size-5 text-grey md:left-1.5 md:size-2.5 lg:size-3 xl:left-[9px] xl:size-4 2xl:left-3 2xl:size-5" />
        </div>
      </div>

      <div className="flex flex-col gap-2.5 md:gap-y-0.5 lg:gap-y-1.5 xl:gap-y-2.5 2xl:gap-y-3">
        <label className="font-semibold md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
          Message
        </label>
        <div className="relative flex items-center">
          <Textarea
            rows={3}
            placeholder="I want to buy/rent..."
            className="ps-9 md:ps-5 lg:ps-[22px] xl:ps-8 2xl:ps-[38px]"
          />
          <BiMessageSquareDetail className="absolute left-2 top-3 size-5 text-grey md:left-1.5 md:top-2 md:size-2.5 lg:top-2.5 lg:size-3 xl:left-[9px] xl:top-[12.5px] xl:size-4 2xl:left-3 2xl:top-3.5 2xl:size-5" />
        </div>
      </div>

      <div className="ms-auto">
        <Button className="rounded-md hover:bg-transparent hover:text-mirage md:h-7 md:w-[100px] lg:h-8 lg:w-[120px] xl:h-9 xl:w-[150px] 2xl:h-10 2xl:w-[200px]">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default InquiryForm;
