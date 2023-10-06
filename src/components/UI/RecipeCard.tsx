/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import { Box, Card, IconButton, Typography } from "@mui/material";
import { RatingComponent } from "./RatingComponent";
import { IconHeart } from "@/assets";
import { useRouter } from "next/navigation";

import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { Icon } from "@iconify/react";
import {
  addToFavorites,
  deleteFromFavorites,
} from "@/redux/features/favoriteRecipesSlice";
import { setCurrentRecipeId } from "@/redux/features/recipeIdSlice";
import { shortRecipeProps } from "@/types";

interface RecipeType {
  // TODO change type od recipe
  recipe: shortRecipeProps;
}

export const RecipeCard = ({ recipe }: RecipeType) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const isFavoriteRecipe = useAppSelector((state) =>
    state.favoriteRecipes.recipes.includes(recipe)
  );

  let recipePath = recipe.title.replaceAll(" ", "-");

  const setChosenRecipe = () => {
    dispatch(setCurrentRecipeId(recipe.id));
    router.push(`/recipe/${recipePath}`);
  };

  const setRecipeAsFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    isFavoriteRecipe
      ? dispatch(deleteFromFavorites(recipe))
      : dispatch(addToFavorites(recipe));
  };

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
        marginBottom: 2,
      }}
      onClick={setChosenRecipe}
    >
      <img
        src={recipe.image ? recipe.image : "/images/recipeWithoutImage.png"}
        alt="recipeImage"
        width="100%"
        style={{ borderRadius: 8 }}
      />
      <IconButton
        sx={{ position: "absolute", top: 8, right: 8 }}
        onClick={setRecipeAsFavorite}
      >
        <Icon
          icon="mdi:heart"
          color={isFavoriteRecipe ? "orange" : "white"}
          style={{
            fontSize: 20,
          }}
        />
      </IconButton>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: 0.5,
          gap: 0.5,
        }}
      >
        <Typography sx={{ fontWeight: "bold", lineHeight: 1 }}>
          {recipe.title}
        </Typography>
        <Typography
          sx={{
            alignSelf: "flex-start",
            fontSize: "12px",
            color: "primary.light",
          }}
        >
          {recipe.prepTime} min
          {/*TODO add difficulty?  */}
        </Typography>
        {/* TODO add rating on cards ! */}
        {/* <RatingComponent /> */}
      </Box>
    </Card>
  );
};
