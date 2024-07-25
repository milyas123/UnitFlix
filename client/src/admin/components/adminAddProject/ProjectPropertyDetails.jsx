import { Input } from "@/website/components/ui/input";
import { ImageUp } from "lucide-react";

const ProjectPropertyDetails = () => {
  return (
    <div className="flex items-start rounded-xl border border-lightGrey bg-white px-8 py-4">
      <h2 className="w-[23%] whitespace-nowrap text-[20px] font-semibold">
        Property Details
      </h2>

      <div className="ms-auto flex w-[72%] flex-col gap-y-8 p-1">
        <div className="w-full space-y-2.5">
          <label className="text-[16px] font-semibold">Floor Plan</label>
          <div className="flex h-[185px] w-[288px] items-center justify-center rounded-2xl border-2 border-dashed bg-whiteLilac">
            <div className="flex flex-col items-center justify-center gap-y-2 text-smokeyGrey">
              <ImageUp size={35} />
              Upload Plan
            </div>
          </div>
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

export default ProjectPropertyDetails;
