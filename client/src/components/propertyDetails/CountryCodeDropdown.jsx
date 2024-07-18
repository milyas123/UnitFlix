import React, { useState, useRef, useEffect } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { FiChevronDown } from "react-icons/fi";
import { cn } from "@/lib/utils";

const commonStyles =
  "flex w-full rounded-sm border border-smokeyGrey border-opacity-20 bg-background p-2 ring-offset-background placeholder:text-grey placeholder:text-muted-foreground focus:border-hitGrey focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:px-2 md:py-1.5 md:text-[8px] lg:px-2.5 lg:py-2 lg:text-[9px] xl:border-2 xl:px-3.5 xl:py-2.5 xl:text-[12px] 2xl:py-3 2xl:text-[14px]";

const CountryCodeDropdown = ({ options, placeholder }) => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className={cn(commonStyles, "flex items-center gap-x-2")}
        onClick={toggleDropdown}
      >
        {selectedOption ? selectedOption.code : placeholder}
        <FiChevronDown
          className={`transition-all duration-300 ease-in-out ${
            isOpen && "rotate-180"
          }`}
        />
      </button>
      <ul
        className={`absolute z-10 mt-1 h-[15rem] w-auto origin-top transform overflow-y-auto rounded-md bg-white shadow-lg transition-all duration-300 ${
          isOpen
            ? "max-h-[15rem] scale-y-100 opacity-100"
            : "max-h-0 scale-y-0 opacity-0"
        }`}
      >
        {isOpen && (
          <>
            <li className="md:p-0.5 xl:p-2">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full border-b p-1 focus:outline-none md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px]"
              />
            </li>
            {filteredOptions.map((option) => (
              <li
                key={option.code}
                className="flex cursor-pointer items-center justify-between whitespace-nowrap hover:bg-gray-100 md:px-1.5 md:py-1 md:text-[8px] lg:p-2 lg:text-[10px] xl:text-[12px] 2xl:text-[14px]"
                onClick={() => handleOptionClick(option)}
              >
                {option.name} ({option.code})
                {selectedOption && selectedOption.code === option.code && (
                  <IoMdCheckmark className="text-blue-500" />
                )}
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default CountryCodeDropdown;
