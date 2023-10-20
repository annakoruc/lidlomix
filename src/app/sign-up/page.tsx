"use client";

import { ModalComponent, NavigateButton } from "@/components/UI";
import { BoxFlexComponent } from "@/components/layouts";
import { getLoggedUser, loginWithGoogle } from "@/firebase/auth";
import { auth } from "@/firebase/firebaseConfig";
import { SignUpSchema } from "@/schemes";
import { Icon as Iconify } from "@iconify/react";
import { Box, IconButton, TextField } from "@mui/material";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";

import {
  mdiEmailRemoveOutline,
  mdiEmailFastOutline,
  mdiArrowLeftCircle,
} from "@mdi/js";
import Icon from "@mdi/react";
import { useModalWithInformation } from "@/hooks/useModalWithInformation";

export default function SignUpPage() {
  const router = useRouter();
  const { openModal, closeModal, modalContent, modalIsOpen } =
    useModalWithInformation();

  const signUpWithEmail = async (
    registerEmail: string,
    registerPassword: string
  ) => {
    await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then(() => {
        sendEmailVerification(auth.currentUser!);
        openModal(
          mdiEmailFastOutline,
          "Verification email was sent. Check your email"
        );
        setTimeout(() => router.push(`/login`), 3000);
      })
      .catch((error) => {
        if (error.code == "auth/email-already-in-use") {
          openModal(mdiEmailRemoveOutline, "Email busy try another");
        } else {
          throw new Error(error.message);
        }
      });
  };

  return (
    <BoxFlexComponent>
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          signUpWithEmail(values.email, values.password);
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
              <Field
                type="password"
                name="password"
                as={TextField}
                sx={{ width: "100%" }}
                label={
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Iconify icon="mdi:password" style={{ fontSize: "25px" }} />
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
                    <Iconify icon="mdi:password" style={{ fontSize: "25px" }} />
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
            <Box sx={{ cursor: "pointer" }} onClick={() => router.back()}>
              <Icon
                path={mdiArrowLeftCircle}
                size={1}
                color={"rgba(0, 0, 0, 0.26)"}
              />
            </Box>
          </Form>
        )}
      </Formik>
      <ModalComponent openedModal={modalIsOpen} onClose={closeModal}>
        {modalContent}
      </ModalComponent>
    </BoxFlexComponent>
  );
}
