import React, { useState } from "react";

import { NavMenu } from ".";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { IconSearch } from "@/assets";

export const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "transparent",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          maxWidth: "xl",
          alignSelf: "center",
          padding: 3,
        }}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {"All Recipes".toUpperCase()}
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <IconSearch color="white" scale={0.5} />
          <NavMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
