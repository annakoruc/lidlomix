"use client";

import React from "react";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { buttonTheme } from "@/styles/themes";

export const ButtonComponent = () => {
  return (
    <ThemeProvider theme={buttonTheme}>
      <Button variant="contained">Button</Button>
      <Button variant="outlined">Button</Button>
    </ThemeProvider>
  );
};
