"use client";

import { RecipeCard } from "@/components/UI";
import { Box } from "@mui/material";
import "../../styles/scss/recipesListStyle.scss";
import { useAppSelector } from "@/redux/store";

const RecipesPage = () => {
  const { loading, randomRecipes } = useAppSelector(
    (state) => state.apiRecipes
  );
  const user = useAppSelector((state) => state.loggedUser.user);

  console.log("no jest user", user);

  return (
    <Box className="all-recipes-box">
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
