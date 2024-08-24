import React, { useState, useEffect } from "react";
import Cross from "../../svgs/Cross";
import Button from "../../common/Button";
import InputField from "../../common/InputField";
import Dropdown from "@/website/components/common/Dropdown.jsx";
import {getFeaturedIcons} from "@/lib/icons.jsx";

const AddAmenityModal = ({ onClose, onSubmit, editData }) => {
  const [name, setName] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('')

  useEffect(() => {
    if (editData) {
      setName(editData.name);
      setSelectedIcon(editData.icon)
    }
  }, [editData]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const handleSubmit = () => {
    onSubmit(name, selectedIcon);
    setName('');
    setSelectedIcon('');
  };

  const onCloseClick = () => {
    setSelectedIcon("");
    setName('');
    if(onClose) {
      onClose();
    }
  }

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50"></div>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="flex w-[40rem] flex-col gap-y-3 rounded-3xl bg-white">
          <div className="border-b border-pastelGrey">
            <div className="flex items-center justify-between px-5 pb-3 pt-5">
              <div className="flex items-center gap-x-2.5">
                <h1 className="font-regular text-[22px]">Add Feature & Amenity</h1>
              </div>
              <div onClick={onCloseClick}>
                <Cross className="cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="border-b border-pastelGrey">
            <div className="space-y-5 px-5 pb-9">
              <InputField
                  label="Feature/Amenity"
                  placeholder="Parking"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
              />
              <div className="w-full">
                <p className="font-semibold text-mirage">Icon</p>
                <div className='text-[16px] p-3 md:text-[12px] xl:text-[14px] md:px-2 md:py-2.5 xl:p-3 2xl:text-[16px] 2xl:px-4 appearance-none border border-midGrey rounded-md w-full text-black leading-tight focus:outline-none focus:shadow-outline font-regular '>
                  <Dropdown
                      options={getFeaturedIcons()}
                      placeholder="Icon"
                      currentOption={selectedIcon}
                      onChange={setSelectedIcon}
                      fullLength={true}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-x-3 px-5 pb-4 pt-2">
            <Button className="rounded-md border-red-700 bg-red-700 hover:border-mirage" onClick={onCloseClick}>
              Cancel
            </Button>
            <Button className="rounded-md" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAmenityModal;
