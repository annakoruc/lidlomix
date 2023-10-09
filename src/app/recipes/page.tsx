"use client";

import { RecipeCard } from "@/components/UI";
import { exampleRecipes } from "@/data/exampleRecipes";
import { Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "../../styles/scss/recipesListStyle.scss";
import { RecipeProps } from "@/types/RecipeProps";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRandomRecipes } from "@/redux/features/getRecipesFromApiSlice";

const RecipesPage = () => {
  const { loading, randomRecipes } = useAppSelector(
    (state) => state.apiRecipes
  );

  return (
    <Box className="all-recipes-box">
      {/* TODO change exampleRecipes to data from API! */}
      {/* TODO change masonry to masonry from MUI !*/}
      {loading ? (
        <div>Loading</div>
      ) : (
        randomRecipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))
      )}
    </Box>
  );
};

export default RecipesPage;
