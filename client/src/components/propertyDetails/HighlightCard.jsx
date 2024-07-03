import { PiListStar } from "react-icons/pi";

const HighlightCard = ({ title, description }) => {
  return (
    <div className="w-[300px] h-[270px] bg-whiteLilac rounded-md border text-center p-4 flex items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="text-[16px] space-y-2">
        <h1 className="font-semibold flex items-center justify-center gap-1">
          <PiListStar size={23} /> {title}
        </h1>
        <p className="text-smokeyGrey">{description}</p>
      </div>
    </div>
  );
};

export default HighlightCard;
