import { useState, useEffect } from "react";
import { Input } from "@/website/components/ui/input";
import { Textarea } from "@/website/components/ui/textarea";
import { ImageUp } from "lucide-react";
import Status from "@/website/components/svgs/Status";
import Delete from "@/website/components/svgs/Delete";

const statuses = ["Pre Launch", "Secondary", "Ready to Move In"];

const ProjectGeneralInformation = ({ formData, handleChange, handleStatusSelect, handleFeaturedSelect, handleFileChange }) => {
  const [selectedStatus, setSelectedStatus] = useState(statuses[0]);
  const [isFeatured, setIsFeatured] = useState(formData.featured); 
  const [previewCoverImage, setPreviewCoverImage] = useState(null);
  const [previewBrochure, setPreviewBrochure] = useState(null);

  useEffect(() => {
    if (formData.coverImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewCoverImage(reader.result);
      };
      reader.readAsDataURL(formData.coverImage);
    } else {
      setPreviewCoverImage(null);
    }
  }, [formData.coverImage]);

  useEffect(() => {
    if (formData.brochure) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewBrochure(reader.result);
      };
      reader.readAsDataURL(formData.brochure);
    } else {
      setPreviewBrochure(null);
    }
  }, [formData.brochure]);

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
    handleStatusSelect(status);
  };

  const handleFeaturedClick = () => {
    const newFeaturedStatus = !isFeatured;
    setIsFeatured(newFeaturedStatus);
    handleFeaturedSelect(newFeaturedStatus);
  };

  const handleRemoveCoverImage = () => { 
    handleFileChange({ target: { files: [null] } }, "coverImage");
  };

  const handleRemoveBrochure = () => {
    handleFileChange({ target: { files: [null] } }, "brochure");
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
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="space-y=2.5">
          <label className="text-[16px] font-semibold">Overview</label>
          <Textarea
            id="overview"
            className="h-[300px] ps-3"
            placeholder="Dubai Best Home under 1.5 kanal"
            value={formData.overview}
            onChange={handleChange}
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
                onClick={() => handleStatusClick(status)}
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
            <div
              className={`flex cursor-pointer items-center gap-x-1.5 rounded-md border-2 border-mirage border-opacity-0 px-3 py-2 transition-all duration-300 ease-in-out hover:border-opacity-100 ${
                isFeatured && "bg-mirage text-white"
              }`}
              onClick={handleFeaturedClick}
            >
              <Status
                className={`${isFeatured ? "text-white" : "text-black"}`}
                size={25}
              />
              <p className="text-[14px]">Yes</p>
            </div>
            <div
              className={`flex cursor-pointer items-center gap-x-1.5 rounded-md border-2 border-mirage border-opacity-0 px-3 py-2 transition-all duration-300 ease-in-out hover:border-opacity-100 ${
                !isFeatured && "bg-mirage text-white"
              }`}
              onClick={handleFeaturedClick}
            >
              <Status
                className={`${!isFeatured ? "text-white" : "text-black"}`}
                size={25}
              />
              <p className="text-[14px]">No</p>
            </div>
          </div>
        </div>

        <div className="w-full space-y-2.5">
          <label className="text-[16px] font-semibold">Cover Image</label>
          {previewCoverImage ? (
            <div className="relative w-[288px] h-[185px]">
              <img
                src={previewCoverImage}
                alt="Cover Image Preview"
                className="w-full h-full object-cover rounded-2xl"
              />
              <button
                className="absolute top-2 right-2 p-1 bg-red-600 hover:bg-white text-white transition-all duration-200 ease-in-out rounded-full"
                onClick={handleRemoveCoverImage}
              >
                <Delete size={20} />
              </button>
            </div>
          ) : (
            <label htmlFor="coverImage" className="flex h-[185px] w-[288px] items-center justify-center rounded-2xl border-2 border-dashed bg-whiteLilac cursor-pointer">
              <input
                type="file"
                id="coverImage"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "coverImage")}
              />
              <div className="flex flex-col items-center justify-center gap-y-2 text-smokeyGrey">
                <ImageUp size={35} />
                Upload Cover Image
              </div>
            </label>
          )}
        </div>

        <div className="w-full space-y-2.5">
          <label className="text-[16px] font-semibold">Brochure</label>
          {previewBrochure ? (
            <div className="relative w-[288px] h-[185px]">
              <img
                src={previewBrochure}
                alt="Brochure Preview"
                className="w-full h-full object-cover rounded-2xl"
              />
              <button
                className="absolute top-2 right-2 p-1 bg-red-600 hover:bg-white text-white transition-all duration-200 ease-in-out rounded-full"
                onClick={handleRemoveBrochure}
              >
                <Delete size={20} />
              </button>
            </div>
          ) : (
            <label htmlFor="brochure" className="flex h-[185px] w-[288px] items-center justify-center rounded-2xl border-2 border-dashed bg-whiteLilac cursor-pointer">
              <input
                type="file"
                id="brochure"
                className="hidden"
                accept="application/pdf"
                onChange={(e) => handleFileChange(e, "brochure")}
              />
              <div className="flex flex-col items-center justify-center gap-y-2 text-smokeyGrey">
                <ImageUp size={35} />
                Upload Brochure
              </div>
            </label>
          )}
        </div>

        <div className="w-full space-y-2.5">
          <label className="text-[16px] font-semibold">Price</label>
          <Input
            type="number"
            id="price"
            className="ps-3"
            placeholder="32,402"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectGeneralInformation;
