import { ingredientToDeleteProps } from "@/types/ingredientToDeleteProps";
import { recipeShoppingListProps } from "@/types/recipeShoppingListProps";
import { shoppingListProps } from "@/types/shoppingListProps";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: shoppingListProps = {
  recipesList: [],
};

const shoppingListSlice = createSlice({
  name: "pageTitle",
  initialState,
  reducers: {
    setRecipeShoppingList: (
      state,
      action: PayloadAction<recipeShoppingListProps>
    ) => {
      if (
        state.recipesList.some(
          (recipe) => recipe["recipeTitle"] === action.payload.recipeTitle
        )
      ) {
        state.recipesList.forEach((recipe) => {
          if (recipe.recipeTitle === action.payload.recipeTitle) {
            recipe.ingredients.concat(action.payload.ingredients);
          }
        });
      } else {
        state.recipesList.push(action.payload);
      }
    },
    deleteIngredientsFromShoppingList: (
      state,
      action: PayloadAction<ingredientToDeleteProps>
    ) => {
      const deletedIngredients = Object.keys(action.payload);

      deletedIngredients.forEach((recipe) => {
        const ingredientsToDelete = new Set(action.payload[recipe]);

        state.recipesList.forEach((recipeInState, stateRecipeIndex) => {
          if (recipeInState.recipeTitle === recipe) {
            recipeInState.ingredients = recipeInState.ingredients.filter(
              (ingredient) => !ingredientsToDelete.has(ingredient)
            );
          }
        });
      });

      state.recipesList = state.recipesList.filter(
        (recipe) => recipe.ingredients.length !== 0
      );
    },
  },
});

export const { setRecipeShoppingList, deleteIngredientsFromShoppingList } =
  shoppingListSlice.actions;

export default shoppingListSlice.reducer;
