import { useState, useEffect } from "react";
import { Input } from "@/website/components/ui/input";
import { ImageUp, Trash2 } from "lucide-react";
import Delete from "@/website/components/svgs/Delete";

const ProjectPropertyDetails = ({
  formData,
  handleChange,
  handleFileChange,
}) => {
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
      <h2 className="w-[23%] whitespace-nowrap text-[20px] font-semibold">
        Property Details
      </h2>

      <div className="ms-auto flex w-[72%] flex-col gap-y-8 p-1">
        <div className="w-full space-y-2.5">
          <label className="text-[16px] font-semibold">Floor Plan</label>
          {preview ? (
            <div className="relative h-[185px] w-[288px]">
              <img
                src={preview}
                alt="Floor Plan Preview"
                className="h-full w-full rounded-2xl object-cover"
              />
              <button
                className="absolute right-2 top-2 rounded-full bg-red-600 p-1 text-white transition-all duration-200 ease-in-out hover:bg-white"
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
          <label className="text-[16px] font-semibold">City</label>
          <Input
            type="text"
            id="city"
            className="ps-3"
            placeholder="Dubai"
            value={formData.city}
            onChange={handleChange}
          />
        </div>

        <div className="w-full space-y-2.5">
          <label className="text-[16px] font-semibold">Location</label>
          <Input
            type="text"
            id="location"
            className="ps-3"
            placeholder="Search Location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectPropertyDetails;
