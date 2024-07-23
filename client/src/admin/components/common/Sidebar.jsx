import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useAppContext } from "../../../AppContext";

import Home from "../svgs/Home";
import Requests from "../svgs/Requests";
import EmailConfig from "../svgs/EmailConfig";

const Sidebar = () => {
  const navigate = useNavigate();
  const { isSideBarOpen, updateSidebarValue } = useAppContext();

  const Menus = [
    { title: "Manage Properties", component: Home, path: "/" },
    { title: "Submitted Requests", component: Requests, path: "/" },
    { title: "Email Configuration", component: EmailConfig, path: "/" },
  ];

  return (
    <div
      className={`sticky top-0 h-screen bg-mirage text-white transition-all duration-1000 ease-in-out ${
        isSideBarOpen ? "w-[20rem]" : "w-[5rem]"
      }`}
    >
      <div className="relative flex w-full flex-col border-r pt-4">
        <div
          className={`absolute -right-5 top-[4.7rem] cursor-pointer rounded-full border-2 bg-white p-1 transition-all duration-700 ease-in-out ${
            !isSideBarOpen && "rotate-180"
          }`}
          onClick={() => updateSidebarValue(!isSideBarOpen)}
        >
          <ChevronLeft className="text-mirage" />
        </div>

        <div
          className={`flex items-center overflow-hidden ${
            isSideBarOpen ? "justify-start px-6 gap-x-2" : "justify-center"
          }`}
        >
          <img
            src="/assets/imgs/Logo.png"
            className={`size-[50px] object-cover cursor-pointer duration-500 ${
              isSideBarOpen && "rotate-[360deg]"
            }`}
            alt="company-logo"
          />
          {isSideBarOpen && (
            <h1
              className={`origin-left text-2xl font-medium text-white transition-all duration-1000 ease-linear ${
                !isSideBarOpen && "scale-0"
              }`}
            >
              Unitflix
            </h1>
          )}
        </div>

        <ul className="overflow-y-auto px-2 pt-7">
          {Menus.map((Menu, index) => {
            const IconComponent = Menu.component;
            return (
              <Link
                to={Menu.path}
                key={index}
                className={`hover:bg-white group mt-2 flex h-[3.3rem] cursor-pointer items-center gap-x-4 rounded-2xl ${
                  isSideBarOpen ? "p-3" : "justify-center p-2"
                } ${
                  window.location.pathname.includes(Menu.path) && "bg-aquaWhite"
                }`}
              >
                <IconComponent className="group-hover:text-mirage" />
                <span
                  className={`${
                    !isSideBarOpen && "hidden"
                  } font-semibold origin-left text-[14px] text-white group-hover:text-mirage`}
                >
                  {Menu.title}
                </span>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
