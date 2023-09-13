"use client";

import { NavigateButton } from "@/components/UI";

import LogoSvg from "@/assets/LogoSvg";
import { Box } from "@mui/material";
import { BoxFlexComponent } from "@/components/layouts";
import { useEffect } from "react";
import { getRecipeByName } from "@/axios/getRecipeByName";
import { getSimilarRecipes } from "@/axios/getSimilarRecipes";

export default function Home() {
  const recipes = getSimilarRecipes("8138");
  // useEffect(() => {
  //   getRecipeByName("chicken");
  // }, []);
  return (
    <BoxFlexComponent>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <NavigateButton href={"/login"} title="Login" variant="contained" />
        <NavigateButton href={"/sign-up"} title="Sign Up" variant="outlined" />
      </Box>
      {/* {recipes} */}
    </BoxFlexComponent>
  );
}
