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
    <section className="bg-whiteLilac h-screen flex items-center justify-center">
      <div className="w-[60%] mx-auto bg-white rounded-lg p-4 flex justify-between items-center">
        <div className="w-[40%] bg-mirage text-white rounded-lg px-8 py-10 flex flex-col justify-between gap-16">
          <div>
            <h1 className="font-semibold text-[28px]">Contact Information</h1>
            <p className="text-[18px] text-slate">
              Say something to start a live chat!
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-x-4">
              <CgPhone size={22} />
              <p>+1012 3456 789</p>
            </div>

            <div className="flex items-center gap-x-4">
              <MdEmail size={22} />
              <p>demo@gmail.com</p>
            </div>

            <div className="flex items-center gap-x-4">
              <FaLocationDot size={22} />
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
        <div className="w-[55%] ms-auto">
          <div className="flex flex-col gap-8">
            <div className="space-y-1">
              <h1 className="font-semibold text-[30px]">
                Real Estate Inquiry Form
              </h1>
              <p className="text-[15px]">
                As the complexity of buildings to increase
              </p>
            </div>

            <form action="" className="flex flex-col gap-6">
              <div className="flex flex-col gap-y-3">
                <label className="font-semibold text-[14px]">Your Name</label>
                <div className="relative flex items-center">
                  <Input type="text" id="name" placeholder="Enter your name" />
                  <UserRound
                    className="absolute left-3 text-muted-foreground"
                    size={20}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-3">
                <label className="font-semibold text-[14px]">Email</label>
                <div className="relative flex items-center">
                  <Input
                    type="email"
                    id="email"
                    placeholder="example@domain.com"
                  />
                  <Mail
                    className="absolute left-3 text-muted-foreground"
                    size={20}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-3">
                <label className="font-semibold text-[14px]">
                  Phone Number
                </label>
                <div className="relative flex items-center">
                  <Input
                    type="number"
                    id="phone"
                    placeholder="(+92) 311 7995274"
                  />
                  <Phone
                    className="absolute left-3 text-muted-foreground"
                    size={20}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-3">
                <label className="font-semibold text-[14px]">Message</label>
                <div className="relative flex items-center">
                  <Textarea placeholder="I want to buy/rent..." />
                  <BiMessageSquareDetail
                    className="absolute top-3 left-3 text-muted-foreground"
                    size={20}
                  />
                </div>
              </div>

              <div className="ms-auto">
                <Button className="rounded-md hover:bg-transparent hover:border-2 hover:border-mirage hover:text-mirage w-[200px] py-6">
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
