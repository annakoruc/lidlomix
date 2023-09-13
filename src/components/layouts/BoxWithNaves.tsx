import { Box, Container } from "@mui/material";
import React from "react";
import { Navbar } from "../UI";

import { BottomNavigationComponent } from "../UI";

type BoxNavesType = {
  children: JSX.Element | JSX.Element[];
};

export const BoxWithNaves = ({ children }: BoxNavesType) => {
  return (
    <Box sx={{ display: "grid", gridTemplateRows: "auto 1fr auto" }}>
      <Navbar />
      {children}
      <BottomNavigationComponent />
    </Box>
  );
};
