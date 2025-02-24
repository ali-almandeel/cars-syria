import AppButton from "../../../components/common/form/AppButton";

import { Box, Grid2, InputAdornment, Typography } from "@mui/material";
import { FC } from "react";
import logo from "../../../assets/images/vite.svg";
import { AppEndPoint } from "../../../shared/constants/AppEndPoint";

import { FormattedMessage, useIntl } from "react-intl";
import Image from "../../../components/common/viewer/Image";

import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import AppTextField from "../../../components/common/form/AppTextField";
import { useCreateService } from "../../../services";
import { type InputsLogin } from "../../../types/login";
import useLoginValidation from "../hooks/useLoginValidation";

interface ILoginFormSideProps {}

const LoginFormSide: FC<ILoginFormSideProps> = () => {
  const { messages } = useIntl();
  const { LoginSchema } = useLoginValidation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsLogin>({
    resolver: yupResolver(LoginSchema),
  });

  const test = useCreateService<any, any>({
    asFormData: false,
    url: AppEndPoint.Token,
    onSuccess: () => {
      localStorage.setItem("token", "08924202gfdgdg");
    },
  });

  const onSubmit: SubmitHandler<InputsLogin> = async (data) => {
    await test.mutateAsync(data);
    console.log(test);
  };

  return (
    <Grid2 size={6}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100%"}
        flexDirection={"column"}
      >
        <Image height={"200px"} width={"200px"} src={logo} />
        <Typography
          color={"primary"}
          marginTop={"10px"}
          marginBottom={"30px"}
          fontSize={"1rem"}
          variant="h1"
        >
          <FormattedMessage id="auth.login" />
        </Typography>

        {/* =============== start form data ============== */}

        <Box
          display={"flex"}
          flexDirection={"column"}
          width={{ lg: "90%", md: "100%", sm: "80%", xs: "95%" }}
          padding={"0 20px"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
              width: "70%",
              display: "flex",
              flexDirection: "column",
              gap: "20px 0",
            }}
          >
            <AppTextField
              id="outlined-TextField1-flexible"
              label={<FormattedMessage id="common.username" />}
              placeholder={String(messages["auth.usernamePlaceholder"])}
              register={{ ...register("userName") }}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {/* {icon} */}
                  </InputAdornment>
                ),
              }}
              error={errors.userName?.message ? true : false}
              helperText={errors.userName?.message}
            />

            <AppTextField
              id="outlined-TextField-flexible"
              label={<FormattedMessage id="auth.password" />}
              placeholder={String(messages["auth.passwordPlaceholder"])}
              register={{ ...register("password") }}
              fullWidth
              type="password"
              name="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {/* {icon} */}
                  </InputAdornment>
                ),
              }}
              error={errors.password?.message ? true : false}
              helperText={errors.password?.message}
            />

            <AppButton type="submit" label="auth.login" variant="contained">
              Login
            </AppButton>
          </form>
        </Box>
      </Box>
    </Grid2>
  );
};
export default LoginFormSide;
