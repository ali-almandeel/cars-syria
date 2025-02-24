import { Box, Grid2 } from "@mui/material";
import Image from "../../../components/common/viewer/Image";
import { FC } from "react";
import image from "../../../assets/images/login_svg1.svg";

interface ILoginImageSideProps {}

const LoginImageSide: FC<ILoginImageSideProps> = () => {
  return (
    <Grid2 display={{ md: "block", xs: "none" }} size={6}>
      <Box
        height={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        bgcolor={"#F7F7F7"}
      >
        <Image height={"600px"} width={"600px"} src={image} />
      </Box>
    </Grid2>
  );
};
export default LoginImageSide;
