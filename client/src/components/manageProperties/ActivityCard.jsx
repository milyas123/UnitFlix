const ActivityCard = () => {
  return (
    <div className="relative w-[465px] h-[235px] ">
      <img
        src="/assets/imgs/p3.jpg"
        className="object-cover absolute size-full"
        alt="activity-card-img"
      />
      <div className="absolute size-full bg-black bg-opacity-50"></div>
      <div className="px-7 py-9 size-full text-white relative z-50 flex flex-col justify-center">
        <div className="space-y-4">
          <h1 className="font-bold text-[24px]">
            Tenant Relations <br /> Management
          </h1>
          <p className="text-[16px]">
            Effective management and communication <br /> with tenants to ensure a
            harmonious living <br /> environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
