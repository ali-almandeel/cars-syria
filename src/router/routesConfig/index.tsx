import protectedPageConfig from "./protectedPagesConfig";
import { type RoutesConfig } from "./types";
import unprotectedPagesConfig from "./unprotectedPagesConfig";

export const routesConfig: Array<RoutesConfig> = [
  ...protectedPageConfig,
  ...unprotectedPagesConfig,
];
