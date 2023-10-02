"use client";

import { RecipeCard } from "@/components/UI";
import { exampleRecipes } from "@/data/exampleRecipes";
import { Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "../../styles/scss/recipesListStyle.scss";
import { RecipeProps } from "@/types/RecipeProps";

const RecipesPage = () => {
  return (
    <Box className="all-recipes-box">
      {/* TODO change exampleRecipes to data from API! */}
      {/* TODO change masonry to masonry from MUI !*/}
      {exampleRecipes.results.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.id} />
      ))}
    </Box>
  );
};

export default RecipesPage;
