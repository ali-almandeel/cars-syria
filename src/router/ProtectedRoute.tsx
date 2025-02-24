// custom hook
import { useAuthContext } from "../context/AuthContextProvider"

import { Navigate } from "react-router-dom";
import { protectedPaths, unprotectedPaths } from "./routesConfig/appPaths";
import { type ReactNode } from "react";

interface IProtectedRouteProps {
  page: ReactNode;
  isProtected: boolean;
}

const ProtectedRoute: React.FC<IProtectedRouteProps> = (props) => {
  const { page, isProtected } = props;
  const { isAuthenticated } = useAuthContext();
  // const isAuthenticated = true; 
  if (isProtected) {
    if (!isAuthenticated) return <Navigate  to={unprotectedPaths.login} />;
    return page;
  } else {
    if (isAuthenticated) return <Navigate to={protectedPaths.home} />;
    return page;
  }
};
export default ProtectedRoute;
