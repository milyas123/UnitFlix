const AmenityCard = ({ icon, text }) => {
  return (
    <div className="flex h-[130px] w-[150px] items-center justify-center rounded border bg-whiteLilac duration-300 ease-in-out hover:scale-105 md:h-[75px] md:w-[110px] md:p-3 lg:h-[105px] lg:w-[130px] lg:p-4 xl:h-[135px] xl:w-[165px] xl:p-4 2xl:h-[130px] 2xl:w-[215px] 2xl:p-6">
      <div className="flex flex-col items-center space-y-3 text-center">
        <div className={'text-[24px] md:text-[28px] lg:text-[32px] size-[24px] md:size-[28px] lg:size-[32px]'}>{icon}</div>
        <p className="text-[14px] md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default AmenityCard;
