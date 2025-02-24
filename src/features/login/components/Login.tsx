import { FC } from "react";
import { useLocaleContext } from "../../../context/LocaleContextProvider";
import { LayoutLanguage } from "../../../shared/constants/AppEnum";
import ArabicLogin from "./ArabicLogin";
import EnglishLogin from "./EnglishLogin";

interface ILoginProps {}

const Login: FC<ILoginProps> = () => {
  const { currentLanguage } = useLocaleContext();

  if (currentLanguage === LayoutLanguage.EN) return <EnglishLogin />;
  return <ArabicLogin />;
};
export default Login;
