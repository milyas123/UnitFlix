import React, { useState } from 'react';
import Status from '../svgs/Status';
import { Input } from '../ui/input';

const propertyTypes = ['Home', 'Plot', 'Commercial'];
const propertyCategories = [
  'House',
  'Flat',
  'Upper Portion',
  'Lower Portion',
  'Farm House',
  'Room',
  'Pent House',
];

const PropertyInformation = () => {
  const [selectedPurpose, setSelectedPurpose] = useState('Sell');
  const [selectedPropertyType, setSelectedPropertyType] = useState(propertyTypes[2]);
  const [selectedPropertyCategory, setSelectedPropertyCategory] = useState(propertyCategories[0]);

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
    <div className="rounded-xl bg-white px-8 py-4 flex items-start gap-14">
      <h2 className="font-semibold text-[20px] whitespace-nowrap">Property Information</h2>
      <div className="p-1 w-full flex flex-col gap-y-8">
        <div className="space-y-2.5 w-full">
          <label className="font-semibold text-[16px]">Select Purpose</label>
          <div className="flex items-center gap-x-3">
            <div
              className={`cursor-pointer w-[60px] text-center p-2 ${
                selectedPurpose === 'Sell' ? 'text-white bg-mirage border border-mirage' : 'text-smokeyGrey border border-smokeyGrey'
              } rounded-md`}
              onClick={() => handlePurposeSelect('Sell')}
            >
              Sell
            </div>
            <div
              className={`cursor-pointer w-[60px] text-center p-2 ${
                selectedPurpose === 'Rent' ? 'text-white bg-mirage border border-mirage' : 'text-smokeyGrey border border-smokeyGrey'
              } rounded-md`}
              onClick={() => handlePurposeSelect('Rent')}
            >
              Rent
            </div>
          </div>
        </div>

        <div className="space-y-2.5 w-full">
          <label className="font-semibold text-[16px]">Select Property Type</label>
          <div className="bg-whiteLilac rounded-lg p-1.5 flex">
            {propertyTypes.map((type) => (
              <div
                key={type}
                className={`cursor-pointer rounded-lg w-full p-2 text-center bg-white bg-opacity-0 transition-all duration-200 ease-in-out ${
                  selectedPropertyType === type && 'bg-opacity-100'
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
                className={`cursor-pointer flex items-center gap-x-1.5 px-3 py-2 rounded-md border-2 border-mirage border-opacity-0 hover:border-opacity-100 transition-all duration-300 ease-in-out ${
                  selectedPropertyCategory === category && 'bg-mirage text-white'
                }`}
                onClick={() => handlePropertyCategorySelect(category)}
              >
                <Status className={`${selectedPropertyCategory === category ? 'text-white' : 'text-black'}`} size={25} />
                <p className="text-[14px]">{category}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2.5 w-full">
          <label className="font-semibold text-[16px]">Area</label>
          <Input type="number" id="area" className="ps-3" placeholder="56" />
        </div>

        <div className="space-y-2.5 w-full">
          <label className="font-semibold text-[16px]">City</label>
          <Input type="text" id="city" className="ps-3" placeholder="Dubai" />
        </div>

        <div className="space-y-2.5 w-full">
          <label className="font-semibold text-[16px]">Location</label>
          <Input type="text" id="location" className="ps-3" placeholder="Search Location" />
        </div>
      </div>
    </div>
  );
};

export default PropertyInformation;
