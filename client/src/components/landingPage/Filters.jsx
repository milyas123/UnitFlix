import React, { useState } from "react";
import { Button } from "../ui/button";
import { IoIosSearch } from "react-icons/io";
import { formatCurrency } from "@/lib/utils";
import Dropdown from "../common/Dropdown";

const tabs = ["All", "For Sale", "For Rent"];
const lookingForOptions = ["House", "Apartment", "Condo"];
const locationOptions = ["New York", "Los Angeles", "Chicago"];
const developerOptions = ["Developer A", "Developer B", "Developer C"];

const Filters = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [value, setValue] = useState([0, 100]);
  const minValue = 5000;
  const maxValue = 50000;

  const handleSliderChange = (index, newValue) => {
    const updatedValue = [...value];
    updatedValue[index] = newValue;
    setValue(updatedValue);
  };

  const handleMouseDown = (index) => (e) => {
    const onMouseMove = (e) => {
      const slider = e.target.closest(".slider-container");
      const rect = slider.getBoundingClientRect();
      const newValue = ((e.clientX - rect.left) / rect.width) * 100;
      if (index === 0 && newValue >= 0 && newValue <= value[1]) {
        handleSliderChange(0, Math.round(newValue));
      } else if (index === 1 && newValue >= value[0] && newValue <= 100) {
        handleSliderChange(1, Math.round(newValue));
      }
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div className="w-[70%] mx-auto">
      <div className="w-[30%] flex justify-between items-center font-semibold bg-whiteLilac md:py-2.5 md:px-3.5 md:rounded-t-md lg:py-3 lg:px-5 lg:rounded-t-lg xl:py-4 2xl:p-5 2xl:rounded-t-xl">
        {tabs.map((tab, index) => (
          <div key={index} className="w-auto cursor-pointer flex justify-center">
            <p
              className={`inline-block text-center transition-all duration-300 md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px] ${
                selectedTab === tab
                  ? "border-b-2 border-black text-black"
                  : "border-b-2 border-transparent text-smokeyGrey"
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white p-5 flex justify-between shadow md:py-2.5 md:px-3.5 md:rounded-b-md md:rounded-r-md lg:py-3 lg:px-5 lg:rounded-b-lg lg:rounded-r-lg xl:py-4 2xl:p-5 2xl:rounded-b-xl 2xl:rounded-r-xl">
        <div className="md:text-[8px] md:space-y-0.5 lg:text-[10px] lg:space-y-1.5 xl:text-[13px] space-y-2 2xl:text-[16px] xl:space-y-2.5">
          <p className="font-semibold text-mirage">Search</p>
          <input
            type="text"
            placeholder="Enter Keywords"
            className="w-full border-b-2 border-transparent focus:border-b-hitGrey focus:outline-none"
          />
        </div>
        <div className="md:text-[8px] md:space-y-0.5 lg:text-[10px] lg:space-y-1.5 xl:text-[13px] space-y-2 2xl:text-[16px] xl:space-y-2.5">
          <p className="font-semibold text-mirage">Looking For</p>
          <Dropdown options={lookingForOptions} placeholder="Type" />
        </div>
        <div className="md:text-[8px] md:space-y-0.5 lg:text-[10px] lg:space-y-1.5 xl:text-[13px] space-y-2 2xl:text-[16px] xl:space-y-2.5">
          <p className="font-semibold text-mirage">Location</p>
          <Dropdown options={locationOptions} placeholder="Location" />
        </div>
        <div className="md:text-[8px] md:space-y-0.5 lg:text-[10px] lg:space-y-1.5 xl:text-[13px] space-y-2 2xl:text-[16px] xl:space-y-2.5">
          <p className="font-semibold text-mirage">Developer</p>
          <Dropdown options={developerOptions} placeholder="All" />
        </div>

        <div className="md:text-[8px] md:space-y-2 lg:text-[10px] lg:space-y-3 xl:text-[13px] xl:space-y-4 2xl:text-[16px] 2xl:space-y-4">
          <p className="font-semibold text-mirage">Price</p>
          <div className="relative flex items-center slider-container">
            <input
              type="range"
              min="0"
              max="100"
              value={value[0]}
              onChange={(e) => handleSliderChange(0, Number(e.target.value))}
              className="md:w-[4rem] lg:w-[5rem] xl:w-[7rem] 2xl:w-full 2xl:h-1 bg-black appearance-none pointer-events-none slider-thumb"
            />
            <input
              type="range"
              min="0"
              max="100"
              value={value[1]}
              onChange={(e) => handleSliderChange(1, Number(e.target.value))}
              className="md:w-[4rem] lg:w-[5rem] xl:w-[7rem] 2xl:w-full 2xl:h-1 bg-black appearance-none pointer-events-none slider-thumb"
            />
            <div className="absolute w-full h-1 bg-black flex justify-between items-center">
              <div
                className="absolute bg-white border border-black rounded-full cursor-pointer md:size-3 lg:size-4 xl:size-5 2xl:size-6"
                style={{
                  left: `${(value[0] / 100) * 100}%`,
                  transform: "translateX(-50%)",
                  zIndex: "2",
                }}
                onMouseDown={handleMouseDown(0)}
              />
              <div
                className="absolute bg-white border border-black rounded-full cursor-pointer md:size-3 lg:size-4 xl:size-5 2xl:size-6"
                style={{
                  left: `${(value[1] / 100) * 100}%`,
                  transform: "translateX(-50%)",
                  zIndex: "2",
                }}
                onMouseDown={handleMouseDown(1)}
              />
            </div>
            <div
              className="absolute bg-white text-black rounded-md shadow-md text-sm whitespace-nowrap md:mt-3 md:text-[8px] md:px-1 md:py-0.5 lg:text-[10px] lg:px-1.5 lg:py-1 xl:text-[13px] xl:px-2 xl:py-1.5 xl:mt-6 2xl:mt-9 2xl:text-[16px] 2xl:p-2"
              style={{
                left: `${(value[0] / 100) * 100}%`,
                transform: "translateX(-50%) translateY(50%)",
                zIndex: "1",
              }}
            >
              {formatCurrency(
                minValue + (value[0] / 100) * (maxValue - minValue)
              )}
            </div>
            <div
              className="absolute bg-white text-black rounded-md shadow-md text-sm whitespace-nowrap md:mt-3 md:text-[8px] md:px-1 md:py-0.5 lg:text-[10px] lg:px-1.5 lg:py-1 xl:text-[13px] xl:px-2 xl:py-1.5 xl:mt-6 2xl:mt-9 2xl:text-[16px] 2xl:p-2"
              style={{
                left: `${(value[1] / 100) * 100}%`,
                transform: "translateX(-50%) translateY(50%)",
                zIndex: "1",
              }}
            >
              {formatCurrency(
                minValue + (value[1] / 100) * (maxValue - minValue)
              )}
            </div>
          </div>
        </div>

        <div>
          <Button className="hover:bg-transparent hover:text-mirage md:text-[8px] md:h-7 md:px-2 lg:text-[10px] lg:h-8 lg:px-3 xl:text-[13px] xl:h-9 xl:px-4 2xl:text-[16px] 2xl:px-5 2xl:py-6">
            <IoIosSearch size={18} /> Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
