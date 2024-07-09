import { CgPhone } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa";
import { Input } from "../ui/input";
import { Mail, Phone, UserRound } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { BiMessageSquareDetail } from "react-icons/bi";
import { Button } from "../ui/button";

const Form = () => {
  return (
    <section className="bg-whiteLilac py-[5rem] md:h-screen flex items-center justify-center">
      <div className="w-full px-2.5 md:w-[65%] mx-auto bg-white md:rounded-md lg:rounded-lg 2xl:rounded-xl p-4 flex flex-col gap-10 md:gap-0 md:flex-row justify-between items-center">
        <div className="w-full md:w-[45%] bg-mirage text-white px-4 pt-8 pb-14 rounded-xl gap-8 md:rounded-md lg:rounded-lg 2xl:rounded-xl flex flex-col justify-between md:gap-9 md:p-4 lg:gap-11 lg:p-5 xl:gap-14 xl:p-6 2xl:gap-16 2xl:px-8 2xl:py-10">
          <div className="whitespace-nowrap">
            <h1 className="font-semibold text-[28px] md:text-[14px] lg:text-[18px] xl:text-[22px] 2xl:text-[26px]">Contact Information</h1>
            <p className="text-[18px] md:text-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[16px] text-slate">
              Say something to start a live chat!
            </p>
          </div>

          <div className="flex flex-col text-[16px] gap-5 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7 md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]">
            <div className="flex items-center justify-start gap-x-2 md:gap-x-2 2xl:gap-x-4">
              <CgPhone size={18} />
              <p>+1012 3456 789</p>
            </div>

            <div className="flex items-center justify-start gap-x-2 md:gap-x-2 2xl:gap-x-4">
              <MdEmail size={18} />
              <p>demo@gmail.com</p>
            </div>

            <div className="flex items-start md:items-center justify-start gap-x-2 md:gap-x-2 2xl:gap-x-4">
              <FaLocationDot size={18} />
              <p>
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </p>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1561.1318089412869!2d-71.07746119977328!3d42.346650524330826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a0d715622b3%3A0x5b2af19970952585!2s132%20Dartmouth%20St%2C%20Boston%2C%20MA%2002116%2C%20USA!5e0!3m2!1sen!2s!4v1719933206277!5m2!1sen!2s"
              className="rounded-lg"
              style={{ border: 0 }}
              aria-hidden="false"
              tabindex="0"
            />
          </div>

          <div className="mt-auto flex items-center gap-x-2">
            <div className="bg-mirageLight hover:bg-white hover:text-mirage rounded-full p-2 cursor-pointer transition-all duration-300 ease-in-out">
              <FaTwitter />
            </div>
            <div className="bg-mirageLight hover:bg-white hover:text-mirage rounded-full p-2 cursor-pointer transition-all duration-300 ease-in-out">
              <FaInstagram />
            </div>
            <div className="bg-mirageLight hover:bg-white hover:text-mirage rounded-full p-2 cursor-pointer transition-all duration-300 ease-in-out">
              <FaDiscord />
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%] ms-auto">
          <div className="flex flex-col gap-7 md:gap-6 lg:gap-7 2xl:gap-8">
            <div className="space-y-1">
              <h1 className="font-semibold text-[24px] md:text-[14px] lg:text-[18px] xl:text-[24px] 2xl:text-[30px]">
                Real Estate Inquiry Form
              </h1>
              <p className="text-[15px] md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]">
                As the complexity of buildings to increase
              </p>
            </div>

            <form action="" className="flex flex-col gap-4 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-8">
              <div className="flex flex-col gap-2.5 md:gap-y-0.5 lg:gap-y-1.5 xl:gap-y-2.5 2xl:gap-y-3">
                <label className="font-semibold md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">Your Name</label>
                <div className="relative flex items-center">
                  <Input type="text" id="name" placeholder="Enter your name" />
                  <UserRound
                    className="absolute left-1.5 md:left-2 2xl:left-3 text-muted-foreground"
                    size={17}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2.5 md:gap-y-0.5 lg:gap-y-1.5 xl:gap-y-2.5 2xl:gap-y-3">
                <label className="font-semibold md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">Email</label>
                <div className="relative flex items-center">
                  <Input
                    type="email"
                    id="email"
                    placeholder="example@domain.com"
                  />
                  <Mail
                    className="absolute left-1.5 md:left-2 2xl:left-3 text-muted-foreground"
                    size={17}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2.5 md:gap-y-0.5 lg:gap-y-1.5 xl:gap-y-2.5 2xl:gap-y-3">
                <label className="font-semibold md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
                  Phone Number
                </label>
                <div className="relative flex items-center">
                  <Input
                    type="number"
                    id="phone"
                    placeholder="(+92) 311 7995274"
                  />
                  <Phone
                    className="absolute left-1.5 md:left-2 2xl:left-3 text-muted-foreground"
                    size={17}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2.5 md:gap-y-0.5 lg:gap-y-1.5 xl:gap-y-2.5 2xl:gap-y-3">
                <label className="font-semibold md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">Message</label>
                <div className="relative flex items-center">
                  <Textarea placeholder="I want to buy/rent..." />
                  <BiMessageSquareDetail
                    className="absolute left-1.5 top-4 md:top-2 2xl:top-2.5 md:left-2 2xl:left-3 text-muted-foreground"
                    size={19}
                  />
                </div>
              </div>

              <div className="ms-auto">
                <Button className="rounded-md hover:bg-transparent hover:text-mirage md:w-[100px] lg:w-[120px] xl:w-[150px] 2xl:w-[200px]">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
