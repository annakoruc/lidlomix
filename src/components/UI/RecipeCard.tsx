/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Card, Typography } from "@mui/material";
import { RatingComponent } from "./RatingComponent";
import { IconHeart } from "@/assets";
import { useRouter } from "next/navigation";

export const RecipeCard = ({ title }: { title: string }) => {
  const router = useRouter();
  let recipePath = title.replaceAll(" ", "-");

  return (
    <Card
      sx={{
        flex: "40%",
        maxWidth: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 0.5,
        borderRadius: 2,
        position: "relative",
        cursor: "pointer",
      }}
      onClick={() => router.push(`/recipe/${recipePath}`)}
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
          {title}
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
