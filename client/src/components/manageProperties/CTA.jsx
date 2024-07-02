import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="w-[90%] h-[440px] mx-auto relative mb-[9rem]">
      <img
        src="/assets/imgs/cta.webp"
        className="object-cover size-full"
        alt="call-to-action"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 flex flex-col justify-center gap-4 items-center text-white text-center">
        <p className="text-[15px] font-regular">- Manage Properties</p>
        <h2 className="font-semibold text-[36px]">
          Ready to Maximize Your Revenue
        </h2>
        <div className="flex items-center gap-5">
          <Link to="/contact-us">
            <Button className="rounded-lg bg-white text-mirage hover:text-white hover:border-2 hover:border-white hover:bg-transparent gap-2 py-6">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
