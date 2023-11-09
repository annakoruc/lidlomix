"use client";

import { Box, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import React from "react";
import { useAppSelector } from "@/redux/store";
import { NotLoggedUser } from "@/components";

const CalenderPage = () => {
  const loggedUser = useAppSelector((store) => store.loggedUser.user);

  const content = loggedUser ? (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
      </LocalizationProvider>
      <Typography sx={{ textAlign: "center" }}>
        Page under construction 🐌
      </Typography>
    </Box>
  ) : (
    <NotLoggedUser />
  );

  return content;
};

export default CalenderPage;
