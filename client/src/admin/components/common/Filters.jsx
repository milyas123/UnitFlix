import Dropdown from "./Dropdown";
import InputField from "./InputField";
import Search from "../svgs/Search";
import Button from "./Button";

const lookingForOptions = ["House", "Apartment", "Condo"];

const Filters = ({ type, totalRecords }) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="w-[20%] text-[20px] font-semibold">
        Showing Results <span className="text-[16px] font-light">({totalRecords})</span>
      </h2>
      <div className="flex w-[72%] items-center justify-between">
        <div
          className={`relative flex min-w-[150px] items-center ${type === "properties" ? "w-[30%]" : "w-[46%]"}`}
        >
          <InputField
            type="email"
            id="email"
            placeholder="Search Property ..."
            className="border border-mist ps-9 md:ps-5 lg:ps-[22px] xl:ps-8 2xl:ps-10"
          />
          <Search className="absolute left-2 top-[13px] text-grey md:left-1.5 xl:left-[9px] 2xl:left-3" />
        </div>

        <div className={`${type === "requests" && "min-w-[17%]"}`}>
          <Dropdown options={lookingForOptions} placeholder="Type" />
        </div>

        {type === "properties" ? (
          <>
            <Dropdown options={lookingForOptions} placeholder="Purpose" />

            <Dropdown options={lookingForOptions} placeholder="User" />

            <div className="w-[20%]">
              <Dropdown options={lookingForOptions} placeholder="Date" />
            </div>

            <Button variant="filled" className="rounded-lg">
              Clear
            </Button>
          </>
        ) : (
          <>
            <div className="min-w-[17%]">
              <Dropdown options={lookingForOptions} placeholder="Status" />
            </div>

            <div className="min-w-[17%]">
              <Dropdown options={lookingForOptions} placeholder="Sort By" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Filters;
