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
import {useNavigate} from "react-router-dom";
import Spinner from "@/website/components/common/Spinner.jsx";
import MessageModal from "@/website/components/common/MessageModal.jsx";

const sliderMinValue = 50000;
const sliderMaxValue = 5000000;
const serverURL = import.meta.env.VITE_SERVER_URL;

const LandingPage = () => {
  const showButtons = useScrollProgress("discover-section");
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedTab, setSelectedTab] = useState("All");
  const [text, setText] = useState("");
  const [value, setValue] = useState([0, 100]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);
  const [selectedPropertyType, setSelectedPropertyType] = useState(null);

  // search properties based on user selected options
  const handleSearch = async () => {
    const searchParams = {
      min: sliderMinValue + (value[0] / 100) * (sliderMaxValue - sliderMinValue),
      max: sliderMinValue + (value[1] / 100) * (sliderMaxValue - sliderMinValue),
      page: 1,
    };

    if(text) {
      searchParams.text = text;
    }

    if(selectedLocation) {
      searchParams.location = selectedLocation;
    }

    if(selectedPropertyType) {
      searchParams.type = selectedPropertyType;
    }

    if(selectedDeveloper) {
      searchParams.developer = selectedDeveloper;
    }

    if(selectedTab && selectedTab !== 'All') {
      searchParams.purpose = selectedTab === "For Sale" ? 0 : 1;
    }

    const queryString = new URLSearchParams(searchParams).toString();
    navigate(`/search?${queryString}`)
  };

  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${serverURL}/property/featured`);
      const filteredProperties = response.data?.data.filter(property => property.category === 1);
      setProperties(filteredProperties);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
    finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
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
          {
            isLoading ?
                <div className='h-[300px] mt-[300px] md:mt-[0px] flex items-center justify-center pt-[10em]'>
                  <Spinner />
                </div>
                :
                <Discover projects={properties} />
          }
        </div>
        <Help />
        <AboutUs />
        <ContactUs />
        <CTA />
        <ExperienceAndFeedback />
        <StickyIcons showIcons={showButtons} />
        {showButtons && <ScrollToTop />}
      </Layout>
    </>
  );
};

export default LandingPage;
