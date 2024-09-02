import { useState, useRef, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";

const FAQCard = ({title, description}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <div className="space-y-3.5 border-t px-2 py-3 md:space-y-1 md:py-0.5 lg:space-y-1.5 lg:py-1 xl:space-y-2 xl:py-1.5 2xl:space-y-2.5 2xl:py-2">
      <h1
        className="flex cursor-pointer items-center justify-between text-[16px] font-medium md:text-[12px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px]"
        onClick={toggleOpen}
      >
          {title}
        <IoChevronDown
          size={23}
          className={`transition duration-300 ease-in-out ${isOpen && "rotate-180"}`}
        />
      </h1>

      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className={`transition-max-height overflow-hidden text-[11.5px] duration-300 ease-in-out md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]`}
      >
        <p>
            {description}
        </p>
      </div>
    </div>
  );
};

export default FAQCard;
