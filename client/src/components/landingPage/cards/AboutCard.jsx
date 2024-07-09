const AboutCard = ({ imgSrc, title, description }) => {
  return (
    <div className="flex flex-col justify-end items-center text-center md:w-[100px] md:gap-2 lg:w-[130px] lg:gap-2.5 xl:w-[160px] xl:gap-3 2xl:gap-4 2xl:w-[250px]">
      <img src={imgSrc} className="md:size-5 lg:size-6 xl:size-7 2xl:size-9 object-contain" alt={`${title}-vector`} />
      <h3 className="font-semibold md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]">{title}</h3> 
      <p className="font-regular md:text-[6px] lg:text-[8px] xl:text-[10px] 2xl:text-[14px] 2xl:leading-6">{description}</p>
    </div>
  );
};

export default AboutCard;