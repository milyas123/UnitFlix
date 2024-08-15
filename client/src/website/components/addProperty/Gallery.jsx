import { ImageUp } from "lucide-react";
import Delete from "../svgs/Delete";

const Gallery = ({ formData, handleAddGalleryImage, handleDeleteGalleryImage }) => {
  const handleImageUpload = (e) => {
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      handleAddGalleryImage(file);
    }
  };

  return (
    <div className="user--addProperty-sectionPadding flex flex-col rounded-xl border border-lightGrey bg-white md:flex-row md:items-start">
      <h2 className="user--addProperty-headingTextSize whitespace-nowrap md:w-[23%]">
        Gallery
      </h2>

      <div className="mt-4 flex flex-col gap-y-4 md:ms-auto md:mt-0 md:w-[72%] md:flex-row md:gap-x-3 md:gap-y-0 lg:gap-x-5 xl:gap-x-7 2xl:gap-x-8">
        <div className="space-y-2">
          <p className="user--addProperty-labelTextSize">
            Upload Image of your Property
          </p>
          <label htmlFor="gallery-upload" className="flex h-[170px] items-center justify-center rounded-2xl border-2 border-dashed bg-whiteLilac cursor-pointer md:h-[100px] md:w-[150px] lg:h-[130px] lg:w-[190px] xl:h-[150px] xl:w-[240px] 2xl:h-[185px] 2xl:w-[288px]">
            <div className="flex flex-col items-center justify-center gap-y-2 text-smokeyGrey md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px]">
              <ImageUp className="md:size-5 lg:size-6 xl:size-7 2xl:size-8" />
              <span>Upload Image</span>
            </div>
            <input
              type="file"
              id="gallery-upload"
              multiple
              accept=".jpg,.jpeg,.png"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        </div>

        {formData?.galleryImages?.map((image, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="user--addProperty-labelTextSize">Image {index + 1}</p>
              <Delete className="cursor-pointer" onClick={() => handleDeleteGalleryImage(index)} />
            </div>
            <div className="overflow-hidden">
              <img
                src={typeof image === "string" && image.startsWith("http") ? image : URL.createObjectURL(image)}
                className="h-[170px] w-full rounded-2xl object-cover md:h-[100px] md:w-[150px] lg:h-[130px] lg:w-[190px] xl:h-[150px] xl:w-[240px] 2xl:h-[185px] 2xl:w-[288px]"
                alt={`Property ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
