const StepCard = ({ number }) => {
  return (
    <div className="shadow-right flex flex-col rounded-lg text-start py-3 px-1.5 gap-y-2 w-auto md:w-[215px] md:gap-y-1.5 md:p-2 lg:w-[265px] lg:gap-y-2 lg:p-2.5 xl:w-[350px] xl:gap-y-2.5 xl:p-3 2xl:w-[425px] 2xl:p-4">
      <span className="text-[20px] md:text-[10px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px]">
        {number}.
      </span>
      <h2 className="text-[24px] font-semibold md:text-[16px] lg:text-[20px] xl:text-[26px] 2xl:text-[32px]">
        Dream & Discover
      </h2>
      <p className="font-regular text-[14px] md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it
      </p>
    </div>
  );
};

export default StepCard;
