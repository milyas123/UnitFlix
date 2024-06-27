import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { UserRound, Mail, Phone } from "lucide-react";
import { BiMessageSquareDetail } from "react-icons/bi";

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-y-4">
      <div className="relative flex items-center">
        <Input type="text" id="name" placeholder="Enter your name" />
        <UserRound
          className="absolute left-3 text-muted-foreground"
          size={20}
        />
      </div>
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="example@domain.com" />
        <Mail className="absolute left-3 text-muted-foreground" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input type="number" id="phone" placeholder="(+92) 311 7995274" />
        <Phone className="absolute left-3 text-muted-foreground" size={20} />
      </div>
      <div className="relative flex items-center">
        <Textarea placeholder="I want to buy/rent..." />
        <BiMessageSquareDetail
          className="absolute top-3 left-3 text-muted-foreground"
          size={20}
        />
      </div>
      <Button className="rounded-md">Submit</Button>
    </form>
  );
};

export default ContactForm;
