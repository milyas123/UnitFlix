import React, { useState } from "react";
import Status from "../svgs/Status";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const statuses = ["Pre Launch", "Secondary", "Ready to Move In"];

const GeneralInformation = () => {
  const [selectedStatus, setSelectedStatus] = useState(statuses[0]);

  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
  };

  return (
    <div className="flex items-start rounded-xl bg-white px-8 py-4">
      <h2 className="w-[23%] whitespace-nowrap text-[20px] font-semibold">
        General Information
      </h2>
      <div className="ms-auto flex w-[72%] flex-col gap-y-8 p-1">
        <div className="w-full space-y-2.5">
          <label className="text-[16px] font-semibold">Title</label>
          <Input
            type="text"
            id="title"
            className="ps-3"
            placeholder="Dubai Best Home under 1.5 kanal"
          />
        </div>

        <div className="w-full space-y-2.5">
          <label className="text-[16px] font-semibold">Overview</label>
          <Textarea
            id="overview"
            className="h-[300px] ps-3"
            placeholder="Dubai Best Home under 1.5 kanal"
          />
        </div>

        <div className="w-full space-y-2.5">
          <label className="text-[16px] font-semibold">Status</label>
          <div className="flex items-center justify-between">
            {statuses.map((status) => (
              <div
                key={status}
                className={`flex cursor-pointer items-center gap-x-1.5 rounded-md border-2 border-mirage border-opacity-0 px-3 py-2 transition-all duration-300 ease-in-out hover:border-opacity-100 ${
                  selectedStatus === status && "bg-mirage text-white"
                }`}
                onClick={() => handleStatusSelect(status)}
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
          <label className="text-[16px] font-semibold">Price</label>
          <Input
            type="number"
            id="price"
            className="ps-3"
            placeholder="32,402"
          />
        </div>
      </div>
    </div>
  );
};

export default GeneralInformation;
