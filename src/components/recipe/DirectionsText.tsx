import { useAppSelector } from "@/redux/store";
import { List, ListItemText, Typography } from "@mui/material";
import React from "react";

export const DirectionsText = () => {
  const instruction = useAppSelector(
    (state) => state.apiRecipes.currentRecipe.instructions
  );

  return <Typography variant="body1">{instruction}</Typography>;
};
