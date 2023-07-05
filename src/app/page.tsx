"use client";

import { BoxFlexComponent, NavigateButton } from "@/components/UI";

import LogoSvg from "@/assets/LogoSvg";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <BoxFlexComponent>
      <LogoSvg />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <NavigateButton href={"/login"} title="Login" variant="contained" />
        <NavigateButton href={"/sign-up"} title="Sign Up" variant="outlined" />
      </Box>
    </BoxFlexComponent>
  );
}
