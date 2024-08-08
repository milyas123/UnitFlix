import { useState, useEffect } from "react";
import { Input } from "@/website/components/ui/input";
import { ImageUp } from "lucide-react";
import Delete from "@/website/components/svgs/Delete";
import { AiOutlineDown } from "react-icons/ai";

const locations = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"];

const ProjectPropertyDetails = ({ formData, handleFileChange, handleLocationChange }) => {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (formData.floorPlan) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(formData.floorPlan);
    } else {
      setPreview(null);
    }
  }, [formData.floorPlan]);

  const handleRemoveFloorPlan = () => {
    handleFileChange({ target: { files: [null] } }, "floorPlan");
  };

  return (
    <div className="flex items-start rounded-xl border border-lightGrey bg-white px-8 py-4">
      <h2 className="w-[23%] whitespace-nowrap text-[20px] font-semibold">Property Details</h2>
      <div className="ms-auto flex w-[72%] flex-col gap-y-8 p-1">
        <div className="w-full space-y-2.5">
          <label className="text-[16px] font-semibold">Floor Plan</label>
          {preview ? (
            <div className="relative h-[185px] w-[288px]">
              <img src={preview} alt="Floor Plan Preview" className="h-full w-full rounded-2xl object-cover" />
              <button
                className="absolute right-2 top-2 rounded-full bg-red-600 p-1 text-white transition-all duration-200 ease-in-out hover:bg-white"
                onClick={handleRemoveFloorPlan}
              >
                <Delete size={20} />
              </button>
            </div>
          ) : (
            <label htmlFor="floorPlan" className="flex h-[185px] w-[288px] cursor-pointer items-center justify-center rounded-2xl border-2 border-dashed bg-whiteLilac">
              <input
                type="file"
                id="floorPlan"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "floorPlan")}
              />
              <div className="flex flex-col items-center justify-center gap-y-2 text-smokeyGrey">
                <ImageUp size={35} />
                Upload Plan
              </div>
            </label>
          )}
        </div>

        <div className="w-full space-y-2.5">
          <label className="text-[16px] font-semibold">Location</label>
          <div className="relative">
            <select
              id="location"
              className="border-mercury flex w-full appearance-none rounded-sm border bg-background p-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-grey focus:border-hitGrey focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:px-2 md:py-1.5 md:text-[8px] lg:px-2.5 lg:py-2 lg:text-[9px] xl:rounded-md xl:border-2 xl:px-3.5 xl:py-2.5 xl:text-[12px] 2xl:py-3 2xl:text-[14px]"
              value={formData.location}
              onChange={(e) => handleLocationChange(e.target.value)}
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

export default ProjectPropertyDetails;
