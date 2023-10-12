"use client";

import React from "react";
import { inputTheme } from "@/styles/themes";
import { ThemeProvider } from "@mui/material/styles";
import { Input, InputAdornment } from "@mui/material";

type InputProps = {
  placeholder: string;
  icon: JSX.Element;
  required?: boolean;
  type: "text" | "password";
};

export const InputComponent = ({
  placeholder,
  icon,
  required,
  type,
}: InputProps) => {
  return (
    // <ThemeProvider theme={inputTheme}>
    <Input
      id={placeholder}
      placeholder={placeholder}
      type={type}
      color="primary"
      sx={{ width: "100%" }}
      startAdornment={<InputAdornment position="start">{icon}</InputAdornment>}
      required={required}
      // sx={{ color: "secondary.light", borderBottomColor: "yellow" }}
    />
    // </ThemeProvider>
  );
};
