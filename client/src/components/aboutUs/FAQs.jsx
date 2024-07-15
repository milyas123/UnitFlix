import FAQCard from "./FAQCard";

const FAQs = () => {
  return (
    <div className="mb-64 mt-5 flex items-center justify-center">
      <div>
        <div className="space-y-2 text-center">
          <h1 className="font-semibold md:text-[20px] lg:text-[24px] xl:text-[30px] 2xl:text-[36px]">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto text-smokeyGrey md:w-[57%] md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:w-[58%] 2xl:text-[16px]">
            Welcome to our FAQs page! We have compiled a list of commonly asked
            questions to provide you with quick and informative answeres
          </p>
        </div>

        <div className="flex flex-wrap justify-between md:mt-4 md:gap-y-1 lg:mt-7 lg:gap-y-2 xl:mt-10 xl:gap-y-3 2xl:mt-12 2xl:gap-y-4">
          {[1, 2, 3, 4].map((item) => (
            <FAQCard key={item} number={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
