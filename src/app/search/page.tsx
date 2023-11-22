"use client";

import { SearchBar } from "@/components/UI";
import { getAutocompleteRecipes } from "@/redux/features/getRecipesFromApiSlice";
import { setCurrentRecipeId } from "@/redux/features/recipeIdSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { themeVariables } from "@/styles/themes/themeVariables";

import { Box, Button } from "@mui/material";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const SearchPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { autocompleteRecipes, loading } = useAppSelector(
    (state) => state.apiRecipes
  );

  return (
    <Box sx={{ p: 2 }}>
      <Formik
        initialValues={{ searchInput: "" }}
        onSubmit={(values) => {
          dispatch(getAutocompleteRecipes(values.searchInput));
        }}
      >
        {(values) => (
          <Form>
            <SearchBar name="searchInput" />
          </Form>
        )}
      </Formik>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "70px",
          marginTop: 2,
        }}
      >
        {!loading &&
          autocompleteRecipes.map((recipe) => (
            <Button
              key={`${recipe.id}-${recipe.name}`}
              variant="text"
              sx={{
                color: "white",
                justifyContent: "flex-start",
                borderBottom: `1px solid ${themeVariables.colors.lightblue}`,
                borderRadius: 0,
              }}
              onClick={() => {
                let recipePath = recipe.name.replaceAll(" ", "-");

                dispatch(setCurrentRecipeId(recipe.id));
                router.push(`/recipe/${recipePath}`);
              }}
            >
              {recipe.name}
            </Button>
          ))}
      </Box>
    </Box>
  );
};

export default SearchPage;
