import { BsArrowUpRight } from "react-icons/bs";
import { Button } from "../ui/button";
import InfoList from "./InfoList";
import PropertyCard from "./PropertyCard";
import { FiChevronDown } from "react-icons/fi";

const locationData = [
  { name: "Al Reem Island", count: "10,635" },
  { name: "Yas Island", count: "10,395" },
  { name: "Saadiyat Island", count: "5,635" },
  { name: "Saadiyat Island", count: "5,635" },
  { name: "Saadiyat Island", count: "5,635" },
  { name: "Saadiyat Island", count: "5,635" },
  { name: "Saadiyat Island", count: "5,635" },
];

const Properties = () => {
  return (
    <section className="w-[86%] mx-auto my-[10rem]">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-[24px]">
          Properties for sale in Abu Dhabi
        </h3>
        <Button className="rounded-lg gap-x-1.5">
          Sell My Property <BsArrowUpRight size={20} />
        </Button>
      </div>

      <div className="mt-4 flex">
        <div className="w-[19%] flex flex-col gap-y-3">
          <InfoList
            heading="Locations"
            count={locationData.length}
            items={locationData}
          />

          <InfoList
            heading="Developers"
            count={locationData.length}
            items={locationData}
          />

          <InfoList
            heading="Type"
            count={locationData.length}
            items={locationData}
          />
        </div>

        <div className="w-[80%] ms-auto overflow-hidden">
          <div className="bg-whiteLilac whitespace-nowrap py-7 px-6 rounded-xl border border-slate flex justify-between items-center">
            <p className="font-semibold text-[20px]">
              Showing Property Results
              <span className="text-slate text-[16px] font-light">(308)</span>
            </p>
            <p className="w-[200px] bg-white px-3 py-2.5 rounded-md border-2 text-mirage flex justify-between items-center">
              Sort By <FiChevronDown />
            </p>
          </div>

          <div className="mt-3 flex flex-wrap justify-center gap-5">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <PropertyCard key={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Properties;
