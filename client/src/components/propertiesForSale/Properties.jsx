import React, { useState, useRef, useEffect } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Button } from "../ui/button";
import InfoList from "./InfoList";
import PropertyCard from "./PropertyCard";
import { FiChevronDown } from "react-icons/fi";
import { IoMdCheckmark } from "react-icons/io";

const locationData = [
  { name: "Al Reem Island", count: "10,635" },
  { name: "Yas Island", count: "10,395" },
  { name: "Saadiyat Island", count: "5,635" },
  { name: "Saadiyat Island", count: "5,635" },
  { name: "Saadiyat Island", count: "5,635" },
  { name: "Saadiyat Island", count: "5,635" },
];

const sortOptions = [
  "Price Ascending ↑",
  "Price Descending ↓",
  "Date Added Asc ↑",
  "Date Added Desc ↓"
];

const Properties = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

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
    <section className="w-[86%] mx-auto my-[10rem]">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-[24px]">
          Properties for sale in Abu Dhabi
        </h3>
        <Button className="rounded-lg gap-x-1.5">
          Sell My Property <BsArrowUpRight size={20} />
        </Button>
      </div>

      <div className="mt-4 flex">
        <div className="w-[19%] flex flex-col gap-y-3">
          <InfoList
            heading="Locations"
            count={locationData.length}
            items={locationData}
          />

          <InfoList
            heading="Developers"
            count={locationData.length}
            items={locationData}
          />

          <InfoList
            heading="Type"
            count={locationData.length}
            items={locationData}
          />
        </div>

        <div className="w-[80%] ms-auto overflow-hidden">
          <div className="bg-whiteLilac whitespace-nowrap p-6 rounded-xl border border-lightGrey flex justify-between items-center">
            <p className="font-semibold text-[20px]">
              Showing Property Results
              <span className="text-slate text-[16px] font-light">(308)</span>
            </p>
            <div className="w-[200px] bg-white px-3 py-2.5 rounded-md border-2 text-mirage flex justify-between items-center relative" ref={dropdownRef} onClick={toggleDropdown}>
              <button className="w-full text-left">
                {selectedOption || "Sort By"}
              </button>
              <FiChevronDown />
              <ul
                className={`absolute top-10 righ max-w-[15rem] bg-white rounded-md mt-1 z-10 shadow-lg transform origin-top transition-all duration-300 ${
                  isOpen ? "max-h-[15rem] opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-0"
                }`}
              >
                {isOpen && sortOptions.map((option, index) => (
                  <li
                    key={index}
                    className="p-2 cursor-pointer whitespace-nowrap hover:bg-gray-100 flex justify-between items-center"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                    {selectedOption === option && (
                      <IoMdCheckmark className="text-blue-500" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap justify-center gap-5">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <PropertyCard key={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Properties;
