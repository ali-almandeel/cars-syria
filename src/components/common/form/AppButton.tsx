import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";
import React from "react";
import { FormattedMessage } from "react-intl";

interface IAppButtonProps extends LoadingButtonProps {
  label: string;
}

const AppButton: React.FC<IAppButtonProps> = (props) => {
  return (
    <LoadingButton
      {...props}
      style={{
        ...props?.style,
        height: 40,
        fontSize: 16,
      }}
    >
      <FormattedMessage id={props.label} />
    </LoadingButton>
  );
};
export default AppButton;
