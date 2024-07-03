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
    <div className="mt-24">
      <h1 className="font-semibold text-[24px]">Features & Amenities</h1>
      <div className="flex flex-wrap gap-6 mt-4">
        {amenitiesData.map((amenity, index) => (
          <AmenityCard key={index} icon={amenity.icon} text={amenity.text} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesAndAmenities;
