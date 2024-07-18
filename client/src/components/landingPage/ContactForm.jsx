import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { UserRound, Mail, Phone } from "lucide-react";
import { BiMessageSquareDetail } from "react-icons/bi";

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-y-4 md:gap-y-1.5 lg:gap-y-2 xl:gap-y-3 2xl:gap-y-4">
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
      <div className="relative flex items-center">
        <Textarea
          placeholder="I want to buy/rent..."
          className="md:ps-7 lg:ps-7 xl:ps-8 2xl:ps-9"
        />
        <BiMessageSquareDetail
          className="absolute left-1.5 top-4 text-muted-foreground md:left-1.5 md:top-1 lg:top-1.5 xl:left-2 xl:top-[11px] 2xl:left-3 2xl:top-4"
          size={19}
        />
      </div>
      <Button className="h-9 rounded-md hover:bg-transparent hover:text-mirage md:h-6 md:text-[8px] lg:h-7 lg:text-[10px] xl:h-8 xl:text-[12px] 2xl:h-9 2xl:py-3 2xl:text-[14px]">
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
