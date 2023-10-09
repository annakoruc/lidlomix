"use client";

import { RecipeCard } from "@/components/UI";
import { useAppSelector } from "@/redux/store";
import { Box } from "@mui/material";
import React from "react";

const FavoritesPage = () => {
  const favRecipes = useAppSelector((state) => state.favoriteRecipes.recipes);

  return (
    <Box className="all-recipes-box">
      {favRecipes.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.id} />
      ))}
    </Box>
  );
};

export default FavoritesPage;
