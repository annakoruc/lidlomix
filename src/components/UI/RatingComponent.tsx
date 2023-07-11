import { IconEmptyStar, IconStar } from "@/assets";
import { Box, Rating, Typography } from "@mui/material";
import React from "react";

export const RatingComponent = () => {
  return (
    <Box sx={{ alignSelf: "flex-end", display: "flex", alignItems: "center" }}>
      <Rating
        sx={{ gap: 0.2 }}
        name="read-only"
        readOnly
        defaultValue={2}
        icon={<IconStar />}
        emptyIcon={<IconEmptyStar fontSize="inherit" />}
      />
      <Typography
        sx={{ fontSize: "12px", color: "primary.light" }}
      >{`(10)`}</Typography>
    </Box>
  );
};
