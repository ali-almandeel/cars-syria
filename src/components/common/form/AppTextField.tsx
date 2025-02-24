import { TextField, TextFieldProps } from "@mui/material";
import { UseFormRegisterReturn } from "react-hook-form";

type IAppTextFieldProps = TextFieldProps & {
  register?: UseFormRegisterReturn;
};

const AppTextField: React.FC<IAppTextFieldProps> = (props) => {
  return (
    <TextField
      {...props}
      {...props?.register}
      sx={{
        ...props?.sx,
        "& .MuiInputLabel-root": {
          fontSize: 15,
        },
        "& .MuiInputBase-input::placeholder": {
          fontSize: 15,
        },
        "& .MuiInputBase-input": {
          fontSize: 15,
        },
      }}
      inputProps={{
        ...props?.inputProps,
        style: {
          ...props?.inputProps?.style,
          height: "15px",
        },
      }}
    />
  );
};
export default AppTextField;
