import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Header from "@/components/propertiesForSale/Header";
import Properties from "@/components/propertiesForSale/Properties";
import ScrollToTop from "@/components/common/ScrollToTop";

import useScrollProgress from "@/hooks/useScrollProgress";

const PropertiesForSale = () => {
  const showTopButton = useScrollProgress("properties-section");

  return (
    <>
      <Navbar />
      <Header />
      <div id="properties-section">
        <Properties />
      </div>
      <Footer />
      {showTopButton && <ScrollToTop />}
    </>
  );
};

export default PropertiesForSale;
