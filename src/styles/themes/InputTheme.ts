import { createTheme } from "@mui/material/styles";

export const inputTheme = createTheme({
  components: {
    MuiInput: { styleOverrides: { root: { borderBottomColor: "yellow" } } },
  },
});
