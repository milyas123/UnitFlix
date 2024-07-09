import { Star } from "lucide-react";

const FeedbackCard = () => {
  return (
    <div className="rounded-xl shadow-md flex flex-col md:gap-1.5 md:w-[170px] md:p-3 lg:gap-3.5 lg:w-[270px] lg:p-4 xl:gap-5 xl:p-6 xl:w-[350px] 2xl:gap-6 2xl:w-[400px] 2xl:p-8">
    <div className="font-semibold flex flex-col md:gap-1.5 lg:gap-2.5 xl:gap-3.5 2xl:gap-y-5">
      <h3 className="md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]">Awesome Design</h3>
      <div className="md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px] flex flex-col gap-2.5">
        <p className="2xl:leading-7">
          “Amazing design, easy to customize and a design quality
          superlative account on its cloud platform for the optimized
          performance. And we didn’t on our original designs.”
        </p>
        <div className="flex items-center gap-x-1.5">
          <Star
            size={18}
            className="text-sunriseOrange"
            fill="#EB6753"
          />
          <Star
            size={18}
            className="text-sunriseOrange"
            fill="#EB6753"
          />
          <Star
            size={18}
            className="text-sunriseOrange"
            fill="#EB6753"
          />
          <Star
            size={18}
            className="text-sunriseOrange"
            fill="#EB6753"
          />
          <Star size={18} className="text-[#C1CDE4]" fill="#C1CDE4" />
        </div>
      </div>
    </div>

    <div className="border-t flex items-center md:pt-2 lg:pt-3 xl:pt-5 2xl:pt-6 md:gap-x-1 lg:gap-x-2 xl:gap-x-3 2xl:gap-x-4">
      <div className="rounded-full">
        <img
          src="/assets/imgs/user.png"
          className="md:size-[25px] lg:size-[35px] xl:size-[50px] 2xl:size-[61px] rounded-full"
          alt=""
        />
      </div>
      <div>
        <h5 className="font-semibold md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px]">Ali Tufan</h5>
        <p className="text-smokeyGrey md:text-[6px] lg:text-[8px] xl:text-[10px] 2xl:text-[13px]">Product Manager</p>
      </div>
    </div>
  </div>
  )
}

export default FeedbackCard