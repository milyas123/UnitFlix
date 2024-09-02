import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { Suspense, lazy } from "react";
import { AppProvider } from "./AppContext";
import { ToastContainer, Slide } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Lottie from "lottie-react";
import ProtectedRoute from "./ProtectedRoute";
import RealEstateAnimation from "@/lotties/RealEstateAnimation.json";

// Website pages
import LandingPage from "@/website/pages/LandingPage";
import SearchProperties from "@/website/pages/SearchProperties.jsx";
import ManageProperties from "@/website/pages/ManageProperties";
import PropertyDetails from "@/website/pages/PropertyDetails";
import ContactUs from "@/website/pages/ContactUs";
import AboutUs from "@/website/pages/AboutUs";
import AddProperty from "@/website/pages/AddProperty";

// Admin panel
import Layout from "@/admin/Layout";
import AdminLogin from "@/admin/pages/AdminLogin";
import AdminAddProject from "@/admin/pages/AdminAddProject";
import AdminAddProperty from "@/admin/pages/AdminAddProperty";
import AdminPreviewProperty from "@/admin/pages/AdminPreviewProperty";
import AdminManageProperties from "@/admin/pages/AdminManageProperties";
import AdminSubmittedRequests from "@/admin/pages/AdminSubmittedRequests";
import AdminEmailConfiguration from "@/admin/pages/AdminEmailConfiguration";

function App() {
  return (
    <div className="font-poppins">
      <BrowserRouter>
        <Suspense>
          <AppProvider>
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route path="/search" element={<SearchProperties />} />
              <Route path="/manage-properties" element={<ManageProperties />} />
              <Route path="/property-details/:id" element={<PropertyDetails />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/add-property" element={<AddProperty />} />

              {/* Admin panel */}
              <Route path="/admin/login" element={<AdminLogin />} />

              <Route path="/admin" element={<ProtectedRoute> <Layout /> </ProtectedRoute>} >
                <Route path="add-property" element={<AdminAddProperty />} />
                <Route path="edit-property/:id" element={<AdminAddProperty />} />
                <Route path="add-project" element={<AdminAddProject />} />
                <Route path="edit-project/:id" element={<AdminAddProject />} />
                <Route path="manage-properties" element={<AdminManageProperties />} />
                <Route path="submitted-requests" element={<AdminSubmittedRequests />} />
                <Route path="property-details/:id" element={<AdminPreviewProperty />} />
                <Route path="email-configuration" element={<AdminEmailConfiguration />} />
              </Route>
            </Routes>
          </AppProvider>
        </Suspense>
      </BrowserRouter>
      <ToastContainer position="top-center" autoClose={3000} transition={Slide} />
    </div>
  );
}

export default App;
