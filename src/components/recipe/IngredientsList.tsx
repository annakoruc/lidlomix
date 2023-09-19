"use client";

import { useAppSelector } from "@/redux/store";
import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

export const IngredientsList = () => {
  const ingredients = useAppSelector(
    (state) => state.recipe.currentRecipe.sections[0]
  );
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        // height: "100%",
      }}
    >
      {ingredients.components.map((ingredient) => {
        const labelId = `checkbox-list-label-${ingredient.id}`;
        const description =
          ingredient.raw_text === "n/a"
            ? ingredient.ingredient?.name
            : ingredient.raw_text;

        return (
          <ListItem key={ingredient.id} disablePadding>
            <ListItemButton
              role={undefined}
              onClick={handleToggle(ingredient.id)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(ingredient.id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${description}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};
