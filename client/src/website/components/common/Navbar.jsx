import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { RxDash } from "react-icons/rx";
import { GrPhone } from "react-icons/gr";
import { Link } from "react-router-dom";
import MobileNavIcon from "../svgs/MobileNavIcon";
import MobileNav from "./MobileNav";
import website from '@/data/website.json';

const buttonItems = [
  { name: website.navbar.buyButton, link: "/search?purpose=0&page=1" },
  { name: website.navbar.rentButton, link: "/search?purpose=1&page=1" },
  { name: website.navbar.manageButton, link: "/manage-properties" },
  { name: website.navbar.aboutUsButton, link: "/about-us" },
];

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMobileNavClose = () => {
    setShowMobileNav(false);
  };

  const handleMobileNavOpen = () => {
    setShowMobileNav(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="sticky top-0 z-[1000]">
        <div
          className={`${isScrolled ? "bg-opacity-100" : "bg-opacity-20"} absolute top-0 z-[1000] hidden w-full items-center bg-black transition-all duration-300 ease-in-out md:flex md:h-[3rem] lg:h-[4rem] xl:h-[5rem] 2xl:h-[5.5rem]`}
        >
          <div className="mx-auto flex w-[80%] items-center justify-between md:w-[78%] xl:w-[75%]">
            <div className="flex items-center md:gap-5 lg:gap-12 xl:gap-16 2xl:gap-24">
              <Link to="/">
                <img
                  src={website.navbar.logo}
                  className="object-contain md:h-[40px] md:w-[42px] lg:h-[50px] lg:w-[52px] xl:h-[63px] xl:w-[65px] 2xl:h-[80px] 2xl:w-[80px]"
                  alt="company-logo"
                />
              </Link>
              <div className="flex flex-row md:gap-x-2 lg:gap-x-3.5 xl:gap-x-4 2xl:gap-x-5">
                {buttonItems.map((item, index) => (
                  <Link reloadDocument to={item.link} key={index}>
                    <Button className="rounded-full border-transparent bg-white bg-opacity-10 text-white hover:bg-white hover:text-mirage md:h-7 md:px-2.5 md:text-[8px] lg:h-8 lg:px-3 lg:text-[10px] xl:h-9 xl:text-[13px] 2xl:h-10 2xl:px-4 2xl:text-[16px]">
                      {item.name}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center text-white md:gap-x-3 xl:gap-x-6 2xl:gap-x-10">
              <a
                href={`tel:${website.contact.phoneNumber}`}
                className="flex items-center gap-x-1.5 md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]"
              >
                <GrPhone size={20} />
                {website.contact.phoneNumberDisplay}
              </a>
              <Link to="/contact-us">
                <Button
                  variant="outline"
                  className="rounded-full border-white bg-transparent md:h-6 md:px-3.5 md:text-[8px] lg:h-8 lg:px-3 lg:text-[10px] xl:h-9 xl:text-[13px] 2xl:h-10 2xl:px-4 2xl:text-[16px]"
                >
                  {website.navbar.contactUsButton}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 z-[100] flex h-[87px] w-full items-center justify-center bg-black bg-opacity-20 md:hidden">
        <div className="mx-auto flex w-[90%] items-center justify-between">
          <Link to="/">
            <img
              src={website.navbar.logo}
              className="h-[70px] w-[70px] object-contain"
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
