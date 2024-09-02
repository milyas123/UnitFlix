import ContentCard from "./ContentCard";
import website from "@/data/website.json";
import LazyLoad from "react-lazyload";
import SpinnerContainer from "@/website/components/common/SpinnerContainer.jsx";

const MissionVisionSection = () => {
  return (
    <div className="mt-7 flex flex-col items-center justify-center gap-y-[2rem] md:mt-0 md:h-[36rem] lg:h-[45rem] xl:h-[58rem] 2xl:h-[67rem] md:gap-y-[4.2rem] lg:gap-y-[4.6rem] xl:gap-y-[6.5rem] 2xl:gap-y-32">
      <div className="flex flex-col items-center justify-between gap-y-8 md:flex-row md:gap-x-3.5 md:gap-y-0 lg:gap-x-4 xl:gap-x-5 2xl:gap-x-6">
        <div className="w-full md:w-1/2">
          <ContentCard
            header={website.aboutPage.section1.subTitle}
            title={website.aboutPage.section1.title}
            description={website.aboutPage.section1.description}
          />
        </div>
        <div className="w-full md:w-1/2">
            <LazyLoad className={"h-[420px] w-full md:h-[200px] lg:h-[245px] xl:h-[320px] 2xl:h-[360px]"} placeholder={<SpinnerContainer />}>
                <img
                    src={website.aboutPage.section1.image}
                    className="h-[420px] w-full rounded-lg object-cover md:h-[200px] lg:h-[245px] xl:h-[320px] 2xl:h-[360px]"
                    alt=""
                />
            </LazyLoad>
        </div>
      </div>

        <div
            className="flex flex-col items-center gap-y-8 md:flex-row md:gap-x-3.5 md:gap-y-0 lg:gap-x-4 xl:gap-x-5 2xl:gap-x-6">
            {
                website.aboutPage.section2.items.map((item, index) => {
            return (
                <div className="w-full md:w-1/2" key={index}>
                  <ContentCard
                      header={item.subTitle}
                      title={item.title}
                      description={item.description}
                  />
                </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default MissionVisionSection;
