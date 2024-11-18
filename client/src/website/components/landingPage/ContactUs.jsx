import ContactForm from "./ContactForm";
import website from "@/data/website.json";

const ContactUs = () => {
  return (
    <div className="flex items-center justify-center bg-whiteLilac md:h-[370px] lg:max-h-[520px] lg:h-[50vh] lg:min-h-[440px] xl:min-h-[540px] xl:h-[100vh] 2xl:min-h-[600px] 2xl:h-[70vh] 2xl:max-h-[680px]">
      <div className="mx-auto my-[3rem] flex w-full flex-col gap-4 px-2.5 md:w-[55%] md:flex-row md:gap-1.5 md:px-0 md:py-0 lg:gap-2.5 xl:gap-3 2xl:gap-4">
        <div className="flex flex-col gap-4 rounded-xl bg-mirage p-5 py-8 text-white md:w-[550px] md:gap-2 md:p-2.5 lg:gap-3.5 lg:p-3.5 xl:gap-5 xl:p-4 2xl:gap-6 2xl:p-5 justify-center">
          <h2 className="text-[24px] font-medium md:text-[16px] lg:text-[20px] xl:text-[26px] 2xl:text-[32px]">
            {website.landingPage.contactUs.heading}
          </h2>
          <p className="font-regular text-[16px] md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]">
            {website.landingPage.contactUs.tagLine}
          </p>
          <p className="font-regular text-[14px] md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]">
            {website.landingPage.contactUs.description}
          </p>
          <p className="text-[32px] font-bold md:text-[20px] lg:text-[24px] xl:text-[30px] 2xl:text-[34px]">
            {website.contact.phoneNumberDisplay}
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 py-8 shadow-lg md:w-[490px] md:p-2.5 lg:gap-3.5 lg:p-3.5 xl:gap-5 xl:p-4 2xl:px-4 2xl:py-2.5">
          <h2 className="mb-2 text-[24px] font-semibold md:text-[16px] lg:text-[20px] xl:text-[26px] 2xl:text-[32px]">
            Request a Callback
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
