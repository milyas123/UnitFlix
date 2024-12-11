import { Navigate } from "react-router-dom";
import AnimLazyLoader from "@/website/components/common/AnimLazyLoader.jsx";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
      <AnimLazyLoader>
        {children}
      </AnimLazyLoader>
  );
};

export default ProtectedRoute;
