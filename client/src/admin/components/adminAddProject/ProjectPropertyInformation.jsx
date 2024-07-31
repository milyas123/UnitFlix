import { useState } from "react";
import { Input } from "@/website/components/ui/input";
import Button from "../common/Button";
import Area from "@/website/components/svgs/Area";
import Bed from "@/website/components/svgs/Bed";
import Property from "@/website/components/svgs/Property";
import Edit from "@/website/components/svgs/Edit";
import Delete from "@/website/components/svgs/Delete";

const ProjectPropertyInformation = ({ showModal }) => {
  const [selectedPurpose, setSelectedPurpose] = useState("Sell");

  const handlePurposeSelect = (purpose) => {
    setSelectedPurpose(purpose);
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
              <div className="border-pastel Grey flex justify-between gap-y-2 divide-x divide-pastelGrey rounded-lg border p-2.5">
                <div className="flex items-center justify-between gap-x-7 pe-3">
                  <p className="flex items-center gap-1.5 text-davyGrey">
                    <Property /> Property Type
                  </p>
                  <p className="font-semibold">Villa</p>
                </div>

                <div className="flex items-center justify-between gap-x-7 px-3">
                  <p className="flex items-center gap-1.5 text-davyGrey">
                    <Bed /> Unit Type
                  </p>
                  <p className="font-semibold">3 Bedrooms</p>
                </div>

                <div className="flex items-center justify-between gap-x-7 px-3">
                  <p className="flex items-center gap-1.5 text-davyGrey">
                    <Area /> Size
                  </p>
                  <p className="font-semibold">Various Sizes Available</p>
                </div>

                <div className="flex gap-x-1 ps-3">
                  <Edit />
                  <Delete />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full space-y-2.5">
            <label className="text-[16px] font-semibold">Down Payment</label>
            <Input type="number" id="area" className="ps-3" placeholder="56" />
          </div>

          <div className="w-full space-y-2.5">
            <label className="text-[16px] font-semibold">Payment Plan</label>
            <Input type="text" id="city" className="ps-3" placeholder="70/30" />
          </div>

          <div className="w-full space-y-2.5">
            <label className="text-[16px] font-semibold">Hand Over</label>
            <Input
              type="text"
              id="location"
              className="ps-3"
              placeholder="Q4 - 2026"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPropertyInformation;
