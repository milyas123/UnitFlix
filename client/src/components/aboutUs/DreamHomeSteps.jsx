import StepCard from "./StepCard";

const DreamHomeSteps = () => {
  return (
    <div className="md:my-8 lg:my-12 xl:my-14">
      <h1 className="text-center font-semibold md:text-[20px] lg:text-[24px] xl:text-[30px] 2xl:text-[36px]">
        Stress Free Steps to <br />
        Your Dream Home
      </h1>
      <div className="flex flex-wrap justify-between md:mt-4 md:gap-y-3 lg:mt-6 lg:gap-y-5 xl:mt-7 xl:gap-y-7 2xl:mt-8 2xl:gap-y-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <StepCard key={item} number={item} />
        ))}
      </div>
    </div>
  );
};

export default DreamHomeSteps;
