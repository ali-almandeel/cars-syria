import { LayoutLanguage } from "../../shared/constants/AppEnum";
import enMessages from "../../shared/locales/en_US.json";
import { type LanguageConfig } from "../../types/localization";

const EnLang: LanguageConfig = {
  messages: {
    ...enMessages,
  },
  // muiLocale: enUS,
  locale: LayoutLanguage.EN,
};
export default EnLang;
