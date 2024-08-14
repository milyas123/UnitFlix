import { useState, useEffect } from "react";

import Layout from "@/website/Layout";
import Hero from "@/website/components/landingPage/Hero";
import Filters from "@/website/components/landingPage/Filters";
import Discover from "@/website/components/landingPage/Discover";
import Help from "@/website/components/landingPage/Help";
import AboutUs from "@/website/components/landingPage/AboutUs";
import ContactUs from "@/website/components/landingPage/ContactUs";
import CTA from "@/website/components/landingPage/CTA";
import ExperienceAndFeedback from "@/website/components/landingPage/ExperienceAndFeedback";
import ScrollToTop from "@/website/components/common/ScrollToTop";
import StickyIcons from "@/website/components/common/StickyIcons";

import useScrollProgress from "@/hooks/useScrollProgress";

import axios from "axios";
import { toast } from "react-toastify";

const sliderMinValue = 50000;
const sliderMaxValue = 5000000;
const serverURL = import.meta.env.VITE_SERVER_URL;

const LandingPage = () => {
  const showButtons = useScrollProgress("discover-section");

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
      purpose: selectedTab === "All" ? 0 : selectedTab === "For Sale" ? 0 : 1,
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

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${serverURL}/property/featured`);
      setProperties(response.data.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <Layout>
      <div className="relative">
        <Hero />
        <div className="absolute -bottom-[22rem] z-[200] w-full md:-bottom-6 xl:-bottom-10">
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
      <div id="discover-section">
        <Discover projects={properties} />
      </div>
      <Help />
      <AboutUs />
      <ContactUs />
      <CTA />
      <ExperienceAndFeedback />

      <StickyIcons showIcons={showButtons} />

      {showButtons && <ScrollToTop />}
    </Layout>
  );
};

export default LandingPage;
