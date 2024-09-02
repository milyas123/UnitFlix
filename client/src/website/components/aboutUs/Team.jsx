import MemberCard from "./MemberCard";
import website from "@/data/website.json";
import Multiline from "@/website/components/common/Multiline.jsx";

const Team = () => {
  return (
    <div className="flex items-center justify-center md:h-[32rem] lg:h-[40rem] xl:h-[50rem] 2xl:h-[62rem]">
      <div>
        <div className="space-y-2.5 text-center md:space-y-1 2xl:space-y-2">
          <h1 className="text-[32px] font-semibold md:text-[20px] lg:text-[24px] xl:text-[30px] 2xl:text-[36px]">
            {website.aboutPage.section4.heading}
          </h1>
          <p className="w-full text-[14px] text-smokeyGrey md:mx-auto md:w-[50%] md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]">
            <Multiline text={website.aboutPage.section4.description} />
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 place-content-between gap-6 md:gap-x-10 lg:gap-x-12 px-3 md:mt-3 md:grid-cols-4 lg:mt-5 xl:mt-7 2xl:mt-8">
          {website.aboutPage.section4.members.map((member, index) => (
            <MemberCard key={index} number={index} image={member.image} name={member.name} description={member.description} position={member.position} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
