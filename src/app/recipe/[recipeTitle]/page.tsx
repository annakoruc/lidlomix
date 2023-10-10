/* eslint-disable @next/next/no-img-element */
"use client";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";

import { Box, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

import { RecipeBackground } from "@/components";
import {
  AddToFavoriteHeart,
  InfoCardInRecipe,
  ScrollableTabs,
} from "@/components/recipe";
import { getRecipeById } from "@/redux/features/getRecipesFromApiSlice";

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
                  <Icon icon="ion:time" />
                </InfoCardInRecipe>
                <InfoCardInRecipe text={`${currentRecipe.servings} services`}>
                  <Icon icon="fluent:people-16-filled" />
                </InfoCardInRecipe>
                {/* TODO thin about what to add here */}
                <InfoCardInRecipe text="">
                  <Icon icon="mdi:cook" />
                </InfoCardInRecipe>
                <InfoCardInRecipe text={currentRecipe.nutrition.calories}>
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
