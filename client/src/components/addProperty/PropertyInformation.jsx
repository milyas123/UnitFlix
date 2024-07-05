
import Status from "../svgs/Status";
import { Input } from "../ui/input";

const PropertyInformation = () => {
  return (
    <div className="rounded-xl bg-white px-8 py-4 flex items-start gap-14">
      <h2 className="font-semibold text-[20px] whitespace-nowrap">
        Property Information
      </h2>
      <div className="p-1 w-full flex flex-col gap-y-8">
        <div className="space-y-2.5 w-full">
          <label className="font-semibold text-[16px]">Select Purpose</label>
          <div className="flex items-center gap-x-3">
            <div className="cursor-pointer w-[60px] text-center p-2 text-white bg-mirage border border-mirage rounded-md">
              Sell
            </div>
            <div className="cursor-pointer w-[60px] text-center p-2 text-smokeyGrey border border-smokeyGrey rounded-md">
              Rent
            </div>
          </div>
        </div>

        <div className="space-y-2.5 w-full">
          <label className="font-semibold text-[16px]">
            Select Property Type
          </label>
          <div className="bg-whiteLilac rounded-lg p-1.5 flex">
            <div className="cursor-pointer rounded-lg w-full p-2 text-center">
              Home
            </div>
            <div className="cursor-pointer rounded-lg w-full p-2 text-center">
              Plot
            </div>
            <div className="cursor-pointer bg-white rounded-lg w-full p-2 text-center">
              Commercial
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <div className="cursor-pointer flex items-center gap-x-1.5 px-3 py-2 rounded-md bg-mirage text-white">
              <Status className="text-white" size={25} />
              <p className="text-[14px]">House</p>
            </div>

            <div className="cursor-pointer flex items-center gap-x-1.5 px-3 py-2 rounded-md">
              <Status className="text-black" size={25} />
              <p className="text-[14px]">Flat</p>
            </div>

            <div className="cursor-pointer flex items-center gap-x-1.5 px-3 py-2 rounded-md">
              <Status className="text-black" size={25} />
              <p className="text-[14px]">Upper Portion</p>
            </div>

            <div className="cursor-pointer flex items-center gap-x-1.5 px-3 py-2 rounded-md">
              <Status className="text-black" size={25} />
              <p className="text-[14px]">Lower Portion</p>
            </div>

            <div className="cursor-pointer flex items-center gap-x-1.5 px-3 py-2 rounded-md">
              <Status className="text-black" size={25} />
              <p className="text-[14px]">Farm House</p>
            </div>

            <div className="cursor-pointer flex items-center gap-x-1.5 px-3 py-2 rounded-md">
              <Status className="text-black" size={25} />
              <p className="text-[14px]">Room</p>
            </div>

            <div className="cursor-pointer flex items-center gap-x-1.5 px-3 py-2 rounded-md">
              <Status className="text-black" size={25} />
              <p className="text-[14px]">Pent House</p>
            </div>
          </div>
        </div>

        <div className="space-y-2.5 w-full">
          <label className="font-semibold text-[16px]">Area</label>
          <Input type="number" id="title" className="ps-3" placeholder="56" />
        </div>

        <div className="space-y-2.5 w-full">
          <label className="font-semibold text-[16px]">City</label>
          <Input type="text" id="title" className="ps-3" placeholder="Dubai" />
        </div>

        <div className="space-y-2.5 w-full">
          <label className="font-semibold text-[16px]">Location</label>
          <Input
            type="text"
            id="title"
            className="ps-3"
            placeholder="Search Location"
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyInformation;
