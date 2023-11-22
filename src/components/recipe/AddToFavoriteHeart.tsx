import {
  addToFavorites,
  deleteFromFavorites,
} from "@/redux/features/favoriteRecipesSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { themeVariables } from "@/styles/themes/themeVariables";
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
  const user = useAppSelector((state) => state.loggedUser.user);
  const isRecipeFavorite = useAppSelector((state) =>
    state.favoriteRecipes.recipes.includes(recipe)
  );

  const setRecipeAsFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    isRecipeFavorite
      ? dispatch(deleteFromFavorites(recipe))
      : dispatch(addToFavorites(recipe));
  };

  const content = user ? (
    <IconButton sx={style} onClick={setRecipeAsFavorite}>
      <Icon
        path={mdiHeart}
        size={1}
        color={
          isRecipeFavorite
            ? themeVariables.colors.orange
            : themeVariables.colors.white
        }
      />
    </IconButton>
  ) : (
    <p></p>
  );

  return content;
};
