import React, { useId, useState } from "react";
import { BottomNavigationAction, BottomNavigation } from "@mui/material";
import {
  IconCalender,
  IconFavorites,
  IconSearch,
  IconRecipes,
  IconList,
} from "@/assets";
import { BottomNavButtonsProps } from "@/types/BottomNavButtonsProps";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { themeVariables } from "@/styles/themes/themeVariables";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { setCurrentPageTitle } from "@/redux/features/pageTitleSlice";

const bottomNavButtons: BottomNavButtonsProps = [
  {
    id: "1B",
    label: "Recipes",
    value: "recipes",
    icon: <Icon icon="material-symbols:cookie-rounded" />,
  },
  {
    id: "2B",
    label: "Search",
    value: "search",
    icon: <Icon icon="ri:search-2-fill" />,
  },
  {
    id: "3B",
    label: "Favorites",
    value: "favorites",
    icon: <Icon icon="mdi:book-favorite" />,
  },
  {
    id: "4B",
    label: "Shopping List",
    value: "shopping-list",
    icon: <Icon icon="ri:file-list-3-fill" />,
  },
  {
    id: "5B",
    label: "Calender",
    value: "calender",
    icon: <Icon icon="fluent:calendar-28-filled" />,
  },
];
export const BottomNavigationComponent = () => {
  const [selectedAction, setSelectedAction] = useState(0);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        boxShadow: "0px 0px 10px 0px rgba(12, 48, 72, 0.06)",

        // gap: 2,
      }}
      onChange={(event, newValue) => {
        setSelectedAction(newValue);
      }}
      value={selectedAction}
    >
      {bottomNavButtons.map((button) => (
        <BottomNavigationAction
          showLabel={false}
          key={button.id}
          label={button.label}
          value={button.value}
          icon={button.icon}
          sx={{ fontSize: "30px", fill: themeVariables.colors.icons }}
          onClick={() => {
            dispatch(setCurrentPageTitle(button.label));
            router.push(button.value);
          }}
        />
      ))}
    </BottomNavigation>
  );
};
