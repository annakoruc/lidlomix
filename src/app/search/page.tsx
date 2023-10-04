"use client";

import { getSomeRecipes } from "@/axios/someRecipesGet";
import { SearchBar } from "@/components/UI";
import { themeVariables } from "@/styles/themes/themeVariables";
import { RecipeProps } from "@/types/RecipeProps";
import { Icon } from "@iconify/react";
import { Box, Divider, IconButton, InputBase, Paper } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";

const SearchPage = () => {
  const [searchedRecipes, setSearchedRecipes] = useState<RecipeProps[]>([]);

  return (
    <Box sx={{ p: 2 }}>
      <Formik
        initialValues={{ searchInput: "" }}
        onSubmit={(values) => {
          getSomeRecipes(values.searchInput);
          console.log("works");
        }}
      >
        {(values) => (
          <Form>
            <SearchBar name="searchInput" />
          </Form>
        )}
      </Formik>
      <Box></Box>
    </Box>
  );
};

export default SearchPage;
