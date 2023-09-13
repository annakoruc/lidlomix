import { List, ListItemText } from "@mui/material";
import React from "react";

export const NutritionList = () => {
  return (
    <List>
      <ListItemText>Calories 910</ListItemText>
      <ListItemText>Fat 66g</ListItemText>
      <ListItemText>Carbs 70g</ListItemText>
      <ListItemText>Fiber 0g</ListItemText>
      <ListItemText>Sugar 48g</ListItemText>
      <ListItemText>Protein 40g</ListItemText>
    </List>
  );
};
