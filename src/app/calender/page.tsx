"use client";

import { Box, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import React from "react";

const CalenderPage = () => {
  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
      </LocalizationProvider>
      <Typography sx={{ textAlign: "center" }}>
        Page under construction 🐌
      </Typography>
    </Box>
  );
};

export default CalenderPage;
