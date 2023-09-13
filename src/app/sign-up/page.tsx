"use client";

import { IconEmailSvg, IconPasswordSvg } from "@/assets";
import { InputComponent, NavigateButton } from "@/components/UI";
import { BoxFlexComponent } from "@/components/layouts";
import { signUpWithEmail } from "@/firebase/auth";
import { Box } from "@mui/material";
import React, { useRef } from "react";

export default function SignUpPage() {
  const registerEmail = useRef<HTMLInputElement>(null);
  const registerPassword = useRef<HTMLInputElement>(null);

  return (
    <BoxFlexComponent>
      <Box
        sx={{
          minWidth: "270px",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <InputComponent
          placeholder="Your email"
          type="text"
          icon={<IconEmailSvg color={"black"} />}
          // ref={loginEmail}
          required
        />
        <InputComponent
          placeholder="Password"
          type="password"
          icon={<IconPasswordSvg color={"black"} />}
          // ref={loginPassword}
          required
        />
        <InputComponent
          placeholder="Confirm Password"
          type="password"
          icon={<IconPasswordSvg color={"black"} />}
          // ref={loginPassword}
          required
        />
      </Box>

      <NavigateButton
        variant="contained"
        title="Sign Up"
        onClick={() => {
          signUpWithEmail(registerEmail, registerPassword);
        }}
        href={"/my-profile"}
      />
    </BoxFlexComponent>
  );
}
