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
  },
});

export const { setRecipeShoppingList } = shoppingListSlice.actions;

export default shoppingListSlice.reducer;
