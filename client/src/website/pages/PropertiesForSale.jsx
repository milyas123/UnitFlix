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
import { useSearchParams } from "react-router-dom";

const sliderMinValue = 50000;
const sliderMaxValue = 5000000;
const serverURL = import.meta.env.VITE_SERVER_URL;

const PropertiesForSale = () => {
  const showTopButton = useScrollProgress("properties-section");
  const [searchParams] = useSearchParams();
  const param = searchParams.get("param");

  const [properties, setProperties] = useState([]);

  const [text, setText] = useState("");
  const [value, setValue] = useState([0, 100]);
  const [selectedTab, setSelectedTab] = useState("All");
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
      min: sliderMinValue + (value[0] / 100) * (sliderMaxValue - sliderMinValue),
      max: sliderMinValue + (value[1] / 100) * (sliderMaxValue - sliderMinValue),
      purpose: selectedTab === "All" ? 0 : selectedTab === "For Sale" ? 0 : 1,
    };

    const queryString = new URLSearchParams(searchParams).toString();

    try {
      const response = await axios.get(`${serverURL}/property/search?${queryString}`);
      const filteredProperties = response.data?.data?.properties?.filter(property => property.category === 1);
      setProperties(filteredProperties);
    } catch (error) {
      toast.error("Error fetching results. Try again!");
      console.log(error.message);
    }
  };

  // Fetch properties from the server
  const fetchProperties = async () => {
    try {
      const response = await axios.get(`${serverURL}/property/search?${new URLSearchParams({purpose: param}).toString()}`);
      const filteredProperties = response.data?.data?.properties?.filter(property => property.category === 1);
      setProperties(filteredProperties);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, [param]);

  const handleItemClick = async (type, id) => {
    try {
      const response = await axios.get(`${serverURL}/property/${type}/${id}`);
      console.log(response.data)
      const filteredProperties = response.data?.data?.filter(property => property.category === 1);
      setProperties(filteredProperties);
    } catch (error) {
      toast.error("Error fetching properties. Try again!");
      console.log(error.message);
    }
  };

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
        <Properties properties={properties} handleItemClick={handleItemClick} />
      </div>

      <StickyIcons showIcons={showTopButton} />
      {showTopButton && <ScrollToTop />}
    </Layout>
  );
};

export default PropertiesForSale;
