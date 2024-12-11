import {lazy} from "react";
import { ImageUp } from "lucide-react";
import { AiFillFilePdf } from "react-icons/ai";

const TextEditor = lazy(() => import("../common/TextEditor"));
import { Input } from "@/website/components/ui/input";
import Status from "@/website/components/svgs/Status";
import Delete from "@/website/components/svgs/Delete";
import {useAppContext} from "@/AppContext.jsx";
import AnimLazyLoader from "@/website/components/common/AnimLazyLoader.jsx";


const ProjectGeneralInformation = ({ formData, handleChange, handleSelect, handleFileChange }) => {

  const {propertyStatuses} = useAppContext();

  const handleStatusClick = (status) => {
    handleSelect("status", status);
  };

  const handleFeaturedClick = () => {
    handleSelect("featured", !formData.featured);
  };

  const handleRemoveCoverImage = () => { 
    handleFileChange({ target: { files: [null] } }, "coverImage");
  };

  const handleRemoveBrochure = () => {
    handleFileChange({ target: { files: [null] } }, "brochure");
  }

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

        <div className="space-y-2.5">
          <label className="text-[16px] font-semibold">Tags</label>
          <Input
              type="text"
              id="tags"
              className="ps-3"
              placeholder="Spacious Bedrooms | City View"
              value={formData.tags}
              onChange={handleChange}
          />
        </div>

        <div className="space-y-2.5">
          <label className="text-[16px] font-semibold">Overview</label>
          <AnimLazyLoader>
            <TextEditor
                overview={formData.overview}
                setOverview={(value) => handleSelect("overview", value)}
            />
          </AnimLazyLoader>
        </div>

        <div className="w-full space-y-2.5">
          <label className="text-[16px] font-semibold">Status</label>
          <div className="flex items-center justify-start gap-5">
            {propertyStatuses.filter(status => status.category === 'Project').map((status) => (
                <div
                    key={status.id}
                    className={`flex cursor-pointer items-center gap-x-1.5 rounded-md border-2 border-mirage border-opacity-0 px-3 py-2 transition-all duration-300 ease-in-out hover:border-opacity-100 ${
                        formData.status === status.name && "bg-mirage text-white"
                    }`}
                    onClick={() => handleStatusClick(status.name)}
                >
                  <Status
                      className={`${formData.status === status.name ? "text-white" : "text-black"}`}
                      size={25}
                  />
                  <p className="text-[14px]">{status.name}</p>
                </div>
            ))}
          </div>
        </div>

        <div className="w-full space-y-2.5">
          <label className="text-[16px] font-semibold">Featured</label>
          <div className="flex items-center gap-x-6">
            <div
                className={`flex cursor-pointer items-center gap-x-1.5 rounded-md border-2 border-mirage border-opacity-0 px-3 py-2 transition-all duration-300 ease-in-out hover:border-opacity-100 ${
                    formData.featured && "bg-mirage text-white"
                }`}
                onClick={handleFeaturedClick}
            >
              <Status
                  className={`${formData.featured ? "text-white" : "text-black"}`}
                  size={25}
              />
              <p className="text-[14px]">Yes</p>
            </div>
            <div
                className={`flex cursor-pointer items-center gap-x-1.5 rounded-md border-2 border-mirage border-opacity-0 px-3 py-2 transition-all duration-300 ease-in-out hover:border-opacity-100 ${
                    !formData.featured && "bg-mirage text-white"
                }`}
                onClick={handleFeaturedClick}
            >
              <Status
                  className={`${!formData.featured ? "text-white" : "text-black"}`}
                  size={25}
              />
              <p className="text-[14px]">No</p>
            </div>
          </div>
        </div>

        <div className="w-full space-y-2.5">
          <label className="text-[16px] font-semibold">Cover Image</label>
          {formData.coverImage ? (
              <div className="relative w-[288px] h-[185px]">
                <img
                    src={formData.coverImage && formData.coverImage.id ? formData.coverImage.url : URL.createObjectURL(formData.coverImage)}
                    alt="Cover Image Preview"
                    className="w-full h-full object-cover rounded-2xl"
                />
                <button
                    className="absolute top-2 right-2 p-1 bg-red-600 hover:bg-white text-white transition-all duration-200 ease-in-out rounded-full"
                    onClick={handleRemoveCoverImage}
                >
                  <Delete size={20}/>
                </button>
              </div>
          ) : (
              <label htmlFor="coverImage"
                     className="flex h-[185px] w-[288px] items-center justify-center rounded-2xl border-2 border-dashed bg-whiteLilac cursor-pointer">
                <input
                    type="file"
                    id="coverImage"
                    className="hidden"
                    accept=".jpg,.jpeg,.png"
                    onChange={(e) => handleFileChange(e, "coverImage")}
                />
                <div className="flex flex-col items-center justify-center gap-y-2 text-smokeyGrey">
                  <ImageUp size={35}/>
                  Upload Cover Image
                </div>
              </label>
          )}
        </div>

        <div className="w-full space-y-2.5">
          <label className="text-[16px] font-semibold">Brochure</label>
          {formData.brochure ? (
              <div className="relative flex items-center gap-2 p-2 rounded-lg border border-dashed border-gray-400">
                <AiFillFilePdf size={30} className="text-red-600"/>
                <p className="text-[14px] text-black">{formData.brochure && formData.brochure.id ? formData.brochure.filename : formData.brochure.name}</p>
                <button
                    className="absolute top-1 right-1 p-1 bg-red-600 hover:bg-white text-white transition-all duration-200 ease-in-out rounded-full"
                    onClick={handleRemoveBrochure}
                >
                  <Delete size={20}/>
                </button>
              </div>
          ) : (
              <label htmlFor="brochure"
                     className="flex h-[185px] w-[288px] items-center justify-center rounded-2xl border-2 border-dashed bg-whiteLilac cursor-pointer">
                <input
                    type="file"
                    id="brochure"
                    className="hidden"
                    accept="application/pdf"
                    onChange={(e) => handleFileChange(e, "brochure")}
                />
                <div className="flex flex-col items-center justify-center gap-y-2 text-smokeyGrey">
                  <ImageUp size={35}/>
                  Upload Brochure PDF
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
