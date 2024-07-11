import React, { useState, useRef, useEffect } from "react";
import { IoMdCheckmark } from "react-icons/io";

const Dropdown = ({ options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
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
      <button className="w-full text-left bg-white" onClick={toggleDropdown}>
        {selectedOption || placeholder}
      </button>
      <ul
        className={`absolute md:w-[6rem] lg:w-[8rem] xl:w-[10rem] 2xl:w-[12rem] bg-white rounded-md mt-1 z-10 shadow-lg transform origin-top transition-all duration-300 ${
          isOpen ? 'max-h-[15rem] opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-0'
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
                className="w-full border-b p-1 focus:outline-none"
              />
            </li>
            {filteredOptions.map((option, index) => (
              <li
                key={index}
                className="md:px-1.5 md:py-1 lg:p-2 cursor-pointer whitespace-nowrap hover:bg-gray-100 flex justify-between items-center"
                onClick={() => handleOptionClick(option)}
              >
                {option}
                {selectedOption === option && (
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
