import ActivityCard from "./ActivityCard";

const PropertyActivities = () => {
  return (
    <div className="mb-[2.5rem] md:mb-[4rem] lg:mb-[6rem] xl:mb-[7rem] 2xl:mb-[9rem]">
      <div className="p-2 sm:p-0">
        <h1 className="text-[24px] font-bold md:text-[17px] lg:text-[20px] xl:text-[28px] 2xl:text-[32px]">
          Property Management Activities
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 place-content-between mt-9 gap-y-7 md:mt-3 md:gap-y-3 lg:mt-4 lg:gap-y-4 xl:mt-5 xl:gap-y-5 2xl:mt-6 2xl:gap-y-6">
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
        </div>
      </div>
    </div>
  );
};

export default PropertyActivities;
