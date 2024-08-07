import { PiListStar } from "react-icons/pi";
import { Button } from "../ui/button";
import Edit from "../svgs/Edit";
import Delete from "../svgs/Delete";

const AddKeyHighlights = ({ formData, showModal, handleEdit, handleDelete }) => {
  return (
    <div className="user--addProperty-sectionPadding flex flex-col rounded-xl border border-lightGrey bg-white md:flex-row md:items-start">
      <div className="space-y-2 md:w-[23%]">
        <h2 className="user--addProperty-headingTextSize whitespace-nowrap">
          Key Highlights
        </h2>
        <Button
          variant="outline"
          onClick={() => showModal(true)}
          className="rounded-md hover:bg-mirage hover:text-white"
        >
          Add Highlight
        </Button>
      </div>
      <div className="mt-4 flex flex-wrap gap-4 md:ms-auto md:mt-0 md:w-[72%]">
        {formData?.keyHighlights?.map((highlight, index) => (
          <div
            key={index}
            className="flex items-center justify-center rounded-md border bg-whiteLilac px-2 py-4 text-center md:h-[140px] md:w-[160px] md:p-2 lg:h-[170px] lg:w-[190px] lg:p-2.5 xl:h-[200px] xl:w-[220px] xl:p-3 2xl:h-[270px] 2xl:w-[300px] 2xl:p-4"
          >
            <div className="space-y-3 md:space-y-1.5 lg:space-y-2 xl:space-y-3 2xl:space-y-5">
              <h1 className="user--addProperty-labelTextSize flex items-center justify-center gap-1">
                <PiListStar size={23} /> {highlight.title}
              </h1>
              <p className="text-smokeyGrey md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px]">
                {highlight.Description}
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

export default AddKeyHighlights;
