import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Slide } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";

// Website Pages
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="font-poppins">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
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
