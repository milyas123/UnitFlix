import { useState } from "react";
import { formatCurrency } from "@/lib/utils";
import Tag from "./Tag";
import LocationPin from "../svgs/LocationPin";
import ThreeDots from "../svgs/ThreeDots";
import Button from "./Button";

const Table = ({ type, showSubmitterDetails, setShowSubmitterDetails }) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <table className="flex w-full flex-col gap-y-2.5">
      <thead className="bg-white">
        <tr className="flex items-center text-[14px]">
          <th className="w-[3%] py-3 ps-2 text-start">No</th>
          <th className="w-[19%] text-start">Property</th>
          {type !== "properties" && (
            <th className="w-[20%] text-start">User</th>
          )}
          <th className="w-[17%] text-start">Location</th>

          {type === "properties" ? (
            <>
              <th className="w-[10%] text-start">Date Added</th>
              <th className="w-[7%] text-start">Featured</th>
              <th className="w-[23%] text-start">Tags</th>
            </>
          ) : (
            <>
              <th className="w-[19%] text-start">Status</th>
            </>
          )}

          <th className="w-[18%] text-start">Amount</th>
          <th className="w-[4%] text-start">Action</th>
        </tr>
      </thead>
      <tbody className="flex flex-col gap-y-2.5">
        <tr className="flex items-center divide-x divide-platinum bg-white py-2 text-[14px]">
          <td className="w-[3%] text-center">1</td>
          <td className="w-[19%] px-4 text-start">
            <div className="flex items-center gap-x-4">
              <img
                src="/assets/imgs/admin-login.png"
                className="h-[48px] w-[52px] rounded-2xl object-cover"
                alt=""
              />

              <div>
                <p className="font-regular text-[15px]">Single Row Middle</p>
                <p className="space-x-1 divide-x divide-black text-[11px]">
                  <span>2BHK</span> <span className="ps-1">Vacant</span>
                  <span className="ps-1">Study Room</span>
                </p>
              </div>
            </div>
          </td>
          {type !== "properties" && (
            <td className="w-[20%] px-4 text-start">
              <div className="flex flex-col text-davyGrey">
                <span className="text-[13px]">Ali Mustafa</span>
                <span className="text-[9px]">ali.mustafa@gmail.com</span>
              </div>
            </td>
          )}
          <td className="w-[17%] px-4 text-start">
            <div className="flex items-center gap-x-2 text-davyGrey">
              <LocationPin />
              <p className="text-[13px]">Marina Bay</p>
            </div>
          </td>

          {type === "properties" ? (
            <>
              <td className="w-[10%] px-4 text-start text-[13px] text-davyGrey">
                February 5th, 2024
              </td>
              <td className="w-[7%] px-4 text-start text-[13px] text-davyGrey">
                Yes
              </td>
              <td className="w-[23%] px-4 text-start">
                <div className="flex gap-x-2">
                  <Tag type="property">Property</Tag>
                  <Tag type="rental">Rental</Tag>
                  <Tag type="secondary">Secondary</Tag>
                </div>
              </td>
            </>
          ) : (
            <>
              <td className="w-[19%] px-4">
                <Tag type="pending">Pending</Tag>
              </td>
            </>
          )}

          <td className="w-[18%] px-4 text-start">
            <div className="flex items-center gap-x-2 font-medium">
              <span className="text-[11px] text-davyGrey">Starting From</span>
              <span className="text-[15px]">{formatCurrency(3500000)}</span>
            </div>
          </td>
          <td className="relative w-[4%] px-4 text-start">
            <ThreeDots
              className="relative cursor-pointer"
              onClick={() => setShowOptions(true)}
            />
            {showOptions && (
              <div
                className="absolute right-0 min-w-[10rem] space-y-2 rounded-xl bg-white p-2 text-black"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
                }}
              >
                <Button
                  className="w-[14rem] rounded-lg"
                  variant="outline"
                  onClick={() => setShowSubmitterDetails(!showSubmitterDetails)}
                >
                  View Submitter Details
                </Button>

                <Button className="w-[14rem] rounded-lg" variant="outline">
                  Preview Property
                </Button>
                <Button
                  className="border-mintGreen text-mintGreen hover:bg-mintGreen w-[14rem] rounded-lg"
                  variant="outline"
                >
                  Accept
                </Button>
                <Button
                  className="border-crimsonRed text-crimsonRed hover:bg-crimsonRed w-[14rem] rounded-lg"
                  variant="outline"
                >
                  Reject
                </Button>
              </div>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
