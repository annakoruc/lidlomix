/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import { Box, Card, Typography } from "@mui/material";
import { RatingComponent } from "./RatingComponent";
import { IconHeart } from "@/assets";
import { useRouter } from "next/navigation";
import { RecipeProps } from "@/types/RecipeProps";
import { AppDispatch } from "@/redux/store";
import { setCurrentRecipe } from "@/redux/features/recipeSlice";
import { useDispatch } from "react-redux";

interface RecipeType {
  recipe: RecipeProps;
}

export const RecipeCard = ({ recipe }: RecipeType) => {
  const router = useRouter();
  // let recipeContext = useContext(RecipeContext);
  const dispatch = useDispatch<AppDispatch>();

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
      onClick={() => {
        dispatch(setCurrentRecipe(recipe));
        router.push(`/recipe/${recipePath}`);
      }}
    >
      <img
        src={recipe.thumbnail_url}
        alt="recipeImage"
        width="100%"
        style={{ borderRadius: 8 }}
      />
      <Box sx={{ position: "absolute", top: 16, right: 16 }}>
        <IconHeart />
      </Box>
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
