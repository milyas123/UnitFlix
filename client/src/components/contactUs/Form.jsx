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
    <section className="flex items-center justify-center bg-whiteLilac py-[5rem] md:h-screen">
      <div className="mx-auto flex w-full flex-col items-center justify-between gap-10 bg-white p-4 px-2.5 md:w-[65%] md:flex-row md:gap-0 md:rounded-md lg:rounded-lg 2xl:rounded-xl">
        <div className="flex w-full flex-col justify-between gap-8 rounded-xl bg-mirage px-4 pb-14 pt-8 text-white md:w-[45%] md:gap-9 md:rounded-md md:p-4 lg:gap-11 lg:rounded-lg lg:p-5 xl:gap-14 xl:p-6 2xl:gap-16 2xl:rounded-xl 2xl:px-8 2xl:py-10">
          <div className="whitespace-nowrap">
            <h1 className="text-[28px] font-semibold md:text-[14px] lg:text-[18px] xl:text-[22px] 2xl:text-[26px]">
              Contact Information
            </h1>
            <p className="text-[18px] text-slate md:text-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[16px]">
              Say something to start a live chat!
            </p>
          </div>

          <div className="flex flex-col gap-5 text-[16px] md:gap-4 md:text-[8px] lg:gap-5 lg:text-[10px] xl:gap-6 xl:text-[13px] 2xl:gap-7 2xl:text-[16px]">
            <div className="flex items-center justify-start gap-x-2 md:gap-x-2 2xl:gap-x-4">
              <CgPhone size={18} />
              <p>+1012 3456 789</p>
            </div>

            <div className="flex items-center justify-start gap-x-2 md:gap-x-2 2xl:gap-x-4">
              <MdEmail size={18} />
              <p>demo@gmail.com</p>
            </div>

            <div className="flex items-start justify-start gap-x-2 md:items-center md:gap-x-2 2xl:gap-x-4">
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
            <div className="cursor-pointer rounded-full bg-mirageLight p-2 transition-all duration-300 ease-in-out hover:bg-white hover:text-mirage">
              <FaTwitter />
            </div>
            <div className="cursor-pointer rounded-full bg-mirageLight p-2 transition-all duration-300 ease-in-out hover:bg-white hover:text-mirage">
              <FaInstagram />
            </div>
            <div className="cursor-pointer rounded-full bg-mirageLight p-2 transition-all duration-300 ease-in-out hover:bg-white hover:text-mirage">
              <FaDiscord />
            </div>
          </div>
        </div>
        <div className="ms-auto w-full md:w-[50%]">
          <div className="flex flex-col gap-7 md:gap-6 lg:gap-7 2xl:gap-8">
            <div className="space-y-1">
              <h1 className="text-[24px] font-semibold md:text-[14px] lg:text-[18px] xl:text-[24px] 2xl:text-[30px]">
                Real Estate Inquiry Form
              </h1>
              <p className="text-[15px] md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]">
                As the complexity of buildings to increase
              </p>
            </div>

            <form
              action=""
              className="flex flex-col gap-4 md:gap-3.5 lg:gap-5 xl:gap-6 2xl:gap-7"
            >
              <div className="flex flex-col gap-2.5 md:gap-y-0.5 lg:gap-y-1.5 xl:gap-y-2.5 2xl:gap-y-3">
                <label className="font-semibold md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
                  Your Name
                </label>
                <div className="relative flex items-center">
                  <Input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="md:ps-7 lg:ps-7 xl:ps-8 2xl:ps-9"
                  />
                  <UserRound
                    className="absolute left-1.5 text-muted-foreground md:left-1.5 xl:left-2 2xl:left-3"
                    size={19}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2.5 md:gap-y-0.5 lg:gap-y-1.5 xl:gap-y-2.5 2xl:gap-y-3">
                <label className="font-semibold md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
                  Email
                </label>
                <div className="relative flex items-center">
                  <Input
                    type="email"
                    id="email"
                    placeholder="example@domain.com"
                    className="md:ps-7 lg:ps-7 xl:ps-8 2xl:ps-9"
                  />
                  <Mail
                    className="absolute left-1.5 text-muted-foreground md:left-1.5 xl:left-2 2xl:left-3"
                    size={19}
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
                    className="md:ps-7 lg:ps-7 xl:ps-8 2xl:ps-9"
                  />
                  <Phone
                    className="absolute left-1.5 text-muted-foreground md:left-1.5 xl:left-2 2xl:left-3"
                    size={19}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2.5 md:gap-y-0.5 lg:gap-y-1.5 xl:gap-y-2.5 2xl:gap-y-3">
                <label className="font-semibold md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
                  Message
                </label>
                <div className="relative flex items-center">
                  <Textarea
                    rows={4}
                    placeholder="I want to buy/rent..."
                    className="md:ps-7 lg:ps-7 xl:ps-8 2xl:ps-9"
                  />
                  <BiMessageSquareDetail
                    className="absolute left-1.5 top-4 text-muted-foreground md:left-1.5 md:top-1 lg:top-1.5 xl:left-2 xl:top-[11px] 2xl:left-3 2xl:top-4"
                    size={19}
                  />
                </div>
              </div>

              <div className="ms-auto">
                <Button className="rounded-md hover:bg-transparent hover:text-mirage md:h-7 md:w-[100px] lg:h-8 lg:w-[120px] xl:h-9 xl:w-[150px] 2xl:h-10 2xl:w-[200px]">
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
