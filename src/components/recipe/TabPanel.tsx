import { Box } from "@mui/material";
import React from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  style?: {};
}

export const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, style, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={style}
    >
      {value === index && (
        <Box
        // sx={{ display: "flex", flexDirection: "column", padding: 2, gap: 2 }}
        >
          {children}
        </Box>
      )}
    </Box>
  );
};
