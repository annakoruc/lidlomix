import { Box, Container } from "@mui/material";
import React from "react";
import { Footer } from "../Footer";

type BoxFlexType = {
  children: JSX.Element | JSX.Element[];
};

export const BoxFlexComponent = ({ children }: BoxFlexType) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 15,
        position: "relative",
      }}
    >
      {children}
      <Footer />
    </Container>
  );
};
