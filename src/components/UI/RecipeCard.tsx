/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import { Box, Card, IconButton, Typography } from "@mui/material";
import { RatingComponent } from "./RatingComponent";
import { IconHeart } from "@/assets";
import { useRouter } from "next/navigation";
import { RecipeProps } from "@/types/RecipeProps";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { setCurrentRecipe } from "@/redux/features/recipeSlice";
import { useDispatch } from "react-redux";
import { Icon } from "@iconify/react";
import {
  addToFavorites,
  deleteFromFavorites,
} from "@/redux/features/favoriteRecipesSlice";

interface RecipeType {
  // TODO change type od recipe
  recipe: any;
}

export const RecipeCard = ({ recipe }: RecipeType) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const isFavoriteRecipe = useAppSelector((state) =>
    state.favoriteRecipes.recipes.includes(recipe)
  );

  let recipePath = recipe.name.replaceAll(" ", "-");

  let cookTime = () => {
    if (recipe.total_time_minutes) {
      return `${recipe.total_time_minutes} min`;
    } else if (recipe.total_time_tier?.tier) {
      return `${recipe.total_time_tier?.tier}`;
    } else {
      return "";
    }
  };

  const setChosenRecipe = () => {
    dispatch(setCurrentRecipe(recipe));
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
        src={recipe.thumbnail_url}
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
          padding: 0.5,
          gap: 0.5,
        }}
      >
        <Typography sx={{ fontWeight: "bold", lineHeight: 1 }}>
          {recipe.name}
        </Typography>
        <Typography
          sx={{
            alignSelf: "flex-start",
            fontSize: "12px",
            color: "primary.light",
          }}
        >
          {cookTime()}
          {/*TODO add difficulty?  */}
        </Typography>
        {/* TODO add rating on cards ! */}
        <RatingComponent />
      </Box>
    </Card>
  );
};
