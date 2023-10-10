import { Box } from "@mui/material";
import React from "react";

export const RecipeBackground = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        display: "grid",
        bottom: "56px",
      }}
    >
      {/* Background! */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          zIndex: -1,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "75%",
            position: "absolute",
            bottom: 0,
            // bgcolor: "red",
            bgcolor: "white",
            alignSelf: "flex-end",
          }}
        ></Box>
        <div
          style={{
            // backgroundColor: "green",
            backgroundColor: "white",
            width: 280,
            height: 280,
            borderRadius: "100%",
            position: "absolute",
            top: 55,
            right: -50,
            zIndex: -1,
          }}
        />
        <div
          style={{
            // backgroundColor: "pink",
            backgroundColor: "rgba(255, 255, 255, 0.46)",
            width: 320,
            height: 320,
            borderRadius: "100%",
            position: "absolute",
            top: 35,
            right: -70,
            zIndex: -2,
          }}
        />
        <div
          style={{
            // backgroundColor: "blue",
            backgroundColor: "white",
            width: 538,
            height: 538,
            borderRadius: "100%",
            position: "absolute",
            top: 0,
            left: -200,

            zIndex: -1,
          }}
        />
      </Box>
      {/* Content! */}
      {children}
    </Box>
  );
};
