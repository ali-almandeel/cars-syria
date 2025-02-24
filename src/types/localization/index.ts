import { LayoutLanguage } from "../../shared/constants/AppEnum";

export type LanguageConfig = {
  messages: { [key: string]: any };
  locale: LayoutLanguage;
};
