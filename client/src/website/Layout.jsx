import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";

const Layout = ({ children }) => {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0, {behavior: "smooth"});
    }, [location]);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
