import React, { useState } from 'react';
import Status from '../svgs/Status';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

const statuses = ['Pre Launch', 'Secondary', 'Ready to Move In'];

const GeneralInformation = () => {
  const [selectedStatus, setSelectedStatus] = useState(statuses[0]);

  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
  };

  return (
    <div className="rounded-xl bg-white px-8 py-4 flex items-start gap-14">
      <h2 className="font-semibold text-[20px] whitespace-nowrap">General Information</h2>
      <div className="p-1 w-full flex flex-col gap-y-8">
        <div className="space-y-2.5 w-full">
          <label className="font-semibold text-[16px]">Title</label>
          <Input
            type="text"
            id="title"
            className="ps-3"
            placeholder="Dubai Best Home under 1.5 kanal"
          />
        </div>

        <div className="space-y-2.5 w-full">
          <label className="font-semibold text-[16px]">Overview</label>
          <Textarea
            id="overview"
            className="ps-3 h-[300px]"
            placeholder="Dubai Best Home under 1.5 kanal"
          />
        </div>

        <div className="space-y-2.5 w-full">
          <label className="font-semibold text-[16px]">Status</label>
          <div className="flex justify-between items-center">
            {statuses.map((status) => (
              <div
                key={status}
                className={`cursor-pointer flex items-center gap-x-1.5 px-3 py-2 rounded-md border-2 border-mirage border-opacity-0 hover:border-opacity-100 transition-all duration-300 ease-in-out ${
                  selectedStatus === status && 'bg-mirage text-white'
                }`}
                onClick={() => handleStatusSelect(status)}
              >
                <Status className={`${selectedStatus === status ? 'text-white' : 'text-black'}`} size={25} />
                <p className="text-[14px]">{status}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2.5 w-full">
          <label className="font-semibold text-[16px]">Price</label>
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
