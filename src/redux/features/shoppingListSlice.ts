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
      state.recipesList.push(action.payload);
    },
    deleteIngredientsFrmShoppingList: (
      state,
      action: PayloadAction<ingredientToDeleteProps>
    ) => {
      state.recipesList.forEach((recipe) => {
        if (recipe.recipeTitle === action.payload.title) {
          const newRecipeIngredients = recipe.ingredients.filter(
            (ingredient) => {
              ingredient !== action.payload.ingredientToDelete;
            }
          );
          recipe.ingredients = newRecipeIngredients;
        }
        if (recipe.ingredients.length === 0) {
          state.recipesList = state.recipesList.filter(
            (recipe) => recipe.recipeTitle !== action.payload.title
          );
        }
      });
    },
  },
});

export const { setRecipeShoppingList, deleteIngredientsFrmShoppingList } =
  shoppingListSlice.actions;

export default shoppingListSlice.reducer;
