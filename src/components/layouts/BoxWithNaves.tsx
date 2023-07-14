import { Box, Container } from "@mui/material";
import React from "react";
import { Navbar } from "../UI";

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
          //TODO delete navs from height
          height: "100%",
          position: "relative",
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {children}
      </Container>
      <BottomNavigationComponent />
    </Box>
  );
};
