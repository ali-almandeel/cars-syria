import LoginPage from "../../pages/auth/login";
import TestPage from "../../pages/auth/test";
import { unprotectedPaths } from "./appPaths";
import { type UnprotectedRoutesConfig } from "./types";

const unprotectedPagesConfig: Array<UnprotectedRoutesConfig> = [
  {
    path: unprotectedPaths.login,
    isProtected: false,
    page: <LoginPage />,
  },
  {
    path: unprotectedPaths.test,
    isProtected: false,
    page: <TestPage />,
  },
];

export default unprotectedPagesConfig;
