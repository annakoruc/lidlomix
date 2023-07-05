import { Box, Container } from "@mui/material";
import React from "react";
import { MobileNavbar } from "../MobileNavbar";

type BoxNavesType = {
  children: JSX.Element | JSX.Element[];
};

export const BoxWithNaves = ({ children }: BoxNavesType) => {
  return (
    <Box>
      <MobileNavbar />
      <Container
        maxWidth="xl"
        sx={{
          height: "100%",
          position: "relative",
        }}
      >
        {children}
      </Container>
    </Box>
  );
};
