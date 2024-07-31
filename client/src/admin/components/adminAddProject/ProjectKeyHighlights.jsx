import { PiListStar } from "react-icons/pi";
import Button from "../common/Button";
import Edit from "@/website/components/svgs/Edit";
import Delete from "@/website/components/svgs/Delete";

const ProjectKeyHighlights = () => {
  return (
    <div className="flex items-start rounded-xl border border-lightGrey bg-white px-8 py-4">
      <div className="w-[23%] space-y-2">
        <h2 className="whitespace-nowrap text-[20px] font-semibold">
          Key Highlights
        </h2>
        <Button
          variant="outline"
          className="rounded-md hover:bg-mirage hover:text-white"
        >
          Add Highlight
        </Button>
      </div>
      <div className="ms-auto flex w-[72%] flex-col gap-y-8 p-1">
        <div className="flex h-[270px] w-[300px] items-center justify-center rounded-md border bg-whiteLilac p-4 text-center">
          <div className="space-y-2 text-[16px]">
            <h1 className="flex items-center justify-center gap-1 font-semibold">
              <PiListStar size={23} /> Features
            </h1>
            <p className="text-smokeyGrey">
              Features meticulously crafted studios, 1, 2 & 3 bedroom
              apartments, as well as exclusive 3-bedroom pool villas and
              4-bedroom royal penthouses with private pools.
            </p>

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

export default ProjectKeyHighlights;
