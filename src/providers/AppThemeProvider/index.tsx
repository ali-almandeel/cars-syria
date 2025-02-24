import React, { type ReactNode } from "react";
// custom hook
import { useThemeContext } from "../../context/ThemeContextProvider";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";

interface IAppThemeProviderProps {
  children: ReactNode;
}

const AppThemeProvider: React.FC<IAppThemeProviderProps> = (props) => {
  const { children } = props;
  const { theme } = useThemeContext();
  return (
    <ThemeProvider theme={createTheme(theme)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
export default AppThemeProvider;
