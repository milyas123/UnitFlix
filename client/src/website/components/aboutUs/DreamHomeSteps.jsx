import StepCard from "./StepCard";

const DreamHomeSteps = () => {
  return (
    <div className="my-10 md:mb-0 md:-mt-5 xl:-mt-8">
      <h1 className="text-center font-semibold text-[32px] md:text-[20px] lg:text-[24px] xl:text-[30px] 2xl:text-[36px]">
        Stress Free Steps to <br />
        Your Dream Home
      </h1>
      <div className="flex flex-wrap justify-between mt-7 gap-y-4 md:mt-4 md:gap-y-6 lg:mt-6 lg:gap-y-8 xl:mt-7 xl:gap-y-10 2xl:mt-8 2xl:gap-y-12">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <StepCard key={item} number={item} />
        ))}
      </div>
    </div>
  );
};

export default DreamHomeSteps;
