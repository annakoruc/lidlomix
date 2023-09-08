"use client";

import { RecipeCard } from "@/components/UI";
import { BoxWithNaves } from "@/components/layouts";
import { Box } from "@mui/material";

const AllRecipes = () => {
  return (
    <BoxWithNaves>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 180px)",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          marginBottom: 2,
        }}
      >
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </Box>
    </BoxWithNaves>
  );
};

export default AllRecipes;
