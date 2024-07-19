import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { FiPhone } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import CountryCodeDropdown from "./CountryCodeDropdown";

const countryCodes = [
  { code: "+971", name: "United Arab Emirates" },
  { code: "+1", name: "United States" },
  { code: "+44", name: "United Kingdom" },
  { code: "+61", name: "Australia" },
  { code: "+91", name: "India" },
  { code: "+81", name: "Japan" },
  { code: "+49", name: "Germany" },
  { code: "+33", name: "France" },
  { code: "+39", name: "Italy" },
  { code: "+34", name: "Spain" },
  { code: "+55", name: "Brazil" },
  { code: "+86", name: "China" },
  { code: "+7", name: "Russia" },
  { code: "+27", name: "South Africa" },
  { code: "+82", name: "South Korea" },
  { code: "+52", name: "Mexico" },
  { code: "+60", name: "Malaysia" },
  { code: "+62", name: "Indonesia" },
  { code: "+64", name: "New Zealand" },
  { code: "+41", name: "Switzerland" },
  { code: "+46", name: "Sweden" },
  { code: "+31", name: "Netherlands" },
  { code: "+32", name: "Belgium" },
  { code: "+47", name: "Norway" },
  { code: "+48", name: "Poland" },
  { code: "+45", name: "Denmark" },
  { code: "+351", name: "Portugal" },
  { code: "+353", name: "Ireland" },
  { code: "+420", name: "Czech Republic" },
  { code: "+421", name: "Slovakia" },
  { code: "+36", name: "Hungary" },
  { code: "+90", name: "Turkey" },
  { code: "+30", name: "Greece" },
  { code: "+20", name: "Egypt" },
  { code: "+254", name: "Kenya" },
  { code: "+234", name: "Nigeria" },
];

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

          <div className="flex items-center justify-between md:gap-1.5 xl:gap-2 w-full">
            <CountryCodeDropdown
              options={countryCodes}
              placeholder="Code"
              className="w-[20%]"
            />
            <Input
              type="number"
              id="contact"
              placeholder="Contact No*"
              className="w-[75%]"
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

      <div className="flex justify-between gap-1.5 rounded border md:p-2 lg:p-3 xl:p-4 2xl:px-4 2xl:py-6">
        <div className="flex flex-col items-center justify-center gap-3">
          <FiPhone size={24} />
          <Button className="border bg-transparent text-mirage hover:bg-mirage hover:text-white md:rounded md:px-2 lg:px-3.5 xl:rounded-md xl:px-4 2xl:px-5">
            +971 4 248 3400
          </Button>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <BsWhatsapp size={24} />
          <Button className="border bg-transparent text-mirage hover:bg-mirage hover:text-white md:rounded md:px-2 lg:px-3.5 xl:rounded-md xl:px-4 2xl:px-5">
            +971 55 162 3236
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
