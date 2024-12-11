import React, { useEffect, useState, lazy } from "react";
import Layout from "@/website/Layout";
import Header from "@/website/components/propertiesForSale/Header";
const Properties = lazy(() => import("@/website/components/propertiesForSale/Properties"));
import ScrollToTop from "@/website/components/common/ScrollToTop";
import StickyIcons from "@/website/components/common/StickyIcons";
import useScrollProgress from "@/hooks/useScrollProgress";
import Filters from "../components/landingPage/Filters";

import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import Spinner from "@/website/components/common/Spinner.jsx";
import AnimLazyLoader from "@/website/components/common/AnimLazyLoader.jsx";

const sliderMinValue = 0;
const sliderMaxValue = 500000000;
const serverURL = import.meta.env.VITE_SERVER_URL;

const SearchProperties = () => {
  const showTopButton = useScrollProgress("properties-section");
  const [searchParams] = useSearchParams();
  const param = searchParams.get("param");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const [properties, setProperties] = useState([]);

  const [text, setText] = useState("");
  const [value, setValue] = useState([0, 100]);
  const [selectedTab, setSelectedTab] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);
  const [selectedPropertyType, setSelectedPropertyType] = useState(null);
  const [sortOption, setSortOption] = useState("");
  const [categoryOption, setCategoryOption] = useState(-1);
  const [purpose, setPurpose] = useState(-1);
  const [location, setLocation] = useState(-1);
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [results, setResults] = useState(0);

  // search properties based on user selected options
  const handleSearch = async () => {
    const searchParams = {
      min: sliderMinValue + (value[0] / 100) * (sliderMaxValue - sliderMinValue),
      max: sliderMinValue + (value[1] / 100) * (sliderMaxValue - sliderMinValue),
      page: 1,
    };

    if (text) {
      searchParams.text = text;
    }

    if (selectedLocation) {
      searchParams.location = selectedLocation;
    }

    if (selectedPropertyType) {
      searchParams.type = selectedPropertyType;
    }

    if (selectedDeveloper) {
      searchParams.developer = selectedDeveloper;
    }

    if (selectedTab && selectedTab !== "All") {
      searchParams.purpose = selectedTab === "For Sale" ? 0 : 1;
    }

    if (sortOption) {
      searchParams.order = sortOption;
    }

    if (categoryOption >= 0) {
      searchParams.category = categoryOption;
    }

    const queryString = new URLSearchParams(searchParams).toString();
    navigate(`/search?${queryString}`);
    navigate(0);
  };

  // Fetch properties from the server
  const fetchProperties = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${serverURL}/property/search?${searchParams.toString()}`,
      );
      const filteredProperties = response.data?.data?.properties;
      setPages(response.data?.data?.pages);
      setProperties(filteredProperties);
      setResults(response.data?.data?.results);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
    finally {
      setIsLoading(false)
    }
  };

  const setPropertyValues = () => {
    const text = searchParams.get("text");
    if (text) {
      setText(text);
    }

    const page = searchParams.get("page");
    if(page) {
      setCurrentPage(parseInt(page))
    }

    const purpose = searchParams.get("purpose");
    if (purpose) {
      setPurpose(parseInt(purpose));
      setSelectedTab(parseInt(purpose) === 0 ? "For Sale" : "For Rent");
    } else {
      setSelectedTab("All");
    }

    const type = searchParams.get("type");
    if (type !== undefined) {
      setSelectedPropertyType(parseInt(type));
    }

    const location = searchParams.get("location");
    if (location !== undefined) {
      setLocation(parseInt(location));
      setSelectedLocation(parseInt(location));
    }

    const developer = searchParams.get("developer");
    if (developer !== undefined) {
      setSelectedDeveloper(parseInt(developer));
    }

    let min = searchParams.get("min");
    let max = searchParams.get("max");
    if (min && max) {
      min = parseInt(min) - sliderMinValue;
      max = parseInt(max) - sliderMinValue;
      min = ( min / (sliderMaxValue - sliderMinValue)) * 100;
      max = ( max / (sliderMaxValue - sliderMinValue)) * 100;
      setValue([min, max]);
    }

    const sortOption = searchParams.get("order");
    if (sortOption) {
      setSortOption(sortOption);
    }

    let category = searchParams.get("category");
    if (category !== undefined) {
      category = parseInt(category);
      setCategoryOption(category);
    } else {
      setCategoryOption(-1);
    }
  };

  useEffect(() => {
    fetchProperties();
    setPropertyValues();
  }, [param]);

  const handleItemClick = async (type, id) => {
    searchParams.set('page', 1);
    searchParams.set(type, id);
    navigate(`/search?${searchParams.toString()}`);
    navigate(0);
  };

  const onSortOptionChange = (option) => {

    searchParams.set('page', 1);
    searchParams.set('order', option);

    navigate(`/search?${searchParams.toString()}`);
    navigate(0);
  };

  const onCategoryChange = (category) => {

    if (category >= 0) {
      searchParams.set("category", category);
      searchParams.set('page', 1);
    } else {
      searchParams.set("page", 1);
      searchParams.delete('category');
    }

    navigate(`/search?${searchParams.toString()}`);
    navigate(0);
  };

  const onChangePage = (pageNumber) => {
    searchParams.set("page", pageNumber);
    navigate(`/search?${searchParams.toString()}`);
    navigate(0);
  }

  return (
    <Layout>
      <div className="relative">
        <Header purpose={purpose} />
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
        {
          isLoading ?
              <div className='flex items-center justify-center h-[300px] mt-[350px] md:mt-0'>
                <Spinner />
              </div> :
              <AnimLazyLoader>
                <Properties
                    location={location}
                    purpose={purpose}
                    properties={properties}
                    handleItemClick={handleItemClick}
                    onSortOptionChange={onSortOptionChange}
                    sortOption={sortOption}
                    categoryOption={categoryOption}
                    onCategoryChange={onCategoryChange}
                    pages={pages}
                    currentPage={currentPage}
                    changePage={onChangePage}
                    results={results}
                />
              </AnimLazyLoader>
        }
      </div>

      <StickyIcons showIcons={showTopButton} />
      {showTopButton && <ScrollToTop />}
    </Layout>
  );
};

export default SearchProperties;
