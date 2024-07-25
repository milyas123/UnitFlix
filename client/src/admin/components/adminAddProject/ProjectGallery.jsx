import { ImageUp } from "lucide-react";
import Delete from "@/website/components/svgs/Delete";

const ProjectGallery = () => {
  return (
    <div className="flex items-start rounded-xl border border-lightGrey bg-white px-8 py-4">
      <h2 className="w-[23%] whitespace-nowrap text-[20px] font-semibold">
        Gallery
      </h2>

      <div className="ms-auto flex w-[72%] gap-x-8 p-1">
        <div className="space-y-2">
          <p className="text-[16px] font-semibold">
            Upload Image of your Property
          </p>
          <div className="flex h-[185px] w-[288px] items-center justify-center rounded-2xl border-2 border-dashed bg-whiteLilac">
            <div className="flex flex-col items-center justify-center gap-y-2 text-smokeyGrey">
              <ImageUp size={35} />
              Upload Image
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-[16px] font-semibold">Name.png</p>
            <Delete size={22} />
          </div>
          <div className="overflow-hidden">
            <img
              src="/assets/imgs/building-img.jpg"
              className="h-[185px] w-[288px] rounded-2xl object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
