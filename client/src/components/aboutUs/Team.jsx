import MemberCard from "./MemberCard";

const Team = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <div className="text-center space-y-2">
          <h1 className="font-semibold text-[40px]">Our Amazing Team</h1>
          <p className="text-[16px] text-smokeyGrey w-[50%] mx-auto">
            Welcome to the team! We are a group of individuals working together
            to achieve our goals Get to know the faces behind our success
          </p>
        </div>

        <div className="mt-8 grid grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <MemberCard key={item} number={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
