import { Box, Typography } from "@mui/material";
import React from "react";
import { NavigateButton } from "./UI";
import { paths } from "@/utils/paths";
import { themeVariables } from "@/styles/themes/themeVariables";

export const NotLoggedUser = () => {
  return (
    <Box
      sx={{
        height: `calc(100vh - ${themeVariables.heights.bottomNavBar} - ${themeVariables.heights.navbar})`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 15,
      }}
    >
      <Typography variant="h5" color="white">
        Page only for logged User
      </Typography>
      <Box
        sx={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
        }}
      >
        <NavigateButton variant="contained" title="Login" href={paths.login} />
        <NavigateButton
          variant="contained"
          title="Sign Up"
          href={paths.signUp}
        />
      </Box>
    </Box>
  );
};
