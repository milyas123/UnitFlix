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
      const newValue =
        ((e.clientX - rect.left) / rect.width) * 100;
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
      <div className="w-[30%] p-5 flex justify-between items-center font-semibold bg-whiteLilac rounded-t-xl">
        {tabs.map((tab, index) => (
          <div key={index} className="text-[16px] w-auto cursor-pointer">
            <p
              className={`inline-block transition-all duration-300 ${
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

      <div className="bg-white p-5 flex justify-between rounded-b-xl rounded-r-xl shadow">
        <div className="text-[16px] space-y-2.5">
          <p className="font-semibold text-mirage">Search</p>
          <input type="text" placeholder="Enter Keywords" className="w-full border border-gray-300 rounded-md p-2" />
        </div>
        <div className="text-[16px] space-y-2.5">
          <p className="font-semibold text-mirage">Looking For</p>
          <Dropdown options={lookingForOptions} placeholder="Type" />
        </div>
        <div className="text-[16px] space-y-2.5">
          <p className="font-semibold text-mirage">Location</p>
          <Dropdown options={locationOptions} placeholder="Location" />
        </div>
        <div className="text-[16px] space-y-2.5">
          <p className="font-semibold text-mirage">Developer</p>
          <Dropdown options={developerOptions} placeholder="All" />
        </div>

        <div className="text-[16px] space-y-2.5">
          <p className="font-semibold text-mirage">Price</p>
          <div className="relative flex items-center slider-container">
            <input
              type="range"
              min="0"
              max="100"
              value={value[0]}
              onChange={(e) => handleSliderChange(0, Number(e.target.value))}
              className="w-full h-1 bg-black appearance-none pointer-events-none slider-thumb"
            />
            <input
              type="range"
              min="0"
              max="100"
              value={value[1]}
              onChange={(e) => handleSliderChange(1, Number(e.target.value))}
              className="w-full h-1 bg-black appearance-none pointer-events-none slider-thumb"
            />
            <div className="absolute w-full h-1 bg-black flex justify-between items-center">
              <div
                className="absolute bg-white border border-black rounded-full h-6 w-6 cursor-pointer"
                style={{
                  left: `${(value[0] / 100) * 100}%`,
                  transform: "translateX(-50%)",
                  zIndex: "2",
                }}
                onMouseDown={handleMouseDown(0)}
              />
              <div
                className="absolute bg-white border border-black rounded-full h-6 w-6 cursor-pointer"
                style={{
                  left: `${(value[1] / 100) * 100}%`,
                  transform: "translateX(-50%)",
                  zIndex: "2",
                }}
                onMouseDown={handleMouseDown(1)}
              />
            </div>
            <div
              className="mt-9 absolute bg-white text-black rounded-md shadow-md p-2 text-sm whitespace-nowrap"
              style={{
                left: `${(value[0] / 100) * 100}%`,
                transform: "translateX(-50%) translateY(50%)",
                zIndex: "1",
              }}
            >
              {formatCurrency(minValue + (value[0] / 100) * (maxValue - minValue))}
            </div>
            <div
              className="mt-9 absolute bg-white text-black rounded-md shadow-md p-2 text-sm whitespace-nowrap"
              style={{
                left: `${(value[1] / 100) * 100}%`,
                transform: "translateX(-50%) translateY(50%)",
                zIndex: "1",
              }}
            >
              {formatCurrency(minValue + (value[1] / 100) * (maxValue - minValue))}
            </div>
          </div>
        </div>

        <div>
          <Button className="rounded-xl py-7">
            <IoIosSearch size={20} /> Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
