import { Outlet } from "react-router-dom";
import Loader from "../../components/common/Loader";
// custom hook
import { Box, Toolbar } from "@mui/material";
import { useAuthContext } from "../../context/AuthContextProvider";
import SidebarLayout from "../sidebar";

const RootLayout = () => {
  const { isAuthenticated, isLoading } = useAuthContext();
  if (isLoading) return <Loader />;

  if (isAuthenticated)
    return (
      <Box display={"flex"}>
        <SidebarLayout />
        <Box component="main" padding={3}>
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    );
  else return <Outlet />;
};
export default RootLayout;
