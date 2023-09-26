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

  const tabPanelStyle = {
    overflowY: "scroll",
    height: "250px",
    padding: "16px",
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
      <TabPanel style={tabPanelStyle} value={value} index={0}>
        <IngredientsList />
      </TabPanel>
      <TabPanel style={tabPanelStyle} value={value} index={1}>
        <DirectionsText />
      </TabPanel>
      <TabPanel style={tabPanelStyle} value={value} index={2}>
        <Typography>Page under construction 🐌</Typography>
      </TabPanel>
      <TabPanel style={tabPanelStyle} value={value} index={3}>
        <NutritionList />
      </TabPanel>
      <TabPanel style={tabPanelStyle} value={value} index={4}>
        <Typography>Page under construction 🐌</Typography>
      </TabPanel>
    </Box>
  );
};
