"use client";

import { NavigateButton } from "@/components/UI";
import { BoxFlexComponent } from "@/components/layouts";
import { signUpWithEmail } from "@/firebase/auth";
import { Icon } from "@iconify/react";
import { Box, Input, InputAdornment } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();

  return (
    <BoxFlexComponent>
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        onSubmit={(values) => {
          signUpWithEmail(values.email, values.password);
          router.push(`/login`);
        }}
      >
        {({ values }) => (
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "stretch",
              width: "80%",
              gap: "64px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "32px" }}>
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
              <Field
                type="password"
                name="confirmPassword"
                as={Input}
                sx={{ width: "100%" }}
                placeholder="confirm Password"
                startAdornment={
                  <InputAdornment position="start">
                    <Icon icon="mdi:password" style={{ fontSize: "25px" }} />
                  </InputAdornment>
                }
                required
              />
            </Box>
            <NavigateButton variant="contained" title="Sign Up" type="submit" />
          </Form>
        )}
      </Formik>
    </BoxFlexComponent>
  );
}
