import {lazy} from "react";
import Layout from "@/website/Layout";
const Form = lazy(() => import("@/website/components/contactUs/Form"));
import Header from "@/website/components/contactUs/Header";
import ScrollToTop from "@/website/components/common/ScrollToTop";
import StickyIcons from "@/website/components/common/StickyIcons";

import useScrollProgress from "@/hooks/useScrollProgress";
import AnimLazyLoader from "@/website/components/common/AnimLazyLoader.jsx";

const ContactUs = () => {
  const showTopButton = useScrollProgress("form-section");

  return (
    <Layout>
      <Header />
      <div id="form-section">
        <AnimLazyLoader>
            <Form />
        </AnimLazyLoader>
      </div>
      <StickyIcons showIcons={showTopButton} />
      {showTopButton && <ScrollToTop />}
    </Layout>
  );
};

export default ContactUs;
