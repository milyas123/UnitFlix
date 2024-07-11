const StickyIcons = ({ showIcons }) => {
  const handleCallClick = () => {
    window.location.href = "tel:+123456789";
  };

  const handleWhatsappClick = () => {
    window.location.href = "https://wa.me/123456789";
  };

  return (
    <div
      className={`hidden md:flex fixed top-1/2 right-5 transform -translate-y-1/2 flex-col items-center space-y-2 ${
        showIcons ? "show-icons" : "hide-icons"
      }`}
    >
      <img
        src="/assets/imgs/call-vector.png"
        className="size-[55px] animated-icon cursor-pointer"
        alt="callcenter-vector"
        onClick={handleCallClick}
      />
      <img
        src="/assets/imgs/whatsapp-icon.png"
        className="size-[50px] animated-icon cursor-pointer"
        alt="whatsapp-icon"
        onClick={handleWhatsappClick}
      />
    </div>
  );
};

export default StickyIcons;
