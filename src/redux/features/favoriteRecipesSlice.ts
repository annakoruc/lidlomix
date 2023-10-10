import { RecipeProps, shortRecipeProps } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type favState = { loading: boolean; recipes: RecipeProps[] };

const initialState: favState = { loading: false, recipes: [] };

const favoriteRecipesSlice = createSlice({
  name: "pageTitle",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<RecipeProps>) => {
      if (state.recipes.some((recipe) => recipe["id"] === action.payload.id))
        return;
      state.recipes.push(action.payload);
    },

    deleteFromFavorites: (state, action: PayloadAction<RecipeProps>) => {
      if (state.recipes.some((recipe) => recipe["id"] === action.payload.id)) {
        const newFavRecipes = state.recipes.filter((recipe) => {
          return recipe.id !== action.payload.id;
        });

        state.recipes = newFavRecipes;
      }
    },
  },
});

export const { addToFavorites, deleteFromFavorites } =
  favoriteRecipesSlice.actions;

export default favoriteRecipesSlice.reducer;
