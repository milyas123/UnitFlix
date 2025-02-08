import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import {lazy} from 'react';
import { AppProvider } from "./AppContext";
import { ToastContainer, Slide } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

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
import AnimLazyLoader from "@/website/components/common/AnimLazyLoader.jsx";
const AdminLogin = lazy(() => import("@/admin/pages/AdminLogin"));
const AdminAddProject = lazy(() => import("@/admin/pages/AdminAddProject"));
const AdminAddProperty = lazy(() => import("@/admin/pages/AdminAddProperty"));
const AdminPreviewProperty = lazy(() => import("@/admin/pages/AdminPreviewProperty"));
const AdminManageProperties = lazy(() => import("@/admin/pages/AdminManageProperties"));
const AdminSubmittedRequests = lazy(() => import("@/admin/pages/AdminSubmittedRequests"));
const AdminEmailConfiguration = lazy(() => import("@/admin/pages/AdminEmailConfiguration"));

function App() {

  return (
    <div className="font-poppins">
      <BrowserRouter>
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

              <Route path="/admin" element={<ProtectedRoute><Layout /></ProtectedRoute>} >
                <Route path="add-property" element={<AnimLazyLoader><AdminAddProperty /></AnimLazyLoader>} />
                <Route path="edit-property/:id" element={<AnimLazyLoader><AdminAddProperty /> </AnimLazyLoader>} />
                <Route path="add-project" element={<AnimLazyLoader><AdminAddProject /> </AnimLazyLoader>} />
                <Route path="edit-project/:id" element={<AnimLazyLoader><AdminAddProject /> </AnimLazyLoader>} />
                <Route path="manage-properties" element={<AnimLazyLoader><AdminManageProperties /> </AnimLazyLoader>} />
                <Route path="submitted-requests" element={<AnimLazyLoader><AdminSubmittedRequests /> </AnimLazyLoader>} />
                <Route path="property-details/:id" element={<AnimLazyLoader><AdminPreviewProperty /> </AnimLazyLoader>} />
                <Route path="email-configuration" element={<AnimLazyLoader><AdminEmailConfiguration /> </AnimLazyLoader>} />
              </Route>
            </Routes>
          </AppProvider>
      </BrowserRouter>
      <ToastContainer position="top-center" autoClose={3000} transition={Slide} closeOnClick={true} />
    </div>
  );
}

export default App;
