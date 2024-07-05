import Status from "@/components/svgs/Status";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PiListStar } from "react-icons/pi";
import { TbEditCircle } from "react-icons/tb";
import { MdOutlineDeleteForever } from "react-icons/md";
import { RiParkingBoxLine } from "react-icons/ri";
import { ImageUp } from "lucide-react";

const AddProperty = () => {
  return (
    <div className="bg-whiteLilac">
      <div className="w-[50%] mx-auto py-4 flex flex-col gap-7">
        <div className="rounded-xl bg-white px-8 py-4 text-[22px]">
          Add Property
        </div>

        <div className="rounded-xl bg-white px-8 py-4 flex items-start gap-14">
          <h2 className="font-semibold text-[20px] whitespace-nowrap">
            General Information
          </h2>
          <div className="p-1 w-full flex flex-col gap-y-8">
            <div className="space-y-2.5 w-full">
              <label className="font-semibold text-[16px]">Title</label>
              <Input
                type="text"
                id="title"
                className="ps-3"
                placeholder="Dubai Best Home under 1.5 kanal"
              />
            </div>

            <div className="space-y-2.5 w-full">
              <label className="font-semibold text-[16px]">Overview</label>
              <Textarea
                id="title"
                className="ps-3 h-[300px]"
                placeholder="Dubai Best Home under 1.5 kanal"
              />
            </div>

            <div className="space-y-2.5 w-full">
              <label className="font-semibold text-[16px]">Status</label>
              <div className="flex justify-between items-center">
                <div className="cursor-pointer flex items-center gap-x-1.5 px-3 py-2 rounded-md bg-mirage text-white">
                  <Status className="text-white" size={25} />
                  <p className="text-[14px]">Pre Launch</p>
                </div>

                <div className="cursor-pointer flex items-center gap-x-1.5 px-3 py-2 rounded-md">
                  <Status className="text-black" size={25} />
                  <p className="text-[14px]">Secondary</p>
                </div>

                <div className="cursor-pointer flex items-center gap-x-1.5 px-3 py-2 rounded-md">
                  <Status className="text-black" size={25} />
                  <p className="text-[14px]">Ready to Move In</p>
                </div>
              </div>
            </div>

            <div className="space-y-2.5 w-full">
              <label className="font-semibold text-[16px]">Price</label>
              <Input
                type="number"
                id="title"
                className="ps-3"
                placeholder="32,402"
              />
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white px-8 py-4 flex items-start gap-14">
          <h2 className="font-semibold text-[20px] whitespace-nowrap">
            User Information
          </h2>
          <div className="p-1 w-full flex flex-col gap-y-8">
            <div className="space-y-2.5 w-full">
              <label className="font-semibold text-[16px]">Full Name</label>
              <Input
                type="text"
                id="title"
                className="ps-3"
                placeholder="Dubai Best Home under 1.5 kanal"
              />
            </div>

            <div className="space-y-2.5 w-full">
              <label className="font-semibold text-[16px]">Email</label>
              <Input
                type="email"
                id="email"
                className="ps-3"
                placeholder="example@gmail.com"
              />
            </div>

            <div className="space-y-2.5 w-full">
              <label className="font-semibold text-[16px]">Phone Number</label>
              <Input
                type="email"
                id="email"
                className="ps-3"
                placeholder="000 0000 0000"
              />
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white px-8 py-4 flex items-start gap-14">
          <h2 className="font-semibold text-[20px] whitespace-nowrap">
            Property Information
          </h2>
          <div className="p-1 w-full flex flex-col gap-y-8">
            <div className="space-y-2.5 w-full">
              <label className="font-semibold text-[16px]">
                Select Purpose
              </label>
              <div className="flex items-center gap-x-3">
                <div className="cursor-pointer w-[60px] text-center p-2 text-white bg-mirage border border-mirage rounded-md">
                  Sell
                </div>
                <div className="cursor-pointer w-[60px] text-center p-2 text-smokeyGrey border border-smokeyGrey rounded-md">
                  Rent
                </div>
              </div>
            </div>

            <div className="space-y-2.5 w-full">
              <label className="font-semibold text-[16px]">
                Select Property Type
              </label>
              <div className="bg-whiteLilac rounded-lg p-1.5 flex">
                <div className="cursor-pointer rounded-lg w-full p-2 text-center">
                  Home
                </div>
                <div className="cursor-pointer rounded-lg w-full p-2 text-center">
                  Plot
                </div>
                <div className="cursor-pointer bg-white rounded-lg w-full p-2 text-center">
                  Commercial
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                <div className="cursor-pointer flex items-center gap-x-1.5 px-3 py-2 rounded-md bg-mirage text-white">
                  <Status className="text-white" size={25} />
                  <p className="text-[14px]">House</p>
                </div>

                <div className="cursor-pointer flex items-center gap-x-1.5 px-3 py-2 rounded-md">
                  <Status className="text-black" size={25} />
                  <p className="text-[14px]">Flat</p>
                </div>

                <div className="cursor-pointer flex items-center gap-x-1.5 px-3 py-2 rounded-md">
                  <Status className="text-black" size={25} />
                  <p className="text-[14px]">Upper Portion</p>
                </div>

                <div className="cursor-pointer flex items-center gap-x-1.5 px-3 py-2 rounded-md">
                  <Status className="text-black" size={25} />
                  <p className="text-[14px]">Lower Portion</p>
                </div>

                <div className="cursor-pointer flex items-center gap-x-1.5 px-3 py-2 rounded-md">
                  <Status className="text-black" size={25} />
                  <p className="text-[14px]">Farm House</p>
                </div>

                <div className="cursor-pointer flex items-center gap-x-1.5 px-3 py-2 rounded-md">
                  <Status className="text-black" size={25} />
                  <p className="text-[14px]">Room</p>
                </div>

                <div className="cursor-pointer flex items-center gap-x-1.5 px-3 py-2 rounded-md">
                  <Status className="text-black" size={25} />
                  <p className="text-[14px]">Pent House</p>
                </div>
              </div>
            </div>

            <div className="space-y-2.5 w-full">
              <label className="font-semibold text-[16px]">Area</label>
              <Input
                type="number"
                id="title"
                className="ps-3"
                placeholder="56"
              />
            </div>

            <div className="space-y-2.5 w-full">
              <label className="font-semibold text-[16px]">City</label>
              <Input
                type="text"
                id="title"
                className="ps-3"
                placeholder="Dubai"
              />
            </div>

            <div className="space-y-2.5 w-full">
              <label className="font-semibold text-[16px]">Location</label>
              <Input
                type="text"
                id="title"
                className="ps-3"
                placeholder="Search Location"
              />
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white px-8 py-4 flex items-start gap-14">
          <div className="space-y-2">
            <h2 className="font-semibold text-[20px] whitespace-nowrap">
              Key Highlights
            </h2>
            <Button
              variant="outline"
              className="rounded-md hover:bg-mirage hover:text-white"
            >
              Add Highlight
            </Button>
          </div>
          <div className="p-1 w-full flex flex-col gap-y-8">
            <div className="w-[300px] h-[270px] bg-whiteLilac rounded-md border text-center p-4 flex items-center justify-center">
              <div className="text-[16px] space-y-2">
                <h1 className="font-semibold flex items-center justify-center gap-1">
                  <PiListStar size={23} /> Features
                </h1>
                <p className="text-smokeyGrey">
                  Features meticulously crafted studios, 1, 2 & 3 bedroom
                  apartments, as well as exclusive 3-bedroom pool villas and
                  4-bedroom royal penthouses with private pools.
                </p>

                <div className="flex items-center justify-center gap-x-1 text-smokeyGrey">
                  <TbEditCircle size={25} />
                  <MdOutlineDeleteForever size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white px-8 py-4 flex items-start gap-14">
          <div className="space-y-2">
            <h2 className="font-semibold text-[20px] whitespace-nowrap">
              Features & Amenities
            </h2>
            <Button
              variant="outline"
              className="rounded-md hover:bg-mirage hover:text-white"
            >
              Add Amenities
            </Button>
          </div>
          <div className="p-1 w-full flex flex-col gap-y-8">
            <div className="w-[230px] h-[130px] bg-whiteLilac rounded-md border flex justify-center items-center p-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <RiParkingBoxLine />
                <p className="text-14px">Parking Spaces: 1</p>
                <div className="flex items-center justify-center gap-x-1 text-smokeyGrey">
                  <TbEditCircle size={25} />
                  <MdOutlineDeleteForever size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white px-8 py-4 flex items-start gap-14">
          <h2 className="font-semibold text-[20px] whitespace-nowrap">
            Gallery
          </h2>

          <div className="p-1 w-full flex gap-x-8">
            <div className="space-y-2">
              <p className="font-semibold text-[16px]">
                Upload Image of your Property
              </p>
              <div className="h-[185px] w-[288px] rounded-2xl border-2 border-dashed bg-whiteLilac flex items-center justify-center">
                <div className="flex flex-col justify-center items-center text-smokeyGrey gap-y-2">
                  <ImageUp size={35} />
                  Upload Image
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-[16px]">Name.png</p>
                <MdOutlineDeleteForever size={25} />
              </div>
              <div className="overflow-hidden">
                <img
                  src="/assets/imgs/building-img.jpg"
                  className="object-cover h-[185px] w-[288px] rounded-2xl"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center gap-x-3">
            <Button className="rounded-md">Submit</Button>
            <Button className="rounded-md bg-red-700 border-red-700 hover:border-mirage">Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
