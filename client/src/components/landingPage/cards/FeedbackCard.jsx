import { Star } from "lucide-react";

const FeedbackCard = () => {
  return (
    <div className="w-[400px] rounded-xl shadow-md p-8 flex flex-col gap-6">
    <div className="font-semibold flex flex-col gap-y-5">
      <h3 className="text-[16px]">Awesome Design</h3>
      <div className="text-[14px] flex flex-col gap-2.5">
        <p className="leading-7">
          “Amazing design, easy to customize and a design quality
          superlative account on its cloud platform for the optimized
          performance. And we didn’t on our original designs.”
        </p>
        <div className="flex items-center gap-x-1.5">
          <Star
            size={20}
            className="text-sunriseOrange"
            fill="#EB6753"
          />
          <Star
            size={20}
            className="text-sunriseOrange"
            fill="#EB6753"
          />
          <Star
            size={20}
            className="text-sunriseOrange"
            fill="#EB6753"
          />
          <Star
            size={20}
            className="text-sunriseOrange"
            fill="#EB6753"
          />
          <Star size={20} className="text-[#C1CDE4]" fill="#C1CDE4" />
        </div>
      </div>
    </div>

    <div className="border-t pt-6 flex items-center gap-x-4">
      <div className="rounded-full">
        <img
          src="/assets/imgs/user.png"
          className="size-[61px] rounded-full"
          alt=""
        />
      </div>
      <div>
        <h5 className="font-semibold text-[14px]">Ali Tufan</h5>
        <p className="text-smokeyGrey text-[13px]">Product Manager</p>
      </div>
    </div>
  </div>
  )
}

export default FeedbackCard