import React, { useState, useRef, useEffect } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { FiChevronDown } from "react-icons/fi";

const Dropdown = ({ options, placeholder, onChange, currentOption, fullLength}) => {
  const dropdownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if(options && currentOption) {
      const foundOption = options.filter(option => option.id === currentOption)[0];
      if(foundOption) {
        setSelectedOption(foundOption)
      }
    }
  }, [currentOption]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option?.id);
  };

  const filteredOptions = options?.filter((option) =>
    option?.name.toLowerCase().includes(searchTerm.toLowerCase()),
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
        className={`flex w-full items-center justify-between bg-white text-left ${fullLength ? 'w-full' : 'md:w-[80%]'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption?.name || placeholder}
        <FiChevronDown
          className={`transition-all duration-300 ease-in-out ${isOpen && "rotate-180"}`}
        />
      </button>
      <ul
        className={`absolute z-10 mt-3 w-full origin-top transform overflow-y-auto overflow-x-hidden rounded-md bg-white shadow-lg transition-all duration-300 min-w-[300px] ${
          isOpen
            ? "max-h-[15rem] scale-y-100 opacity-100"
            : "max-h-0 scale-y-0 opacity-0"
        }`}
      >
        {isOpen && (
          <>
            <li className="p-2 md:p-0.5 xl:p-2">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border-b p-1 focus:outline-none"
              />
            </li>
            {filteredOptions?.map((option) => (
              <li
                key={option.id}
                className="flex cursor-pointer items-center justify-between whitespace-nowrap p-2 hover:bg-gray-100 md:px-1.5 md:py-1 lg:p-2"
                onClick={() => handleOptionClick(option)}
              >
                {option?.name}
                {selectedOption?.id === option?.id && (
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

export default Dropdown;
