const MemberCard = () => {
  return (
    <div className="rounded-lg border 2xl:w-[310px]">
      <img
        src="/assets/imgs/team.jpg"
        className="h-[355px] rounded-lg object-cover md:h-[175px] lg:h-[220px] xl:h-[270px] 2xl:h-[355px]"
        alt=""
      />
      <div className="space-y-2.5 px-3 py-5 text-center md:space-y-1 md:p-[6px] lg:space-y-1.5 lg:p-2.5 xl:space-y-2 2xl:p-3 2xl:py-4">
        <div>
          <h1 className="text-[24px] font-medium md:text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]">
            John Doe
          </h1>
          <p className="text-[14px] text-smokeyGrey md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
            External Contractor
          </p>
        </div>
        <p className="text-[14px] md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it{" "}
        </p>
      </div>
    </div>
  );
};

export default MemberCard;
