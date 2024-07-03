import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const FAQCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-t-2 p-2 space-y-2.5">
      <h1 
        className="font-medium text-[24px] flex justify-between items-center cursor-pointer"
        onClick={toggleOpen}
      >
        How do you guys handle the property management?
        <IoChevronDown size={23} className={`transition duration-300 ease-in-out ${isOpen && "rotate-180"}`} /> 
      </h1>

      <div 
        className={`text-[16px] overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it
        </p>
      </div>
    </div>
  );
};

export default FAQCard;
