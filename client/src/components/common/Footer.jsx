import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { UserRound, Mail, Phone } from "lucide-react";
import { BiMessageSquareDetail } from "react-icons/bi";

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
        className="size-full "
        alt="footer-vector"
      />
      <div className="bg-mirage text-white">
        <div className="w-[65%] mx-auto py-24 flex justify-between items-center">
          <div className="w-full flex flex-col md:gap-7 lg:gap-9 xl:gap-12 2xl:gap-14">
            <div className="flex items-center gap-1.5">
              <img
                src="/assets/imgs/Logo.png"
                className="object-cover md:size-[35px] lg:size-[42px] xl:size-[50px] 2xl:size-[60px]"
                alt=""
              />
              <p className="font-semibold whitespace-nowrap md:text-[14px] lg:text-[18px] xl:text-[24px] 2xl:text-[30px]">
                UnitFlix
              </p>
            </div>

            <div className="flex items-center gap-10 px-2.5">
              <div className="space-y-1.5">
                <p className="md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px] text-slate font-regular whitespace-nowrap">
                  Total Free Customer Care
                </p>
                <p className="font-semibold md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[15px]">
                  +(088) 123 456 789
                </p>
              </div>

              <div className="space-y-1.5">
                <p className="md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px] text-slate font-regular">
                  Live Support?
                </p>
                <p className="font-semibold md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[15px]">
                  hi@homez.com
                </p>
              </div>
            </div>

            <div className="space-y-1.5 px-2.5">
              <p className="font-semibold md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[15px]">
                Follow us on social media
              </p>
              <div className="flex items-center md:gap-2 lg:gap-4 xl:gap-6 2xl:gap-8">
                <div className="bg-mirageLight hover:bg-white hover:text-mirage rounded-full p-2 cursor-pointer transition-all duration-300 ease-in-out">
                  <FaFacebookF size={15} className="cursor-pointer" />
                </div>
                <div className="bg-mirageLight hover:bg-white hover:text-mirage rounded-full p-2 cursor-pointer transition-all duration-300 ease-in-out">
                  <FaTwitter size={15} className="cursor-pointer" />
                </div>
                <div className="bg-mirageLight hover:bg-white hover:text-mirage rounded-full p-2 cursor-pointer transition-all duration-300 ease-in-out">
                  <FaInstagram size={15} className="cursor-pointer" />
                </div>
                <div className="bg-mirageLight hover:bg-white hover:text-mirage rounded-full p-2 cursor-pointer transition-all duration-300 ease-in-out">
                  <FaLinkedinIn size={15} className="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-center">
            <div className="md:space-y-2 lg:space-y-2.5 xl:space-y-3.5 2xl:space-y-4">
              <h4 className="font-semibold text-[15px]">Quick Links</h4>
              {quickLinks.map((quickLink, index) => (
                <p
                  key={index}
                  className="md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px] text-slate cursor-pointer hover:text-white transition-all duration-200 ease-in-out"
                >
                  {quickLink}
                </p>
              ))}
            </div>
          </div>

          <div className="w-full">
            <h4 className="font-semibold md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[15px] mb-6">
              Get In Touch
            </h4>
            <form className="flex flex-col md:gap-y-1.5 lg:gap-y-2 xl:gap-y-3 2xl:gap-y-4">
              <div className="relative flex items-center">
                <Input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="bg-white bg-opacity-10 text-grey placeholder:text-grey"
                />
                <UserRound
                  className="absolute md:left-2 2xl:left-3 text-grey"
                  size={17}
                />
              </div>
              <div className="relative flex items-center">
                <Input
                  type="email"
                  id="email"
                  placeholder="example@domain.com"
                  className="bg-white bg-opacity-10 text-grey placeholder:text-grey"
                />
                <Mail
                  className="absolute md:left-2 2xl:left-3 text-grey"
                  size={17}
                />
              </div>
              <div className="relative flex items-center">
                <Input
                  type="number"
                  id="phone"
                  placeholder="(+92) 311 7995274"
                  className="bg-white bg-opacity-10 text-grey placeholder:text-grey"
                />
                <Phone
                  className="absolute md:left-2 2xl:left-3 text-grey"
                  size={17}
                />
              </div>
              <div className="relative flex items-center">
                <Textarea
                  placeholder="I want to buy/rent..."
                  className="bg-white bg-opacity-10 text-grey placeholder:text-grey"
                />
                <BiMessageSquareDetail
                  className="absolute md:top-2 2xl:top-2.5 md:left-2 2xl:left-3 text-grey"
                  size={20}
                />
              </div>
              <Button className="rounded-md bg-sunriseOrange hover:border-2 hover:border-sunriseOrange hover:text-sunriseOrange hover:bg-transparent md:h-6 lg:h-7 xl:h-8 2xl:h-9 md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px]">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
