import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Checkbox from "../common/Checkbox";

const TypeSelectModal = ({isOpen, setIsOpen}) => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState(null);

  const handleNext = () => {
    if (selectedType) {
      navigate(`/admin/add-${selectedType.toLowerCase()}`);
    }
  };

  const handleCancel = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="absolute z-[150] inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute z-[160] inset-0 flex items-center justify-center">
        <div className="w-[33rem] rounded-3xl bg-white">
          <div className="flex flex-col gap-y-5 p-5">
            <h1 className="font-regular text-[24px]">
              Please Select the type of the project
            </h1>
            <div className="space-y-8 rounded-xl bg-whiteLilac p-4">
              <div className="flex items-start justify-between gap-x-4">
                <Checkbox
                  checked={selectedType === "Project"}
                  onChange={() => setSelectedType("Project")}
                />
                <img
                  src="/assets/imgs/Project.png"
                  className="size-[32px] object-cover"
                  alt="Project"
                />
                <div>
                  <h4 className="text-[16px]">Project</h4>
                  <p className="text-[14px] text-davyGrey">
                    Supporting line text lorem ipsum dolor sit amet,
                    consectetur.
                  </p>
                </div>
              </div>

              <div className="flex items-start justify-between gap-x-4">
                <Checkbox
                  checked={selectedType === "Property"}
                  onChange={() => setSelectedType("Property")}
                />
                <img
                  src="/assets/imgs/Property.png"
                  className="size-[32px] object-cover"
                  alt="Property"
                />
                <div>
                  <h4 className="text-[16px]">Property</h4>
                  <p className="text-[14px] text-davyGrey">
                    Supporting line text lorem ipsum dolor sit amet,
                    consectetur.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 border"></div>
          <div className="p-5">
            <div className="mt-2 flex items-center justify-end gap-x-6 px-6 pb-4 text-[14px] font-medium">
              <button className="hover:text-mirage" onClick={handleCancel}>Cancel</button>
              <button className="hover:text-mirage" onClick={handleNext}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TypeSelectModal;
