import { Star } from "lucide-react";

const FeedbackCard = ({title, review, rating, userName, userImage, userPost}) => {
  return (
    <div className="flex w-full flex-col gap-6 rounded-xl border p-4 md:w-[170px] md:gap-1.5 md:p-3 lg:w-[270px] lg:gap-3.5 lg:p-4 xl:w-[350px] xl:gap-5 xl:p-6 2xl:w-[400px] 2xl:gap-6 2xl:p-8">
      <div className="flex flex-col gap-3 font-semibold md:gap-1.5 lg:gap-2.5 xl:gap-3.5 2xl:gap-y-5">
        <h3 className="md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]">
          {title}
        </h3>
        <div className="flex flex-col gap-2.5 md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
          <p className="2xl:leading-7">
            {review}
          </p>
          <div className="flex items-center gap-x-1.5">
            {
              [...Array(rating).keys()].map(rating => (
                  <Star key={rating} size={18} className="text-[#E59819]" fill="#E59819" />
              ))
            }
            {
              [...Array(5 - rating).keys()].map(rating => (
                  <Star key={5 - rating} size={18} className="text-[#C1CDE4]" fill="#C1CDE4" />
              ))
            }
          </div>
        </div>
      </div>

      <div className="flex items-center gap-x-2 border-t pt-4 md:gap-x-1 md:pt-2 lg:gap-x-2 lg:pt-3 xl:gap-x-3 xl:pt-5 2xl:gap-x-4 2xl:pt-6">
        <div className="rounded-full">
          <img
            src={userImage}
            className="rounded-full size-[50px] md:size-[25px] lg:size-[35px] xl:size-[50px] 2xl:size-[61px]"
            alt=""
          />
        </div>
        <div>
          <h5 className="font-semibold md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">
            {userName}
          </h5>
          <p className="text-smokeyGrey md:text-[6px] lg:text-[8px] xl:text-[10px] 2xl:text-[13px]">
            {userPost}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
