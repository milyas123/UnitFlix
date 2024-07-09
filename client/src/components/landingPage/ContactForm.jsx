import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { UserRound, Mail, Phone } from "lucide-react";
import { BiMessageSquareDetail } from "react-icons/bi";

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-y-4 md:gap-y-1.5 lg:gap-y-2 xl:gap-y-3 2xl:gap-y-4">
      <div className="relative flex items-center">
        <Input type="text" id="name" placeholder="Enter your name" />
        <UserRound
          className="absolute left-1.5 md:left-2 2xl:left-3 text-muted-foreground"
          size={17}
        />
      </div>
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="example@domain.com" />
        <Mail className="absolute left-1.5 md:left-2 2xl:left-3 text-muted-foreground" size={17} />
      </div>
      <div className="relative flex items-center">
        <Input type="number" id="phone" placeholder="(+92) 311 7995274" />
        <Phone className="absolute left-1.5 md:left-2 2xl:left-3 text-muted-foreground" size={17} />
      </div>
      <div className="relative flex items-center">
        <Textarea placeholder="I want to buy/rent..." />
        <BiMessageSquareDetail
          className="absolute left-1.5 top-4 md:top-2 2xl:top-2.5 md:left-2 2xl:left-3 text-muted-foreground"
          size={17}
        />
      </div>
      <Button className="rounded-md hover:bg-transparent hover:text-mirage h-9 md:h-6 lg:h-7 xl:h-8 2xl:h-9 md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px]">Submit</Button>
    </form>
  );
};

export default ContactForm;
