import { useState } from "react";
import InquiryModal from "./InquiryModal";

const StickyIcons = ({ showIcons }) => {
  const [showInquiryModal, setShowInquiryModal] = useState();

  const handleWhatsappClick = () => {
    window.location.href = "https://wa.me/123456789";
  };

  return (
    <>
      <div
        className={`hidden md:flex fixed top-1/2 right-5 transform -translate-y-1/2 flex-col items-center space-y-2 ${
          showIcons ? "show-icons" : "hide-icons"
        }`}
      >
        <img
          src="/assets/imgs/call-vector.png"
          className="size-[55px] animated-icon cursor-pointer"
          alt="callcenter-vector"
          onClick={() => setShowInquiryModal(true)}
        />
        <img
          src="/assets/imgs/whatsapp-icon.png"
          className="size-[50px] animated-icon cursor-pointer"
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
