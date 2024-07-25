import Sidebar from "./components/common/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-whiteSmoke box-border flex min-h-screen flex-col p-2">
      <div className="flex flex-1 items-start">
        <Sidebar />
        <div className="min-h-[98vh] flex-1 overflow-y-auto overflow-x-hidden pe-2 ps-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
