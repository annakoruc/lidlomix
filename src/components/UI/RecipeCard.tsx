/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Card, Typography } from "@mui/material";
import { RatingComponent } from "./RatingComponent";
import { IconHeart } from "@/assets";

export const RecipeCard = () => {
  return (
    <Card
      sx={{
        //TODO last item in list in the same width!

        flex: "40%",
        maxWidth: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 0.5,
        borderRadius: 2,
        position: "relative",
      }}
    >
      <img src="/images/rectangle-13.png" alt="image" width="100%" />
      <Box sx={{ position: "absolute", top: 16, right: 16 }}>
        <IconHeart />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 0.5,
          gap: 0.5,
        }}
      >
        <Typography sx={{ fontWeight: "bold", lineHeight: 1 }}>
          Raspberry cake with cream
        </Typography>
        <Typography
          sx={{
            alignSelf: "flex-start",
            fontSize: "12px",
            color: "primary.light",
          }}
        >
          30 min | easy
        </Typography>
        <RatingComponent />
      </Box>
    </Card>
  );
};
