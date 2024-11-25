import {useEffect, useRef, useState} from "react";
import InquiryModal from "./InquiryModal";
import website from "@/data/website.json";

const StickyIcons = ({ showIcons, propertyId }) => {
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const hasIdleModalShown = useRef(false);

  const handleWhatsappClick = () => {
    window.location.href = `https://wa.me/${website.contact.whatsappNumber}`;
  };

    const inactivityTime = function () {
        let time;
        window.onload = resetTimer;
        document.onmousemove = resetTimer;
        document.onkeydown = resetTimer;
        document.onscroll = resetTimer;
        document.onclick = resetTimer;

        function showModal() {
            setShowInquiryModal(true);
            hasIdleModalShown.current = true;
            document.onmousemove = null;
            document.onkeydown = null;
            document.onscroll = null;
            document.onclick = null;
            clearTimeout(time);
        }

        function resetTimer() {
            clearTimeout(time);
            if(!hasIdleModalShown.current) {
                time = setTimeout(showModal, 10000)
            }
        }
    };

    useEffect(() => {

        window.onload = function () {
            inactivityTime();
        }

    }, []);

  return (
    <>
      <div
        className={`fixed right-5 top-1/2 z-[500] hidden -translate-y-1/2 transform flex-col items-center space-y-2 md:flex ${
          showIcons ? "show-icons" : "hide-icons"
        }`}
      >
        <img
          src="/assets/imgs/call-vector.webp"
          className="animated-icon size-[55px] cursor-pointer"
          alt="callcenter-vector"
          onClick={() => setShowInquiryModal(true)}
        />
        <img
          src="/assets/imgs/whatsapp-icon.webp"
          className="animated-icon size-[50px] cursor-pointer"
          alt="whatsapp-icon"
          onClick={handleWhatsappClick}
        />
      </div>
      {showInquiryModal && (
        <InquiryModal propertyId={propertyId} onClose={() => setShowInquiryModal(false)} />
      )}
    </>
  );
};

export default StickyIcons;
