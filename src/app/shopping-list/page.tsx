"use client";
import { NavigateButton, PopupDialog } from "@/components/UI";
import { TabPanel } from "@/components/recipe";
import { useAppSelector } from "@/redux/store";
import { themeVariables } from "@/styles/themes/themeVariables";
import { ingredientToDeleteProps } from "@/types/ingredientToDeleteProps";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import useId from "@mui/material/utils/useId";
import { Field, Form, Formik } from "formik";
import { useState } from "react";

const ShoppingListPage = () => {
  const generateId = useId();
  const shoppingList = useAppSelector(
    (state) => state.shoppingList.recipesList
  );
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ height: "100%", padding: 0 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{ bgcolor: themeVariables.colors.white }}
        centered
        scrollButtons="auto"
        aria-label="scrollable auto tabs"
      >
        <Tab label="ALL INGREDIENTS" />
        <Tab label="RECIPES INGREDIENTS" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Formik
          initialValues={{ ingredientsToDelete: [] }}
          onSubmit={(values) => console.log(values.ingredientsToDelete)}
        >
          {({ values }) => (
            <Form
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "8px 16px",
              }}
            >
              {shoppingList.map((recipe) => (
                <div
                  key={generateId}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {recipe.ingredients.map((ingredient, index) => (
                    <Field
                      key={index}
                      type="checkbox"
                      name="ingredientToDelete"
                      as={FormControlLabel}
                      control={<Checkbox />}
                      value={ingredient}
                      label={ingredient}
                    />
                  ))}
                </div>
              ))}
              {/* TODO display when will be connect with firebase */}

              {/* <NavigateButton
                sx={{ margin: "32px" }}
                variant="outlined"
                title="delete from Shopping List"
                type="submit"
                onClick={handleAddItem}
              /> */}
            </Form>
          )}
        </Formik>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Formik
          initialValues={{ ingredientToDelete: [] }}
          onSubmit={console.log}
        >
          {({ values }) => (
            <Form style={{ display: "flex", flexDirection: "column" }}>
              {shoppingList.map((recipe) => (
                <div
                  key={generateId}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      bgcolor: themeVariables.colors.lightblue,
                      fontSize: "16px",
                      padding: "4px 16px",
                    }}
                  >
                    {recipe.recipeTitle}
                  </Typography>

                  {recipe.ingredients.map((ingredient, index) => (
                    <Field
                      key={index}
                      style={{ padding: "2px 16px" }}
                      type="checkbox"
                      name="ingredientToDelete"
                      as={FormControlLabel}
                      control={<Checkbox />}
                      // value={{
                      //   title: recipe.recipeTitle,
                      //   ingredientToDelete: ingredient,
                      // }}
                      value={ingredient}
                      label={ingredient}
                    />
                  ))}
                </div>
              ))}
              {/* TODO display when will be connect with firebase */}
              {/* <NavigateButton
                sx={{ margin: "32px" }}
                variant="outlined"
                title="delete from Shopping List"
                type="submit"
                onClick={handleAddItem}
              /> */}
            </Form>
          )}
        </Formik>
      </TabPanel>
    </Box>
  );
};

export default ShoppingListPage;
