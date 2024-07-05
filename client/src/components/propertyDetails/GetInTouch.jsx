import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { FiPhone } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const GetInTouch = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border-2 px-4 py-6 space-y-6">
        <h1 className="text-2xl font-medium text-center">Get In Touch</h1>
        <form className="flex flex-col gap-y-4">
          <Input
            type="text"
            id="name"
            placeholder="Name*"
            className="ps-3 rounded-lg"
          />
          <Input
            type="email"
            id="email"
            placeholder="Email*"
            className="ps-3 rounded-lg"
          />

          <div className="flex items-center">
            <Input
              type="text"
              id="email"
              placeholder="Code"
              className="ps-3 w-[30%]"
            />
            <Input
              type="number"
              id="contact"
              placeholder="Contact No*"
              className="ps-3 rounded-lg w-[68%] ms-auto"
            />
          </div>
          <Input
            type="text"
            id="bio"
            placeholder="I am "
            className="ps-3 rounded-lg"
          />
          <Textarea
            placeholder="Enter message"
            className="ps-3 rounded-lg h-[160px]"
          />
          <Button className="rounded-lg">Submit</Button>
        </form>
      </div>

      <div className="rounded-lg border-2 px-4 py-6 flex justify-center gap-1.5">
        <div className="flex flex-col items-center justify-center gap-3">
          <FiPhone size={28} />
          <Button className="rounded-lg bg-transparent text-mirage hover:bg-mirage hover:text-white">
            +971 4 248 3400
          </Button>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <BsWhatsapp size={28} />
          <Button className="rounded-lg bg-transparent text-mirage hover:bg-mirage hover:text-white">
            +971 55 162 3236
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
