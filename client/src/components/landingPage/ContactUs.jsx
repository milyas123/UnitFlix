import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div className="bg-whiteLilac md:h-[70vh] flex justify-center items-center">
      <div className="my-[3rem] md:py-0 w-full px-2.5 md:px-0 md:w-[55%] mx-auto flex flex-col md:flex-row gap-4 md:gap-1.5 lg:gap-2.5 xl:gap-3 2xl:gap-4">
        <div className="bg-mirage text-white rounded-xl md:w-[550px] flex flex-col p-5 py-8 gap-4 md:gap-2 md:p-2.5 lg:gap-3.5 lg:p-3.5 xl:gap-5 xl:p-4 2xl:gap-6 2xl:p-5">
          <p className="font-regular text-[14px] md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">CONTACT US</p>
          <h2 className="font-medium text-[24px] md:text-[16px] lg:text-[20px] xl:text-[26px] 2xl:text-[32px]">
            One Stop For All Your Real Estate Needs
          </h2>
          <p className="font-regular text-[16px] md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]">Leading Real Estate</p>
          <p className="font-regular text-[14px] md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]">
            Aeon & Trisl trusted Real Estate Company in Dubai for buy, sale or
            rent properties within affordable price with different ranges of
            apartments, villas, studio rooms
          </p>
          <p className="font-bold text-[32px] md:text-[20px] lg:text-[24px] xl:text-[30px] 2xl:text-[34px]">+971 58 574 0577</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg md:w-[490px] p-5 py-8 md:p-2.5 lg:gap-3.5 lg:p-3.5 xl:gap-5 xl:p-4 2xl:px-4 2xl:py-2.5">
          <h2 className="font-semibold mb-2 text-[24px] md:text-[16px] lg:text-[20px] xl:text-[26px] 2xl:text-[32px]">Request a Callback</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
