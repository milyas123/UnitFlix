import { useState } from "react";
import Status from "@/website/components/svgs/Status";
import { Input } from "@/website/components/ui/input";
import { Textarea } from "@/website/components/ui/textarea";
import { ImageUp } from "lucide-react";

const statuses = ["Pre Launch", "Secondary", "Ready to Move In"];

const ProjectGeneralInformation = () => {
  const [selectedStatus, setSelectedStatus] = useState(statuses[0]);
  const [isFeatured, setIsFeatured] = useState("Yes");

  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
  };

  const handleFeaturedSelect = () => {
    setIsFeatured(isFeatured === "Yes" ? "No" : "Yes");
  };

  return (
    <div className="flex items-start rounded-xl border border-lightGrey bg-white px-8 py-4">
      <h2 className="w-[23%] whitespace-nowrap text-[20px] font-semibold">
        General Information
      </h2>
      <div className="ms-auto flex w-[72%] flex-col gap-y-8 p-1">
        <div className="space-y-2.5">
          <label className="text-[16px] font-semibold">Title</label>
          <Input
            type="text"
            id="title"
            className="ps-3"
            placeholder="Dubai Best Home under 1.5 kanal"
          />
        </div>

        <div className="space-y-2.5">
          <label className="text-[16px] font-semibold">Overview</label>
          <Textarea
            id="overview"
            className="h-[300px] ps-3"
            placeholder="Dubai Best Home under 1.5 kanal"
          />
        </div>

        <div className="w-full space-y-2.5">
          <label className="text-[16px] font-semibold">Status</label>
          <div className="flex items-center justify-start gap-5">
            {statuses.map((status) => (
              <div
                key={status}
                className={`flex cursor-pointer items-center gap-x-1.5 rounded-md border-2 border-mirage border-opacity-0 px-3 py-2 transition-all duration-300 ease-in-out hover:border-opacity-100 ${
                  selectedStatus === status && "bg-mirage text-white"
                }`}
                onClick={() => handleStatusSelect(status)}
              >
                <Status
                  className={`${selectedStatus === status ? "text-white" : "text-black"}`}
                  size={25}
                />
                <p className="text-[14px]">{status}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full space-y-2.5">
          <label className="text-[16px] font-semibold">Featured</label>
          <div className="flex items-center gap-x-6">
            {["Yes", "No"].map((option) => (
              <div
                key={option}
                className={`flex cursor-pointer items-center gap-x-1.5 rounded-md border-2 border-mirage border-opacity-0 px-3 py-2 transition-all duration-300 ease-in-out hover:border-opacity-100 ${
                  isFeatured !== option && "bg-mirage text-white"
                }`}
                onClick={handleFeaturedSelect}
              >
                <Status
                  className={`${isFeatured !== option ? "text-white" : "text-black"}`}
                  size={25}
                />
                <p className="text-[14px]">{option}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full space-y-2.5">
          <label className="text-[16px] font-semibold">Brochure</label>
          <div className="flex h-[185px] w-[288px] items-center justify-center rounded-2xl border-2 border-dashed bg-whiteLilac">
            <div className="flex flex-col items-center justify-center gap-y-2 text-smokeyGrey">
              <ImageUp size={35} />
              Upload Brochure
            </div>
          </div>
        </div>

        

        <div className="w-full space-y-2.5">
          <label className="text-[16px] font-semibold">Price</label>
          <Input
            type="number"
            id="price"
            className="ps-3"
            placeholder="32,402"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectGeneralInformation;
