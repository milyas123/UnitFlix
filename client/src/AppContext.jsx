import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const serverURL = import.meta.env.VITE_SERVER_URL;
  const [isSideBarOpen, setIsSidebarOpen] = useState(true);
  
  // State variables to store fetched data
  const [locations, setLocations] = useState([]);
  const [developers, setDevelopers] = useState([]);
  const [propertyTypes, setPropertyTypes] = useState([]);
  
  const updateSidebarValue = (newValue) => {
    setIsSidebarOpen(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [locationsRes, developersRes, propertyTypesRes] = await Promise.all([
          axios.get(`${serverURL}/data/locations`),
          axios.get(`${serverURL}/data/developers`),
          axios.get(`${serverURL}/data/property_types`),
        ]);

        setLocations(locationsRes.data.data);
        setDevelopers(developersRes.data.data);
        setPropertyTypes(propertyTypesRes.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        isSideBarOpen,
        updateSidebarValue,
        locations,
        developers,
        propertyTypes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
