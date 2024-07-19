import Layout from "@/Layout";
import Form from "@/components/contactUs/Form";
import Header from "@/components/contactUs/Header";
import ScrollToTop from "@/components/common/ScrollToTop";
import StickyIcons from "@/components/common/StickyIcons";

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
