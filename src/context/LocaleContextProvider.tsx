import React, {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { defaultLanguage } from "../config/defaultConfig";
import AppLocaleProvider from "../providers/AppLocaleProvider";
import { LayoutDirection, LayoutLanguage } from "../shared/constants/AppEnum";
// custom hook
import { useThemeContext } from "./ThemeContextProvider";
import { changeStoredLanguage } from "../utils/localization.utils";

interface ILocaleContextProps {
  changeCurrentLanguage: (newLanguage: LayoutLanguage) => void;
  currentLanguage: LayoutLanguage;
}

interface ILocaleProviderProps {
  children: ReactNode;
}

const initialValues: ILocaleContextProps = {
  changeCurrentLanguage: () => {},
  currentLanguage: defaultLanguage,
};

const LocaleContext = createContext(initialValues);

export const LocaleContextProvider: React.FC<ILocaleProviderProps> = ({
  children,
}) => {
  const { changeThemeDirection } = useThemeContext();
  const [currentLanguage, setCurrentLanguage] = useState(
    initialValues.currentLanguage
  );
  const changeCurrentLanguage = useCallback((newLanguage: LayoutLanguage) => {
    setCurrentLanguage(newLanguage);
  }, []);
  useEffect(() => {
    changeStoredLanguage(currentLanguage);
    if (currentLanguage === LayoutLanguage.AR) {
      changeThemeDirection(LayoutDirection.RTL);
    } else {
      changeThemeDirection(LayoutDirection.LTR);
    }
  }, [currentLanguage]);
  return (
    <LocaleContext.Provider
      value={{
        changeCurrentLanguage,
        currentLanguage,
      }}
    >
      <AppLocaleProvider>{children}</AppLocaleProvider>
    </LocaleContext.Provider>
  );
};

// Create a custom hook to access  the locale context
export const useLocaleContext = () => useContext(LocaleContext);
