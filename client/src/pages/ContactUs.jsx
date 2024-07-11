import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Form from "@/components/contactUs/Form";
import Header from "@/components/contactUs/Header";
import ScrollToTop from "@/components/common/ScrollToTop";
import StickyIcons from "@/components/common/StickyIcons";

import useScrollProgress from "@/hooks/useScrollProgress";

const ContactUs = () => {
  const showTopButton = useScrollProgress("form-section");

  return (
    <>
      <Navbar />
      <Header />
      <div id="form-section">
        <Form />
      </div>
      <Footer />
      <StickyIcons showIcons={showTopButton} />
      {showTopButton && <ScrollToTop />}
    </>
  );
};

export default ContactUs;
