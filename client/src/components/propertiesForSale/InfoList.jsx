import { Button } from "../ui/button";

const InfoList = ({ heading, count, items }) => {
  return (
    <div className="rounded-lg border border-lightGrey p-1">
      <p className="bg-whiteLilac font-semibold whitespace-nowrap rounded-lg border border-lightGrey p-2 md:p-2 lg:p-3 xl:p-3.5 2xl:py-4 2xl:px-6 md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px]">
        {heading}
        <span className="text-slate font-light text-[18px] md:text-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[16px]">{` (${count})`}</span>
      </p>
      <div className="px-3 md:px-2 lg:px-3.5 xl:px-4 2xl:px-6 space-y-1.5 my-2 font-regular">
        {items.map((item, index) => (
          <div key={index} className="text-[16px] md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px] text-oceanBlue">
            <span className="cursor-pointer hover:underline transition-all duration-300 ease-in-out">{item.name}</span>
            <span className="text-[18px] md:text-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[16px] text-slate">{` (${item.count})`}</span>
          </div>
        ))}
      </div>
      <Button className="rounded-lg w-full">View All {heading}</Button>
    </div>
  );
};

export default InfoList;
