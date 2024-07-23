const ActivityCard = () => {
  return (
    <div className="relative h-[175px] md:h-[110px] md:w-[215px] lg:h-[140px] lg:w-[95%] lg:max-w-[310px] xl:h-[180px] xl:w-[342px] xl:max-w-[400px] 2xl:h-[220px] 2xl:w-[95%] 2xl:max-w-[500px] group overflow-hidden">
      <img
        src="/assets/imgs/p3.jpg"
        className="absolute size-full object-cover transition-transform duration-300 group-hover:scale-110"
        alt="activity-card-img"
      />
      <div className="absolute size-full bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-opacity-70"></div>
      <div className="relative z-50 ms-auto flex size-full w-[96%] flex-col justify-center text-white md:mx-auto md:w-[84%] xl:w-[86%]">
        <div className="space-y-2 md:space-y-2.5 lg:space-y-3 xl:space-y-3.5 2xl:space-y-4">
          <h1 className="text-[20px] font-bold md:text-[10px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px]">
            Tenant Relations <br className="hidden md:flex" /> Management
          </h1>
          <p className="text-[16px] md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]">
            Effective management and communication with tenants to ensure a
            harmonious living environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
