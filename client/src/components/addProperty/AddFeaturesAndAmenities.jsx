import { RiParkingBoxLine } from "react-icons/ri";
import { Button } from "../ui/button";

import Edit from "../svgs/Edit";
import Delete from "../svgs/Delete";

const AddFeaturesAndAmenities = () => {
  return (
    <div className="rounded-xl bg-white px-8 py-4 flex items-start gap-14">
      <div className="space-y-2">
        <h2 className="font-semibold text-[20px] whitespace-nowrap">
          Features & Amenities
        </h2>
        <Button
          variant="outline"
          className="rounded-md hover:bg-mirage hover:text-white"
        >
          Add Amenities
        </Button>
      </div>
      <div className="p-1 w-full flex flex-col gap-y-8">
        <div className="w-[230px] h-[130px] bg-whiteLilac rounded-md border flex justify-center items-center p-6">
          <div className="flex flex-col items-center text-center space-y-3">
            <RiParkingBoxLine />
            <p className="text-14px">Parking Spaces: 1</p>
            <div className="flex items-center justify-center gap-x-1.5 text-smokeyGrey">
              <Edit size={22} />
              <Delete size={22} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFeaturesAndAmenities;
