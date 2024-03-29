"use client";
import { NotLoggedUser } from "@/components";
import { IngredientsListForm, NavigateButton } from "@/components/UI";
import { TabPanel } from "@/components/recipe";
import { useAppSelector } from "@/redux/store";
import { themeVariables } from "@/styles/themes/themeVariables";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

const ShoppingListPage = () => {
  const shoppingList = useAppSelector(
    (state) => state.shoppingList.recipesList
  );
  const loggedUser = useAppSelector((store) => store.loggedUser.user);
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const content = loggedUser ? (
    <Box sx={{ padding: 0, height: "calc(100% - 66px)", marginBottom: "70px" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{
          bgcolor: themeVariables.colors.white,
        }}
        centered
        scrollButtons="auto"
        aria-label="scrollable auto tabs"
      >
        <Tab label="ALL INGREDIENTS" />
        <Tab label="RECIPES INGREDIENTS" />
      </Tabs>
      <TabPanel value={value} index={0}>
        {shoppingList.length !== 0 ? (
          <IngredientsListForm tabNumber={value} shoppingList={shoppingList} />
        ) : (
          <Typography>
            You don`t have any ingredients in shopping list. Add some from
            recipe
          </Typography>
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {shoppingList.length !== 0 ? (
          <IngredientsListForm tabNumber={value} shoppingList={shoppingList} />
        ) : (
          <Typography>
            You don`t have any ingredients in shopping list. Add some from
            recipe
          </Typography>
        )}
      </TabPanel>
    </Box>
  ) : (
    <NotLoggedUser />
  );

  return content;
};

export default ShoppingListPage;
