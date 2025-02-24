import { Grid2 } from "@mui/material";
import { FC } from "react";
import LoginFormSide from "./LoginFormSide";
import LoginImageSide from "./LoginImageSide";

interface IArabicLoginProps {}

const ArabicLogin: FC<IArabicLoginProps> = () => {
  return (
    <Grid2 container height={"100vh"}>
      <LoginFormSide />
      <LoginImageSide />
    </Grid2>
  );
};
export default ArabicLogin;
