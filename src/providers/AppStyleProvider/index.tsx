import React, { type ReactNode } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
// custom hook
import { useThemeContext } from "../../context/ThemeContextProvider";
import { LayoutDirection } from "../../shared/constants/AppEnum";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

interface AppStyleProviderProps {
  children: ReactNode;
}

const AppStyleProvider: React.FC<AppStyleProviderProps> = (props) => {
  const { children } = props;
  const { theme } = useThemeContext();
  console.log("theme", theme);
  if (theme.direction === LayoutDirection.LTR) return children;
  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
};
export default AppStyleProvider;
