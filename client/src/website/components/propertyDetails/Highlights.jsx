import HighlightCard from "./HighlightCard";

const Highlights = ({ highlights }) => {
  return (
    <div className="mt-4 md:mt-7 lg:mt-8 xl:mt-10 2xl:mt-12">
      <h1 className="mb-4 text-[24px] font-medium md:mb-2 md:text-[12px] lg:mb-3 lg:text-[15px] xl:text-[18px] 2xl:mb-4 2xl:text-[24px]">
        Key Highlights
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:justify-start">
        {highlights?.map((highlight, index) => (
          <>
              <HighlightCard
                  key={index}
                  title={highlight.title}
                  description={highlight.description}
              />
          </>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
