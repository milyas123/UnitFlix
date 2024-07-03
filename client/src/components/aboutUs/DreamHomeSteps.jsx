import StepCard from "./StepCard";

const DreamHomeSteps = () => {
  return (
    <div className="my-14">
      <h1 className="font-semibold text-[40px] text-center">
        Stress Free Steps to <br />
        Your Dream Home
      </h1>
      <div className="mt-8 flex flex-wrap justify-between gap-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <StepCard key={item} number={item} />
        ))}
      </div>
    </div>
  );
};

export default DreamHomeSteps;
