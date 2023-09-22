import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import recipeReducer from "./features/recipeSlice";
import pageTitleReducer from "./features/pageTitleSlice";
import shoppingListReducer from "./features/shoppingListSlice";

const reducer = combineReducers({
  recipe: recipeReducer,
  pageTitle: pageTitleReducer,
  shoppingList: shoppingListReducer,
});

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
