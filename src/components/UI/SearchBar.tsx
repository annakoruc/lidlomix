import { IconSearch } from "@/assets";
import { themeVariables } from "@/styles/themes/themeVariables";
import { Icon } from "@iconify/react";
import { IconButton, InputBase, Paper } from "@mui/material";
import { Field } from "formik";
import React from "react";

export const SearchBar = ({ name }: { name: string }) => {
  return (
    <Paper sx={{ p: "2px", display: "flex", alignItems: "center" }}>
      <Field
        name={name}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search recipe"
        as={InputBase}
      />
      <IconButton type="submit" sx={{ p: "10px" }}>
        <IconSearch color={themeVariables.colors.darkblue} />
      </IconButton>
    </Paper>
  );
};
