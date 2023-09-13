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

export const InputComponent = React.forwardRef(function InputComponent(
  { placeholder, icon, required, type }: InputProps,
  ref
) {
  return (
    <ThemeProvider theme={inputTheme}>
      <Input
        id={placeholder}
        placeholder={placeholder}
        type={type}
        ref={ref}
        color="primary"
        // variant="standard"
        startAdornment={
          <InputAdornment position="start">{icon}</InputAdornment>
        }
        required={required}
        // sx={{ color: "secondary.light", borderBottomColor: "yellow" }}
      />
    </ThemeProvider>
  );
});
