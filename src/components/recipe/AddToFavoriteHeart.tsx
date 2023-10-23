import {
  addToFavorites,
  deleteFromFavorites,
} from "@/redux/features/favoriteRecipesSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { RecipeProps } from "@/types";
import { mdiHeart } from "@mdi/js";
import Icon from "@mdi/react";
import { IconButton } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";

export const AddToFavoriteHeart = ({
  style,
  iconSize,
  recipe,
}: {
  style: {};
  iconSize: string;
  recipe: RecipeProps;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const isRecipeFavorite = useAppSelector((state) =>
    state.favoriteRecipes.recipes.includes(recipe)
  );

  const setRecipeAsFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    isRecipeFavorite
      ? dispatch(deleteFromFavorites(recipe))
      : dispatch(addToFavorites(recipe));
  };

  return (
    <IconButton sx={style} onClick={setRecipeAsFavorite}>
      <Icon path={mdiHeart} size={1} />
    </IconButton>
  );
};
