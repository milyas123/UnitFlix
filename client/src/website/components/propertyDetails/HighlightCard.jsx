import { PiListStar } from "react-icons/pi";

const HighlightCard = ({ title, description }) => {
  return (
    <div className="flex h-[190px] w-[300px] items-center justify-center rounded-md border bg-whiteLilac p-2.5 text-center transition-all duration-300 ease-in-out hover:scale-105 md:h-[135px] md:w-[145px] md:p-1 lg:h-[175px] lg:w-[160px] lg:p-1.5 xl:h-[210px] xl:w-[220px] xl:p-3 2xl:h-[270px] 2xl:w-[265px] 2xl:p-4">
      <div className="space-y-2 text-[14px] md:text-[8px] lg:text-[9px] xl:text-[12px] 2xl:text-[15px]">
        <h1 className="flex items-center justify-center gap-1 font-semibold">
          <PiListStar size={23} /> {title}
        </h1>
        <p className="text-smokeyGrey">{description}</p>
      </div>
    </div>
  );
};

export default HighlightCard;
