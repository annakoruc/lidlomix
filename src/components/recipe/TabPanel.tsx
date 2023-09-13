import { Box } from "@mui/material";
import React from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ overflowY: "scroll", height: "250px" }}
    >
      {value === index && (
        <Box
          sx={{ display: "flex", flexDirection: "column", padding: 2, gap: 2 }}
        >
          {children}
        </Box>
      )}
    </div>
  );
};
