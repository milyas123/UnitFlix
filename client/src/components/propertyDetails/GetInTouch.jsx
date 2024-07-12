import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { FiPhone } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const GetInTouch = () => {
  return (
    <div className="space-y-6">
      <div className="rounded border md:space-y-3 md:p-2 lg:space-y-4 lg:p-3 xl:p-4 2xl:space-y-6 2xl:px-4 2xl:py-6">
        <h1 className="text-center font-medium md:mb-2 md:text-[12px] lg:mb-3 lg:text-[15px] xl:text-[18px] 2xl:mb-4 2xl:text-[24px]">
          Get In Touch
        </h1>
        <form className="flex flex-col md:gap-y-1.5 lg:gap-y-2.5 xl:gap-y-3 2xl:gap-y-4">
          <Input type="text" id="name" placeholder="Name*" />
          <Input type="email" id="email" placeholder="Email*" />

          <div className="flex items-center">
            <Input
              type="text"
              id="email"
              placeholder="Code"
              className="w-[30%]"
            />
            <Input
              type="number"
              id="contact"
              placeholder="Contact No*"
              className="ms-auto w-[68%]"
            />
          </div>
          <Input type="text" id="bio" placeholder="I am " />
          <Textarea
            placeholder="Enter message"
            className="md:h-[60px] 2xl:h-[160px]"
          />
          <Button className="rounded-sm">Submit</Button>
        </form>
      </div>

      <div className="flex justify-center gap-1.5 rounded border md:p-2 lg:p-3 xl:p-4 2xl:px-4 2xl:py-6">
        <div className="flex flex-col items-center justify-center gap-3">
          <FiPhone size={24} />
          <Button className="border bg-transparent text-mirage hover:bg-mirage hover:text-white md:rounded md:px-2 lg:px-2.5 xl:rounded-md xl:px-3.5 2xl:px-5">
            +971 4 248 3400
          </Button>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <BsWhatsapp size={24} />
          <Button className="border bg-transparent text-mirage hover:bg-mirage hover:text-white md:rounded md:px-2 lg:px-2.5 xl:rounded-md xl:px-3.5 2xl:px-5">
            +971 55 162 3236
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
