"use client";

import { NavigateButton } from "@/components/UI";

import LogoSvg from "@/assets/LogoSvg";
import { Box } from "@mui/material";
import { BoxFlexComponent } from "@/components/layouts";

export default function Home() {
  return (
    <BoxFlexComponent>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <NavigateButton href={"/login"} title="Login" variant="contained" />
        <NavigateButton href={"/sign-up"} title="Sign Up" variant="outlined" />
      </Box>
    </BoxFlexComponent>
  );
}
