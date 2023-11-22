"use client";

import { RecipeCard } from "@/components/UI";
import { NotLoggedUser } from "@/components";
import { useAppSelector } from "@/redux/store";
import { Box, Typography } from "@mui/material";
import React from "react";

const FavoritesPage = () => {
  const favRecipes = useAppSelector((state) => state.favoriteRecipes.recipes);
  const loggedUser = useAppSelector((store) => store.loggedUser.user);

  const content = loggedUser ? (
    <Box className="all-recipes-box">
      {favRecipes.length !== 0 ? (
        favRecipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))
      ) : (
        <Typography variant="h6">Add some recipes to favorites</Typography>
      )}
    </Box>
  ) : (
    <NotLoggedUser />
  );

  return content;
};

export default FavoritesPage;
