import { useState, useEffect } from "react";

const useScrollProgress = (id) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(id);
      if (section) {
        const sectionPosition = section.getBoundingClientRect().top;
        sectionPosition <= 0 ? setIsVisible(true) : setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [id]);

  return isVisible;
};

export default useScrollProgress;
