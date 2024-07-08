import { Button } from "../ui/button";

const InfoList = ({ heading, count, items }) => {
  return (
    <div className="rounded-lg border border-lightGrey p-1">
      <p className="bg-whiteLilac font-semibold text-[20px] whitespace-nowrap py-4 px-6 rounded-lg border border-lightGrey">
        {heading}
        <span className="text-slate text-[16px] font-light">{` (${count})`}</span>
      </p>
      <div className="px-6 space-y-1.5 my-2 font-regular">
        {items.map((item, index) => (
          <div key={index} className="text-[14px] text-oceanBlue">
            <span className="cursor-pointer hover:underline transition-all duration-300 ease-in-out">{item.name}</span>
            <span className="text-[16px] text-slate">{` (${item.count})`}</span>
          </div>
        ))}
      </div>
      <Button className="rounded-lg w-full">View All {heading}</Button>
    </div>
  );
};

export default InfoList;
