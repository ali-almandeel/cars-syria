import { LayoutLanguage } from "../shared/constants/AppEnum";
import { getStoredLanguage } from "../utils/localization.utils";

//language
const storedLanguage = getStoredLanguage();
export const defaultLanguage = storedLanguage || LayoutLanguage.EN;

// uiConfig
export const drawerWidth = 300;
