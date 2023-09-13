import React, { useId } from "react";
import { BottomNavigationAction, BottomNavigation } from "@mui/material";
import {
  IconCalender,
  IconFavorites,
  IconSearch,
  IconRecipes,
  IconList,
} from "@/assets";
import { BottomNavButtonsProps } from "@/types/BottomNavButtonsProps";

const bottomNavButtons: BottomNavButtonsProps = [
  { id: "1B", label: "Recipes", value: "Recipes", icon: <IconRecipes /> },
  { id: "2B", label: "Search", value: "Search", icon: <IconSearch /> },
  { id: "3B", label: "Favorites", value: "Favorites", icon: <IconFavorites /> },
  { id: "4B", label: "List", value: "List", icon: <IconList /> },
  { id: "5B", label: "Calender", value: "Calender", icon: <IconCalender /> },
];
export const BottomNavigationComponent = () => {
  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        boxShadow: "0px 0px 10px 0px rgba(12, 48, 72, 0.06)",
        // bgcolor: "rgba(100, 100, 30, 0.06)",
      }}
    >
      {bottomNavButtons.map((button) => (
        <BottomNavigationAction
          key={button.id}
          label={button.label}
          value={button.value}
          icon={button.icon}
        />
      ))}
    </BottomNavigation>
  );
};
