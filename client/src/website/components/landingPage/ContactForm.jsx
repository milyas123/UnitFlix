import Email from "../svgs/Email";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { UserRound, Phone } from "lucide-react";
import { BiMessageSquareDetail } from "react-icons/bi";

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-y-4 md:gap-y-1.5 lg:gap-y-2 xl:gap-y-3 2xl:gap-y-4">
      <div className="relative flex items-center">
        <Input
          type="text"
          id="name"
          placeholder="Enter your name"
          className="ps-9 md:ps-5 lg:ps-[22px] xl:ps-8 2xl:ps-[38px]"
        />
        <UserRound className="absolute left-2 size-5 text-grey md:left-1.5 md:size-2.5 lg:size-3 xl:left-[9px] xl:size-4 2xl:left-3 2xl:size-5" />
      </div>
      <div className="relative flex items-center">
        <Input
          type="email"
          id="email"
          placeholder="example@domain.com"
          className="ps-9 md:ps-5 lg:ps-[22px] xl:ps-8 2xl:ps-[38px]"
        />
        <Email className="absolute left-2 text-grey md:left-1.5 xl:left-[9px] 2xl:left-3" />
      </div>
      <div className="relative flex items-center">
        <Input
          type="number"
          id="phone"
          placeholder="(+92) 311 7995274"
          className="ps-9 md:ps-5 lg:ps-[22px] xl:ps-8 2xl:ps-[38px]"
        />
        <Phone className="absolute left-2 size-5 text-grey md:left-1.5 md:size-2.5 lg:size-3 xl:left-[9px] xl:size-4 2xl:left-3 2xl:size-5" />
      </div>
      <div className="relative flex items-center">
        <Textarea
          placeholder="I want to buy/rent..."
          className="ps-9 md:ps-5 lg:ps-[22px] xl:ps-8 2xl:ps-[38px]"
        />
        <BiMessageSquareDetail className="absolute left-2 top-3 size-5 text-grey md:left-1.5 md:top-2 md:size-2.5 lg:top-2.5 lg:size-3 xl:left-[9px] xl:top-[12.5px] xl:size-4 2xl:left-3 2xl:top-3.5 2xl:size-5" />
      </div>
      <Button className="h-9 rounded-md hover:bg-transparent hover:text-mirage md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:py-5 2xl:text-[14px]">
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
