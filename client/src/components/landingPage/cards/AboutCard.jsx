const AboutCard = ({ imgSrc, title, description }) => {
  return (
    <div className="w-[250px] flex flex-col justify-end items-center text-center gap-4">
      <img src={imgSrc} className="size-[" alt={`${title}-vector`} />
      <h3 className="font-semibold text-[15px]">{title}</h3>
      <p className="text-[14px] font-regular leading-6">{description}</p>
    </div>
  );
};

export default AboutCard;