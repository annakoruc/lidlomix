"use client";

import { BoxWithNaves } from "@/components/layouts";
import { Box, Container, Paper } from "@mui/material";
import { relative } from "path";
import { FC } from "react";

interface pageProps {
  params: { recipeTitle: string };
}

const Recipe: FC<pageProps> = ({ params }) => {
  return (
    <BoxWithNaves>
      <img
        src="/images/raspberryCake.png"
        alt="image"
        width="100%"
        style={{ position: "absolute", top: 0, left: 0, zIndex: -3 }}
      />
      <Box
        sx={{
          width: "100%",

          position: "absolute",
          bottom: 56,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: 500,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            // alignItems,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "75%",
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
              top: 65,
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
              top: 45,
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
              left: "-50%",
              zIndex: -1,
            }}
          />
        </Box>
      </Box>
    </BoxWithNaves>
  );
};

export default Recipe;
