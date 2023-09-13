/* eslint-disable @next/next/no-img-element */
"use client";

import { RecipeBackground } from "@/components";
import { BoxWithNaves } from "@/components/layouts";
import { Box, Typography } from "@mui/material";

import { FC } from "react";
import { Icon } from "@iconify/react";

import { InfoCardInRecipe, ScrollableTabs } from "@/components/recipe";

interface pageProps {
  params: { recipeTitle: string };
}

const Recipe: FC<pageProps> = ({ params }) => {
  return (
    <BoxWithNaves>
      <Box sx={{ display: "grid", height: "100%", width: "100vw" }}>
        <img
          src="/images/raspberryCake.png"
          alt="image"
          width="100%"
          style={{ position: "absolute", top: 0, left: 0, zIndex: -3 }}
        />
        <RecipeBackground>
          <Icon
            icon="mdi:heart"
            style={{
              color: "white",
              fontSize: 32,
              position: "absolute",
              right: "2rem",
              top: "0.5rem",
            }}
          />

          <Box sx={{ padding: "38px 32px 0 32px" }}>
            <Typography
              variant="h5"
              sx={{ fontSize: "22px", fontWeight: 800, width: "60%" }}
            >
              Raspberry cake with cream
            </Typography>
            <Box
              sx={{
                width: 1,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <InfoCardInRecipe text="30min">
                <Icon icon="ion:time" />
              </InfoCardInRecipe>
              <InfoCardInRecipe text="10 services">
                <Icon icon="fluent:people-16-filled" />
              </InfoCardInRecipe>
              <InfoCardInRecipe text="easy">
                <Icon icon="mdi:cook" />
              </InfoCardInRecipe>
              <InfoCardInRecipe text="100kcal">
                <Icon icon="ant-design:fire-filled" />
              </InfoCardInRecipe>
            </Box>
          </Box>
          <ScrollableTabs />
        </RecipeBackground>
      </Box>
    </BoxWithNaves>
  );
};

export default Recipe;
