import ContentCard from "./ContentCard";

const MissionVisionSection = () => {
  return (
    <div className="mt-7 flex flex-col items-center justify-center gap-y-[2rem] md:h-screen md:gap-y-[4.2rem] lg:gap-y-[4.6rem] xl:gap-y-[6.5rem] 2xl:gap-y-32">
      <div className="flex flex-col items-center justify-between gap-y-8 md:flex-row md:gap-x-3.5 md:gap-y-0 lg:gap-x-4 xl:gap-x-5 2xl:gap-x-6">
        <div className="w-full md:w-1/2">
          <ContentCard
            header="How it Started"
            title="Our Dream is Making Real Estate Earn for You"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum."
          />
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/assets/imgs/about.jpg"
            className="h-[420px] w-full rounded-lg object-cover md:h-[200px] lg:h-[245px] xl:h-[320px] 2xl:h-[360px]"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-y-8 md:flex-row md:gap-x-3.5 md:gap-y-0 lg:gap-x-4 xl:gap-x-5 2xl:gap-x-6">
        <div className="w-full md:w-1/2">
          <ContentCard
            header="Our Vision"
            title="Making Real Estate Stress Free"
            titleSize="text-[24px] md:text-[18px] lg:text-[24px] xl:text-[30px] 2xl:text-[36px]"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it."
          />
        </div>

        <div className="w-full md:w-1/2">
          <ContentCard
            header="Our Mission"
            title="Making Real Estate Stress Free"
            titleSize="text-[24px] md:text-[18px] lg:text-[24px] xl:text-[30px] 2xl:text-[36px]"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it."
          />
        </div>
      </div>
    </div>
  );
};

export default MissionVisionSection;
