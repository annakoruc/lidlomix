import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type recipeState = { loading: boolean; currentRecipeId: number };

const initialState: recipeState = {
  loading: true,
  currentRecipeId: 0,
};

const recipeIdSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setCurrentRecipeId: (state, action: PayloadAction<number>) => {
      state.currentRecipeId = action.payload;
    },
  },
});

export const { setCurrentRecipeId } = recipeIdSlice.actions;

export default recipeIdSlice.reducer;
