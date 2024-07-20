import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { UserRound, Phone } from "lucide-react";
import { BiMessageSquareDetail } from "react-icons/bi";
import Email from "../svgs/Email";
import { BsDot } from "react-icons/bs";

const quickLinks = [
  "Terms of Use",
  "Privacy Policy",
  "Our Services",
  "Contact",
  "Careers",
  "FAQs",
];

const Footer = () => {
  return (
    <footer>
      <img
        src="/assets/imgs/footer-vector.png"
        className="-mb-[1px] size-full object-cover"
        alt="footer-vector"
      />
      <div className="bg-mirage text-white">
        <div className="mx-auto flex w-full flex-col items-center justify-between gap-10 px-2 py-16 md:w-[65%] md:flex-row md:px-0 md:pt-24">
          <div className="flex w-full flex-col gap-8 md:w-[30%] md:gap-7 lg:gap-9 xl:gap-12 2xl:gap-14">
            <div className="flex items-center gap-1.5">
              <img
                src="/assets/imgs/Logo.png"
                className="size-[60px] object-cover md:size-[35px] lg:size-[42px] xl:size-[50px] 2xl:size-[60px]"
                alt=""
              />
              <p className="whitespace-nowrap text-[30px] font-semibold md:text-[14px] lg:text-[18px] xl:text-[24px] 2xl:text-[30px]">
                UnitFlix
              </p>
            </div>

            <div className="flex items-center justify-between md:gap-10 md:px-2.5">
              <div className="space-y-1.5">
                <p className="font-regular whitespace-nowrap text-[14px] text-slate md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
                  Total Free Customer Care
                </p>
                <a
                  href="tel:+(088) 123 456 789"
                  className="text-[15px] font-semibold md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[15px]"
                >
                  +(088) 123 456 789
                </a>
              </div>

              <div className="space-y-1.5">
                <p className="font-regular text-[14px] text-slate md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
                  Live Support?
                </p>
                <a
                  href="mailto:hi@homez.com"
                  target="_top"
                  className="text-[15px] font-semibold md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[15px]"
                >
                  hi@homez.com
                </a>
              </div>
            </div>

            <div className="space-y-2 md:space-y-1.5 md:px-2.5">
              <p className="text-[15px] font-semibold md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[15px]">
                Follow us on social media
              </p>
              <div className="flex items-center gap-x-5 text-pastelGrey md:gap-x-1.5 lg:gap-x-2 xl:gap-x-2.5 2xl:gap-x-3">
                <div className="cursor-pointer rounded-full bg-mirageLight transition-all duration-300 ease-in-out hover:bg-white hover:text-mirage md:p-1 2xl:p-2">
                  <FaFacebookF className="size-4 cursor-pointer md:size-2 lg:size-3 xl:size-4" />
                </div>
                <div className="cursor-pointer rounded-full bg-mirageLight transition-all duration-300 ease-in-out hover:bg-white hover:text-mirage md:p-1 2xl:p-2">
                  <FaTwitter className="size-4 cursor-pointer md:size-2 lg:size-3 xl:size-4" />
                </div>
                <div className="cursor-pointer rounded-full bg-mirageLight transition-all duration-300 ease-in-out hover:bg-white hover:text-mirage md:p-1 2xl:p-2">
                  <FaInstagram className="size-4 cursor-pointer md:size-2 lg:size-3 xl:size-4" />
                </div>
                <div className="cursor-pointer rounded-full bg-mirageLight transition-all duration-300 ease-in-out hover:bg-white hover:text-mirage md:p-1 2xl:p-2">
                  <FaLinkedinIn className="size-4 cursor-pointer md:size-2 lg:size-3 xl:size-4" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col items-start md:w-[30%] md:items-center">
            <div className="space-y-3.5 md:space-y-2 lg:space-y-2.5 xl:space-y-3.5 2xl:space-y-4">
              <h4 className="text-[15px] font-semibold">Quick Links</h4>
              {quickLinks.map((quickLink, index) => (
                <p
                  key={index}
                  className="cursor-pointer text-[14px] text-slate transition-all duration-200 ease-in-out hover:text-white md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]"
                >
                  {quickLink}
                </p>
              ))}
            </div>
          </div>

          <div className="w-full md:w-[40%]">
            <h4 className="mb-6 text-[15px] font-semibold md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[15px]">
              Get In Touch
            </h4>
            <form className="flex flex-col gap-y-2.5 md:gap-y-1 lg:gap-y-1.5 xl:gap-y-2 2xl:gap-y-2.5">
              <div className="relative flex items-center">
                <Input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="border-transparent bg-white bg-opacity-10 ps-9 text-grey md:ps-5 lg:ps-[22px] xl:ps-8 2xl:ps-[38px]"
                />
                <UserRound className="absolute left-2 size-5 text-grey md:left-1.5 md:size-2.5 lg:size-3 xl:left-[9px] xl:size-4 2xl:left-3 2xl:size-5" />
              </div>
              <div className="relative flex items-center">
                <Input
                  type="email"
                  id="email"
                  placeholder="example@domain.com"
                  className="border-transparent bg-white bg-opacity-10 ps-9 text-grey md:ps-5 lg:ps-[22px] xl:ps-8 2xl:ps-[38px]"
                />
                <Email className="absolute left-2 text-grey md:left-1.5 xl:left-2 2xl:left-3" />
              </div>
              <div className="relative flex items-center">
                <Input
                  type="number"
                  id="phone"
                  placeholder="(+92) 311 7995274"
                  className="border-transparent bg-white bg-opacity-10 ps-9 text-grey md:ps-5 lg:ps-[22px] xl:ps-8 2xl:ps-[38px]"
                />
                <Phone className="absolute left-2 size-5 text-grey md:left-1.5 md:size-2.5 lg:size-3 xl:left-[9px] xl:size-4 2xl:left-3 2xl:size-5" />
              </div>
              <div className="relative flex items-center">
                <Textarea
                  rows={4}
                  placeholder="I want to buy/rent..."
                  className="border-transparent bg-white bg-opacity-10 ps-9 text-grey md:ps-5 lg:ps-[22px] xl:ps-8 2xl:ps-[38px]"
                />
                <BiMessageSquareDetail className="absolute left-2 top-3 size-5 text-grey md:left-1.5 md:top-2 md:size-2.5 lg:top-2.5 lg:size-3 xl:left-[9px] xl:top-[12.5px] xl:size-4 2xl:left-3 2xl:top-3.5 2xl:size-5" />
              </div>
              <Button className="rounded-md bg-sunriseOrange hover:border-2 hover:border-sunriseOrange hover:bg-transparent hover:text-sunriseOrange md:h-6 md:text-[8px] lg:h-7 lg:text-[10px] xl:h-8 xl:text-[12px] 2xl:h-9 2xl:py-5 2xl:text-[14px]">
                Submit
              </Button>
            </form>
          </div>
        </div>

        <div className="mx-auto flex flex-col items-center justify-between gap-y-5 border-t border-white border-opacity-10 py-5 text-[14px] text-slate md:w-[65%] md:flex-row md:gap-y-0 md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
          <p>&copy; Unitflix - All rights reserved</p>
          <div className="flex items-center gap-x-3 md:gap-x-1 lg:gap-x-1.5 xl:gap-x-2 2xl:gap-x-2.5">
            <p>Privacy</p>
            <BsDot />
            <p>Terms</p>
            <BsDot />
            <p>Sitemap</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
