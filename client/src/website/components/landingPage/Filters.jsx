import { Button } from "../ui/button";
import Dropdown from "../common/Dropdown";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";

import { formatCurrency } from "@/lib/utils";
import { useAppContext } from "@/AppContext";
import {useNavigate} from "react-router-dom";
import website from "@/data/website.json";
import {motion} from "framer-motion"

const Filters = ({
  selectedTab,
  setSelectedTab,
  sliderMinValue,
  sliderMaxValue,
  value,
  setValue,
  text,
  setText,
  selectedLocation,
  setSelectedLocation,
  selectedDeveloper,
  setSelectedDeveloper,
  selectedPropertyType,
  setSelectedPropertyType,
  handleSearch,
    animate
}) => {
  const { locations, developers, propertyTypes } = useAppContext();
  const [filtersApplied, setFiltersApplied] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const hasQueryParams = Array.from(urlParams.keys()).length > 1;

    setFiltersApplied(hasQueryParams);
  }, []);

  const handleSliderChange = (index, newValue) => {
    const updatedValue = [...value];
    updatedValue[index] = newValue;
    setValue(updatedValue);
  };

  const handleMove = (index, e) => {
    const isTouch = e.type.includes("touch");
    const clientX = isTouch ? e.touches[0].clientX : e.clientX;
    const slider = document.querySelector(".slider-container");
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
        moveHandler
      );
      document.removeEventListener(isTouch ? "touchend" : "mouseup", upHandler);
    };

    document.addEventListener(isTouch ? "touchmove" : "mousemove", moveHandler);
    document.addEventListener(isTouch ? "touchend" : "mouseup", upHandler);
  };

  const clearFilters = () => {
    const searchParams = {
      page: 1,
    };

    const queryString = new URLSearchParams(searchParams).toString();
    navigate(`/search?${queryString}`);
    navigate(0);
  };

  const variants = {
    initial: {
      opacity: 0,
      y: 100
    },
    inView: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    },
    show: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <motion.div variants={variants} initial={animate ? 'initial' : 'show'} whileInView={'inView'} viewport={{once: true}}
        className={`mx-auto w-full ${filtersApplied ? 'md:w-[80%]' : 'md:w-[69%]'}`}>
      <div className="mx-auto flex w-[80%] items-center justify-between rounded-t-lg bg-whiteLilac p-3 font-semibold md:mx-0 md:w-[23%] md:rounded-t-md md:px-3 md:py-2 lg:rounded-t-lg lg:py-2.5 xl:py-3.5 2xl:rounded-t-xl 2xl:p-4">
        {["All", "For Sale", "For Rent"].map((tab, index) => (
          <div
            key={index}
            className="flex w-auto cursor-pointer justify-center"
            onClick={() => setSelectedTab(tab)}
          >
            <p
              className={`inline-block text-center text-[14px] transition-all duration-300 md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px] ${
                selectedTab === tab
                  ? "border-b-2 border-black text-black"
                  : "border-b-2 border-transparent text-smokeyGrey"
              }`}
            >
              {tab}
            </p>
          </div>
        ))}
      </div>
      <div className="filters flex flex-grow flex-col justify-between items-center gap-y-8 rounded-lg bg-white p-5 shadow md:flex-row md:gap-y-0 md:rounded-none md:rounded-b-md md:rounded-r-md md:px-3 md:py-2 lg:rounded-b-lg lg:rounded-r-lg lg:py-2.5 xl:py-3.5 2xl:rounded-b-xl 2xl:rounded-r-xl 2xl:p-4">
        <div className="space-y-2 border-b-2 w-[100%] md:w-[85px] md:space-y-1.5 md:border-b-0 md:border-r md:border-r-[#F1F1F1] md:text-[7px] lg:w-[100px] lg:space-y-1.5 lg:ps-0 lg:text-[9px] xl:w-[120px] xl:space-y-2.5 xl:text-[11px] 2xl:w-[145px] 2xl:text-[14px]">
          <p className="font-semibold text-mirage">{website.filters.text}</p>
          <input
            type="text"
            name="text"
            placeholder="Enter Keywords"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full border-b-2 border-transparent focus:border-b-hitGrey focus:outline-none"
          />
        </div>
        <div className="space-y-2 border-b-2 w-[100%] md:w-[90px] md:space-y-1.5 md:border-b-0 md:border-r md:border-r-[#F1F1F1] md:ps-3.5 md:text-[7px] lg:w-[100px] lg:space-y-1.5 lg:ps-0 lg:text-[9px] xl:w-[120px] xl:space-y-2.5 xl:text-[11px] 2xl:w-[145px] 2xl:text-[14px]">
          <p className="font-semibold text-mirage">{website.filters.propertyType}</p>
          <Dropdown
            options={propertyTypes}
            placeholder="Type"
            currentOption={selectedPropertyType}
            onChange={setSelectedPropertyType}
          />
        </div>
        <div className="space-y-2 border-b-2 w-[100%] md:w-[90px] md:space-y-1.5 md:border-b-0 md:border-r md:border-r-[#F1F1F1] md:ps-3.5 md:text-[7px] lg:w-[100px] lg:space-y-1.5 lg:ps-0 lg:text-[9px] xl:w-[120px] xl:space-y-2.5 xl:text-[11px] 2xl:w-[145px] 2xl:text-[14px]">
          <p className="font-semibold text-mirage">{website.filters.location}</p>
          <Dropdown
            options={locations}
            placeholder="Location"
            currentOption={selectedLocation}
            onChange={setSelectedLocation}
          />
        </div>
        <div className="space-y-2 border-b-2 w-[100%] md:w-[90px] md:space-y-1.5 md:border-b-0 md:border-r md:border-r-[#F1F1F1] md:ps-3.5 md:text-[7px] lg:w-[100px] lg:space-y-1.5 lg:ps-0 lg:text-[9px] xl:w-[120px] xl:space-y-2.5 xl:text-[11px] 2xl:w-[145px] 2xl:text-[14px]">
          <p className="font-semibold text-mirage">{website.filters.developer}</p>
          <Dropdown
            options={developers}
            placeholder="All"
            currentOption={selectedDeveloper}
            onChange={setSelectedDeveloper}
          />
        </div>

        <div className="space-y-3.5 md:space-y-2 md:border-r md:border-r-[#F1F1F1] md:px-3.5 md:text-[7px] lg:space-y-3 lg:pe-4 lg:text-[9px] xl:space-y-4 xl:pe-5 xl:text-[11px] 2xl:space-y-4 2xl:text-[14px] w-[100%] md:w-[150px] lg:w-[180px] xl:w-[230px] 2xl:w-[300px]">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-mirage">{website.filters.price}</p>
            <div className="flex items-center text-[12px] md:hidden">
              <p>
                {formatCurrency(
                  sliderMinValue +
                    ((value?.[0] ?? 0) / 100) *
                      (sliderMaxValue - sliderMinValue)
                )}
              </p>
              <p className="mx-1">-</p>
              <p>
                {formatCurrency(
                  sliderMinValue +
                    ((value?.[1] ?? 100) / 100) *
                      (sliderMaxValue - sliderMinValue)
                )}
              </p>
            </div>
          </div>
          <div className="slider-container relative mx-auto flex w-[95%] items-center sm:mx-0 sm:w-full">
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
                className="absolute size-8 cursor-pointer rounded-full border border-black bg-white md:size-3 lg:size-4 xl:size-5 2xl:size-6"
                style={{
                  left: `${(value[0] / 100) * 100}%`,
                  transform: "translateX(-50%)",
                  zIndex: "2",
                }}
                onMouseDown={handleDown(0)}
                onTouchStart={handleDown(0)}
              />
              <div
                className="absolute size-8 cursor-pointer rounded-full border border-black bg-white md:size-3 lg:size-4 xl:size-5 2xl:size-6"
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
                sliderMinValue +
                  (value[0] / 100) * (sliderMaxValue - sliderMinValue)
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
                sliderMinValue +
                  (value[1] / 100) * (sliderMaxValue - sliderMinValue)
              )}
            </div>
          </div>
        </div>

        <div className="ms-2 mt-3 flex md:mt-0">
          <Button
            className="h-10 gap-x-0.5 py-5 hover:bg-transparent hover:text-mirage md:h-7 md:rounded-md md:px-2 md:py-0 md:text-[8px] lg:h-8 lg:px-3 lg:text-[10px] xl:h-9 xl:rounded-lg xl:px-4 xl:text-[13px] 2xl:px-5 2xl:py-6 2xl:text-[16px]"
            onClick={handleSearch}
          >
            <IoIosSearch className="size-6 md:size-4 lg:size-5 xl:size-6 2xl:size-7" />{" "}
            {website.filters.searchButton}
          </Button>
          {filtersApplied && (
            <Button
              variant="outline"
              className="ml-2 h-10 gap-x-0.5 py-5 hover:bg-red-500 hover:text-white md:h-7 md:rounded-md md:px-2 md:py-0 md:text-[8px] lg:h-8 lg:px-3 lg:text-[10px] xl:h-9 xl:rounded-lg xl:px-4 xl:text-[13px] 2xl:px-5 2xl:py-6 2xl:text-[16px]"
              onClick={clearFilters}
            >
              {website.filters.clearButton}
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Filters;
