import { Button } from "../ui/button";
import { RxDash } from "react-icons/rx";
import { GrPhone } from "react-icons/gr";
import { Link } from "react-router-dom";

const buttonItems = [
  { name: "Buy", link: "/buy" },
  { name: "Rent", link: "/rent" },
  { name: "Manage", link: "/manage-properties" },
  { name: "About Us", link: "/about-us" },
];

const Navbar = () => {
  return (
    <>
      <div className="hidden md:flex items-center md:h-[3.5rem] lg:h-[4.5rem] xl:h-[5rem] 2xl:h-[5.5rem] bg-black bg-opacity-20 absolute z-[100] top-0 w-full">
        <div className="w-[80%] xl:w-[75%] mx-auto flex justify-between items-center">
          <div className="flex items-center md:gap-5 lg:gap-12 xl:gap-16 2xl:gap-24">
            <Link to="/">
              <img
                src="/assets/imgs/Logo.png"
                className="md:w-[42px] md:h-[40px] lg:w-[52px] lg:h-[50px] xl:w-[65px] xl:h-[63px] 2xl:w-[82px] 2xl:h-[80px] object-cover"
                alt="company-logo"
              />
            </Link>
            <div className="flex flex-row md:gap-x-2 lg:gap-x-3.5 xl:gap-x-4 2xl:gap-x-5">
              {buttonItems.map((item, index) => (
                <Link to={item.link} key={index}>
                  <Button className="rounded-full bg-white text-white bg-opacity-10 hover:bg-white hover:text-mirage md:h-7 md:px-2.5 md:text-[8px] lg:h-8 lg:px-3 lg:text-[10px] xl:h-9 xl:text-[13px] 2xl:h-10 2xl:px-4 2xl:text-[16px]">
                    {item.name} <RxDash size={25} />
                  </Button>
                </Link>
              ))}
            </div>
          </div>
          <div className="text-white flex items-center md:gap-x-3 xl:gap-x-6 2xl:gap-x-10">
            <a href="tel:+(088) 123 456 789" className="flex items-center gap-x-1.5 md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]">
              <GrPhone size={20} />
              +(088) 123 456 789
            </a>
            <Link to="/contact-us">
              <Button
                variant="outline"
                className="bg-transparent rounded-full border-white md:h-7 md:px-2.5 md:text-[8px] lg:h-8 lg:px-3 lg:text-[10px] xl:h-9 2xl:h-10 2xl:px-4 xl:text-[13px] 2xl:text-[16px]"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:hidden">Mobile Nav</div>
    </>
  );
};

export default Navbar;
