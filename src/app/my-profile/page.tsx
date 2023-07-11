"use client";

import { RatingComponent, RecipeCard } from "@/components/UI";
import { BoxWithNaves } from "@/components/layouts";
import React from "react";

const MyProfile = () => {
  return (
    <BoxWithNaves>
      <div>MyProfile</div>
      <RecipeCard />
    </BoxWithNaves>
  );
};

export default MyProfile;
