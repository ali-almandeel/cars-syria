import { LayoutLanguage } from "../../shared/constants/AppEnum";
import saMessages from "../../shared/locales/ar_SA.json";
import { type LanguageConfig } from "../../types/localization";

const saLang: LanguageConfig = {
  messages: {
    ...saMessages,
  },
  locale: LayoutLanguage.AR,
};
export default saLang;
