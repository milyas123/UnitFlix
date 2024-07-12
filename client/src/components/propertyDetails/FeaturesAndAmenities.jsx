import { RiParkingBoxLine } from "react-icons/ri";
import { TbSwimming } from "react-icons/tb";
import { Snowflake, Heater } from "lucide-react";
import { FaWindowRestore } from "react-icons/fa";
import AmenityCard from "./AmenityCard";

const amenitiesData = [
  {
    icon: <RiParkingBoxLine />,
    text: "Parking Spaces: 1",
  },
  {
    icon: <TbSwimming />,
    text: "Swimming Pool",
  },
  {
    icon: <Snowflake />,
    text: "Centrally Air-Conditioned",
  },
  {
    icon: <Heater />,
    text: "Central Heating",
  },
  {
    icon: <FaWindowRestore />,
    text: "Double Glazed Windows",
  },
  {
    icon: <FaWindowRestore />,
    text: "Double Glazed Windows",
  },
  {
    icon: <FaWindowRestore />,
    text: "Double Glazed Windows",
  },
  {
    icon: <FaWindowRestore />,
    text: "Double Glazed Windows",
  },
];

const FeaturesAndAmenities = () => {
  return (
    <div className="md:mt-9 lg:mt-12 xl:mt-14 2xl:mt-16">
      <h1 className="font-medium md:text-[12px] lg:text-[15px] xl:text-[18px] 2xl:text-[24px]">
        Features & Amenities
      </h1>
      <div className="flex flex-wrap md:mt-2 md:gap-2 lg:mt-2.5 xl:mt-3 lg:gap-2.5 xl:gap-3 2xl:mt-4 2xl:gap-3">
        {amenitiesData.map((amenity, index) => (
          <AmenityCard key={index} icon={amenity.icon} text={amenity.text} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesAndAmenities;
