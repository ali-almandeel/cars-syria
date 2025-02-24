import { LayoutLanguage } from "../shared/constants/AppEnum";

export const getStoredLanguage = () => {
  const currentLanguage = localStorage.getItem("lang");
  return currentLanguage ? (currentLanguage as LayoutLanguage) : null;
};

export const changeStoredLanguage = (newLanguage: LayoutLanguage) => {
  localStorage.setItem("lang", newLanguage);
};
