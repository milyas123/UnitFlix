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
  "Date Added Desc ↓",
];

const Properties = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
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

  const toggleFilters = () => setShowFilters(!showFilters);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="w-full px-2.5 md:px-0 md:w-[86%] mx-auto mt-[28rem] md:my-[6rem] lg:my-[7.5rem] xl:my-[8.5rem] 2xl:my-[10rem]">
      <div className="flex flex-col items-start md:flex-row md:items-center justify-between gap-y-1">
        <h3 className="font-medium text-[20px] md:text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]">
          Properties for sale in Abu Dhabi
        </h3>
        <Button className="rounded-lg gap-x-1.5">
          Sell My Property <BsArrowUpRight size={17} />
        </Button>
      </div>

      <div className="mt-5 border px-4 py-2.5 rounded-md flex justify-between items-center md:hidden" onClick={toggleFilters}>
        <h2 className="font-semibold text-[20px]">Filters</h2>
        <FiChevronDown />
      </div>

      <div className="mt-4 flex flex-col md:flex-row">
        <div className={`w-full md:w-[19%] flex flex-col gap-y-3 ${showFilters ? "" : "hidden md:flex"}`} id="filters">
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

        <div className="w-full md:w-[80%] md:ms-auto">
          <div className="bg-whiteLilac whitespace-nowrap rounded-xl border border-lightGrey flex flex-col items-start md:flex-row md:justify-between md:items-center p-3 md:p-2.5 lg:p-3.5 xl:p-5 2xl:p-6">
            <p className="font-semibold text-[20px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px]">
              Showing Property Results
              <span className="text-slate text-[16px] md:text-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[16px] font-light">
                (308)
              </span>
            </p>
            <div
              className="w-[140px] p-2 md:w-[100px] lg:w-[130px] 2xl:w-[200px] md:px-2 md:py-1.5 2xl:px-3 2xl:py-2.5 bg-white rounded-md border-2 text-mirage flex justify-between items-center relative"
              ref={dropdownRef}
              onClick={toggleDropdown}
            >
              <button className="w-full text-left text-[16px] md:text-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[16px]">
                {selectedOption || "Sort By"}
              </button>
              <FiChevronDown />
              <ul
                className={`text-[18px] md:text-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[16px] absolute top-10 max-w-[15rem] bg-white rounded-md mt-1 z-10 shadow-lg transform origin-top transition-all duration-300 ${
                  isOpen
                    ? "max-h-[15rem] opacity-100 scale-y-100"
                    : "max-h-0 opacity-0 scale-y-0"
                }`}
              >
                {isOpen &&
                  sortOptions.map((option, index) => (
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

          <div className="my-3 grid grid-cols-1 md:grid-cols-3 place-items-center gap-y-7 md:gap-y-2.5 lg:gap-y-4 2xl:gap-y-8">
            {[1, 2, 3, 4].map((item) => (
              <PropertyCard key={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Properties;
