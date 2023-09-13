import { Box, List, ListItemText, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { TabPanel } from "./TabPanel";
import { IngredientsList } from "./IngredientsList";
import { NavigateButton } from "../UI/NavigateButton";
import { DirectionsText } from "./DirectionsText";
import { NutritionList } from "./NutritionList";

export const ScrollableTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100vw",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs"
      >
        <Tab label="Ingredients" />
        <Tab label="Directions" />
        <Tab label="My notes" />
        <Tab label="Nutrition" />
        <Tab label="Opinions" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <IngredientsList />

        <NavigateButton variant="outlined" title="save all to shopping list" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DirectionsText />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>Page under construction 🐌</Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <NutritionList />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Typography>Page under construction 🐌</Typography>
      </TabPanel>
    </Box>
  );
};
