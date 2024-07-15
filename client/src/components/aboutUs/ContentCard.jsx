const ContentCard = ({ header, title, description }) => {
  return (
    <div className="space-y-1.5 rounded-lg border p-3.5 md:space-y-2.5 md:p-2 lg:space-y-3 lg:p-3 xl:space-y-4 xl:p-3.5 2xl:space-y-5 2xl:p-4">
      <h3 className="text-[16px] font-medium text-sunriseOrange md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[18px]">
        {header}
      </h3>
      <div className="space-y-3.5 md:space-y-4 lg:space-y-5 xl:space-y-6">
        <h2 className="text-[30px] font-medium leading-none md:text-[22px] lg:text-[25px] xl:text-[34px] 2xl:text-[40px]">
          {title}
        </h2>
        <p className="text-[14px] md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ContentCard;
