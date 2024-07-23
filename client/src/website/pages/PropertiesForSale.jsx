import Layout from "@/website/Layout";
import Header from "@/website/components/propertiesForSale/Header";
import Properties from "@/website/components/propertiesForSale/Properties";
import ScrollToTop from "@/website/components/common/ScrollToTop";
import StickyIcons from "@/website/components/common/StickyIcons";

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
