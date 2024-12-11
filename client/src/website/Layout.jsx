import Navbar from "./components/common/Navbar";
import {lazy, useEffect} from "react";
const Footer = lazy(() => import("./components/common/Footer"));
import {useLocation} from "react-router-dom";
import AnimLazyLoader from "@/website/components/common/AnimLazyLoader.jsx";

const Layout = ({ children }) => {

    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0, {behavior: "smooth"});
        }, 100)
    }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <div className='mt-[5rem]'>
          <AnimLazyLoader>
              <Footer />
          </AnimLazyLoader>
      </div>
    </>
  );
};

export default Layout;
