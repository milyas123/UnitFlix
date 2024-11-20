import website from "@/data/website.json";
import Multiline from "@/website/components/common/Multiline.jsx";

const Team = () => {
  return (
    <div className="flex items-center justify-center md:h-[18rem] lg:h-[24rem] xl:h-[38rem] 2xl:h-[40rem]">
      <div>
        <div className="space-y-2.5 text-center md:space-y-1 2xl:space-y-2">
          <h1 className="text-[32px] font-semibold md:text-[20px] lg:text-[24px] xl:text-[30px] 2xl:text-[36px]">
            {website.aboutPage.section4.heading}
          </h1>
          <p className="w-full text-[14px] text-smokeyGrey md:mx-auto md:w-[90%] md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]">
            <Multiline text={website.aboutPage.section4.description} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
