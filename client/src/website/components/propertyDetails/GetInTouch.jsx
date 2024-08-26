import axios from "axios";
import { useState } from "react";

import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { FiPhone } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import CountryCodeDropdown from "./CountryCodeDropdown";
import MessageModal from "@/website/components/common/MessageModal.jsx";

const serverURL = import.meta.env.VITE_SERVER_URL;

const countryCodes = [
  { code: "+971", name: "United Arab Emirates" },
  { code: "+1", name: "United States" },
  { code: "+44", name: "United Kingdom" },
  { code: "+61", name: "Australia" },
  { code: "+91", name: "India" },
  { code: "+81", name: "Japan" },
  { code: "+49", name: "Germany" },
  { code: "+33", name: "France" },
  { code: "+39", name: "Italy" },
  { code: "+34", name: "Spain" },
  { code: "+55", name: "Brazil" },
  { code: "+86", name: "China" },
  { code: "+7", name: "Russia" },
  { code: "+27", name: "South Africa" },
  { code: "+82", name: "South Korea" },
  { code: "+52", name: "Mexico" },
  { code: "+60", name: "Malaysia" },
  { code: "+62", name: "Indonesia" },
  { code: "+64", name: "New Zealand" },
  { code: "+41", name: "Switzerland" },
  { code: "+46", name: "Sweden" },
  { code: "+31", name: "Netherlands" },
  { code: "+32", name: "Belgium" },
  { code: "+47", name: "Norway" },
  { code: "+48", name: "Poland" },
  { code: "+45", name: "Denmark" },
  { code: "+351", name: "Portugal" },
  { code: "+353", name: "Ireland" },
  { code: "+420", name: "Czech Republic" },
  { code: "+421", name: "Slovakia" },
  { code: "+36", name: "Hungary" },
  { code: "+90", name: "Turkey" },
  { code: "+30", name: "Greece" },
  { code: "+20", name: "Egypt" },
  { code: "+254", name: "Kenya" },
  { code: "+234", name: "Nigeria" },
];

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    code: '',
    bio: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleCodeChange = (selectedCode) => {
    setFormData((prevData) => ({
      ...prevData,
      code: selectedCode,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.code + formData.contact,
        bio: formData.bio,
        message: formData.message,
      }
      const response = await axios.post(`${serverURL}/email/contact`, payload);
      console.log("Form submitted successfully:", response.data);
      setFormData({
        name: "",
        email: "",
        code: "",
        contact: "",
        bio: "",
        message: "",
      });
      setMessage('Your message has been submitted successfully. We will get back to you promptly')
      setStatus('success');
    } catch (error) {
      console.error("Error submitting the form:", error.data);
      setMessage(error.response?.data ||
          "There was an issue submitting the form. Please try again."
      );
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
      <>
        <div className="space-y-6">
          <div
              className="rounded border md:space-y-3 md:p-2 lg:space-y-4 lg:p-3 xl:p-4 2xl:space-y-6 2xl:px-4 2xl:py-6">
            <h1 className="text-center font-medium md:mb-2 md:text-[12px] lg:mb-3 lg:text-[15px] xl:text-[18px] 2xl:mb-4 2xl:text-[24px]">
              Get In Touch
            </h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col md:gap-y-1.5 lg:gap-y-2.5 xl:gap-y-3 2xl:gap-y-4"
            >
              <Input
                  type="text"
                  id="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleChange}
              />
              <Input
                  type="email"
                  id="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
              />

              <div className="flex w-full items-center justify-between md:gap-1.5 xl:gap-2">
                <CountryCodeDropdown
                    options={countryCodes}
                    placeholder="Code"
                    className="w-[20%]"
                    value={formData.code}
                    onChange={handleCodeChange}
                />
                <Input
                    type="number"
                    id="contact"
                    min={1}
                    placeholder="Contact No*"
                    className="w-[75%]"
                    value={formData.contact}
                    onChange={handleChange}
                />
              </div>
              <Input
                  type="text"
                  id="bio"
                  placeholder="I am "
                  value={formData.bio}
                  onChange={handleChange}
              />
              <Textarea
                  placeholder="Enter message"
                  className="md:h-[60px] 2xl:h-[160px]"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
              />
              {message && status === 'error' && <div className="font-medium text-red-500">{message}</div>}
              <Button
                  type="submit"
                  className="rounded-sm hover:bg-white hover:text-mirage"
                  disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </div>
          <div className="flex justify-between gap-1.5 rounded border md:p-2 lg:p-3 xl:p-4 2xl:px-4 2xl:py-6">
            <div className="flex flex-col items-center justify-center gap-3">
              <FiPhone size={24}/>
              <a href="tel:+97142483400">
                <Button
                    className="border bg-transparent text-mirage hover:bg-mirage hover:text-white md:rounded md:px-2 lg:px-3.5 xl:rounded-md xl:px-4 2xl:px-5">
                  +971 4 248 3400
                </Button>
              </a>
            </div>

            <div className="flex flex-col items-center justify-center gap-3">
              <BsWhatsapp size={24}/>
              <a href="https://wa.me/971551623236">
                <Button
                    className="border bg-transparent text-mirage hover:bg-mirage hover:text-white md:rounded md:px-2 lg:px-3.5 xl:rounded-md xl:px-4 2xl:px-5">
                  +971 55 162 3236
                </Button>
              </a>
            </div>
          </div>
        </div>
        {
          message && status === 'success' ?
              <MessageModal title={status === 'success' ? 'Success' : 'Error'} onClose={onMessageModalClose}>
                <p className='text-smokeyGrey'>{message}</p>
              </MessageModal> : <></>
        }
      </>
  );
};

export default GetInTouch;
