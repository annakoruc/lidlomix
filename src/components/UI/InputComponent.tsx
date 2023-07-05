"use client";
import { IconEmailSvg } from "@/assets";
import { FormControl, Input, InputAdornment, TextField } from "@mui/material";
import React, { RefObject, forwardRef } from "react";

type InputProps = {
  placeholder: string;
  //TODO change type
  icon: any;
  required?: boolean;
  // ref: RefObject<HTMLInputElement>;
};

export const InputComponent = React.forwardRef(function InputComponent(
  { placeholder, icon, required }: InputProps,
  ref
) {
  return (
    <Input
      id={placeholder}
      placeholder={placeholder}
      ref={ref}
      startAdornment={<InputAdornment position="start">{icon}</InputAdornment>}
      required={required}
    />
  );
});
