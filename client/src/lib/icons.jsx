import featureIcons from '../data/featureIcons.json';
import Parking from "@/website/components/svgs/Parking.jsx";
import Swimming from "@/website/components/svgs/Swimming.jsx";
import AirConditioned from "@/website/components/svgs/AirConditioned.jsx";
import Heater from "@/website/components/svgs/Heater.jsx";
import DoubleGlazedWindow from "@/website/components/svgs/DoubleGlazedWindow.jsx";
import {MdHelp, MdOutlineSportsTennis} from "react-icons/md";
import {IoIosBicycle} from "react-icons/io";
import {CgGym} from "react-icons/cg";
import {FaRunning} from "react-icons/fa";
import {GrLounge} from "react-icons/gr";
import {LiaCampgroundSolid} from "react-icons/lia";
import {GiPoliceOfficerHead} from "react-icons/gi";

const getFeaturedIcons = () => {
    return featureIcons;
}

const getIcon = (value) => {
    const iconMapping = {
        parking: <Parking className='h-[100%] w-[100%]' />,
        swimming: <Swimming className='h-[100%] w-[100%]' />,
        air: <AirConditioned className='h-[100%] w-[100%]' />,
        heater: <Heater className='h-[100%] w-[100%]' />,
        double: <DoubleGlazedWindow className='h-[100%] w-[100%]' />,
        "security":<GiPoliceOfficerHead  />,
        "cycling-trail": <IoIosBicycle />,
        "gymnasium": <CgGym />,
        "jogging-trails": <FaRunning />,
        "play-area": <LiaCampgroundSolid  />,
        "multi-purpose-lounge": <GrLounge />,
        "sports-court": <MdOutlineSportsTennis />
            }

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