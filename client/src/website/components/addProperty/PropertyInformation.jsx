import React, { useState } from "react";
import Status from "../svgs/Status";
import { Input } from "../ui/input";

const propertyTypes = ["Home", "Plot", "Commercial"];
const propertyCategories = [
  "House",
  "Flat",
  "Upper Portion",
  "Lower Portion",
  "Farm House",
  "Room",
  "Pent House",
];

const PropertyInformation = () => {
  const [selectedPurpose, setSelectedPurpose] = useState("Sell");
  const [selectedPropertyType, setSelectedPropertyType] = useState(
    propertyTypes[2],
  );
  const [selectedPropertyCategory, setSelectedPropertyCategory] = useState(
    propertyCategories[0],
  );

  const handlePurposeSelect = (purpose) => {
    setSelectedPurpose(purpose);
  };

  const handlePropertyTypeSelect = (type) => {
    setSelectedPropertyType(type);
  };

  const handlePropertyCategorySelect = (category) => {
    setSelectedPropertyCategory(category);
  };

  return (
    <div className="flex items-start rounded-xl border border-lightGrey bg-white px-8 py-4">
      <h2 className="w-[23%] whitespace-nowrap text-[20px] font-semibold">
        Property Information
      </h2>
      <div className="ms-auto flex w-[72%] flex-col gap-y-8 p-1">
        <div className="w-full space-y-2.5">
          <label className="text-[16px] font-semibold">Select Purpose</label>
          <div className="flex items-center gap-x-3">
            <div
              className={`w-[60px] cursor-pointer p-2 text-center ${
                selectedPurpose === "Sell"
                  ? "border border-mirage bg-mirage text-white"
                  : "border border-smokeyGrey text-smokeyGrey"
              } rounded-md`}
              onClick={() => handlePurposeSelect("Sell")}
            >
              Sell
            </div>
            <div
              className={`w-[60px] cursor-pointer p-2 text-center ${
                selectedPurpose === "Rent"
                  ? "border border-mirage bg-mirage text-white"
                  : "border border-smokeyGrey text-smokeyGrey"
              } rounded-md`}
              onClick={() => handlePurposeSelect("Rent")}
            >
              Rent
            </div>
          </div>
        </div>

        <div className="w-full space-y-2.5">
          <label className="text-[16px] font-semibold">
            Select Property Type
          </label>
          <div className="flex rounded-lg bg-[#F1F1F1] p-1.5">
            {propertyTypes.map((type) => (
              <div
                key={type}
                className={`w-full cursor-pointer rounded-lg bg-white bg-opacity-0 p-2 text-center transition-all duration-200 ease-in-out ${
                  selectedPropertyType === type && "bg-opacity-100"
                }`}
                onClick={() => handlePropertyTypeSelect(type)}
              >
                {type}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            {propertyCategories.map((category) => (
              <div
                key={category}
                className={`flex cursor-pointer items-center gap-x-1.5 rounded-md border-2 border-mirage border-opacity-0 px-3 py-2 transition-all duration-300 ease-in-out hover:border-opacity-100 ${
                  selectedPropertyCategory === category &&
                  "bg-mirage text-white"
                }`}
                onClick={() => handlePropertyCategorySelect(category)}
              >
                <Status
                  className={`${selectedPropertyCategory === category ? "text-white" : "text-black"}`}
                  size={25}
                />
                <p className="text-[14px]">{category}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full space-y-2.5">
          <label className="text-[16px] font-semibold">Area</label>
          <Input type="number" id="area" className="ps-3" placeholder="56" />
        </div>

        <div className="w-full space-y-2.5">
          <label className="text-[16px] font-semibold">City</label>
          <Input type="text" id="city" className="ps-3" placeholder="Dubai" />
        </div>

        <div className="w-full space-y-2.5">
          <label className="text-[16px] font-semibold">Location</label>
          <Input
            type="text"
            id="location"
            className="ps-3"
            placeholder="Search Location"
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyInformation;
