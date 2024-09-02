import LazyLoad from "react-lazyload";
import SpinnerContainer from "@/website/components/common/SpinnerContainer.jsx";

const MemberCard = ({image, name, position, description}) => {
  return (
    <div className="rounded-lg border md:w-[155px] lg:w-[185px] xl:w-[240px] 2xl:w-[310px]">
        <LazyLoad className={"h-[355px] md:h-[160px] lg:h-[200px] xl:h-[240px] 2xl:h-[330px]"} placeholder={<SpinnerContainer />}>
            <img
                src={image}
                className="h-[355px] rounded-lg object-cover md:h-[160px] lg:h-[200px] xl:h-[240px] 2xl:h-[330px]"
                alt=""
            />
        </LazyLoad>
        <div
            className="space-y-2.5 px-3 py-5 text-center md:space-y-1 md:p-[6px] lg:space-y-1.5 lg:p-2.5 xl:space-y-2 2xl:p-3 2xl:py-4">
            <div>
            <h1 className="text-[24px] font-medium md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[22px]">
            {name}
          </h1>
          <p className="text-[14px] text-smokeyGrey md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
            {position}
          </p>
        </div>
        <p className="text-[14px] md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default MemberCard;
