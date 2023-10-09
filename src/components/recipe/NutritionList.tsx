import { useAppSelector } from "@/redux/store";
import { NutritionProps } from "@/types/NutritionProps";
import { List, ListItemText, Typography } from "@mui/material";
import React from "react";

export const NutritionList = () => {
  const nutrition = useAppSelector(
    (state) => state.apiRecipes.currentRecipe.nutrition
  );
  return (
    <div>
      {nutrition && JSON.stringify(nutrition) !== "{}" ? (
        <List>
          <ListItemText>
            Calories: <b>{nutrition.calories}</b>
          </ListItemText>
          <ListItemText>
            Fat: <b>{nutrition.fat}</b>
          </ListItemText>
          <ListItemText>
            Carbs: <b>{nutrition.carbohydrates}</b>
          </ListItemText>
          <ListItemText>
            Fiber: <b>{nutrition.fiber}</b>
          </ListItemText>
          <ListItemText>
            Sugar: <b>{nutrition.sugar}</b>
          </ListItemText>
          <ListItemText>
            Protein: <b>{nutrition.protein}</b>
          </ListItemText>
        </List>
      ) : (
        <Typography variant="body1">
          Sorry, we don&apos;t have information about nutritional values
        </Typography>
      )}
    </div>
  );
};
