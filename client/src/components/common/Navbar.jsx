import { useState } from "react";
import { Button } from "../ui/button";
import { RxDash } from "react-icons/rx";
import { GrPhone } from "react-icons/gr";
import { Link } from "react-router-dom";
import MobileNavIcon from "../svgs/MobileNavIcon";
import MobileNav from "./MobileNav";

const buttonItems = [
  { name: "Buy", link: "/properties-for-sale" },
  { name: "Rent", link: "/properties-for-sale" },
  { name: "Manage", link: "/manage-properties" },
  { name: "About Us", link: "/about-us" },
];

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleMobileNavClose = () => {
    setShowMobileNav(false);
  };

  const handleMobileNavOpen = () => {
    setShowMobileNav(true);
  };

  return (
    <>
      <div className="absolute top-0 z-[100] hidden w-full items-center bg-black bg-opacity-20 md:flex md:h-[3rem] lg:h-[4rem] xl:h-[5rem] 2xl:h-[5.5rem]">
        <div className="mx-auto flex w-[80%] md:w-[78%] items-center justify-between xl:w-[75%]">
          <div className="flex items-center md:gap-5 lg:gap-12 xl:gap-16 2xl:gap-24">
            <Link to="/">
              <img
                src="/assets/imgs/Logo.png"
                className="object-cover md:h-[40px] md:w-[42px] lg:h-[50px] lg:w-[52px] xl:h-[63px] xl:w-[65px] 2xl:h-[80px] 2xl:w-[82px]"
                alt="company-logo"
              />
            </Link>
            <div className="flex flex-row md:gap-x-2 lg:gap-x-3.5 xl:gap-x-4 2xl:gap-x-5">
              {buttonItems.map((item, index) => (
                <Link to={item.link} key={index}>
                  <Button className="rounded-full bg-white bg-opacity-10 text-white hover:bg-white hover:text-mirage md:h-7 md:px-2.5 md:text-[8px] lg:h-8 lg:px-3 lg:text-[10px] xl:h-9 xl:text-[13px] 2xl:h-10 2xl:px-4 2xl:text-[16px]">
                    {item.name} <RxDash size={25} />
                  </Button>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center text-white md:gap-x-3 xl:gap-x-6 2xl:gap-x-10">
            <a
              href="tel:+(088) 123 456 789"
              className="flex items-center gap-x-1.5 md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]"
            >
              <GrPhone size={20} />
              +(088) 123 456 789
            </a>
            <Link to="/contact-us">
              <Button
                variant="outline"
                className="rounded-full border-white bg-transparent md:h-6 md:px-3.5 md:text-[8px] lg:h-8 lg:px-3 lg:text-[10px] xl:h-9 xl:text-[13px] 2xl:h-10 2xl:px-4 2xl:text-[16px]"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute top-0 z-[100] flex h-[87px] w-full items-center justify-center bg-black bg-opacity-20 md:hidden">
        <div className="mx-auto flex w-[90%] items-center justify-between">
          <Link to="/">
            <img
              src="/assets/imgs/Logo.png"
              className="h-[79px] w-[82px] object-cover"
              alt="company-logo"
            />
          </Link>

          <MobileNavIcon
            size={40}
            className="cursor-pointer"
            onClick={handleMobileNavOpen}
          />
        </div>
      </div>

      {showMobileNav && (
        <MobileNav onClose={handleMobileNavClose} isVisible={showMobileNav} />
      )}
    </>
  );
};

export default Navbar;
