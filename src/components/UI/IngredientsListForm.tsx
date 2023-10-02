import { themeVariables } from "@/styles/themes/themeVariables";
import { recipeShoppingListProps } from "@/types/recipeShoppingListProps";
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { FastField, Field, FieldArray, Form, Formik } from "formik";
import React, { useId } from "react";
import { NavigateButton } from "./NavigateButton";
import { deleteIngredientsFromShoppingList } from "@/redux/features/shoppingListSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { stringify } from "querystring";

export const IngredientsListForm = ({
  shoppingList,
  tabNumber,
}: {
  shoppingList: recipeShoppingListProps[];
  tabNumber: number;
}) => {
  const generateId = useId();
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Formik
      initialValues={{ ingredientsToDelete: {} }}
      onSubmit={(values) => {
        dispatch(deleteIngredientsFromShoppingList(values.ingredientsToDelete));
        console.log("values", values.ingredientsToDelete);
      }}
    >
      {({ values }) => (
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 0,
          }}
        >
          {shoppingList.map((recipe, recipeIndex) => (
            <Box
              role="group"
              key={`${recipe.recipeTitle}-list-key`}
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
                  name={`ingredientsToDelete.${recipe.recipeTitle}`}
                  as={FormControlLabel}
                  control={<Checkbox />}
                  value={ingredient}
                  label={ingredient}
                  style={{ padding: "4px 16px" }}
                />
              ))}
            </Box>
          ))}

          <NavigateButton
            sx={{ margin: "32px" }}
            variant="outlined"
            title="delete from Shopping List"
            type="submit"
          />
        </Form>
      )}
    </Formik>
  );
};
