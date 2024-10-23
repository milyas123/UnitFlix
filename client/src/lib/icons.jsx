import featureIcons from '../data/featureIcons.json';
import {
    FaSwimmingPool, FaDumbbell, FaParking, FaSnowflake, FaDog, FaChild, FaVideo, FaBicycle,
    FaThermometerHalf, FaFire, FaWater, FaCity, FaBuilding, FaUmbrellaBeach, FaBook, FaUtensils,
    FaCoffee, FaShoppingCart, FaSchool, FaHospital, FaSpa, FaFilm, FaBus, FaTrain, FaTree,
    FaCarSide, FaFan, FaNetworkWired, FaSoap, FaLaptopHouse, FaTableTennis, FaHeartbeat, FaCouch
} from 'react-icons/fa';
import { MdMeetingRoom, MdHelp, MdBalcony, MdSecurity, MdRoomService, MdSportsBasketball, MdLocalMall, MdHotTub } from 'react-icons/md';
import {
    GiGardeningShears, GiBarbecue, GiPoolDive, GiHouseKeys,
    GiBabyBottle, GiTennisRacket, GiRunningNinja, GiPathDistance, GiGolfTee
} from "react-icons/gi";
import {FaElevator, FaSteam} from "react-icons/fa6";

const getFeaturedIcons = () => {
    return featureIcons;
}

const getIcon = (value) => {
    const iconMapping = {
        "swimming-pool": <FaSwimmingPool />,
        "gym": <FaDumbbell />,
        "parking": <FaParking />,
        "balcony": <MdBalcony />,
        "air-conditioning": <FaSnowflake />,
        "pet-friendly": <FaDog />,
        "playground": <FaChild />,
        "security": <MdSecurity />,
        "elevator": <FaElevator />,
        "concierge-24-7": <MdRoomService />,
        "jacuzzi": <MdHotTub />,
        "sauna": <FaSteam />,
        "garden": <GiGardeningShears />,
        "bbq-area": <GiBarbecue />,
        "private-pool": <GiPoolDive />,
        "smart-home-tech": <FaNetworkWired />,
        "maids-room": <GiHouseKeys />,
        "laundry-room": <FaSoap />,
        "cctv": <FaVideo />,
        "childrens-play-area": <GiBabyBottle />,
        "tennis-court": <GiTennisRacket />,
        "basketball-court": <MdSportsBasketball />,
        "squash-court": <FaTableTennis />,
        "running-track": <GiRunningNinja />,
        "cycling-path": <FaBicycle />,
        "central-heating": <FaThermometerHalf />,
        "fireplace": <FaFire />,
        "waterfront-view": <FaWater />,
        "city-view": <FaCity />,
        "rooftop-access": <FaBuilding />,
        "golf-course-access": <GiGolfTee />,
        "beach-access": <FaUmbrellaBeach />,
        "conference-room": <MdMeetingRoom />,
        "library": <FaBook />,
        "restaurant-on-site": <FaUtensils />,
        "cafe-on-site": <FaCoffee />,
        "shopping-mall-nearby": <MdLocalMall />,
        "supermarket-nearby": <FaShoppingCart />,
        "school-nearby": <FaSchool />,
        "hospital-nearby": <FaHospital />,
        "spa": <FaSpa />,
        "movie-theater": <FaFilm />,
        "bus-stop-nearby": <FaBus />,
        "metro-station-nearby": <FaTrain />,
        "walking-distance-to-park": <FaTree />,
        "jogging-track": <GiPathDistance />,
        "guest-parking": <FaCarSide />,
        "shared-workspace": <FaLaptopHouse />,
        "chiller-free": <FaFan />,
        "high-speed-internet": <FaNetworkWired />,
        "dining-outlets": <FaUtensils />,
        "health-care-centre": <FaHeartbeat />,
        "multi-purpose-lounge": <FaCouch />,
        "fitness-centre": <FaDumbbell />
    };

    const icon = iconMapping[value];
    if(icon) {
        return icon;
    }
    else {
        return <MdHelp />
    }
}

export {
    getFeaturedIcons,
    getIcon
}