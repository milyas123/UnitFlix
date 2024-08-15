import React, { useState, useRef, useEffect } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { IoMdCheckmark } from "react-icons/io";
import { Link } from "react-router-dom";

import { Button } from "../ui/button";
import InfoList from "./InfoList";
import PropertyCard from "./PropertyCard";
import Pagination from "./Pagination";

import { useAppContext } from "@/AppContext";

const propertiesPerPage = 12;
const sortOptions = ["Price ↑", "Price ↓", "Date Added ↑", "Date Added ↓"];

const Properties = ({ properties }) => {
  const { locations, developers, propertyTypes } = useAppContext();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const dropdownRef = useRef(null);

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

  // Calculate current properties to display based on pagination
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties?.slice(
    indexOfFirstProperty,
    indexOfLastProperty,
  );

  // Change page
  const paginate = (pageNumber) => {
    const totalPages = Math.ceil(properties?.length / propertiesPerPage);
    if (pageNumber < 1 || pageNumber > totalPages) {
      return;
    }
    setCurrentPage(pageNumber);
  };

  return (
    <section className="mx-auto mt-[28rem] w-full px-2.5 md:my-[4rem] md:w-[87%] md:px-0 lg:my-[6rem] xl:my-[7.5rem] 2xl:my-[8.8rem]">
      <div className="flex flex-col items-start justify-between gap-y-1 md:flex-row md:items-center">
        <h3 className="text-[20px] font-medium md:text-[12px] lg:text-[15px] xl:text-[18px] 2xl:text-[22px]">
          Properties for sale in Abu Dhabi
        </h3>
        <Link to="/add-property">
          <Button className="gap-x-1.5 rounded-lg hover:bg-white hover:text-mirage md:px-1 lg:px-2 xl:px-2.5 2xl:px-3">
            Sell My Property{" "}
            <BsArrowUpRight className="size-4 md:size-2 lg:size-3 xl:size-4 2xl:size-5" />
          </Button>
        </Link>
      </div>

      <div
        className="mt-5 flex items-center justify-between rounded-md border px-4 py-2.5 md:hidden"
        onClick={toggleFilters}
      >
        <h2 className="text-[20px] font-semibold">Filters</h2>
        <FiChevronDown />
      </div>

      <div className="mt-4 flex flex-col md:flex-row">
        <div
          className={`flex w-full flex-col gap-y-3 md:w-[19%] ${
            showFilters ? "" : "hidden md:flex"
          }`}
          id="filters"
        >
          <InfoList
            heading="Locations"
            count={locations?.length}
            items={locations}
          />

          <InfoList
            heading="Developers"
            count={developers.length}
            items={developers}
          />

          <InfoList
            heading="Types"
            count={propertyTypes.length}
            items={propertyTypes}
          />
        </div>

        <div className="w-full md:ms-auto md:w-[80%]">
          <div className="flex flex-col items-start whitespace-nowrap rounded-xl border border-lightGrey bg-whiteLilac p-3 md:flex-row md:items-center md:justify-between md:p-2 lg:p-3 xl:p-3.5 2xl:p-4">
            <p className="text-[20px] font-semibold md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px]">
              Showing Property Results
              <span className="text-[16px] font-light text-slate md:text-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[16px]">
                ({properties?.length})
              </span>
            </p>
            <div
              className="relative flex w-[140px] items-center justify-between rounded-md border-2 bg-white p-2 text-mirage md:w-[100px] md:px-2 md:py-1.5 lg:w-[130px] 2xl:w-[200px] 2xl:px-3 2xl:py-2.5"
              ref={dropdownRef}
              onClick={() => setIsOpen(!isOpen)}
            >
              <button className="w-full text-left text-[16px] md:text-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[16px]">
                {selectedOption || "Sort By"}
              </button>
              <FiChevronDown />
              <ul
                className={`absolute top-10 z-10 mt-1 max-w-[15rem] origin-top transform rounded-md bg-white text-[18px] shadow-lg transition-all duration-300 md:text-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[16px] ${
                  isOpen
                    ? "max-h-[15rem] scale-y-100 opacity-100"
                    : "max-h-0 scale-y-0 opacity-0"
                }`}
              >
                {isOpen &&
                  sortOptions.map((option, index) => (
                    <li
                      key={index}
                      className="flex cursor-pointer items-center justify-between whitespace-nowrap p-2 hover:bg-gray-100"
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

          {properties?.length === 0 ? (
            <p className="mt-6 text-center text-[18px] font-medium md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]">
              No properties found.
            </p>
          ) : (
            <>
              <div className="my-3 grid grid-cols-1 place-items-center gap-y-7 md:grid-cols-3 md:gap-y-4 lg:gap-y-5 xl:gap-y-5 2xl:gap-y-6">
                {currentProperties?.map((property) => (
                  <PropertyCard key={crypto.randomUUID()} property={property} />
                ))}
              </div>

              <div className="mt-16">
                <Pagination
                  propertiesPerPage={propertiesPerPage}
                  totalProperties={properties?.length}
                  currentPage={currentPage}
                  paginate={paginate}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Properties;
