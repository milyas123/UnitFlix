import MemberCard from "./MemberCard";

const Team = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div>
        <div className="text-center md:space-y-1 2xl:space-y-2">
          <h1 className="font-semibold md:text-[20px] lg:text-[24px] xl:text-[30px] 2xl:text-[36px]">
            Our Amazing Team
          </h1>
          <p className="mx-auto w-[50%] text-smokeyGrey md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]">
            Welcome to the team! We are a group of individuals working together
            to achieve our goals Get to know the faces behind our success
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6 md:mt-3 lg:mt-5 xl:mt-7 2xl:mt-8">
          {[1, 2, 3, 4].map((item) => (
            <MemberCard key={item} number={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
