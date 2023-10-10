import { RecipeProps } from "@/types/RecipeProps";
import {
  createSlice,
  createAction,
  PayloadAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";

type recipeState = { loading: boolean; currentRecipe: RecipeProps[] };

const initialState: recipeState = {
  loading: true,
  currentRecipe: [],
};

export const getSomeRecipesFromApi = createAsyncThunk(
  "recipesFromApi/get",
  (recipe: RecipeProps) => {
    return recipe;
  }
);

const recipesFromApiSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {},
});

export default recipesFromApiSlice.reducer;
