"use client";
import { useAppSelector } from "@/redux/store";
import { Box } from "@mui/material";
import useId from "@mui/material/utils/useId";
import React from "react";

const ShoppingListPage = () => {
  const generateId = useId();
  const shoppingList = useAppSelector(
    (state) => state.shoppingList.recipesList
  );
  return (
    <Box>
      {shoppingList.map((recipe) => (
        <div key={generateId}>
          <h4>{recipe.recipeTitle}</h4>
          {recipe.ingredients.map((ingredient) => (
            <p key={generateId}>{ingredient}</p>
          ))}
        </div>
      ))}
    </Box>
  );
};

export default ShoppingListPage;
