import MemberCard from "./MemberCard";

const Team = () => {
  return (
    <div className="flex items-center justify-center md:h-screen">
      <div>
        <div className="space-y-2.5 text-center md:space-y-1 2xl:space-y-2">
          <h1 className="text-[32px] font-semibold md:text-[20px] lg:text-[24px] xl:text-[30px] 2xl:text-[36px]">
            Our Amazing Team
          </h1>
          <p className="w-full text-[14px] text-smokeyGrey md:mx-auto md:w-[50%] md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]">
            Welcome to the team! We are a group of individuals working together
            to achieve our goals Get to know the faces behind our success
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 place-content-between gap-6 md:gap-x-10 lg:gap-x-12 px-3 md:mt-3 md:grid-cols-4 lg:mt-5 xl:mt-7 2xl:mt-8">
          {[1, 2, 3, 4].map((item) => (
            <MemberCard key={item} number={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
