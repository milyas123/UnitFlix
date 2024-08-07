import { useState } from "react";
import { Input } from "@/website/components/ui/input";
import Button from "../common/Button";
import Area from "@/website/components/svgs/Area";
import Bed from "@/website/components/svgs/Bed";
import Property from "@/website/components/svgs/Property";
import Edit from "@/website/components/svgs/Edit";
import Delete from "@/website/components/svgs/Delete";

const ProjectPropertyInformation = ({ formData, handleChange, showModal }) => {
  const [selectedPurpose, setSelectedPurpose] = useState(formData.purpose);

  const handlePurposeSelect = (purpose) => {
    setSelectedPurpose(purpose);
    handleChange("purpose", purpose);
  };

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
                  selectedPurpose === "Sell"
                    ? "border border-mirage bg-mirage text-white"
                    : "border border-smokeyGrey text-smokeyGrey"
                } rounded-md`}
                onClick={() => handlePurposeSelect("Sell")}
              >
                Sell
              </div>
              <div
                className={`w-[60px] cursor-pointer p-2 text-center ${
                  selectedPurpose === "Rent"
                    ? "border border-mirage bg-mirage text-white"
                    : "border border-smokeyGrey text-smokeyGrey"
                } rounded-md`}
                onClick={() => handlePurposeSelect("Rent")}
              >
                Rent
              </div>
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
            <div className="text-[14px]">
              {formData.properties.map((property, index) => (
                <div key={index} className="border-pastelGrey flex justify-between items-center gap-y-2 divide-x divide-pastelGrey rounded-lg border p-2.5">
                  <div className="flex items-center justify-between gap-x-7 pe-3">
                    <p className="flex items-center gap-1.5 text-davyGrey">
                      <Property /> {property.propertyType}
                    </p>
                    <p className="font-semibold">{property.unitType}</p>
                  </div>

                  <div className="flex items-center justify-between gap-x-7 px-3">
                    <p className="flex items-center gap-1.5 text-davyGrey">
                      <Bed /> {property.unitType}
                    </p>
                    <p className="font-semibold">{property.size}</p>
                  </div>

                  <div className="flex items-center justify-between gap-x-7 px-3">
                    <p className="flex items-center gap-1.5 text-davyGrey">
                      <Area /> {property.size}
                    </p>
                    <p className="font-semibold">{property.sizeDescription}</p>
                  </div>

                  <div className="flex gap-x-1 ps-3">
                    <Edit />
                    <Delete />
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
              onChange={(e) => handleChange("downPayment", e.target.value)}
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
              onChange={(e) => handleChange("paymentPlan", e.target.value)}
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
              onChange={(e) => handleChange("handOver", e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPropertyInformation;
