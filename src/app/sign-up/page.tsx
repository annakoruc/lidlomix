"use client";

import { NavigateButton } from "@/components/UI";
import { BoxFlexComponent } from "@/components/layouts";
import { loginWithGoogle, signUpWithEmail } from "@/firebase/auth";
import { SignUpSchema } from "@/schemes";
import { Icon } from "@iconify/react";
import { Box, Input, InputAdornment, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();

  return (
    <BoxFlexComponent>
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          signUpWithEmail(values.email, values.password);
          router.push(`/login`);
        }}
      >
        {({ touched, errors, isValid, dirty }) => (
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "stretch",
              width: "80%",
              gap: "48px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
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
              <Field
                type="password"
                name="confirmPassword"
                as={TextField}
                sx={{ width: "100%" }}
                label={
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Icon icon="mdi:password" style={{ fontSize: "25px" }} />
                    Confirm Password
                  </Box>
                }
                helperText={
                  touched.confirmPassword && errors.password ? (
                    <div>{errors.confirmPassword}</div>
                  ) : (
                    " "
                  )
                }
                error={touched.confirmPassword && errors.confirmPassword}
              />
            </Box>
            <Box
              sx={{
                width: 1,
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <NavigateButton
                disabled={!(isValid && dirty)}
                variant="contained"
                title="Sign Up"
                type="submit"
              />
              <NavigateButton
                variant="contained"
                title="Login with Google"
                onClick={() => loginWithGoogle()}
              />
            </Box>
          </Form>
        )}
      </Formik>
    </BoxFlexComponent>
  );
}
