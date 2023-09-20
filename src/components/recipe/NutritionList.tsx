import { useAppSelector } from "@/redux/store";
import { NutritionProps } from "@/types/NutritionProps";
import { List, ListItemText, Typography } from "@mui/material";
import React from "react";

export const NutritionList = () => {
  const nutrition = useAppSelector(
    (state) => state.recipe.currentRecipe.nutrition
  );
  return (
    <div>
      {nutrition && JSON.stringify(nutrition) !== "{}" ? (
        <List>
          <ListItemText>
            Calories: <b>{nutrition.calories}kcal</b>
          </ListItemText>
          <ListItemText>
            Fat: <b>{nutrition.fat}g</b>
          </ListItemText>
          <ListItemText>
            Carbs: <b>{nutrition.carbohydrates}g</b>
          </ListItemText>
          <ListItemText>
            Fiber: <b>{nutrition.fiber}g</b>
          </ListItemText>
          <ListItemText>
            Sugar: <b>{nutrition.sugar}g</b>
          </ListItemText>
          <ListItemText>
            Protein: <b>{nutrition.protein}g</b>
          </ListItemText>
        </List>
      ) : (
        <Typography>
          Sorry, we don&apos;t have information about nutritions
        </Typography>
      )}
    </div>
  );
};
