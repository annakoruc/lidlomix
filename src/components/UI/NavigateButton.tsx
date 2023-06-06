"use client";

import React from "react";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { buttonTheme } from "@/styles/themes";

type NavigateButtonProps = {
  href: string;
  variant: "text" | "contained" | "outlined";
  title: string;
};

export const NavigateButton = ({
  href,
  variant,
  title,
}: NavigateButtonProps) => {
  return (
    <ThemeProvider theme={buttonTheme}>
      <Button href={href} variant={variant}>
        {title}
      </Button>
    </ThemeProvider>
  );
};
