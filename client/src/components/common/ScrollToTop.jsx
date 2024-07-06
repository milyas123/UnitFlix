import { BsArrowUp } from "react-icons/bs";
import usePageScrollPosition from "@/hooks/usePageScrollPosition";

const ScrollToTop = () => {
  const scrollProgress = usePageScrollPosition();

  const onGoUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="fixed right-5 bottom-14 z-100 cursor-pointer"
      onClick={onGoUp}
    >
      <div
        className="rounded-full p-1.5 flex items-center justify-center"
        style={{
          background: `conic-gradient(rgba(24, 26, 32, 0.5) ${scrollProgress}%, #e0e0e0 ${scrollProgress}%)`,
        }}
      >
        <div className="bg-white rounded-full p-3 size-[45px] md:size-[50px] flex items-center justify-center drop-shadow-xl shadow-xl">
          <BsArrowUp size={40} className="text-grey" />
        </div>
      </div>
    </div>
  );
};

export default ScrollToTop;
