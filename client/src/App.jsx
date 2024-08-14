import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { AppProvider } from "./AppContext";
import React, { Suspense, lazy } from "react";
import { ToastContainer, Slide } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Lottie from "lottie-react";
import RealEstateAnimation from "@/lotties/RealEstateAnimation.json";

// Website pages
const LandingPage = lazy(() => import("@/website/pages/LandingPage"));
const PropertiesForSale = lazy(() => import("@/website/pages/PropertiesForSale"));
const ManageProperties = lazy(() => import("@/website/pages/ManageProperties"));
const PropertyDetails = lazy(() => import("@/website/pages/PropertyDetails"));
const ContactUs = lazy(() => import("@/website/pages/ContactUs"));
const AboutUs = lazy(() => import("@/website/pages/AboutUs"));
const AddProperty = lazy(() => import("@/website/pages/AddProperty"));

// Admin panel
const Layout = lazy(() => import("@/admin/Layout"));
const AdminLogin = lazy(() => import("@/admin/pages/AdminLogin"));
const AdminAddProject = lazy(() => import("@/admin/pages/AdminAddProject"));
const AdminAddProperty = lazy(() => import("@/admin/pages/AdminAddProperty"));
const AdminManageProperties = lazy(() => import("@/admin/pages/AdminManageProperties"));
const AdminSubmittedRequests = lazy(() => import("@/admin/pages/AdminSubmittedRequests"));
const AdminEmailConfiguration = lazy(() => import("@/admin/pages/AdminEmailConfiguration"));

function App() {
  return (
    <div className="font-poppins">
      <BrowserRouter>
        <AppProvider>
          <Suspense
            fallback={
              <div className="relative flex h-screen w-[100vw] items-center justify-center md:mx-auto md:w-[50%]">
                <Lottie
                  className="absolute inset-0 size-full object-cover"
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
              <Route path="/properties-for-sale" element={<PropertiesForSale />} />
              <Route path="/properties-for-rent" element={<PropertiesForSale />} />
              <Route path="/manage-properties" element={<ManageProperties />} />
              <Route path="/property-details" element={<PropertyDetails />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/add-property" element={<AddProperty />} />

              {/* Admin Login */}
              <Route path="/admin/login" element={<AdminLogin />} />

              <Route path="/admin" element={<Layout />}>
                <Route path="add-property" element={<AdminAddProperty />} />
                <Route path="edit-property/:id" element={<AdminAddProperty />} />
                <Route path="add-project" element={<AdminAddProject />} />
                <Route path="manage-properties" element={<AdminManageProperties />} />
                <Route path="submitted-requests" element={<AdminSubmittedRequests />} />
                <Route path="email-configuration" element={<AdminEmailConfiguration />} />
              </Route>
            </Routes>
          </Suspense>
        </AppProvider>
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
