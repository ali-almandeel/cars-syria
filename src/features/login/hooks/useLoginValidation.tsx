import { useIntl } from "react-intl";
import * as yup from "yup";

export const useLoginValidation = () => {
  const { messages } = useIntl();

  const LoginSchema = yup.object().shape({
    userName: yup.string().required(String(messages["auth.usernameValid"])),
    password: yup
      .string()
      // .min(8, String(messages["auth.passwordValid"]))
      .required(),
  });

  return {
    LoginSchema,
  };
};
export default useLoginValidation;
