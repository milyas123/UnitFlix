const MemberCard = () => {
  return (
    <div className="w-[350px] rounded-lg border-2">
      <img
        src="/assets/imgs/team.jpg"
        className="object-cover h-[355px] rounded-lg"
        alt=""
      />
      <div className="p-3 py-5 space-y-2 text-center">
        <h1 className="font-medium text-[24px]">John Doe</h1>
        <p className="text-[14px] text-smokeyGrey">External Contractor</p>
        <p className="text-[16px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it </p>
      </div>
    </div>
  );
};

export default MemberCard;
