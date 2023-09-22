"use client";

import { AppDispatch, useAppSelector } from "@/redux/store";
import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { NavigateButton } from "../UI";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { recipeShoppingListProps } from "@/types/recipeShoppingListProps";
import { setRecipeShoppingList } from "@/redux/features/shoppingListSlice";

export const IngredientsList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const recipeTitle = useAppSelector(
    (state) => state.recipe.currentRecipe.name
  );
  const ingredients = useAppSelector(
    (state) => state.recipe.currentRecipe.sections[0]
  );

  return (
    <Formik
      initialValues={{ shoppingList: [] }}
      onSubmit={(values) => {
        const recipe: recipeShoppingListProps = {
          recipeTitle: recipeTitle,
          ingredients: values.shoppingList,
        };
        dispatch(setRecipeShoppingList(recipe));
      }}
    >
      {({ values }) => (
        <Form style={{ display: "flex", flexDirection: "column" }}>
          {ingredients.components.map((ingredient) => {
            const labelId = `checkbox-list-label-${ingredient.id}`;
            const description =
              ingredient.raw_text === "n/a"
                ? ingredient.ingredient?.name
                : ingredient.raw_text;

            return (
              <Field
                key={labelId}
                type="checkbox"
                name="shoppingList"
                as={FormControlLabel}
                control={<Checkbox />}
                value={description}
                label={description}
              />
            );
          })}
          <NavigateButton
            sx={{ margin: "8px 32px" }}
            variant="outlined"
            title="save all to shopping list"
            type="submit"
          />
        </Form>
      )}
    </Formik>
  );
};
