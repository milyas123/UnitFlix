import { useState, useEffect } from "react";

const useScrollProgress = (id) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(id);
      if (section) {
        const sectionPosition = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(sectionPosition < windowHeight);
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
