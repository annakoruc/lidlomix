import { createTheme } from "@mui/material/styles";
import { themeVariables } from "./themeVariables";

export const buttonTheme = createTheme({
  palette: { primary: { main: themeVariables.colors["orange"] } },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: themeVariables.fonts["mavenPro"],
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          fontWeight: "400",
          textTransform: "capitalize",
        },
      },
      variants: [
        {
          props: { size: "medium" },
          style: {
            fontSize: "20px",
            minWidth: "270px",
            maxHeight: "40px",
            borderRadius: "50px",
            padding: "5px",
          },
        },
        {
          props: { variant: "contained" },
          style: { color: themeVariables.colors["white"] },
        },
        { props: { variant: "outlined" }, style: { border: "1px solid" } },
      ],
    },
  },
});
