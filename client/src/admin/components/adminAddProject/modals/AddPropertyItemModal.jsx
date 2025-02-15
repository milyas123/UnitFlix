import { useState, useEffect } from "react";
import Cross from "../../svgs/Cross";
import Button from "../../common/Button";
import InputField from "../../common/InputField";

const AddPropertyItemModal = ({ onClose, onSubmit, editData }) => {
  const [propertyType, setPropertyType] = useState("");
  const [unitType, setUnitType] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    if (editData) {
      setPropertyType(editData.propertyType);
      setUnitType(editData.unitType);
      setSize(editData.size);
    }
  }, [editData]);

  const handleSubmit = () => {
    onSubmit({
      propertyType,
      unitType,
      size,
    });
  };

  const onCloseClick = () => {
    setPropertyType('');
    setUnitType('');
    setSize('');
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
                <h1 className="font-regular text-[22px]">Add Property Item</h1>
              </div>

              <div onClick={onCloseClick}>
                <Cross className="cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="border-b border-pastelGrey">
            <div className="space-y-5 px-5 pb-9">
              <InputField
                label="Property Type"
                placeholder="Villa"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              />
              <InputField
                label="Unit Type"
                placeholder="3 Bedrooms"
                value={unitType}
                onChange={(e) => setUnitType(e.target.value)}
              />
              <InputField
                label="Size"
                placeholder="Various Size Available"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-x-3 px-5 pb-4 pt-2">
            <Button
              className="rounded-md border-red-700 bg-red-700 hover:border-mirage"
              onClick={onCloseClick}
            >
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

export default AddPropertyItemModal;
