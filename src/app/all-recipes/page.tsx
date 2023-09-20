"use client";

import { RecipeCard } from "@/components/UI";
import { BoxWithNaves } from "@/components/layouts";
import { exampleRecipes } from "@/data/exampleRecipes";
import { Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./pageStyle.scss";
import { RecipeProps } from "@/types/RecipeProps";

const AllRecipes = () => {
  return (
    <BoxWithNaves>
      <Box className="all-recipes-box">
        {/* TODO change exampleRecipes to data from API! */}
        {exampleRecipes.results.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </Box>
    </BoxWithNaves>
  );
};

export default AllRecipes;
