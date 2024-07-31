import Button from "../common/Button";
import Edit from "@/website/components/svgs/Edit";
import Delete from "@/website/components/svgs/Delete";

const ProjectPaymentPlan = () => {
  return (
    <div className="flex items-start rounded-xl border border-lightGrey bg-white px-8 py-4">
      <div className="w-[23%] space-y-2">
        <h2 className="whitespace-nowrap text-[20px] font-semibold">
          Payment Plan
        </h2>
        <Button
          variant="outline"
          className="rounded-md hover:bg-mirage hover:text-white"
        >
          Add Item
        </Button>
      </div>

      <div className="ms-auto flex w-[72%] flex-col gap-y-8 p-1">
        <div className="w-full space-y-2.5">
          <label className="text-[16px] font-semibold">Floor Plan</label>

          <div className="flex items-center justify-between">
            <div className="flex h-[180px] w-[240px] items-center justify-center rounded-md border p-2">
              <div className="flex flex-col items-center space-y-6 text-center">
                <div>
                  <h2 className="flex flex-col font-semibold">
                    <span className="text-[32px]">20%</span>
                    <span className="text-[20px]">Down Payment</span>
                  </h2>
                  <p className="text-[14px]">On Booking Date</p>
                </div>
                <div className="flex items-center justify-center gap-x-1.5 text-smokeyGrey">
                  <Edit size={22} />
                  <Delete size={22} />
                </div>
              </div>
            </div>

            <div className="flex h-[180px] w-[240px] items-center justify-center rounded-md border p-2">
              <div className="flex flex-col items-center space-y-6 text-center">
                <div>
                  <h2 className="flex flex-col font-semibold">
                    <span className="text-[32px]">50%</span>
                    <span className="text-[20px]">During Construction</span>
                  </h2>
                  <p className="text-[14px]">1st - 28th Installment</p>
                </div>
                <div className="flex items-center justify-center gap-x-1.5 text-smokeyGrey">
                  <Edit size={22} />
                  <Delete size={22} />
                </div>
              </div>
            </div>

            <div className="flex h-[180px] w-[240px] items-center justify-center rounded-md border p-2">
              <div className="flex flex-col items-center space-y-6 text-center">
                <div>
                  <h2 className="flex flex-col font-semibold">
                    <span className="text-[32px]">30%</span>
                    <span className="text-[20px]">On Handover</span>
                  </h2>
                  <p className="text-[14px]">100% Complete</p>
                </div>
                <div className="flex items-center justify-center gap-x-1.5 text-smokeyGrey">
                  <Edit size={22} />
                  <Delete size={22} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPaymentPlan;
