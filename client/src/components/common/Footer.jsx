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
          <div className="w-full flex flex-col gap-14">
            <div className="flex items-center gap-1.5">
              <img src="/assets/imgs/Logo.png" className="size-[60px]" alt="" />
              <p className="font-semibold text-[30px]">UnitFlix</p>
            </div>

            <div className="flex items-center gap-10 px-2.5">
              <div className="space-y-1.5">
                <p className="text-[14px] text-slate font-regular whitespace-nowrap">
                  Total Free Customer Care
                </p>
                <p className="font-semibold text-[15px]">+(088) 123 456 789</p>
              </div>

              <div className="space-y-1.5">
                <p className="text-[14px] text-slate font-regular">
                  Live Support?
                </p>
                <p className="font-semibold text-[15px]">hi@homez.com</p>
              </div>
            </div>

            <div className="space-y-1.5 px-2.5">
              <p className="font-semibold text-[15px]">
                Follow us on social media
              </p>
              <div className="flex items-center gap-8">
                <FaFacebookF size={15} className="cursor-pointer" />
                <FaTwitter size={15} className="cursor-pointer" />
                <FaInstagram size={15} className="cursor-pointer" />
                <FaLinkedinIn size={15} className="cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-center">
            <div className="space-y-4">
              <h4 className="font-semibold text-[15px]">Quick Links</h4>
              <p className="text-[14px] text-slate cursor-pointer">Terms of Use</p>
              <p className="text-[14px] text-slate cursor-pointer">Privacy Policy</p>
              <p className="text-[14px] text-slate cursor-pointer">Pricing Plans</p>
              <p className="text-[14px] text-slate cursor-pointer">Our Services</p>
              <p className="text-[14px] text-slate cursor-pointer">Contact</p>
              <p className="text-[14px] text-slate cursor-pointer">Careers</p>
              <p className="text-[14px] text-slate cursor-pointer">FAQs</p>
            </div>
          </div>

          <div className="w-full">
            <h4 className="font-semibold text-[15px] mb-6">Get In Touch</h4>
            <form className="flex flex-col gap-y-4">
              <div className="relative flex items-center">
                <Input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="bg-white bg-opacity-10 text-grey placeholder:text-grey"
                />
                <UserRound
                  className="absolute left-3 text-grey"
                  size={20}
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
                  className="absolute left-3 text-grey"
                  size={20}
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
                  className="absolute left-3 text-grey"
                  size={20}
                />
              </div>
              <div className="relative flex items-center">
                <Textarea placeholder="I want to buy/rent..." className="bg-white bg-opacity-10 text-grey placeholder:text-grey" />
                <BiMessageSquareDetail
                  className="absolute top-3 left-3 text-grey"
                  size={20}
                />
              </div>
              <Button className="rounded-md bg-sunriseOrange hover:border-2 hover:border-sunriseOrange hover:text-sunriseOrange hover:bg-transparent">Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
