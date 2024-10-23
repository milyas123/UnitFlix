import { Button } from "../ui/button";
import Edit from "../svgs/Edit";
import Delete from "../svgs/Delete";
import {getIcon} from "@/lib/icons.jsx";

const AddFeaturesAndAmenities = ({ formData, showModal, handleEdit, handleDelete }) => {
  return (
    <div className="user--addProperty-sectionPadding flex flex-col rounded-xl border border-lightGrey bg-white md:flex-row md:items-start">
      <div className="space-y-2 md:w-[23%]">
        <h2 className="user--addProperty-headingTextSize whitespace-nowrap">Features & Amenities</h2>
        <Button
          variant="outline"
          onClick={() => showModal(true)}
          className="rounded-md hover:bg-mirage hover:text-white"
        >
          Add Amenity
        </Button>
      </div>
      <div className="mt-4 flex flex-wrap gap-4 md:ms-auto md:mt-0 md:w-[72%]">
        {formData?.features?.map((feature, index) => (
          <div
            key={index}
            className="flex items-center justify-center rounded-md border bg-whiteLilac p-6 md:h-[90px] md:w-[130px] lg:h-[105px] lg:w-[160px] xl:h-[115px] xl:w-[200px] 2xl:h-[130px] 2xl:w-[230px]"
          >
            <div className="flex flex-col items-center space-y-3 text-center">
              <div className={'text-[24px] md:text-[28px] lg:text-[32px]'}>
                  {getIcon(feature?.icon)}
              </div>
              <p className="md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px]">
                {feature?.name}
              </p>
              <div className="flex items-center justify-center gap-x-1.5 text-smokeyGrey">
                <Edit onClick={() => handleEdit(index)} className="cursor-pointer" />
                <Delete onClick={() => handleDelete(index)} className="cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddFeaturesAndAmenities;
