/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import { Box, Card, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";

import { setCurrentRecipeId } from "@/redux/features/recipeIdSlice";
import { RecipeProps } from "@/types";
import { AddToFavoriteHeart } from "../recipe";

interface RecipeType {
  recipe: RecipeProps;
}

export const RecipeCard = ({ recipe }: RecipeType) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  let recipePath = recipe.name.replaceAll(" ", "-");

  const setChosenRecipe = () => {
    dispatch(setCurrentRecipeId(recipe.id));
    router.push(`/recipe/${recipePath}`);
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

      <AddToFavoriteHeart
        style={{ position: "absolute", top: 8, right: 8 }}
        iconSize="20px"
        recipe={recipe}
      />
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
          {recipe.name}
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
