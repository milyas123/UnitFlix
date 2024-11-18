const StepCard = ({ number, title, description }) => {
  return (
    <div className="shadow-right flex flex-col rounded-lg text-start py-3 px-1.5 gap-y-2 w-auto md:w-[215px] md:gap-y-1.5 md:p-2 lg:w-[265px] lg:gap-y-2 lg:p-2.5 xl:w-[350px] xl:gap-y-2.5 xl:p-3 2xl:w-[425px] 2xl:p-4">
      <span className="text-[20px] md:text-[10px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px]">
        {number}.
      </span>
      <h2 className="text-[20px] font-semibold md:text-[16px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
          {title}
      </h2>
      <p className="font-regular text-[14px] md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]">
          {description}
      </p>
    </div>
  );
};

export default StepCard;
