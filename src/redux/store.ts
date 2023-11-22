import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import recipeIdReducer from "./features/recipeIdSlice";
import pageTitleReducer from "./features/pageTitleSlice";
import shoppingListReducer from "./features/shoppingListSlice";
import favoriteRecipeReducer from "./features/favoriteRecipesSlice";
import getRecipesFromApiReducer from "./features/getRecipesFromApiSlice";
import loggedUserReducer from "./features/loggedUserSlice";

const reducer = combineReducers({
  recipeId: recipeIdReducer,
  pageTitle: pageTitleReducer,
  shoppingList: shoppingListReducer,
  favoriteRecipes: favoriteRecipeReducer,
  apiRecipes: getRecipesFromApiReducer,
  loggedUser: loggedUserReducer,
});

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
