import Status from "../svgs/Status";
import { Input } from "../ui/input";
import { AiOutlineDown } from "react-icons/ai";

const propertyTypes = ["Home", "Plot", "Commercial"];
const propertyCategories = [
  "House",
  "Flat",
  "Room",
  "Upper Portion",
  "Lower Portion",
  "Farm House",
  "Pent House",
];

const locations = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"];

const PropertyInformation = ({ formData, handleChange, handleSelectChange }) => {
  return (
    <div className="user--addProperty-sectionPadding flex flex-col rounded-xl border border-lightGrey bg-white md:flex-row md:items-start">
      <h2 className="user--addProperty-headingTextSize whitespace-nowrap md:w-[23%]">
        Property Information
      </h2>
      <div className="mt-4 flex flex-col gap-y-4 md:ms-auto md:mt-0 md:w-[72%] md:gap-y-2 lg:gap-y-4 xl:gap-y-6 2xl:gap-y-8">
        <div className="w-full space-y-0.5 md:space-y-1 lg:space-y-1.5 xl:space-y-2 2xl:space-y-2.5">
          <label className="user--addProperty-labelTextSize">Select Purpose</label>
          <div className="flex items-center gap-x-3">
            <div
              className={`w-[60px] cursor-pointer px-2 py-1 text-center md:w-[30px] md:p-0.5 md:text-[8px] lg:w-[40px] lg:p-1 lg:text-[10px] xl:w-[50px] xl:p-1.5 xl:text-[12px] 2xl:w-[60px] 2xl:p-2 2xl:text-[14px] ${
                formData?.purpose === 0 ? "border border-mirage bg-mirage text-white" : "border border-smokeyGrey text-smokeyGrey"
              } rounded-md`}
              onClick={() => handleSelectChange("purpose", 0)}
            >
              Sell
            </div>
            <div
              className={`w-[60px] cursor-pointer px-2 py-1 text-center md:w-[30px] md:p-0.5 md:text-[8px] lg:w-[40px] lg:p-1 lg:text-[10px] xl:w-[50px] xl:p-1.5 xl:text-[12px] 2xl:w-[60px] 2xl:p-2 2xl:text-[14px] ${
                formData?.purpose === 1 ? "border border-mirage bg-mirage text-white" : "border border-smokeyGrey text-smokeyGrey"
              } rounded-md`}
              onClick={() => handleSelectChange("purpose", 1)}
            >
              Rent
            </div>
          </div>
        </div>

        <div className="w-full space-y-0.5 md:space-y-1 lg:space-y-1.5 xl:space-y-2 2xl:space-y-2.5">
          <label className="user--addProperty-labelTextSize">Select Property Type</label>
          <div className="flex rounded-lg bg-[#F1F1F1] p-1.5 md:p-1 lg:p-1.5">
            {propertyTypes.map((type, index) => (
              <div
                key={type}
                className={`w-full cursor-pointer rounded-lg bg-white bg-opacity-0 p-2 text-center text-[14px] transition-all duration-200 ease-in-out md:p-1 md:text-[8px] lg:p-1.5 lg:text-[10px] xl:p-2 xl:text-[12px] 2xl:text-[14px] ${
                  formData?.propertyTypeIndex === index && "bg-opacity-100"
                }`}
                onClick={() => handleSelectChange("propertyTypeIndex", index)}
              >
                {type}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-3 md:gap-y-1.5 lg:gap-y-2 xl:gap-y-3 2xl:gap-y-4">
            {propertyCategories.map((category, index) => (
              <div
                key={category}
                className={`flex cursor-pointer items-center gap-x-1 rounded-md border-2 border-mirage border-opacity-0 px-1.5 py-1 transition-all duration-300 ease-in-out hover:border-opacity-100 md:gap-x-0.5 md:px-1 md:py-0.5 lg:gap-x-1 lg:px-1.5 lg:py-1 xl:gap-x-1.5 xl:px-2 xl:py-1.5 2xl:px-3 2xl:py-2 ${
                  formData?.propertyCategoryIndex === index && "bg-mirage text-white"
                }`}
                onClick={() => handleSelectChange("propertyCategoryIndex", index)}
              >
                <Status className={`${formData?.propertyCategoryIndex === index ? "text-white" : "text-black"}`} />
                <p className="text-[14px] md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px]">{category}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:space-y-1 lg:space-y-1.5 xl:space-y-2 2xl:space-y-2.5">
          <label className="user--addProperty-labelTextSize">Area</label>
          <Input type="number" id="area" className="ps-3" placeholder="56" value={formData?.area} onChange={handleChange} />
        </div>

        <div className="w-full md:space-y-1 lg:space-y-1.5 xl:space-y-2 2xl:space-y-2.5">
          <label className="user--addProperty-labelTextSize">Beds</label>
          <Input type="number" id="beds" className="ps-3" placeholder="3" value={formData?.beds} onChange={handleChange} />
        </div>

        <div className="w-full md:space-y-1 lg:space-y-1.5 xl:space-y-2 2xl:space-y-2.5">
          <label className="user--addProperty-labelTextSize">Baths</label>
          <Input type="number" id="baths" className="ps-3" placeholder="3" value={formData?.baths} onChange={handleChange} />
        </div>

        <div className="w-full md:space-y-1 lg:space-y-1.5 xl:space-y-2 2xl:space-y-2.5">
          <label className="user--addProperty-labelTextSize">Location</label>
          <div className="relative">
            <select
              id="location"
              className="border-mercury flex w-full appearance-none rounded-sm border bg-background p-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-grey focus:border-hitGrey focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:px-2 md:py-1.5 md:text-[8px] lg:px-2.5 lg:py-2 lg:text-[9px] xl:rounded-md xl:border-2 xl:px-3.5 xl:py-2.5 xl:text-[12px] 2xl:py-3 2xl:text-[14px]"
              value={formData?.location}
              onChange={(e) => handleSelectChange("location", parseInt(e.target.value))}
            >
              {locations.map((location, index) => (
                <option key={index} value={index}>
                  {location}
                </option>
              ))}
            </select>
            <AiOutlineDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyInformation;
