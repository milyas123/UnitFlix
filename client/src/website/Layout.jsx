import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";

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
          <Footer />
      </div>
    </>
  );
};

export default Layout;
