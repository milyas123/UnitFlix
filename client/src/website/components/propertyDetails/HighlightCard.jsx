const HighlightCard = ({ title, description }) => {
  return (
    <div className="flex w-full items-center justify-start rounded-md border p-2.5 text-center transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-whiteLilac">
      <div className="text-[14px] md:text-[8px] lg:text-[9px] xl:text-[12px] 2xl:text-[15px] text-start">
        <h1 className="flex items-center justify-start font-semibold">
          {title}
        </h1>
        <p className="text-smokeyGrey">{description}</p>
      </div>
    </div>
  );
};

export default HighlightCard;
