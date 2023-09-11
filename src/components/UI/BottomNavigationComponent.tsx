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
  { label: "Recipes", value: "Recipes", icon: <IconRecipes /> },
  { label: "Search", value: "Search", icon: <IconSearch /> },
  {
    label: "Favorites",
    value: "Favorites",
    icon: <IconFavorites />,
  },
  { label: "List", value: "List", icon: <IconList /> },
  { label: "Calender", value: "Calender", icon: <IconCalender /> },
];
export const BottomNavigationComponent = () => {
  const id = useId();

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        boxShadow: "0px 0px 10px 0px rgba(12, 48, 72, 0.06)",
      }}
    >
      {bottomNavButtons.map((button) => (
        <BottomNavigationAction
          key={id}
          label={button.label}
          value={button.value}
          icon={button.icon}
        />
      ))}
    </BottomNavigation>
  );
};
