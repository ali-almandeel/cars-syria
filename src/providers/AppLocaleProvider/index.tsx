import React, { type ReactNode } from "react";
import { IntlProvider } from "react-intl";
// custom hook
import { useLocaleContext } from "../../context/LocaleContextProvider";
import ArLang from "../../libs/localization/ar_SA";
import EnLang from "../../libs/localization/en_US";
import { LayoutLanguage } from "../../shared/constants/AppEnum";
import AppStyleProvider from "../AppStyleProvider";
interface IAppLocaleProviderProps {
  children: ReactNode;
}

const AppLocaleProvider: React.FC<IAppLocaleProviderProps> = (props) => {
  const { children } = props;
  const { currentLanguage } = useLocaleContext();
  const languageConfig =
    currentLanguage === LayoutLanguage.AR ? ArLang : EnLang;
  return (
    <IntlProvider
      locale={languageConfig.locale}
      messages={languageConfig.messages}
    >
      <AppStyleProvider>{children}</AppStyleProvider>
    </IntlProvider>
  );
};
export default AppLocaleProvider;
