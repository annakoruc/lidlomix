import { createTheme } from "@mui/material/styles";
import { Inter, Maven_Pro } from "next/font/google";
import { themeVariables } from "./themeVariables";

const inter = Inter({ subsets: ["latin"] });
const mavenPro = Maven_Pro({ subsets: ["latin"], weight: ["400", "700"] });

export const theme = createTheme({
  palette: {
    // background: "linear-gradient(180deg, #0C3048 0%, #96CAE7 100%)",
    secondary: {
      light: "#96CAE7",
      main: "#3E9EBE",
      dark: "#0C3048",
    },
    primary: {
      light: "#FFFFFF",
      main: "#F28400",
      //   dark: "",
    },
  },
  typography: {
    fontFamily: [
      // themeVariables.fonts["inter"],
      themeVariables.fonts["mavenPro"],
    ].join(","),
  },
});
