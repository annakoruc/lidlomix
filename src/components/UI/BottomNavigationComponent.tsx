import React from "react";
import { BottomNavigationAction, BottomNavigation } from "@mui/material";
import {
  IconCalender,
  IconFavorites,
  IconSearch,
  IconRecipes,
  IconList,
} from "@/assets";

export const BottomNavigationComponent = () => {
  return (
    <BottomNavigation sx={{ width: "100%", position: "fixed", bottom: 0 }}>
      <BottomNavigationAction
        label="Recipes"
        value="Recipes"
        icon={<IconRecipes />}
      />
      <BottomNavigationAction
        label="Search"
        value="Search"
        icon={<IconSearch />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="Favorites"
        icon={<IconFavorites />}
      />
      <BottomNavigationAction label="List" value="List" icon={<IconList />} />
      <BottomNavigationAction
        label="Calender"
        value="Calender"
        icon={<IconCalender />}
      />
    </BottomNavigation>
  );
};
