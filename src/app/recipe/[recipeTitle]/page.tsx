/* eslint-disable @next/next/no-img-element */
"use client";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";

import { Box, Typography } from "@mui/material";

import { RecipeBackground } from "@/components";
import {
  AddToFavoriteHeart,
  InfoCardInRecipe,
  ScrollableTabs,
} from "@/components/recipe";
import { getRecipeById } from "@/redux/features/getRecipesFromApiSlice";
import {
  mdiAccountMultiple,
  mdiChefHat,
  mdiClockTimeFour,
  mdiFire,
} from "@mdi/js";
import Icon from "@mdi/react";

interface pageProps {
  params: { recipeTitle: string };
}

const Recipe: FC<pageProps> = ({ params }) => {
  const recipeId = useAppSelector((state) => state.recipeId.currentRecipeId);
  const dispatch = useDispatch<AppDispatch>();
  const { loading, currentRecipe } = useAppSelector(
    (state) => state.apiRecipes
  );

  useEffect(() => {
    dispatch(getRecipeById(recipeId));
  }, [dispatch, recipeId]);

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <Box sx={{ display: "grid", height: "100%", width: "100vw" }}>
          <img
            src={
              currentRecipe.image
                ? currentRecipe.image
                : "/images/recipeWithoutImage.png"
            }
            alt="image"
            width="100%"
            style={{ position: "absolute", top: 0, left: 0, zIndex: -3 }}
          />
          <RecipeBackground>
            <AddToFavoriteHeart
              style={{
                position: "absolute",
                padding: 0,
                top: "0.5rem",
                right: "2rem",
              }}
              iconSize="32px"
              recipe={currentRecipe}
            />

            <Box sx={{ padding: "38px 32px 0 32px" }}>
              <Typography
                variant="h5"
                sx={{ fontSize: "22px", fontWeight: 800, width: "60%" }}
              >
                {currentRecipe.name}
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
                    currentRecipe.prepTime && `${currentRecipe.prepTime} min`
                  }
                >
                  <Icon path={mdiClockTimeFour} size={1} />
                </InfoCardInRecipe>
                <InfoCardInRecipe text={`${currentRecipe.servings} services`}>
                  <Icon path={mdiAccountMultiple} size={1} />
                </InfoCardInRecipe>
                {/* TODO thin about what to add here */}
                <InfoCardInRecipe text="">
                  <Icon path={mdiChefHat} size={1} />
                </InfoCardInRecipe>
                <InfoCardInRecipe text={currentRecipe.nutrition.calories}>
                  <Icon path={mdiFire} size={1} />
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
