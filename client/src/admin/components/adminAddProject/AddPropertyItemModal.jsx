import Cross from "../svgs/Cross";
import Button from "../common/Button";
import InputField from "../common/InputField";

const AddPropertyItemModal = ({ onClose }) => {
  return (
    <>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex w-[40rem] flex-col gap-y-3 rounded-3xl bg-white">
          <div className="border-b border-pastelGrey">
            <div className="flex items-center justify-between px-5 pb-3 pt-5">
              <div className="flex items-center gap-x-2.5">
                <h1 className="font-regular text-[22px]">Add Property Item</h1>
              </div>

              <div onClick={onClose}>
                <Cross className="cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="border-b border-pastelGrey">
            <div className="space-y-5 px-5 pb-9">
              <InputField label="Property Type" placeholder="Villa" />
              <InputField label="Unit Type" placeholder="3 Bedrooms" />
              <InputField label="Size" placeholder="Various Size Available" />
            </div>
          </div>

          <div className="flex items-center justify-end gap-x-3 px-5 pb-4 pt-2">
            <Button className="rounded-md border-red-700 bg-red-700 hover:border-mirage" onClick={onClose}>
              Cancel
            </Button>
            <Button className="rounded-md">Submit</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPropertyItemModal;
