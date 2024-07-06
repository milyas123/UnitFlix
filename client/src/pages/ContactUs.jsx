import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Form from "@/components/contactUs/Form";
import Header from "@/components/contactUs/Header";
import ScrollToTop from "@/components/common/ScrollToTop";

import useScrollProgress from "@/hooks/useScrollProgress";

const ContactUs = () => {
  const showTopButton = useScrollProgress("footer-section");

  return (
    <>
      <Navbar />
      <Header />
      <Form />
      <div id="footer-section">
        <Footer />
      </div>
      {showTopButton && <ScrollToTop />}
    </>
  );
};

export default ContactUs;
