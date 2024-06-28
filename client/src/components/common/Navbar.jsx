import { Button } from "../ui/button";
import { RxDash } from "react-icons/rx";
import { GrPhone } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className="h-[5.5rem] bg-black bg-opacity-20 absolute z-[100] top-0 w-full">
      <div className="w-[80%] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-24">
          <img
            src="/assets/imgs/Logo.png"
            className="w-[82px] h-[80px]"
            alt="company-logo"
          />
          <div className="flex flex-row gap-x-5">
            <Button className="bg-white text-white bg-opacity-10 hover:bg-white hover:text-mirage">
              Buy <RxDash size={25} />
            </Button>
            <Button className="bg-white text-white bg-opacity-10 hover:bg-white hover:text-mirage">
              Sell <RxDash size={25} />
            </Button>
            <Button className="bg-white text-white bg-opacity-10 hover:bg-white hover:text-mirage">
              Rent <RxDash size={25} />
            </Button>
            <Button className="bg-white text-white bg-opacity-10 hover:bg-white hover:text-mirage">
              Manage <RxDash size={25} />
            </Button>
            <Button className="bg-white text-white bg-opacity-10 hover:bg-white hover:text-mirage">
              About Us <RxDash size={25} />
            </Button>
          </div>
        </div>
        <div className="text-white flex items-center gap-x-10">
          <p className="flex items-center gap-x-1.5">
            <GrPhone size={20} />
            +(088) 123 456 789
          </p>
          <Button variant="outline" className="bg-transparent border-white">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
