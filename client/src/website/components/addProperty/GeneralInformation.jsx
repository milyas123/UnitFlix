import React from 'react';
import Status from "../svgs/Status";
import { Input } from "../ui/input";
import Delete from '../svgs/Delete';
import { ImageUp } from 'lucide-react';
import TextEditor from '@/admin/components/common/TextEditor';
import {useAppContext} from "@/AppContext.jsx";

const GeneralInformation = ({ formData, handleChange, handleSelectChange, handleFileChange, handleRemoveCoverImage, handleStatusClick }) => {
  const {propertyStatuses} = useAppContext();
  return (
    <div className="user--addProperty-sectionPadding flex flex-col rounded-xl border border-lightGrey bg-white md:flex-row md:items-start">
      <h2 className="user--addProperty-headingTextSize whitespace-nowrap md:w-[23%]">
        General Information
      </h2>
      <div
          className="mt-4 flex flex-col gap-y-4 md:ms-auto md:mt-0 md:w-[72%] md:gap-y-2 lg:gap-y-4 xl:gap-y-6 2xl:gap-y-8">
        <div className="w-full md:space-y-1 lg:space-y-1.5 xl:space-y-2 2xl:space-y-2.5">
          <label className="user--addProperty-labelTextSize">Title</label>
          <Input
              type="text"
              id="title"
              className="ps-3"
              placeholder="Dubai Best Home under 1.5 kanal"
              value={formData?.title}
              onChange={handleChange}
          />
        </div>

        <div className="w-full md:space-y-1 lg:space-y-1.5 xl:space-y-2 2xl:space-y-2.5">
          <label className="user--addProperty-labelTextSize">Tags</label>
          <Input
              type="text"
              id="tags"
              className="ps-3"
              placeholder="Villa | 150 sqft"
              value={formData?.tags}
              onChange={handleChange}
          />
        </div>

        <div className="w-full md:space-y-1 lg:space-y-1.5 xl:space-y-2 2xl:space-y-2.5">
          <label className="user--addProperty-labelTextSize">Overview</label>
          <TextEditor
              overview={formData.overview}
              setOverview={(value) => handleSelectChange("overview", value)}
          />
        </div>

        <div className="w-full space-y-2.5">
          <label className="text-[16px] font-semibold">Cover Image</label>
          {formData?.coverImage ? (
              <div className="relative w-[288px] h-[185px]">
                <img
                    src={formData.coverImage && formData.coverImage.id ? formData.coverImage.url : URL.createObjectURL(formData.coverImage)
                    }
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
                    onChange={handleFileChange}
                />
                <div className="flex flex-col items-center justify-center gap-y-2 text-smokeyGrey">
                  <ImageUp size={35}/>
                  Upload Cover Image
                </div>
              </label>
          )}
        </div>
        <div className="w-full space-y-2.5">
          <label className="text-[16px] font-semibold">Status</label>
          <div className="flex items-center justify-start flex-wrap gap-5">
            {propertyStatuses.filter(status => status.category === 'Property').map((status) => (
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
        <div className="w-full md:space-y-1 lg:space-y-1.5 xl:space-y-2 2xl:space-y-2.5">
          <label className="user--addProperty-labelTextSize">Price</label>
          <Input
              type="number"
              id="price"
              className="ps-3"
              placeholder="32,402"
              value={formData?.price}
              onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default GeneralInformation;
