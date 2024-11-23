import {useRef, useState} from "react";
import axios from "axios";

import Email from "../svgs/Email";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { UserRound, Phone } from "lucide-react";
import { BiMessageSquareDetail } from "react-icons/bi";
import MessageModal from "@/website/components/common/MessageModal.jsx";
import ReCAPTCHA from "react-google-recaptcha";

const serverURL = import.meta.env.VITE_SERVER_URL;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState('');
  const recaptcha = useRef(null)

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
      setFormData({ name: "", email: "", phone: "", message: "" });
      recaptcha.current.reset();
      setMessage('Your message has been submitted successfully. We will get back to you promptly')
      setStatus('success');
    } catch (error) {
      console.error("Error submitting the form:", error.data);
      setMessage(error?.response?.data && typeof error?.response?.data === 'string' ? error?.response.data : "There was an issue submitting the form. Please try again later.");
      setStatus('error')
    } finally {
      setLoading(false);
    }
  };

  const onMessageModalClose = () => {
    setMessage('');
    setStatus('');
  }

  return (
    <>
      <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-4 md:gap-y-1.5 lg:gap-y-2 xl:gap-y-3 2xl:gap-y-4"
      >
        <div className="relative flex items-center">
          <Input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="ps-9 md:ps-5 lg:ps-[22px] xl:ps-8 2xl:ps-[38px]"
          />
          <UserRound className="absolute left-2 size-5 text-grey md:left-1.5 md:size-2.5 lg:size-3 xl:left-[9px] xl:size-4 2xl:left-3 2xl:size-5" />
        </div>
        <div className="relative flex items-center">
          <Input
              type="email"
              id="email"
              placeholder="example@domain.com"
              value={formData.email}
              onChange={handleChange}
              className="ps-9 md:ps-5 lg:ps-[22px] xl:ps-8 2xl:ps-[38px]"
          />
          <Email className="absolute left-2 text-grey md:left-1.5 xl:left-[9px] 2xl:left-3" />
        </div>
        <div className="relative flex items-center">
          <Input
              type="number"
              id="phone"
              placeholder="(+971) 512345678"
              value={formData.phone}
              onChange={handleChange}
              className="ps-9 md:ps-5 lg:ps-[22px] xl:ps-8 2xl:ps-[38px]"
          />
          <Phone className="absolute left-2 size-5 text-grey md:left-1.5 md:size-2.5 lg:size-3 xl:left-[9px] xl:size-4 2xl:left-3 2xl:size-5" />
        </div>
        <div className="relative flex items-center">
          <Textarea
              id="message"
              placeholder="I want to buy/sell/rent/manage..."
              value={formData.message}
              onChange={handleChange}
              className="ps-9 md:ps-5 lg:ps-[22px] xl:ps-8 2xl:ps-[38px]"
          />
          <BiMessageSquareDetail className="absolute left-2 top-3 size-5 text-grey md:left-1.5 md:top-2 md:size-2.5 lg:top-2.5 lg:size-3 xl:left-[9px] xl:top-[12.5px] xl:size-4 2xl:left-3 2xl:top-3.5 2xl:size-5" />
        </div>
        <div className="flex items-center">
          <ReCAPTCHA sitekey={import.meta.env.VITE_SITE_KEY} ref={recaptcha} />
        </div>
        {message && status === 'error' && <div className="font-medium text-red-500">{message}</div>}
        <Button
            type="submit"
            className="h-9 rounded-md hover:bg-transparent hover:text-mirage md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:py-5 2xl:text-[14px]"
            disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </form>
      {
        message && status === 'success' ?
            <MessageModal title={status === 'success' ? 'Success' : 'Error'} onClose={onMessageModalClose}>
              <p className='text-smokeyGrey'>{message}</p>
            </MessageModal> : <></>
      }
    </>
  );
};

export default ContactForm;
