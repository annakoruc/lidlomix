"use client";

import React from "react";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { buttonTheme } from "@/styles/themes";

type NavigateButtonProps = {
  href?: string;
  variant: "text" | "contained" | "outlined";
  title: string;
  onClick?: () => {};
};

export const NavigateButton = ({
  href,
  variant,
  title,
  onClick,
}: NavigateButtonProps) => {
  return (
    <ThemeProvider theme={buttonTheme}>
      <Button href={href} variant={variant} onClick={onClick}>
        {title}
      </Button>
    </ThemeProvider>
  );
};
