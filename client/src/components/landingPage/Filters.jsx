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

  const handleMove = (index, e) => {
    const isTouch = e.type.includes("touch");
    const clientX = isTouch ? e.touches[0].clientX : e.clientX;
    const slider = e.target.closest(".slider-container");
    const rect = slider.getBoundingClientRect();
    const newValue = ((clientX - rect.left) / rect.width) * 100;
    if (index === 0 && newValue >= 0 && newValue <= value[1]) {
      handleSliderChange(0, Math.round(newValue));
    } else if (index === 1 && newValue >= value[0] && newValue <= 100) {
      handleSliderChange(1, Math.round(newValue));
    }
  };

  const handleDown = (index) => (e) => {
    const isTouch = e.type.includes("touch");

    const moveHandler = (e) => handleMove(index, e);
    const upHandler = () => {
      document.removeEventListener(
        isTouch ? "touchmove" : "mousemove",
        moveHandler,
      );
      document.removeEventListener(isTouch ? "touchend" : "mouseup", upHandler);
    };

    document.addEventListener(isTouch ? "touchmove" : "mousemove", moveHandler);
    document.addEventListener(isTouch ? "touchend" : "mouseup", upHandler);
  };

  return (
    <div className="mx-auto w-full md:w-[69%]">
      <div className="mx-auto flex w-[80%] items-center justify-between rounded-t-lg bg-whiteLilac p-3 font-semibold md:mx-0 md:w-[23%] md:rounded-t-md md:px-3 md:py-2 lg:rounded-t-lg lg:py-2.5 xl:py-3.5 2xl:rounded-t-xl 2xl:p-4">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className="flex w-auto cursor-pointer justify-center"
          >
            <p
              className={`inline-block text-center text-[14px] transition-all duration-300 md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px] ${
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

      <div className="flex flex-grow flex-col justify-between gap-3 rounded-lg bg-white p-5 shadow md:flex-row md:gap-0 md:rounded-none md:rounded-b-md md:rounded-r-md md:px-3 md:py-2 lg:rounded-b-lg lg:rounded-r-lg lg:py-2.5 xl:py-3.5 2xl:rounded-b-xl 2xl:rounded-r-xl 2xl:p-4">
        <div className="space-y-2 border-b-2 md:w-[85px] md:space-y-1.5 md:border-b-0 md:border-r md:border-r-[#F1F1F1] md:text-[7px] lg:w-[100px] lg:space-y-1.5 lg:ps-0 lg:text-[9px] xl:w-[120px] xl:space-y-2.5 xl:text-[11px] 2xl:w-[145px] 2xl:text-[14px]">
          <p className="font-semibold text-mirage">Search</p>
          <input
            type="text"
            placeholder="Enter Keywords"
            className="w-full border-b-2 border-transparent focus:border-b-hitGrey focus:outline-none"
          />
        </div>
        <div className="space-y-2 border-b-2 md:w-[90px] md:space-y-1.5 md:border-b-0 md:border-r md:border-r-[#F1F1F1] md:ps-3.5 md:text-[7px] lg:w-[100px] lg:space-y-1.5 lg:ps-0 lg:text-[9px] xl:w-[120px] xl:space-y-2.5 xl:text-[11px] 2xl:w-[145px] 2xl:text-[14px]">
          <p className="font-semibold text-mirage">Looking For</p>
          <Dropdown options={lookingForOptions} placeholder="Type" />
        </div>
        <div className="space-y-2 border-b-2 md:w-[90px] md:space-y-1.5 md:border-b-0 md:border-r md:border-r-[#F1F1F1] md:ps-3.5 md:text-[7px] lg:w-[100px] lg:space-y-1.5 lg:ps-0 lg:text-[9px] xl:w-[120px] xl:space-y-2.5 xl:text-[11px] 2xl:w-[145px] 2xl:text-[14px]">
          <p className="font-semibold text-mirage">Location</p>
          <Dropdown options={locationOptions} placeholder="Location" />
        </div>
        <div className="space-y-2 border-b-2 md:w-[90px] md:space-y-1.5 md:border-b-0 md:border-r md:border-r-[#F1F1F1] md:ps-3.5 md:text-[7px] lg:w-[100px] lg:space-y-1.5 lg:ps-0 lg:text-[9px] xl:w-[120px] xl:space-y-2.5 xl:text-[11px] 2xl:w-[145px] 2xl:text-[14px]">
          <p className="font-semibold text-mirage">Developer</p>
          <Dropdown options={developerOptions} placeholder="All" />
        </div>

        <div className="space-y-3.5 md:space-y-2 md:border-r md:border-r-[#F1F1F1] md:px-3.5 md:text-[7px] lg:space-y-3 lg:pe-4 lg:text-[9px] xl:space-y-4 xl:pe-5 xl:text-[11px] 2xl:space-y-4 2xl:text-[14px]">
          <p className="font-semibold text-mirage">Price</p>
          <div className="slider-container relative flex items-center">
            <input
              type="range"
              min="0"
              max="100"
              value={value[0]}
              onChange={(e) => handleSliderChange(0, Number(e.target.value))}
              className="slider-thumb pointer-events-none w-[0.5rem] appearance-none bg-black md:w-[5rem] lg:w-[6rem] xl:w-[7rem] 2xl:h-1 2xl:w-full"
            />
            <input
              type="range"
              min="0"
              max="100"
              value={value[1]}
              onChange={(e) => handleSliderChange(1, Number(e.target.value))}
              className="slider-thumb pointer-events-none w-[0.5rem] appearance-none bg-black md:w-[5rem] lg:w-[6rem] xl:w-[7rem] 2xl:h-1 2xl:w-full"
            />
            <div className="absolute flex h-1 w-full items-center justify-between bg-black">
              <div
                className="absolute size-5 cursor-pointer rounded-full border border-black bg-white md:size-3 lg:size-4 xl:size-5 2xl:size-6"
                style={{
                  left: `${(value[0] / 100) * 100}%`,
                  transform: "translateX(-50%)",
                  zIndex: "2",
                }}
                onMouseDown={handleDown(0)}
                onTouchStart={handleDown(0)}
              />
              <div
                className="absolute size-5 cursor-pointer rounded-full border border-black bg-white md:size-3 lg:size-4 xl:size-5 2xl:size-6"
                style={{
                  left: `${(value[1] / 100) * 100}%`,
                  transform: "translateX(-50%)",
                  zIndex: "2",
                }}
                onMouseDown={handleDown(1)}
                onTouchStart={handleDown(1)}
              />
            </div>
            <div
              className="absolute hidden whitespace-nowrap rounded-md bg-white text-sm font-medium text-black shadow-md md:mt-3 md:block md:px-1 md:text-[6px] lg:px-1.5 lg:py-1 lg:text-[8px] xl:mt-6 xl:px-2 xl:py-1.5 xl:text-[10px] 2xl:mt-9 2xl:p-2 2xl:text-[12px]"
              style={{
                left: `${(value[0] / 100) * 100}%`,
                transform: "translateX(-50%) translateY(50%)",
                zIndex: "1",
              }}
            >
              {formatCurrency(
                minValue + (value[0] / 100) * (maxValue - minValue),
              )}
            </div>
            <div
              className="absolute hidden whitespace-nowrap rounded-md bg-white text-sm font-medium text-black shadow-md md:mt-3 md:block md:px-1 md:text-[6px] lg:px-1.5 lg:py-1 lg:text-[8px] xl:mt-6 xl:px-2 xl:py-1.5 xl:text-[10px] 2xl:mt-9 2xl:p-2 2xl:text-[12px]"
              style={{
                left: `${(value[1] / 100) * 100}%`,
                transform: "translateX(-50%) translateY(50%)",
                zIndex: "1",
              }}
            >
              {formatCurrency(
                minValue + (value[1] / 100) * (maxValue - minValue),
              )}
            </div>
          </div>
        </div>

        <div className="ms-2 mt-3 md:mt-0">
          <Button className="h-10 py-5 hover:bg-transparent hover:text-mirage md:h-7 md:px-2 md:py-0 md:text-[8px] lg:h-8 lg:px-3 lg:text-[10px] xl:h-9 xl:px-4 xl:text-[13px] 2xl:px-5 2xl:py-6 2xl:text-[16px]">
            <IoIosSearch size={18} /> Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
