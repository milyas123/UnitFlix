import React, { useState } from "react";

const Dropdown = ({ options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="w-full text-left bg-white rounded-md"
        onClick={toggleDropdown}
      >
        {selectedOption || placeholder}
      </button>
      {isOpen && (
        <ul className="absolute w-[8rem] bg-white rounded-md mt-1 z-10">
          {options.map((option, index) => (
            <li
              key={index}
              className="p-2 cursor-pointer whitespace-nowrap hover:bg-btnHoverColor hover:text-white"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
