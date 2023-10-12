"use client";

import { loginWithEmail, loginWithGoogle, logOut } from "@/firebase/auth";
import { useRef } from "react";

import { InputComponent, NavigateButton } from "@/components/UI";

import { IconEmailSvg, IconPasswordSvg } from "@/assets";

import { BoxFlexComponent } from "@/components/layouts";
import { Box, Button, Input, InputAdornment } from "@mui/material";
import { Icon } from "@iconify/react";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { themeVariables } from "@/styles/themes/themeVariables";

const LoginPage = () => {
  const router = useRouter();
  return (
    <BoxFlexComponent>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          loginWithEmail(values.email, values.password);
          router.push(`/my-profile`);
        }}
      >
        {({ values }) => (
          <Box sx={{ display: "flex", flexDirection: "column", width: "80%" }}>
            <Form
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "stretch",
                // width: "80%",
                gap: "64px",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "32px" }}
              >
                <Field
                  type="text"
                  name="email"
                  as={Input}
                  sx={{ width: "100%" }}
                  placeholder="Your email"
                  startAdornment={
                    <InputAdornment position="start">
                      <Icon icon="ic:round-mail" style={{ fontSize: "25px" }} />
                    </InputAdornment>
                  }
                  required
                />
                <Field
                  type="password"
                  name="password"
                  as={Input}
                  sx={{ width: "100%" }}
                  placeholder="Password"
                  startAdornment={
                    <InputAdornment position="start">
                      <Icon icon="mdi:password" style={{ fontSize: "25px" }} />
                    </InputAdornment>
                  }
                  required
                />
              </Box>
              <NavigateButton variant="contained" title="Login" type="submit" />
            </Form>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Button
                sx={{
                  padding: 0,
                  textTransform: "none",
                  color: themeVariables.colors.darkblue,
                }}
                variant="text"
                href="/forgot-password"
              >
                Forgot password
              </Button>
              <Button
                sx={{
                  padding: "6px 0",
                  textTransform: "none",
                  color: themeVariables.colors.darkblue,
                }}
                variant="text"
                href="/sign-up"
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        )}
      </Formik>
    </BoxFlexComponent>
  );
};

export default LoginPage;
