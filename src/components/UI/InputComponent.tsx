"use client";
import { IconEmailSvg } from "@/assets";
import { FormControl, Input, InputAdornment, TextField } from "@mui/material";
import React, { ReactComponentElement, RefObject } from "react";

type InputProps = {
  placeholder: string;
  //TODO change type
  icon: any;
  required?: boolean;
  ref: RefObject<HTMLInputElement>;
};

export const InputComponent = ({
  placeholder,
  icon,
  required,
  ref,
}: InputProps) => {
  return (
    <Input
      id={placeholder}
      placeholder={placeholder}
      startAdornment={<InputAdornment position="start">{icon}</InputAdornment>}
      required={required}
      ref={ref}
    />
  );
};
