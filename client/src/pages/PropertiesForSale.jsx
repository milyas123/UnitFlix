import Layout from "@/Layout";
import Header from "@/components/propertiesForSale/Header";
import Properties from "@/components/propertiesForSale/Properties";
import ScrollToTop from "@/components/common/ScrollToTop";
import StickyIcons from "@/components/common/StickyIcons";

import useScrollProgress from "@/hooks/useScrollProgress";

const PropertiesForSale = () => {
  const showTopButton = useScrollProgress("properties-section");

  return (
    <Layout>
      <Header />
      <div id="properties-section">
        <Properties />
      </div>

      <StickyIcons showIcons={showTopButton} />
      {showTopButton && <ScrollToTop />}
    </Layout>
  );
};

export default PropertiesForSale;
