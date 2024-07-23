import Layout from "@/website/Layout";
import Form from "@/website/components/contactUs/Form";
import Header from "@/website/components/contactUs/Header";
import ScrollToTop from "@/website/components/common/ScrollToTop";
import StickyIcons from "@/website/components/common/StickyIcons";

import useScrollProgress from "@/hooks/useScrollProgress";

const ContactUs = () => {
  const showTopButton = useScrollProgress("form-section");

  return (
    <Layout>
      <Header />
      <div id="form-section">
        <Form />
      </div>
      <StickyIcons showIcons={showTopButton} />
      {showTopButton && <ScrollToTop />}
    </Layout>
  );
};

export default ContactUs;
