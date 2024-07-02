import { Button } from "../ui/button";
import { RxDash } from "react-icons/rx";
import { GrPhone } from "react-icons/gr";
import { Link } from "react-router-dom";

const buttonItems = [
  { name: "Buy", link: "/buy" },
  { name: "Sell", link: "/sell" },
  { name: "Rent", link: "/rent" },
  { name: "Manage", link: "/manage-properties" },
  { name: "About Us", link: "/about" },
];

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
            {buttonItems.map((item, index) => (
              <Link to={item.link} key={index}>
                <Button className="bg-white text-white bg-opacity-10 hover:bg-white hover:text-mirage">
                  {item.name} <RxDash size={25} />
                </Button>
              </Link>
            ))}
          </div>
        </div>
        <div className="text-white flex items-center gap-x-10">
          <p className="flex items-center gap-x-1.5">
            <GrPhone size={20} />
            +(088) 123 456 789
          </p>
          <Link to="/contact-us">
            <Button variant="outline" className="bg-transparent border-white">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
