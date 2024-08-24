import { useState, useEffect } from "react";

import { ImageUp } from "lucide-react";
import { AiOutlineDown, AiFillFilePdf } from "react-icons/ai";

import { useAppContext } from "@/AppContext";
import Delete from "@/website/components/svgs/Delete";

const ProjectPropertyDetails = ({
  formData,
  handleFileChange,
  handleLocationChange,
}) => {
  const { developers, locations } = useAppContext();

  const handleRemoveFloorPlan = () => {
    handleFileChange({ target: { files: [null] } }, "floorPlan");
  };
  return (
    <div className="flex items-start rounded-xl border border-lightGrey bg-white px-8 py-4">
      <h2 className="w-[23%] whitespace-nowrap text-[20px] font-semibold">
        Property Details
      </h2>
      <div className="ms-auto flex w-[72%] flex-col gap-y-8 p-1">
        <div className="w-full space-y-2.5">
          <label className="text-[16px] font-semibold">Floor Plan</label>
          {formData.floorPlan ? (
            <div className="relative flex items-center gap-2 rounded-lg border border-dashed border-gray-400 p-2">
              <AiFillFilePdf size={30} className="text-red-600" />
              <p className="text-[14px] text-black">{formData.floorPlan && formData.floorPlan.id ? formData.floorPlan.filename : formData.floorPlan.name}</p>
              <button
                className="absolute right-1 top-1 rounded-full bg-red-600 p-1 text-white transition-all duration-200 ease-in-out hover:bg-white"
                onClick={handleRemoveFloorPlan}
              >
                <Delete size={20} />
              </button>
            </div>
          ) : (
            <label
              htmlFor="floorPlan"
              className="flex h-[185px] w-[288px] cursor-pointer items-center justify-center rounded-2xl border-2 border-dashed bg-whiteLilac"
            >
              <input
                type="file"
                id="floorPlan"
                className="hidden"
                accept="application/pdf"
                onChange={(e) => handleFileChange(e, "floorPlan")}
              />
              <div className="flex flex-col items-center justify-center gap-y-2 text-smokeyGrey">
                <ImageUp size={35} />
                Upload Plan PDF
              </div>
            </label>
          )}
        </div>

        <div className="w-full md:space-y-1 lg:space-y-1.5 xl:space-y-2 2xl:space-y-2.5">
          <label className="user--addProperty-labelTextSize">Developer</label>
          <div className="relative">
            <select
              id="developer"
              className="flex w-full appearance-none rounded-sm border border-mercury bg-background p-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-grey focus:border-hitGrey focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:px-2 md:py-1.5 md:text-[8px] lg:px-2.5 lg:py-2 lg:text-[9px] xl:rounded-md xl:border-2 xl:px-3.5 xl:py-2.5 xl:text-[12px] 2xl:py-3 2xl:text-[14px]"
              value={formData?.developer}
              onChange={(e) =>
                handleLocationChange("developer", parseInt(e.target.value))
              }
            >
              {developers.map((developer, index) => (
                <option key={index} value={developer?.id}>
                  {developer.name}
                </option>
              ))}
            </select>
            <AiOutlineDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 transform" />
          </div>
        </div>

        <div className="w-full md:space-y-1 lg:space-y-1.5 xl:space-y-2 2xl:space-y-2.5">
          <label className="user--addProperty-labelTextSize">Location</label>
          <div className="relative">
            <select
              id="location"
              className="flex w-full appearance-none rounded-sm border border-mercury bg-background p-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-grey focus:border-hitGrey focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:px-2 md:py-1.5 md:text-[8px] lg:px-2.5 lg:py-2 lg:text-[9px] xl:rounded-md xl:border-2 xl:px-3.5 xl:py-2.5 xl:text-[12px] 2xl:py-3 2xl:text-[14px]"
              value={formData?.location}
              onChange={(e) =>
                handleLocationChange("location", parseInt(e.target.value))
              }
            >
              {locations.map((location, index) => (
                <option key={index} value={location?.id}>
                  {location.name}
                </option>
              ))}
            </select>
            <AiOutlineDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 transform" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPropertyDetails;
