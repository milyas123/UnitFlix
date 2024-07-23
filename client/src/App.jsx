import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import React, { Suspense, lazy } from "react";
import { ToastContainer, Slide } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Lottie from "lottie-react";
import RealEstateAnimation from "@/lotties/RealEstateAnimation.json";

const LandingPage = lazy(() => import("@/website/pages/LandingPage"));
const PropertiesForSale = lazy(() => import("@/website/pages/PropertiesForSale"));
const ManageProperties = lazy(() => import("@/website/pages/ManageProperties"));
const PropertyDetails = lazy(() => import("@/website/pages/PropertyDetails"));
const ContactUs = lazy(() => import("@/website/pages/ContactUs"));
const AboutUs = lazy(() => import("@/website/pages/AboutUs"));
const AddProperty = lazy(() => import("@/website/pages/AddProperty"));

function App() {
  return (
    <div className="font-poppins">
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="relative flex h-screen w-[100vw] md:w-[50%] md:mx-auto items-center justify-center">
              <Lottie
                className="absolute inset-0 object-cover size-full"
                animationData={RealEstateAnimation}
                loop={true}
                autoPlay={true}
                rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
              />
            </div>
          }
        >
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route
              path="/properties-for-sale"
              element={<PropertiesForSale />}
            />
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
