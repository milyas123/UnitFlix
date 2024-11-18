import {useRef, useState} from "react";
import axios from "axios";

import { Input } from "../ui/input";
import { Phone, UserRound } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { BiMessageSquareDetail } from "react-icons/bi";
import { Button } from "../ui/button";
import Email from "../svgs/Email";
import website from "@/data/website.json";

import {FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter} from "react-icons/fa6";
import { BsDot } from "react-icons/bs";
import MessageModal from "@/website/components/common/MessageModal.jsx";
import ReCAPTCHA from "react-google-recaptcha"

const serverURL = import.meta.env.VITE_SERVER_URL;

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState('');
  const recaptcha = useRef(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!recaptcha.current.getValue()) {
      setMessage('Please submit the captcha before you can submit the request')
      setStatus('error');
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const response = await axios.post(`${serverURL}/email/contact`, formData);
      console.log("Form submitted successfully:", response.data);
      setMessage('Your message has been submitted successfully. We will get back to you promptly')
      setFormData({ name: "", email: "", phone: "", message: "" });
      recaptcha.current.reset();
      setStatus('success');
    } catch (error) {
      console.error("Error submitting the form:", error.data);
      setMessage(error.response?.data || "There was an issue submitting the form. Please try again.");
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const onMessageModalClose = () => {
    setMessage('');
    setStatus('');
  }

  return (
      <div>
        <footer>
          <img
              src="/assets/imgs/footer-vector.png"
              className="-mb-[1px] size-full object-cover"
              alt="footer-vector"
          />
          <div className="bg-mirage text-white">
            <div
                className="mx-auto flex w-full flex-col items-center justify-between gap-10 px-2 py-16 md:w-[65%] md:flex-row md:px-0 md:pt-24">
              <div className="flex w-full flex-col gap-8 md:w-[30%] md:gap-7 lg:gap-9 xl:gap-12 2xl:gap-14">
                <div className="flex items-center gap-1.5">
                  <img
                      src={website.footer.logo}
                      className="size-[60px] object-contain md:size-[35px] lg:size-[42px] xl:size-[50px] 2xl:size-[70px]"
                      alt=""
                  />
                  <p className="whitespace-nowrap text-[30px] font-semibold md:text-[14px] lg:text-[18px] xl:text-[24px] 2xl:text-[30px]">
                    UnitFlix
                  </p>
                </div>

                <div className="flex items-center justify-between md:gap-10 md:px-2.5">
                  <div className="space-y-1.5">
                    <p className="font-regular whitespace-nowrap text-[14px] text-slate md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
                      {website.footer.phoneNumberLabel}
                    </p>
                    <a
                        href={`tel:${website.contact.phoneNumber}`}
                        className="text-[15px] whitespace-nowrap font-semibold md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[15px]"
                    >
                      {website.contact.phoneNumberDisplay}
                    </a>
                  </div>

                  <div className="space-y-1.5">
                    <p className="font-regular text-[14px] text-slate md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
                      {website.footer.emailLabel}
                    </p>
                    <a
                        href={`mailto:${website.contact.email}`}
                        target="_top"
                        className="text-[15px] font-semibold md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[15px]"
                    >
                      {website.contact.email}
                    </a>
                  </div>
                </div>

                <div className="space-y-2 md:space-y-1.5 md:px-2.5">
                  <p className="text-[15px] font-semibold md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[15px]">
                    Follow us on social media
                  </p>
                  <div
                      className="flex items-center gap-x-4 text-pastelGrey md:gap-x-1.5 lg:gap-x-2 xl:gap-x-2.5 2xl:gap-x-3">
                    <a href={website.footer.social.facebook} target='_blank' className="cursor-pointer rounded-full bg-mirageLight transition-all duration-300 ease-in-out hover:bg-white hover:text-mirage p-1 md:p-1 2xl:p-2">
                      <FaFacebookF className="size-3.5 cursor-pointer md:size-2 lg:size-3 xl:size-4"/>
                    </a>
                    <a href={website.footer.social.x} target='_blank' className="cursor-pointer rounded-full bg-mirageLight transition-all duration-300 ease-in-out hover:bg-white hover:text-mirage p-1 md:p-1 2xl:p-2">
                      <FaXTwitter className="size-3.5 cursor-pointer md:size-2 lg:size-3 xl:size-4"/>
                    </a>
                    <a href={website.footer.social.instagram} target='_blank' className="cursor-pointer rounded-full bg-mirageLight transition-all duration-300 ease-in-out hover:bg-white hover:text-mirage p-1 md:p-1 2xl:p-2">
                      <FaInstagram className="size-3.5 cursor-pointer md:size-2 lg:size-3 xl:size-4"/>
                    </a>
                    <a href={website.footer.social.linkedin} target='_blank' className="cursor-pointer rounded-full bg-mirageLight transition-all duration-300 ease-in-out hover:bg-white hover:text-mirage p-1 md:p-1 2xl:p-2">
                      <FaLinkedinIn className="size-3.5 cursor-pointer md:size-2 lg:size-3 xl:size-4"/>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex w-full flex-col items-start md:w-[30%] md:items-center">
                <div className="space-y-3.5 md:space-y-2 lg:space-y-2.5 xl:space-y-3.5 2xl:space-y-4">
                  <h4 className="text-[15px] font-semibold">Quick Links</h4>
                  {website.footer.quickLinks.map((quickLink, index) => (
                      <a key={index} className="cursor-pointer text-[14px] text-slate transition-all duration-200 ease-in-out hover:text-white md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px] block"
                        href={quickLink.link}>
                        {quickLink.label}
                      </a>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-[40%]">
                <h4 className="mb-6 text-[15px] font-semibold md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[15px]">
                  Get In Touch
                </h4>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-y-2.5 md:gap-y-1 lg:gap-y-1.5 xl:gap-y-2 2xl:gap-y-2.5"
                >
                  <div className="relative flex items-center">
                    <Input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border-transparent bg-white bg-opacity-10 ps-9 text-grey md:ps-5 lg:ps-[22px] xl:ps-8 2xl:ps-[38px]"
                    />
                    <UserRound
                        className="absolute left-2 size-5 text-grey md:left-1.5 md:size-2.5 lg:size-3 xl:left-[9px] xl:size-4 2xl:left-3 2xl:size-5"/>
                  </div>
                  <div className="relative flex items-center">
                    <Input
                        type="email"
                        id="email"
                        placeholder="example@domain.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="border-transparent bg-white bg-opacity-10 ps-9 text-grey md:ps-5 lg:ps-[22px] xl:ps-8 2xl:ps-[38px]"
                    />
                    <Email className="absolute left-2 text-grey md:left-1.5 xl:left-2 2xl:left-3"/>
                  </div>
                  <div className="relative flex items-center">
                    <Input
                        type="number"
                        id="phone"
                        placeholder="(+971) 512345678"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-transparent bg-white bg-opacity-10 ps-9 text-grey md:ps-5 lg:ps-[22px] xl:ps-8 2xl:ps-[38px]"
                    />
                    <Phone
                        className="absolute left-2 size-5 text-grey md:left-1.5 md:size-2.5 lg:size-3 xl:left-[9px] xl:size-4 2xl:left-3 2xl:size-5"/>
                  </div>
                  <div className="relative flex items-center">
                    <Textarea
                        rows={4}
                        id="message"
                        placeholder="I want to buy/rent..."
                        value={formData.message}
                        onChange={handleChange}
                        className="border-transparent bg-white bg-opacity-10 ps-9 text-grey md:ps-5 lg:ps-[22px] xl:ps-8 2xl:ps-[38px]"
                    />
                    <BiMessageSquareDetail
                        className="absolute left-2 top-3 size-5 text-grey md:left-1.5 md:top-2 md:size-2.5 lg:top-2.5 lg:size-3 xl:left-[9px] xl:top-[12.5px] xl:size-4 2xl:left-3 2xl:top-3.5 2xl:size-5"/>
                  </div>
                  <div className="flex items-center">
                    <ReCAPTCHA sitekey={import.meta.env.VITE_SITE_KEY} ref={recaptcha} theme={'dark'}/>
                  </div>
                  {message && status === 'error' && <div className="font-medium text-red-500">{message}</div>}
                  <Button
                      type="submit"
                      className="rounded-md bg-sunriseOrange hover:border-2 hover:border-sunriseOrange hover:bg-transparent hover:text-sunriseOrange md:h-6 md:text-[8px] lg:h-7 lg:text-[10px] xl:h-8 xl:text-[12px] 2xl:h-9 2xl:py-5 2xl:text-[14px]"
                      disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </Button>
                </form>
              </div>
            </div>

            <div
                className="mx-auto flex flex-col items-center justify-between gap-y-5 border-t border-white border-opacity-10 py-5 text-[14px] text-slate md:w-[65%] md:flex-row md:gap-y-0 md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
              <p>{website.footer.rights}</p>
              <div className="flex items-center gap-x-3 md:gap-x-1 lg:gap-x-1.5 xl:gap-x-2 2xl:gap-x-2.5">
                <a className='transition-all duration-200 ease-in-out hover:text-white' href={website.footer.privacy.link}>{website.footer.privacy.label}</a>
                <BsDot/>
                <a className='transition-all duration-200 ease-in-out hover:text-white' href={website.footer.terms.link}>{website.footer.terms.label}</a>
              </div>
            </div>
          </div>
        </footer>
        {
          message && status === 'success' ?
              <MessageModal title={status === 'success' ? 'Success' : 'Error'} onClose={onMessageModalClose}>
                <p className='text-smokeyGrey'>{message}</p>
              </MessageModal> : <></>
        }
      </div>
  );
};

export default Footer;
