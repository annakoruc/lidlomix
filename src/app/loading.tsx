"use client";

import LogoSvg from "@/assets/LogoSvg";
import { BoxFlexComponent } from "@/components/layouts";
import { themeVariables } from "@/styles/themes/themeVariables";
import { Box } from "@mui/material";
import React from "react";
import { Rings } from "react-loader-spinner";

const Loading = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: `calc(100vh - ${themeVariables.heights.bottomNavBar} - ${themeVariables.heights.navbar})`,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LogoSvg />
      <Rings
        height="80"
        width="80"
        color={themeVariables.colors.darkblue}
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </Box>
  );
};

export default Loading;
