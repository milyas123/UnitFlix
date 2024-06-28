const HelpInfoCard = ({ content }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 h-[280px] w-[400px] text-[16px] flex flex-col gap-14">
      <div className="flex flex-col gap-5">
        <div className="flex items-start justify-between">
          <h2 className="font-bold">{content.title}</h2>
          <img
            src={content.imgSrc}
            className="size-[48px]"
            alt=""
          />
        </div>
        <p className="font-regular">
          {content.description}
        </p>
      </div>
      <p className="font-bold underline">{content.linkText}</p>
    </div>
  );
};

export default HelpInfoCard;
