import React, { useEffect, useState } from "react";
import Layout from "@/website/Layout";
import Header from "@/website/components/propertiesForSale/Header";
import Properties from "@/website/components/propertiesForSale/Properties";
import ScrollToTop from "@/website/components/common/ScrollToTop";
import StickyIcons from "@/website/components/common/StickyIcons";
import useScrollProgress from "@/hooks/useScrollProgress";
import Filters from "../components/landingPage/Filters";

import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

const sliderMinValue = 50000;
const sliderMaxValue = 5000000;
const serverURL = import.meta.env.VITE_SERVER_URL;

const SearchProperties = () => {
  const showTopButton = useScrollProgress("properties-section");
  const [searchParams] = useSearchParams();
  const param = searchParams.get("param");
  const navigate = useNavigate();

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
    try {
      const response = await axios.get(
        `${serverURL}/property/search?${searchParams.toString()}`,
      );
      const filteredProperties = response.data?.data?.properties;
      setPages(response.data?.data?.pages);
      setProperties(filteredProperties);
    } catch (error) {
      console.error("Error fetching properties:", error);
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
      min = (parseInt(min) / (sliderMaxValue - sliderMinValue)) * 100;
      max = (parseInt(max) / (sliderMaxValue - sliderMinValue)) * 100;
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
    const searchParams = {
      min:
        sliderMinValue + (value[0] / 100) * (sliderMaxValue - sliderMinValue),
      max:
        sliderMinValue + (value[1] / 100) * (sliderMaxValue - sliderMinValue),
      page: 1,
    };

    if (id) {
      searchParams[type] = id;
    }

    const queryString = new URLSearchParams(searchParams).toString();
    navigate(`/search?${queryString}`);
    navigate(0);
  };

  const onSortOptionChange = (option) => {
    const params = {
      page: 1,
      order: option,
    };

    let category = searchParams.get("category");
    if (category) {
      category = parseInt(category);
      params.category = category;
    }

    const queryString = new URLSearchParams(params).toString();
    navigate(`/search?${queryString}`);
    navigate(0);
  };

  const onCategoryChange = (category) => {
    const searchParams = {
      page: 1,
    };

    if (category >= 0) {
      searchParams.category = category;
    }

    const queryString = new URLSearchParams(searchParams).toString();
    navigate(`/search?${queryString}`);
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
        />
      </div>

      <StickyIcons showIcons={showTopButton} />
      {showTopButton && <ScrollToTop />}
    </Layout>
  );
};

export default SearchProperties;
