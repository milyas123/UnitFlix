import featureIcons from '../data/featureIcons.json';
import Parking from "@/website/components/svgs/Parking.jsx";
import Swimming from "@/website/components/svgs/Swimming.jsx";
import AirConditioned from "@/website/components/svgs/AirConditioned.jsx";
import Heater from "@/website/components/svgs/Heater.jsx";
import DoubleGlazedWindow from "@/website/components/svgs/DoubleGlazedWindow.jsx";
import {MdHelp} from "react-icons/md";

const getFeaturedIcons = () => {
    return featureIcons;
}

const getIcon = (value) => {
    const iconMapping = {
        parking: <Parking />,
        swimming: <Swimming />,
        air: <AirConditioned />,
        heater: <Heater />,
        double: <DoubleGlazedWindow />,
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