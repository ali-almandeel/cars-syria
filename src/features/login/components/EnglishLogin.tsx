import { Grid2 } from "@mui/material";
import { FC } from "react";
import LoginFormSide from "./LoginFormSide";
import LoginImageSide from "./LoginImageSide";

interface IEnglishLoginProps {}

const EnglishLogin: FC<IEnglishLoginProps> = () => {
  return (
    <Grid2 container height={"100vh"}>
      <LoginImageSide />
      <LoginFormSide />
    </Grid2>
  );
};
export default EnglishLogin;
