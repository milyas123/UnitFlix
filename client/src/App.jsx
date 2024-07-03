import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Slide } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";

// Website Pages
import LandingPage from "./pages/LandingPage";
import PropertiesForSale from "./pages/PropertiesForSale";
import ManageProperties from "./pages/ManageProperties";
import ContactUs from "./pages/ContactUs";
import PropertyDetails from "./pages/PropertyDetails";

function App() {
  return (
    <div className="font-poppins">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/properties-for-sale" element={<PropertiesForSale />} />
          <Route path="/manage-properties" element={<ManageProperties />} />
          <Route path="/property-details" element={<PropertyDetails />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        transition={Slide}
      />
    </div>
  );
}

export default App;
