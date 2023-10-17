"use client";

import { useRouter } from "next/navigation";
import { Field, Form, Formik } from "formik";
import { Icon as Iconify } from "@iconify/react";

import { Box, Button, TextField, Typography } from "@mui/material";
import { ModalComponent, NavigateButton } from "@/components/UI";
import { BoxFlexComponent } from "@/components/layouts";
import { themeVariables } from "@/styles/themes/themeVariables";
import { SendResetPasswordSchema } from "@/schemes";
import { auth } from "@/firebase/firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";

import { mdiEmailFastOutline, mdiEmailRemoveOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { useModalWithInformation } from "@/hooks/useModalWithInformation";

const ForgotPasswordPage = () => {
  const router = useRouter();
  const { openModal, closeModal, modalContent, modalIsOpen } =
    useModalWithInformation();

  const sendResetLink = async (email: string) => {
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        openModal(
          mdiEmailFastOutline,
          "Change password email was sent. Check your email"
        );

        setTimeout(() => router.push(`/login`), 3000);
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          openModal(mdiEmailRemoveOutline, "Invalid email. Try again");
        } else throw new Error(error.message);
      });
  };

  return (
    <BoxFlexComponent>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={SendResetPasswordSchema}
        onSubmit={(values) => {
          sendResetLink(values.email);
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
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography variant="h6">Forgot your password?</Typography>
                <Field
                  type="text"
                  name="email"
                  as={TextField}
                  sx={{ width: "100%" }}
                  label={
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Iconify
                        icon="ic:round-mail"
                        style={{ fontSize: "25px" }}
                      />
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
              </Box>
              <NavigateButton
                disabled={!(isValid && dirty)}
                variant="contained"
                title="Send reset link"
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
                href="/login"
              >
                Login
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
      <ModalComponent openedModal={modalIsOpen} onClose={closeModal}>
        {modalContent}
      </ModalComponent>
    </BoxFlexComponent>
  );
};

export default ForgotPasswordPage;
