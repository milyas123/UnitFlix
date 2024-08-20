import { useState } from "react";
import { Button } from "../ui/button";

const InfoList = ({ heading, count, items, handleItemClick }) => {
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setShowAll(!showAll);
  };

  const displayedItems = showAll ? items : items.slice(0, 3);

  return (
    <div className="rounded-lg border border-lightGrey p-1">
      <p className="whitespace-nowrap rounded-lg border border-lightGrey bg-whiteLilac p-2 font-semibold md:p-2 md:text-[12px] lg:p-3 lg:text-[14px] xl:p-3.5 xl:text-[16px] 2xl:px-6 2xl:py-4 2xl:text-[20px]">
        {heading}
        <span className="text-[18px] font-light text-slate md:text-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[16px]">{` (${count})`}</span>
      </p>
      <div className="font-regular my-2 space-y-1.5 px-3 md:px-2 lg:px-3.5 xl:px-4 2xl:px-6">
        {displayedItems.map((item, index) => (
          <div
            key={index}
            className="text-[16px] text-oceanBlue transition-all duration-300 ease-in-out md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]"
            style={{
              opacity: showAll ? 1 : index < 3 ? 1 : 0,
              transform: showAll
                ? "translateY(0)"
                : index < 3
                  ? "translateY(0)"
                  : "translateY(-10px)",
            }}
          >
            <span className="cursor-pointer transition-all duration-300 ease-in-out hover:underline" onClick={() => handleItemClick(item.id)}>
              {item.name}
            </span>
          </div>
        ))}
      </div>
      <Button
        onClick={handleViewAll}
        className="w-full rounded-lg uppercase hover:bg-white hover:text-mirage md:text-[6px] lg:text-[8px] xl:text-[10px] 2xl:text-[12px]"
      >
        {showAll ? "Show Less" : `View All ${heading}`}
      </Button>
    </div>
  );
};

export default InfoList;
