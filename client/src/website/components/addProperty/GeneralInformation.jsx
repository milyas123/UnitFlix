import Status from "../svgs/Status";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const statuses = ["Pre Launch", "Secondary", "Ready to Move In"];

const GeneralInformation = ({ formData, handleChange, handleSelectChange }) => {
  return (
    <div className="user--addProperty-sectionPadding flex flex-col rounded-xl border border-lightGrey bg-white md:flex-row md:items-start">
      <h2 className="user--addProperty-headingTextSize whitespace-nowrap md:w-[23%]">
        General Information
      </h2>
      <div className="mt-4 flex flex-col gap-y-4 md:ms-auto md:mt-0 md:w-[72%] md:gap-y-2 lg:gap-y-4 xl:gap-y-6 2xl:gap-y-8">
        <div className="w-full md:space-y-1 lg:space-y-1.5 xl:space-y-2 2xl:space-y-2.5">
          <label className="user--addProperty-labelTextSize">Title</label>
          <Input
            type="text"
            id="title"
            className="ps-3"
            placeholder="Dubai Best Home under 1.5 kanal"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="w-full md:space-y-1 lg:space-y-1.5 xl:space-y-2 2xl:space-y-2.5">
          <label className="user--addProperty-labelTextSize">Overview</label>
          <Textarea
            id="overview"
            className="h-[160px] ps-3 md:h-[100px] lg:h-[160px] xl:h-[230px] 2xl:h-[300px]"
            placeholder="Overview"
            value={formData.overview}
            onChange={handleChange}
          />
        </div>

        <div className="w-full md:space-y-1 lg:space-y-1.5 xl:space-y-2 2xl:space-y-2.5">
          <label className="user--addProperty-labelTextSize">Status</label>
          <div className="flex flex-wrap items-center gap-2 md:justify-start md:gap-4">
            {statuses.map((status) => (
              <div
                key={status}
                className={`flex cursor-pointer items-center gap-x-1 rounded-md border-2 border-mirage border-opacity-0 px-1.5 py-1 transition-all duration-300 ease-in-out hover:border-opacity-100 md:gap-x-0.5 md:px-1 md:py-0.5 lg:gap-x-1 lg:px-1.5 lg:py-1 xl:gap-x-1.5 xl:px-2 xl:py-1.5 2xl:px-3 2xl:py-2 ${
                  formData.status === status && "bg-mirage text-white"
                }`}
                onClick={() => handleSelectChange("status", status)}
              >
                <Status
                  className={`${formData.status === status ? "text-white" : "text-black"}`}
                />
                <p className="text-[14px] md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px]">
                  {status}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:space-y-1 lg:space-y-1.5 xl:space-y-2 2xl:space-y-2.5">
          <label className="user--addProperty-labelTextSize">Price</label>
          <Input
            type="number"
            id="price"
            className="ps-3"
            placeholder="32,402"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default GeneralInformation;
