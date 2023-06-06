import { createTheme } from "@mui/material/styles";
import { Inter, Maven_Pro } from "next/font/google";
import { themeVariables } from "./themeVariables";

const inter = Inter({ subsets: ["latin"] });
const mavenPro = Maven_Pro({ subsets: ["latin"], weight: ["400", "700"] });

export const GlobalTheme = createTheme({
  typography: {
    fontFamily:
      //  inter.style.fontFamily,
      themeVariables.fonts["inter"],
    // themeVariables.fonts["mavenPro"],
  },
  palette: {
    // background: { default: "black" },
    text: {
      primary: themeVariables.colors["darkblue"],
      secondary: themeVariables.colors["blue"],
    },
    primary: {
      light: themeVariables.colors["lightblue"],
      main: themeVariables.colors["blue"],
      dark: themeVariables.colors["darkblue"],
    },
    secondary: {
      light: "#FFFFFF",
      main: "#F28400",
    },
  },
});
