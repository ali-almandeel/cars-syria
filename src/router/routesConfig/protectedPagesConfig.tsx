
import HomePage from "../../pages/home";
import { protectedPaths } from "./appPaths";
import { type ProtectedRoutesConfig } from "./types";

const protectedPageConfig: Array<ProtectedRoutesConfig> = [
  {
    path: protectedPaths.home,
    isProtected: true,
    page: <HomePage />,
  },
];
export default protectedPageConfig;
