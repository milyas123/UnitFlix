import { Button } from "../ui/button";
import Download from "../svgs/Download";

const Overview = ({ overviewText, floorPlan, category }) => {
  const handleDownloadFloorPlan = () => {
    const link = document.createElement("a");
    link.href = floorPlan;
    link.download = "floorPlan.pdf";
    link.click();
  };

  return (
    <div className="mt-5 md:mt-7 lg:mt-9 xl:mt-12 2xl:mt-14">
      <div className="w-full pb-3 md:mb-2 md:border-b lg:mb-3 2xl:mb-4">
        <h1 className="text-[24px] font-medium md:text-[12px] lg:text-[15px] xl:text-[18px] 2xl:text-[24px]">
          Overview
        </h1>
      </div>
      <p className="text-[14px] md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px] overview" dangerouslySetInnerHTML={{__html: overviewText}}>
      </p>
      {category === 1 && (
        <div className="my-4 flex flex-row items-center justify-between gap-2 md:mb-0 md:mt-2 md:flex-col md:items-start md:justify-start lg:mt-3 2xl:mt-4">
          <h1 className="text-[24px] font-medium md:text-[12px] lg:text-[15px] xl:text-[18px] 2xl:text-[24px]">
            Floor Plan
          </h1>

          <Button
            className="group h-8 items-center gap-x-1 rounded-md border bg-transparent text-mirage hover:text-white md:px-1 md:text-[7px] lg:h-6 lg:text-[9px]"
            onClick={handleDownloadFloorPlan}
          >
            <Download className="text-black group-hover:text-white" />
            Download Floor Plan
          </Button>
        </div>
      )}
    </div>
  );
};

export default Overview;
