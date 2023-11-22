"use client";

import { ModalComponent, NavigateButton } from "@/components/UI";
import { BoxFlexComponent } from "@/components/layouts";
import { SignUpSchema } from "@/schemes";
import { Box, TextField } from "@mui/material";

import { Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";

import { mdiArrowLeftCircle, mdiEmail, mdiLock } from "@mdi/js";
import Icon from "@mdi/react";
import { useModalWithInformation } from "@/hooks/useModalWithInformation";
import { withPublic } from "@/hooks/route";
import { useFirebaseAuth } from "@/hooks/useFirebaseAuth";

function SignUpPage() {
  const router = useRouter();
  const { closeModal, modalContent, modalIsOpen } = useModalWithInformation();
  const { loginWithGoogle, signUpWithEmail } = useFirebaseAuth();

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
                    <Icon path={mdiEmail} size={1} />
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
                    <Icon path={mdiLock} size={1} /> Password
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
                    <Icon path={mdiLock} size={1} /> Confirm Password
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

export default withPublic(SignUpPage);
