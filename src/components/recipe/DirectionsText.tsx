import { useAppSelector } from "@/redux/store";
import { List, ListItemText } from "@mui/material";
import React from "react";

export const DirectionsText = () => {
  const instruction = useAppSelector(
    (state) => state.recipe.currentRecipe.instructions
  );

  return (
    <List>
      {instruction.map((step) => (
        <ListItemText key={step.id}>
          <b>{step.position}.</b> {step.display_text}
        </ListItemText>
      ))}
    </List>
  );
};
