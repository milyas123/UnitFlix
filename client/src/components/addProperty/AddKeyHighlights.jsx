import { PiListStar } from "react-icons/pi";
import { Button } from "../ui/button";
import { TbEditCircle } from "react-icons/tb";
import { MdOutlineDeleteForever } from "react-icons/md";

const AddKeyHighlights = () => {
  return (
    <div className="rounded-xl bg-white px-8 py-4 flex items-start gap-14">
      <div className="space-y-2">
        <h2 className="font-semibold text-[20px] whitespace-nowrap">
          Key Highlights
        </h2>
        <Button
          variant="outline"
          className="rounded-md hover:bg-mirage hover:text-white"
        >
          Add Highlight
        </Button>
      </div>
      <div className="p-1 w-full flex flex-col gap-y-8">
        <div className="w-[300px] h-[270px] bg-whiteLilac rounded-md border text-center p-4 flex items-center justify-center">
          <div className="text-[16px] space-y-2">
            <h1 className="font-semibold flex items-center justify-center gap-1">
              <PiListStar size={23} /> Features
            </h1>
            <p className="text-smokeyGrey">
              Features meticulously crafted studios, 1, 2 & 3 bedroom
              apartments, as well as exclusive 3-bedroom pool villas and
              4-bedroom royal penthouses with private pools.
            </p>

            <div className="flex items-center justify-center gap-x-1 text-smokeyGrey">
              <TbEditCircle size={25} className="cursor-pointer hover:text-blue-500 transition-all duration-200 ease-in-out" />
              <MdOutlineDeleteForever size={25} className="cursor-pointer hover:text-red-600 transition-all duration-200 ease-in-out" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddKeyHighlights;
