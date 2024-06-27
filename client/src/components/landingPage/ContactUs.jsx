import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div className="bg-whiteLilac h-screen flex justify-center items-center">
      <div className="w-[55%] mx-auto flex gap-4">
        <div className="bg-mirage text-white rounded-xl w-[512px] p-5 flex flex-col gap-6">
          <p className="font-regular text-[14px]">CONTACT US</p>
          <h2 className="font-medium text-[32px]">
            One Stop For All Your Real Estate Needs
          </h2>
          <p className="font-regular text-[16px]">Leading Real Estate</p>
          <p className="font-regular text-[16px]">
            Aeon & Trisl trusted Real Estate Company in Dubai for buy, sale or
            rent properties within affordable price with different ranges of
            apartments, villas, studio rooms
          </p>
          <p className="font-bold text-[36px]">+971 58 574 0577</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg w-[460px] px-4 py-2.5">
          <h2 className="font-semibold text-[32px] mb-2">Request a Callback</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
