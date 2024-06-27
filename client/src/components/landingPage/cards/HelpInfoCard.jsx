const HelpInfoCard = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 h-[280px] w-[400px] text-[16px] flex flex-col gap-14">
      <div className="flex flex-col gap-5">
        <div className="flex items-start justify-between">
          <h2 className="font-bold">Find out how much you can afford</h2>
          <img
            src="/assets/imgs/spot-badge.png"
            className="size-[48px]"
            alt=""
          />
        </div>
        <p className="font-regular">
          We'll help you estimate your budget range. Save to your buyer profile
          to help in your search.
        </p>
      </div>
      <p className="font-bold underline">Try our affordability calculator</p>
    </div>
  );
};

export default HelpInfoCard;
