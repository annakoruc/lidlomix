"use client";

import { AppDispatch, useAppSelector } from "@/redux/store";
import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useState } from "react";
import { NavigateButton, PopupDialog } from "../UI";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { recipeShoppingListProps } from "@/types/recipeShoppingListProps";
import { setRecipeShoppingList } from "@/redux/features/shoppingListSlice";

export const IngredientsList = () => {
  const [openedDialog, setOpenedDialog] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const recipeTitle = useAppSelector(
    (state) => state.recipe.currentRecipe.name
  );
  const ingredients = useAppSelector(
    (state) => state.recipe.currentRecipe.sections[0]
  );

  const closePopupDialog = () => {
    setOpenedDialog(false);
  };

  return (
    <Formik
      initialValues={{ shoppingList: [] }}
      onSubmit={(values) => {
        const recipe: recipeShoppingListProps = {
          recipeTitle: recipeTitle,
          ingredients: values.shoppingList,
        };
        dispatch(setRecipeShoppingList(recipe));
        setOpenedDialog(true);
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
            sx={{ margin: "32px" }}
            variant="outlined"
            title="save all to shopping list"
            type="submit"
          />
          <PopupDialog
            openDialog={openedDialog}
            closeDialog={closePopupDialog}
            text={"Ingredients added to shopping list"}
          />
        </Form>
      )}
    </Formik>
  );
};
