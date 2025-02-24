import { Theme } from "@mui/material";
import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { defaultTheme } from "../libs/mui";
import AppThemeProvider from "../providers/AppThemeProvider";
import { LayoutDirection } from "../shared/constants/AppEnum";

interface IThemeContextProps {
  changeThemeDirection: (newThemeDirection: LayoutDirection) => void;
  theme: Theme;
}

interface IThemeProviderProps {
  children: ReactNode;
}

const initialValues: IThemeContextProps = {
  changeThemeDirection: () => {},
  theme: defaultTheme,
};

const ThemeContext = createContext(initialValues);

export const ThemeContextProvider: React.FC<IThemeProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState(initialValues.theme);
  const changeThemeDirection = useCallback(
    (newThemeDirection: LayoutDirection) => {
      setTheme({ ...theme, direction: newThemeDirection });
    },
    [theme]
  );
  useEffect(() => {
    if (theme.direction === LayoutDirection.RTL) {
      document.body.setAttribute("dir", LayoutDirection.RTL);
    } else {
      document.body.setAttribute("dir", LayoutDirection.LTR);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        changeThemeDirection,
        theme,
      }}
    >
      <AppThemeProvider>{children}</AppThemeProvider>
    </ThemeContext.Provider>
  );
};

// Create a custom hook to access  the theme context
export const useThemeContext = () => useContext(ThemeContext);
