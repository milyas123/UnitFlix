import { CgPhone } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import {FaFacebookF, FaLinkedinIn, FaLocationDot} from "react-icons/fa6";
import { FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa";
import InquiryForm from "../common/InquiryForm";
import website from "@/data/website.json";

const Form = () => {
  return (
    <section className="flex items-center justify-center bg-whiteLilac py-[5rem]">
      <div className="mx-auto flex w-full flex-col items-center justify-between gap-10 bg-white p-4 md:w-[65%] md:flex-row md:gap-0 md:rounded-md md:px-2.5 lg:rounded-lg lg:px-3.5 xl:px-5 2xl:rounded-xl 2xl:px-6">
        <div className="relative flex w-full flex-col justify-between px-4 pb-14 pt-8 text-white md:w-[45%] md:rounded-md md:p-4 lg:rounded-lg lg:p-5 xl:p-6 2xl:rounded-xl 2xl:px-8 2xl:py-10">
          <img
            src="/assets/imgs/Contact-bg.png"
            className="absolute inset-0 size-full rounded-lg object-cover"
            alt=""
          />
          <div className="relative flex flex-col gap-y-10 md:w-[80%] md:gap-y-8 lg:gap-y-12 xl:gap-y-24 2xl:gap-y-[7rem]">
            <div className="whitespace-nowrap">
              <h1 className="text-[28px] font-semibold md:text-[14px] lg:text-[18px] xl:text-[22px] 2xl:text-[26px]">
                Contact Information
              </h1>
              <p className="text-[18px] text-slate md:text-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[16px]">
                {website.contactPage.cta}
              </p>
            </div>

            <div className="flex flex-col gap-y-7 text-[16px] md:gap-y-4 md:text-[8px] lg:gap-y-5 lg:text-[10px] xl:gap-y-7 xl:text-[13px] 2xl:gap-y-9 2xl:text-[16px]">
              <a href={`tel:${website.contact.phoneNumber}`} className="flex items-center justify-start gap-x-2 md:gap-x-2 lg:gap-3 2xl:gap-x-4">
                <div className="w-5">
                  <CgPhone size={18} />
                </div>
                <p>{website.contact.phoneNumberDisplay}</p>
              </a>

              <a href={`mailto:${website.contact.email}`} className="flex items-center justify-start gap-x-2 md:gap-x-2 lg:gap-3 2xl:gap-x-4">
                <div className="w-5">
                  <MdEmail size={18} />
                </div>
                <p>{website.contact.email}</p>
              </a>

              <div className="flex items-start justify-start gap-x-2 md:items-center md:gap-x-2 lg:gap-3 2xl:gap-x-4">
                <div className="w-5">
                  <FaLocationDot size={18} />
                </div>
                <p>
                  {website.contact.address}
                </p>
              </div>

              <iframe
                src={website.contact.mapsLocation}
                className="rounded-lg"
                style={{ border: 0 }}
                aria-hidden="false"
                tabindex="0"
              />
            </div>

            <div className="mt-auto flex items-center gap-x-5 md:gap-x-2 lg:gap-x-3 xl:gap-x-3.5 2xl:gap-x-4">
              <a href={website.footer.social.facebook}
                 className="cursor-pointer rounded-full bg-mirageLight transition-all duration-300 ease-in-out hover:bg-white hover:text-mirage p-1 md:p-1 2xl:p-2">
                <FaFacebookF className="size-3.5 cursor-pointer md:size-2 lg:size-3 xl:size-4"/>
              </a>
              <a href={website.footer.social.x}
                 className="cursor-pointer rounded-full bg-mirageLight transition-all duration-300 ease-in-out hover:bg-white hover:text-mirage p-1 md:p-1 2xl:p-2">
                <FaTwitter className="size-3.5 cursor-pointer md:size-2 lg:size-3 xl:size-4"/>
              </a>
              <a href={website.footer.social.instagram}
                 className="cursor-pointer rounded-full bg-mirageLight transition-all duration-300 ease-in-out hover:bg-white hover:text-mirage p-1 md:p-1 2xl:p-2">
                <FaInstagram className="size-3.5 cursor-pointer md:size-2 lg:size-3 xl:size-4"/>
              </a>
              <a href={website.footer.social.linkedin}
                 className="cursor-pointer rounded-full bg-mirageLight transition-all duration-300 ease-in-out hover:bg-white hover:text-mirage p-1 md:p-1 2xl:p-2">
                <FaLinkedinIn className="size-3.5 cursor-pointer md:size-2 lg:size-3 xl:size-4"/>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%]">
          <div className="flex flex-col gap-7 md:gap-6 lg:gap-7 2xl:gap-8">
            <div className="space-y-1">
              <h1 className="text-[24px] font-semibold md:text-[14px] lg:text-[18px] xl:text-[24px] 2xl:text-[30px]">
                Real Estate Inquiry Form
              </h1>
              <p className="text-[15px] md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]">
                As the complexity of buildings to increase
              </p>
            </div>

            <InquiryForm/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
