import StepCard from "./StepCard";
import website from "@/data/website.json";
import Multiline from "@/website/components/common/Multiline.jsx";

const DreamHomeSteps = () => {
  return (
    <div className="my-10 md:mb-0 md:-mt-5 xl:-mt-8">
      <h1 className="text-center font-semibold text-[32px] md:text-[20px] lg:text-[24px] xl:text-[30px] 2xl:text-[36px]">
        <Multiline text={website.aboutPage.section3.title} />
      </h1>
      <div className="flex flex-wrap justify-between mt-7 gap-y-4 md:mt-4 md:gap-y-6 lg:mt-6 lg:gap-y-8 xl:mt-7 xl:gap-y-10 2xl:mt-8 2xl:gap-y-12">
        {website.aboutPage.section3.steps.map((step, index) => (
          <StepCard key={index} number={index + 1} title={step.title} description={step.description} />
        ))}
      </div>
    </div>
  );
};

export default DreamHomeSteps;
