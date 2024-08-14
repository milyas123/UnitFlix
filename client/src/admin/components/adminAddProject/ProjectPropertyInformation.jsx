import { useAppContext } from "@/AppContext";

import { Input } from "@/website/components/ui/input";
import Button from "../common/Button";
import Area from "@/website/components/svgs/Area";
import Bed from "@/website/components/svgs/Bed";
import Property from "@/website/components/svgs/Property";
import Edit from "@/website/components/svgs/Edit";
import Delete from "@/website/components/svgs/Delete";
import Status from "@/website/components/svgs/Status";

const ProjectPropertyInformation = ({
  formData,
  handleChange,
  showModal,
  editProperty,
  deleteProperty,
  handleSelectChange,
}) => {
  const { propertyTypes } = useAppContext();

  return (
    <>
      <div className="flex items-start rounded-xl border border-lightGrey bg-white px-8 py-4">
        <h2 className="w-[23%] whitespace-nowrap text-[20px] font-semibold">
          Property Information
        </h2>

        <div className="ms-auto flex w-[72%] flex-col gap-y-8 p-1">
          <div className="w-full space-y-2.5">
            <label className="text-[16px] font-semibold">Select Purpose</label>
            <div className="flex items-center gap-x-3">
              <div
                className={`w-[60px] cursor-pointer p-2 text-center ${
                  formData?.purpose === 0
                    ? "border border-mirage bg-mirage text-white"
                    : "border border-smokeyGrey text-smokeyGrey"
                } rounded-md`}
                onClick={() => handleSelectChange("purpose", 0)}
              >
                Sell
              </div>
              <div
                className={`w-[60px] cursor-pointer p-2 text-center ${
                  formData?.purpose === 1
                    ? "border border-mirage bg-mirage text-white"
                    : "border border-smokeyGrey text-smokeyGrey"
                } rounded-md`}
                onClick={() => handleSelectChange("purpose", 1)}
              >
                Rent
              </div>
            </div>
          </div>

          <div>
            <label className="text-[16px] font-semibold">
              Select Property Type
            </label>
            <div className="flex flex-wrap items-center gap-x-3 md:gap-y-1.5 lg:gap-y-2 xl:gap-y-3 2xl:gap-y-4">
              {propertyTypes.map((type) => (
                <div
                  key={crypto.randomUUID()}
                  className={`flex cursor-pointer items-center gap-x-1 rounded-md border-2 border-mirage border-opacity-0 px-1.5 py-1 transition-all duration-300 ease-in-out hover:border-opacity-100 md:gap-x-0.5 md:px-1 md:py-0.5 lg:gap-x-1 lg:px-1.5 lg:py-1 xl:gap-x-1.5 xl:px-2 xl:py-1.5 2xl:px-3 2xl:py-2 ${
                    formData?.propertyType === type?.id &&
                    "bg-mirage text-white"
                  }`}
                  onClick={() => handleSelectChange("propertyType", type?.id)}
                >
                  <Status
                    className={`${formData?.propertyType === type?.id ? "text-white" : "text-black"}`}
                  />
                  <p className="text-[14px] md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px]">
                    {type?.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="text-[16px] font-semibold">Properties</label>
              <Button
                variant="filled"
                className="rounded-lg"
                onClick={() => showModal(true)}
              >
                Add Item
              </Button>
            </div>
            <div className="space-y-4 text-[14px]">
              {formData?.propertyDetails?.map((property, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-y-2 divide-x divide-pastelGrey rounded-lg border border-pastelGrey p-2.5"
                >
                  <div className="flex items-center justify-between gap-x-7 pe-3">
                    <p className="flex items-center gap-1.5 text-davyGrey">
                      <Property /> Property Type
                    </p>
                    <p className="font-semibold">{property.propertyType}</p>
                  </div>

                  <div className="flex items-center justify-between gap-x-7 px-3">
                    <p className="flex items-center gap-1.5 text-davyGrey">
                      <Bed /> Unit Type
                    </p>
                    <p className="font-semibold">{property.unitType}</p>
                  </div>

                  <div className="flex items-center justify-between gap-x-7 px-3">
                    <p className="flex items-center gap-1.5 text-davyGrey">
                      <Area /> Size
                    </p>
                    <p className="font-semibold">{property.size}</p>
                  </div>

                  <div className="flex gap-x-1 ps-3">
                    <Edit onClick={() => editProperty(index)} />
                    <Delete onClick={() => deleteProperty(index)} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full space-y-2.5">
            <label className="text-[16px] font-semibold">Down Payment</label>
            <Input
              type="number"
              id="downPayment"
              className="ps-3"
              placeholder="56"
              value={formData.downPayment}
              onChange={handleChange}
            />
          </div>

          <div className="w-full space-y-2.5">
            <label className="text-[16px] font-semibold">Payment Plan</label>
            <Input
              type="text"
              id="paymentPlan"
              className="ps-3"
              placeholder="70/30"
              value={formData.paymentPlan}
              onChange={handleChange}
            />
          </div>

          <div className="w-full space-y-2.5">
            <label className="text-[16px] font-semibold">Hand Over</label>
            <Input
              type="text"
              id="handOver"
              className="ps-3"
              placeholder="Q4 - 2026"
              value={formData.handOver}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPropertyInformation;
