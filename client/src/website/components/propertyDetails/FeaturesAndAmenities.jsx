import Heater from "../svgs/Heater";
import Parking from "../svgs/Parking";
import Swimming from "../svgs/Swimming";
import AirConditioned from "../svgs/AirConditioned";
import DoubleGlazedWindow from "../svgs/DoubleGlazedWindow";
import AmenityCard from "./AmenityCard";
import { FiHelpCircle } from 'react-icons/fi';

const iconMapping = {
  parking: <Parking />,
  swimming: <Swimming />,
  airConditioned: <AirConditioned />,
  heater: <Heater />,
  doubleGlazedWindow: <DoubleGlazedWindow />,
};

const FeaturesAndAmenities = ({ amenities }) => {
  const renderIcon = (iconText) => {
    const lowercasedIconText = iconText.toLowerCase();
    if (lowercasedIconText.includes("parking")) return iconMapping.parking;
    if (lowercasedIconText.includes("swimming")) return iconMapping.swimming;
    if (lowercasedIconText.includes("air")) return iconMapping.airConditioned;
    if (lowercasedIconText.includes("heater")) return iconMapping.heater;
    if (lowercasedIconText.includes("double")) return iconMapping.doubleGlazedWindow;
    return <FiHelpCircle />;
  };

  return (
    <div className="md:mt-9 lg:mt-12 xl:mt-14 2xl:mt-16">
      <h1 className="text-[24px] font-medium md:text-[12px] lg:text-[15px] xl:text-[18px] 2xl:text-[24px]">
        Features & Amenities
      </h1>
      <div className="mt-4 flex flex-wrap justify-center gap-3 md:mt-2 md:justify-start md:gap-2 lg:mt-2.5 lg:gap-2.5 xl:mt-3 xl:gap-3 2xl:mt-4 2xl:gap-3">
        {amenities?.map((amenity, index) => (
          <AmenityCard
            key={index}
            icon={renderIcon(amenity?.icon)}
            text={amenity?.name}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesAndAmenities;
