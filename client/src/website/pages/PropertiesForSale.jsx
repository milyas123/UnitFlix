import React, { useEffect, useState } from "react";
import Layout from "@/website/Layout";
import Header from "@/website/components/propertiesForSale/Header";
import Properties from "@/website/components/propertiesForSale/Properties";
import ScrollToTop from "@/website/components/common/ScrollToTop";
import StickyIcons from "@/website/components/common/StickyIcons";
import useScrollProgress from "@/hooks/useScrollProgress";
import Filters from "../components/landingPage/Filters";

import axios from "axios";
import { toast } from "react-toastify";

const sliderMinValue = 50000;
const sliderMaxValue = 5000000;
const serverURL = import.meta.env.VITE_SERVER_URL;

const PropertiesForSale = () => {
  const showTopButton = useScrollProgress("properties-section");
  const [properties, setProperties] = useState([]);

  const [selectedTab, setSelectedTab] = useState("All");
  const [text, setText] = useState("");
  const [value, setValue] = useState([0, 100]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);
  const [selectedPropertyType, setSelectedPropertyType] = useState(null);

  // search properties based on user selected options
  const handleSearch = async () => {
    const searchParams = {
      text,
      location: selectedLocation || "",
      type: selectedPropertyType || "",
      developer: selectedDeveloper || "",
      min:
        sliderMinValue + (value[0] / 100) * (sliderMaxValue - sliderMinValue),
      max:
        sliderMinValue + (value[1] / 100) * (sliderMaxValue - sliderMinValue),
      purpose: selectedTab === "All" ? 0 : selectedTab === "For Sale" ? 1 : 2,
    };

    const queryString = new URLSearchParams(searchParams).toString();

    try {
      const response = await axios.get(
        `${serverURL}/property/search?${queryString}`,
      );
      console.log(response.data.data.properties);

      setProperties(response.data?.data.properties);
    } catch (error) {
      toast.error("Error fetching results. Try again!");
      console.log(error.message);
    }
  };

  // Fetch properties from the server
  const fetchProperties = async () => {
    try {
      const response = await axios.get(`${serverURL}/property/all`);
      setProperties(response.data.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <Layout>
      <div className="relative">
        <Header />
        <div className="absolute -bottom-[26rem] z-20 w-full md:-bottom-6 lg:-bottom-7 xl:-bottom-10 2xl:-bottom-11">
          <Filters
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            sliderMinValue={sliderMinValue}
            sliderMaxValue={sliderMaxValue}
            value={value}
            setValue={setValue}
            text={text}
            setText={setText}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            selectedDeveloper={selectedDeveloper}
            setSelectedDeveloper={setSelectedDeveloper}
            selectedPropertyType={selectedPropertyType}
            setSelectedPropertyType={setSelectedPropertyType}
            handleSearch={handleSearch}
          />
        </div>
      </div>
      <div id="properties-section">
        <Properties properties={properties} />
      </div>

      <StickyIcons showIcons={showTopButton} />
      {showTopButton && <ScrollToTop />}
    </Layout>
  );
};

export default PropertiesForSale;
