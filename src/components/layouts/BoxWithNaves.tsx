import { Box, Container } from "@mui/material";
import React from "react";
import { Navbar } from "../Navbar";

import { BottomNavigationComponent } from "../UI";

type BoxNavesType = {
  children: JSX.Element | JSX.Element[];
};

export const BoxWithNaves = ({ children }: BoxNavesType) => {
  return (
    <Box>
      <Navbar />
      <Container
        maxWidth="xl"
        sx={{
          height: "100%",
          position: "relative",
        }}
      >
        {children}
      </Container>
      <BottomNavigationComponent />
    </Box>
  );
};
