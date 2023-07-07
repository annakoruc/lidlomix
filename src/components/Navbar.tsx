import React, { useState } from "react";

import { NavMenu } from "./UI";
import { AppBar, Toolbar, Typography } from "@mui/material";

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ width: "100%", maxWidth: "xl", alignSelf: "center" }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          All Recipes
        </Typography>
        <div>
          <p>S</p>
          <NavMenu />
        </div>
      </Toolbar>
    </AppBar>
  );
};
