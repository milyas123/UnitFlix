import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useAppContext } from "../../../AppContext";

import Home from "../svgs/Home";
import Requests from "../svgs/Requests";
import EmailConfig from "../svgs/EmailConfig";
import {MdLogout} from "react-icons/md";

const Sidebar = () => {
  const navigate = useNavigate();
  const { isSideBarOpen, updateSidebarValue } = useAppContext();

  const Menus = [
    {
      title: "Manage Properties",
      component: Home,
      path: "/admin/manage-properties?page=1",
      basePath: "/admin/manage-properties"
    },
    {
      title: "Submitted Requests",
      component: Requests,
      path: "/admin/submitted-requests?page=1",
      basePath: "/admin/submitted-requests"
    },
    {
      title: "Email Configuration",
      component: EmailConfig,
      path: "/admin/email-configuration",
      basePath: "/admin/email-configuration"
    },
    {
      title: "Logout",
      component: MdLogout,
      action: () => {
        localStorage.removeItem("token");
        window.location = '/admin/login'
      }
    }
  ];

  const handleSidebarToggle = () => {
    updateSidebarValue(!isSideBarOpen);
  };

  return (
    <div
      className={`sticky top-2.5 h-[98vh] rounded-xl bg-mirage text-white transition-all duration-1000 ease-in-out ${
        isSideBarOpen ? "w-[20rem]" : "w-[5rem]"
      }`}
    >
      <div className="relative flex w-full flex-col pt-4">
        <div
          className={`absolute -right-3.5 top-[4rem] cursor-pointer rounded-full border bg-white p-0.5 shadow-pastelGrey drop-shadow-2xl transition-all duration-700 ease-in-out ${
            !isSideBarOpen && "rotate-180"
          }`}
          onClick={handleSidebarToggle}
        >
          <ChevronLeft className="text-mirage" />
        </div>

        <div
          className={`flex items-center overflow-hidden ${
            isSideBarOpen ? "justify-start gap-x-2 px-6" : "justify-center"
          }`}
        >
          <img
            src="/assets/imgs/Logo.png"
            className={`size-[50px] cursor-pointer object-cover duration-500 ${
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
          {Menus.map(({ title, component: IconComponent, path, basePath, action }, index) => {
            const isActive = window.location.pathname.includes(basePath);
            return (
              <Link
                to={path}
                key={index}
                className={`group mt-2 flex h-[3.3rem] cursor-pointer items-center gap-x-4 rounded-2xl hover:bg-white ${
                  isSideBarOpen ? "p-3" : "justify-center p-2"
                } ${isActive && "bg-white text-mirage"}`}
                onClick={() => {
                  if(action) {
                    action();
                  }
                }}
              >
                <IconComponent className="group-hover:text-mirage" />
                <span
                  className={`origin-left text-[14px] font-semibold group-hover:text-mirage ${!isSideBarOpen && "hidden"} ${isActive ? "text-mirage" : "text-white"}`}
                >
                  {title}
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
