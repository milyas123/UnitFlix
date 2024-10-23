import { useState, useEffect, lazy } from "react";

import Layout from "@/website/Layout";
import Hero from "@/website/components/landingPage/Hero";
import Filters from "@/website/components/landingPage/Filters";
import Discover from "@/website/components/landingPage/Discover";
const Help = lazy(() => import("@/website/components/landingPage/Help"));
const AboutUs = lazy(() => import("@/website/components/landingPage/AboutUs"));
const ContactUs = lazy(() => import("@/website/components/landingPage/ContactUs"));
const CTA = lazy(() => import("@/website/components/landingPage/CTA"));
const ExperienceAndFeedback = lazy(() => import("@/website/components/landingPage/ExperienceAndFeedback"));
import ScrollToTop from "@/website/components/common/ScrollToTop";
import StickyIcons from "@/website/components/common/StickyIcons";

import useScrollProgress from "@/hooks/useScrollProgress";

import axios from "axios";
import {useNavigate} from "react-router-dom";
import Spinner from "@/website/components/common/Spinner.jsx";
import LazyLoad from "react-lazyload";
import SpinnerContainer from "@/website/components/common/SpinnerContainer.jsx";
import {motion} from "framer-motion";

const sliderMinValue = 0;
const sliderMaxValue = 500000000;
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
      setProperties(response.data?.data || []);
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

  const variants = {
    initial: {opacity: 0, y: 200},
    inView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.25,
        ease: "easeInOut"
      }
    },
  }

  return (
    <>
      <Layout>
        <div className="relative">
          <Hero/>
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
                animate={true}
            />
          </div>
        </div>
        <div id="discover-section">
          {
            isLoading ?
                <div className='h-[300px] mt-[300px] md:mt-[0px] flex items-center justify-center pt-[10em]'>
                  <Spinner/>
                </div>
                :
                properties.length > 0 ?
                    <Discover properties={properties}/> : <div className='h-[350px] md:h-[0]'></div>
          }
        </div>
        <motion.div variants={variants} initial={'initial'} whileInView={'inView'} viewport={{once: true}}>
          <LazyLoad className='w-full min-h-[200px]' placeholder={<SpinnerContainer/>}>
            <Help/>
          </LazyLoad>
        </motion.div>
        <motion.div variants={variants} initial={'initial'} whileInView={'inView'} viewport={{once: true}}>
          <LazyLoad className='w-full min-h-[200px]' placeholder={<SpinnerContainer/>}>
            <AboutUs/>
          </LazyLoad>
        </motion.div>
        <motion.div variants={variants} initial={'initial'} whileInView={'inView'} viewport={{once: true}}>
          <LazyLoad className='w-full min-h-[200px]' placeholder={<SpinnerContainer/>}>
            <ContactUs/>
          </LazyLoad>
        </motion.div>
        <motion.div variants={variants} initial={'initial'} whileInView={'inView'} viewport={{once: true}}>
          <LazyLoad className='w-full min-h-[200px]' placeholder={<SpinnerContainer/>}>
            <CTA/>
          </LazyLoad>
        </motion.div>
        <motion.div variants={variants} initial={'initial'} whileInView={'inView'} viewport={{once: true}}>
          <LazyLoad className='w-full min-h-[200px]' placeholder={<SpinnerContainer/>}>
            <ExperienceAndFeedback/>
          </LazyLoad>
        </motion.div>
          <StickyIcons showIcons={showButtons}/>
          {showButtons && <ScrollToTop/>}
      </Layout>
    </>
);
};

export default LandingPage;
