import React, { useState, useRef, useEffect } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { FiChevronDown } from "react-icons/fi";

const Dropdown = ({ options, placeholder, currentOption, onOptionChange, onItemFilter, onSelectedOptionRender, onOptionRender, onOptionCompare }) => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
      setSelectedOption(currentOption);
  }, [currentOption]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onOptionChange(option)
    setIsOpen(false);
  };

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const filteredOptions = options.filter((option) => {
    if(onItemFilter) {
      return onItemFilter(option, searchTerm);
    } else {
      return option.toLowerCase().includes(searchTerm.toLowerCase())
    }
  });

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
        className="border-mist flex w-full text-nowrap items-center justify-between gap-3 rounded-md border bg-white p-3 text-left text-[16px] font-regular md:px-2 md:py-2.5 md:text-[12px] xl:p-3 xl:text-[14px] 2xl:px-4 2xl:text-[16]"
        onClick={toggleDropdown}
      >
        {selectedOption ? (onSelectedOptionRender ? onSelectedOptionRender(selectedOption) : selectedOption) : placeholder}
        <FiChevronDown
          className={`transition-all duration-300 ease-in-out ${isOpen && "rotate-180"}`}
        />
      </button>
      <ul
        className={`absolute z-10 w-full origin-top transform rounded-md bg-white shadow-lg transition-all duration-300 md:w-[6rem] md:text-[11px] lg:w-[7rem] xl:w-[8rem] xl:text-[12px] 2xl:w-[9rem] 2xl:text-[14px] overflow-x-hidden overflow-y-auto ${
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
                onChange={handleSearchChange}
                className="w-full border-b p-1 focus:outline-none"
              />
            </li>
            {filteredOptions.map((option, index) => {
              return (
                  <li
                      key={index}
                      className="flex cursor-pointer items-center justify-between p-2 hover:bg-gray-100 md:px-1.5 md:py-1 lg:p-2"
                      onClick={() => handleOptionClick(option)}
                  >
                    {onOptionRender ? onOptionRender(option) : option}
                    {selectedOption ?
                        (
                            (onOptionCompare ? onOptionCompare(selectedOption, option) : selectedOption === option) && (
                                <IoMdCheckmark className="text-blue-500"/>
                            )
                        )
                        : <></>
                    }
                  </li>
              )
            })}
          </>
        )}
      </ul>
    </div>
  );
};

export default Dropdown;
