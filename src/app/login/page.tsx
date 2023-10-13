"use client";

import { useRouter } from "next/navigation";
import { Field, Form, Formik } from "formik";
import { Icon } from "@iconify/react";

import { loginWithEmail } from "@/firebase/auth";

import {
  Box,
  Button,
  Input,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { NavigateButton } from "@/components/UI";
import { BoxFlexComponent } from "@/components/layouts";
import { themeVariables } from "@/styles/themes/themeVariables";
import { LoginSchema } from "@/schemes";

const LoginPage = () => {
  const router = useRouter();

  return (
    <BoxFlexComponent>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          loginWithEmail(values.email, values.password);
          router.push(`/my-profile`);
        }}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Box sx={{ display: "flex", flexDirection: "column", width: "80%" }}>
            <Form
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "stretch",

                gap: "64px",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "32px" }}
              >
                <Field
                  type="text"
                  name="email"
                  as={TextField}
                  sx={{ width: "100%" }}
                  label={
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Icon icon="ic:round-mail" style={{ fontSize: "25px" }} />
                      Your email
                    </Box>
                  }
                  helperText={
                    touched.email && errors.email ? (
                      <div>{errors.email}</div>
                    ) : (
                      " "
                    )
                  }
                  error={touched.email && errors.email}
                />
                <Field
                  type="password"
                  name="password"
                  as={TextField}
                  sx={{ width: "100%" }}
                  label={
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Icon icon="mdi:password" style={{ fontSize: "25px" }} />
                      Password
                    </Box>
                  }
                  helperText={
                    touched.password && errors.password ? (
                      <div>{errors.password}</div>
                    ) : (
                      " "
                    )
                  }
                  error={touched.password && errors.password}
                />
              </Box>
              <NavigateButton
                disabled={!(isValid && dirty)}
                variant="contained"
                title="Login"
                type="submit"
              />
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
