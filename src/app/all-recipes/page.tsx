"use client";

import { RecipeCard } from "@/components/UI";
import { BoxWithNaves } from "@/components/layouts";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";

const AllRecipes = () => {
  return (
    <BoxWithNaves>
      <Box
        sx={{
          height: "calc(100% - 56px)",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 45%)",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          marginBottom: "70px",
        }}
      >
        <RecipeCard title="Raspberry cake with cream" />
      </Box>
    </BoxWithNaves>
  );
};

export default AllRecipes;
