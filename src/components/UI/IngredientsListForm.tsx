import { themeVariables } from "@/styles/themes/themeVariables";
import { recipeShoppingListProps } from "@/types/recipeShoppingListProps";
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useId } from "react";

export const IngredientsListForm = ({
  shoppingList,
  tabNumber,
}: {
  shoppingList: recipeShoppingListProps[];
  tabNumber: number;
}) => {
  const generateId = useId();

  return (
    <Formik
      initialValues={{ ingredientsToDelete: [] }}
      onSubmit={(values) => console.log(values.ingredientsToDelete)}
    >
      {({ values }) => (
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 0,
          }}
        >
          {shoppingList.map((recipe) => (
            <Box
              key={generateId}
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: 0,
                position: "relative",
              }}
            >
              {tabNumber === 1 && (
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
              )}
              {recipe.ingredients.map((ingredient, index) => (
                <Field
                  key={index}
                  type="checkbox"
                  name="ingredientToDelete"
                  as={FormControlLabel}
                  control={<Checkbox />}
                  value={ingredient}
                  label={ingredient}
                  style={{ padding: "4px 16px" }}
                />
              ))}
            </Box>
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
  );
};
