import { shortRecipeProps } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type favState = { loading: boolean; recipes: shortRecipeProps[] };

const initialState: favState = { loading: false, recipes: [] };

const favoriteRecipesSlice = createSlice({
  name: "pageTitle",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<shortRecipeProps>) => {
      if (
        state.recipes.some((recipe) => recipe["title"] === action.payload.title)
      )
        return;
      state.recipes.push(action.payload);
    },

    deleteFromFavorites: (state, action: PayloadAction<shortRecipeProps>) => {
      if (
        state.recipes.some((recipe) => recipe["title"] === action.payload.title)
      ) {
        const newFavRecipes = state.recipes.filter((recipe) => {
          return recipe.title !== action.payload.title;
        });

        state.recipes = newFavRecipes;
      }
    },
  },
});

export const { addToFavorites, deleteFromFavorites } =
  favoriteRecipesSlice.actions;

export default favoriteRecipesSlice.reducer;
