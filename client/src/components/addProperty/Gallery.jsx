import { ImageUp } from "lucide-react";
import { MdOutlineDeleteForever } from "react-icons/md";

const Gallery = () => {
  return (
    <div className="rounded-xl bg-white px-8 py-4 flex items-start gap-14">
      <h2 className="font-semibold text-[20px] whitespace-nowrap">Gallery</h2>

      <div className="p-1 w-full flex gap-x-8">
        <div className="space-y-2">
          <p className="font-semibold text-[16px]">
            Upload Image of your Property
          </p>
          <div className="h-[185px] w-[288px] rounded-2xl border-2 border-dashed bg-whiteLilac flex items-center justify-center">
            <div className="flex flex-col justify-center items-center text-smokeyGrey gap-y-2">
              <ImageUp size={35} />
              Upload Image
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-[16px]">Name.png</p>
            <MdOutlineDeleteForever
              size={25}
              className="cursor-pointer hover:text-red-600 transition-all duration-200 ease-in-out"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src="/assets/imgs/building-img.jpg"
              className="object-cover h-[185px] w-[288px] rounded-2xl"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
