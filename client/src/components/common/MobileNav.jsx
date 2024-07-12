import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { RxDash } from "react-icons/rx";
import { GrPhone } from "react-icons/gr";

const buttonItems = [
  { name: "Buy", link: "/properties-for-sale" },
  { name: "Rent", link: "/properties-for-sale" },
  { name: "Manage", link: "/manage-properties" },
  { name: "About Us", link: "/about-us" },
];

const MobileNav = ({ onClose, isVisible }) => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (isVisible) {
      setAnimationClass("slide-in");
    } else {
      setAnimationClass("slide-out");
    }
  }, [isVisible]);

  const handleAnimationEnd = () => {
    if (animationClass === "slide-out") {
      onClose();
    }
  };

  return (
    <div
      className={`absolute inset-0 z-[600] h-screen bg-black bg-opacity-60 md:hidden ${
        isVisible ? "block" : "hidden"
      }`}
      onAnimationEnd={handleAnimationEnd}
    >
      <div
        className={`absolute z-[600] flex h-[90vh] w-[80%] flex-col rounded-e-md bg-black text-white ${animationClass}`}
      >
        <div className="flex flex-col gap-y-8">
          <div className="mx-auto flex w-[90%] items-center justify-between">
            <Link to="/">
              <img
                src="/assets/imgs/Logo.png"
                className="h-[79px] w-[82px] object-cover"
                alt="company-logo"
              />
            </Link>
            <X size={30} className="text-white" onClick={() => setAnimationClass("slide-out")} />
          </div>

          <div className="flex flex-col gap-3 p-3">
            {buttonItems.map((item, index) => (
              <Link to={item.link} key={index}>
                <Button className="h-[3rem] w-full justify-start rounded-lg bg-white bg-opacity-20 px-2 text-[14px] text-white hover:bg-white hover:text-mirage">
                  <RxDash size={25} /> {item.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-auto flex w-full flex-col gap-y-5 p-3">
          <a
            href="tel:+(088) 123 456 789"
            className="flex items-center justify-center gap-x-1.5 text-[14px]"
          >
            <GrPhone size={20} />
            +(088) 123 456 789
          </a>
          <Link to="/contact-us">
            <Button
              variant="outline"
              className="h-10 w-full rounded-full border-white bg-transparent px-4 text-[14px]"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
