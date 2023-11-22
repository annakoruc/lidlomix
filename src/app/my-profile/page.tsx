"use client";

import { withPrivate } from "@/hooks/route";
import React from "react";

const MyProfile = () => {
  return <p>My profile</p>;
};

export default withPrivate(MyProfile);
