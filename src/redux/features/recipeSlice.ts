import { RecipeProps } from "@/types/RecipeProps";
import {
  createSlice,
  createAction,
  PayloadAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";

type recipeState = { loading: boolean; currentRecipe: RecipeProps };

const initialState: recipeState = {
  loading: true,
  currentRecipe: {
    name: "",
    thumbnail_url: "",
    instructions: [{ id: 0, position: 0, display_text: "string" }],
    sections: [
      {
        components: [
          {
            id: 0,
            raw_text: "",
            ingredient: { name: "", id: 0 },
          },
        ],
      },
    ],
  },
};

export const setCurrentRecipe = createAsyncThunk(
  "recipe/set",
  (recipe: RecipeProps) => {
    return recipe;
  }
);

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setCurrentRecipe.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(setCurrentRecipe.fulfilled, (state, action) => {
      state.loading = false;
      state.currentRecipe = action.payload;
    });
    builder.addCase(setCurrentRecipe.rejected, (state, action) => {
      state.loading = false;
      console.log("rejected", action.error);
    });
  },
});

export default recipeSlice.reducer;
