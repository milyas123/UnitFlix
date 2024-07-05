import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Slide } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const PropertiesForSale = lazy(() => import("./pages/PropertiesForSale"));
const ManageProperties = lazy(() => import("./pages/ManageProperties"));
const PropertyDetails = lazy(() => import("./pages/PropertyDetails"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const AddProperty = lazy(() => import("./pages/AddProperty"));

function App() {
  return (
    <div className="font-poppins">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/properties-for-sale" element={<PropertiesForSale />} />
            <Route path="/manage-properties" element={<ManageProperties />} />
            <Route path="/property-details" element={<PropertyDetails />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/add-property" element={<AddProperty />} />
          </Routes>
        </Suspense>
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
