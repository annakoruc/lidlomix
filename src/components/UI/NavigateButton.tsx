"use client";

import React from "react";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { buttonTheme } from "@/styles/themes";

type NavigateButtonProps = {
  href?: string;
  variant: "text" | "contained" | "outlined";
  title: string;
  onClick?: () => void;
  sx?: {};
  type?: "submit" | "reset" | "button";
  disabled: boolean;
};

export const NavigateButton = ({
  href,
  variant,
  title,
  onClick,
  sx,
  type,
  disabled,
}: NavigateButtonProps) => {
  return (
    <ThemeProvider theme={buttonTheme}>
      <Button
        type={type}
        href={href}
        variant={variant}
        onClick={onClick}
        sx={sx}
        disabled={disabled}
      >
        {title}
      </Button>
    </ThemeProvider>
  );
};
