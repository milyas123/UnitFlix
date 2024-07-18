import { useState } from "react";
import InquiryModal from "./InquiryModal";

const StickyIcons = ({ showIcons }) => {
  const [showInquiryModal, setShowInquiryModal] = useState(false);

  const handleWhatsappClick = () => {
    window.location.href = "https://wa.me/123456789";
  };

  return (
    <>
      <div
        className={`fixed right-5 top-1/2 hidden -translate-y-1/2 transform flex-col items-center space-y-2 md:flex ${
          showIcons ? "show-icons" : "hide-icons"
        }`}
      >
        <img
          src="/assets/imgs/call-vector.png"
          className="animated-icon size-[55px] cursor-pointer"
          alt="callcenter-vector"
          onClick={() => setShowInquiryModal(true)}
        />
        <img
          src="/assets/imgs/whatsapp-icon.png"
          className="animated-icon size-[50px] cursor-pointer"
          alt="whatsapp-icon"
          onClick={handleWhatsappClick}
        />
      </div>
      {showInquiryModal && (
        <InquiryModal onClose={() => setShowInquiryModal(false)} />
      )}
    </>
  );
};

export default StickyIcons;
