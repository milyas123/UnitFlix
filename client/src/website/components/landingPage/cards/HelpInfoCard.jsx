const HelpInfoCard = ({ content }) => {
  const textSizes =
    "text-[15px] md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]";

  return (
    <div
      className={`bg-white shadow-md flex flex-col rounded-xl p-3.5 pb-6 gap-4 md:gap-2 md:rounded-md md:p-2 md:h-[100px] md:w-[200px] lg:gap-3 lg:rounded-lg lg:p-3 lg:h-[120px] lg:w-[240px] xl:gap-7 xl:p-4 xl:h-[150px] xl:w-[320px] 2xl:gap-14 2xl:rounded-xl 2xl:p-5 2xl:h-[200px] 2xl:w-[400px] ${textSizes}`}
    >
      <div className="flex flex-col md:gap-1 2xl:gap-5">
        <div className="flex items-start justify-between">
          <h2 className="font-bold">{content.title}</h2>
          <img
            src={content.imgSrc}
            className="md:size-[22px] lg:size-[34px] xl:size-[42px] 2xl:size-[48px]"
            alt=""
          />
        </div>
        <p className="font-regular">{content.description}</p>
      </div>
    </div>
  );
};

export default HelpInfoCard;
