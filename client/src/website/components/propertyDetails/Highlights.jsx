import HighlightCard from "./HighlightCard";

const Highlights = ({ highlights }) => {
  return (
    <div className="mt-4 md:mt-7 lg:mt-8 xl:mt-10 2xl:mt-12">
      <h1 className="mb-4 text-[24px] font-medium md:mb-2 md:text-[12px] lg:mb-3 lg:text-[15px] xl:text-[18px] 2xl:mb-4 2xl:text-[24px]">
        Key Highlights
      </h1>
      <div className="flex flex-wrap justify-center gap-4 md:justify-start md:gap-2 lg:gap-2.5 xl:gap-3 2xl:gap-4">
        {highlights?.map((highlight, index) => (
          <HighlightCard
            key={index}
            title={highlight.title}
            description={highlight.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Highlights;
