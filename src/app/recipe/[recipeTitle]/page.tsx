/* eslint-disable @next/next/no-img-element */
"use client";

import { RecipeBackground } from "@/components";
import { Box, IconButton, Typography } from "@mui/material";

import { FC } from "react";
import { Icon } from "@iconify/react";

import { InfoCardInRecipe, ScrollableTabs } from "@/components/recipe";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import {
  addToFavorites,
  deleteFromFavorites,
} from "@/redux/features/favoriteRecipesSlice";

interface pageProps {
  params: { recipeTitle: string };
}

const Recipe: FC<pageProps> = ({ params }) => {
  const recipe = useAppSelector((state) => state.recipe.currentRecipe);
  const loading = useAppSelector((state) => state.recipe.loading);
  //TODO make custom hook from useDispatch and setRecipesAsFavorite or component with heart button
  const dispatch = useDispatch<AppDispatch>();
  const isFavoriteRecipe = useAppSelector((state) =>
    state.favoriteRecipes.recipes.includes(recipe)
  );

  const setRecipeAsFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    isFavoriteRecipe
      ? dispatch(deleteFromFavorites(recipe))
      : dispatch(addToFavorites(recipe));
  };

  console.log(JSON.stringify(recipe.nutrition) === "{}");
  return (
    <>
      {!loading && (
        <Box sx={{ display: "grid", height: "100%", width: "100vw" }}>
          <img
            src={recipe.thumbnail_url}
            alt="image"
            width="100%"
            style={{ position: "absolute", top: 0, left: 0, zIndex: -3 }}
          />
          <RecipeBackground>
            <IconButton
              sx={{
                position: "absolute",
                padding: 0,
                top: "0.5rem",
                right: "2rem",
              }}
              onClick={setRecipeAsFavorite}
            >
              <Icon
                icon="mdi:heart"
                color={isFavoriteRecipe ? "orange" : "white"}
                style={{
                  fontSize: 32,
                }}
              />
            </IconButton>

            <Box sx={{ padding: "38px 32px 0 32px" }}>
              <Typography
                variant="h5"
                sx={{ fontSize: "22px", fontWeight: 800, width: "60%" }}
              >
                {recipe.name}
              </Typography>
              <Box
                sx={{
                  width: 1,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <InfoCardInRecipe
                  text={
                    recipe.total_time_minutes
                      ? `${recipe.total_time_minutes} min`
                      : ""
                  }
                >
                  <Icon icon="ion:time" />
                </InfoCardInRecipe>
                <InfoCardInRecipe text={`${recipe.num_servings} services`}>
                  <Icon icon="fluent:people-16-filled" />
                </InfoCardInRecipe>
                {/* TODO thin about what to add here */}
                <InfoCardInRecipe text="">
                  <Icon icon="mdi:cook" />
                </InfoCardInRecipe>
                <InfoCardInRecipe
                  text={
                    recipe.nutrition &&
                    JSON.stringify(recipe.nutrition) !== "{}"
                      ? `${recipe.nutrition.calories} kcal`
                      : ""
                  }
                >
                  <Icon icon="ant-design:fire-filled" />
                </InfoCardInRecipe>
              </Box>
            </Box>
            <ScrollableTabs />
          </RecipeBackground>
        </Box>
      )}
    </>
  );
};

export default Recipe;
