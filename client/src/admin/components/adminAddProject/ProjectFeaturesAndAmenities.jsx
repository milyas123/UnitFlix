import Button from "../common/Button";
import { RiParkingBoxLine } from "react-icons/ri";

import Edit from "@/website/components/svgs/Edit";
import Delete from "@/website/components/svgs/Delete";

const ProjectFeaturesAndAmenities = ({ showModal }) => {
  return (
    <div className="flex items-start rounded-xl border border-lightGrey bg-white px-8 py-4">
      <div className="w-[23%] space-y-2">
        <h2 className="whitespace-nowrap text-[20px] font-semibold">
          Features & Amenities
        </h2>
        
        <Button
          variant="outline"
          onClick={() => showModal(true)}
          className="rounded-md hover:bg-mirage hover:text-white"
        >
          Add Amenities
        </Button>
      </div>
      <div className="ms-auto flex w-[72%] flex-col gap-y-8 p-1">
        <div className="flex h-[130px] w-[230px] items-center justify-center rounded-md border bg-whiteLilac p-6">
          <div className="flex flex-col items-center space-y-3 text-center">
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

export default ProjectFeaturesAndAmenities;
