import Multiline from "@/website/components/common/Multiline.jsx";
import LazyLoad from "react-lazyload";
import SpinnerContainer from "@/website/components/common/SpinnerContainer.jsx";

const ActivityCard = ({image, title, description}) => {
  return (
    <div className="relative h-full py-5 md:py-0 md:h-[120px] md:w-[180px] lg:h-[140px] lg:w-[95%] lg:max-w-[310px] xl:h-[180px] xl:w-[320px] xl:max-w-[400px] 2xl:h-[220px] 2xl:w-[95%] 2xl:max-w-[500px] group overflow-hidden">
        <LazyLoad className="absolute top-0 left-0 size-full" placeholder={<SpinnerContainer />}>
            <img
                src={image}
                className="absolute size-full object-cover transition-transform duration-300 group-hover:scale-110"
                alt="activity-card-img"
            />
        </LazyLoad>
        <div
            className="absolute top-0 left-0 size-full bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-opacity-70"></div>
            <div
                className="relative z-50 ms-auto flex size-full w-[96%] flex-col justify-center text-white md:mx-auto md:w-[84%] xl:w-[86%]">
            <div className="space-y-2 md:space-y-2.5 lg:space-y-3 xl:space-y-3.5 2xl:space-y-4">
              <h1 className="text-[20px] font-bold md:text-[10px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px]">
                  <Multiline text={title} />
              </h1>
              <p className="text-[16px] md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]">
                  {description}
              </p>
            </div>
        </div>
    </div>
  );
};

export default ActivityCard;
