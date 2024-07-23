import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSidebarOpen] = useState(true);

  const updateSidebarValue = (newValue) => {
    setIsSidebarOpen(newValue);
  };

  return (
    <AppContext.Provider
      value={{
        isSideBarOpen,
        updateSidebarValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
