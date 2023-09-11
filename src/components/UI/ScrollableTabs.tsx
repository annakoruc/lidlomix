import { Tab, Tabs } from "@mui/material";
import React from "react";
import { TabPanel } from "./TabPanel";

export const ScrollableTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
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
        Coś
      </TabPanel>
      <TabPanel value={value} index={4}>
        Coś 2
      </TabPanel>
    </>
  );
};
