import ActivityCard from "./ActivityCard";

const PropertyActivities = () => {
  return (
    <div className="w-[90%] mx-auto mb-[9rem]">
      <div>
        <h1 className="font-bold text-[36px]">
          Property Management Activities
        </h1>

        <div className="flex justify-between flex-wrap gap-6 mt-6">
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
