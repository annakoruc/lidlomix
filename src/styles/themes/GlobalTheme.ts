import { createTheme } from "@mui/material/styles";
import { Inter, Maven_Pro } from "next/font/google";
import { themeVariables } from "./themeVariables";

declare module "@mui/material/styles" {
  interface Palette {
    gradient?: {
      background: string;
      icons: string;
    };
  }
  interface PaletteOptions {
    gradient?: {
      background: string;
      icons: string;
    };
  }
}

const inter = Inter({ subsets: ["latin"] });
const mavenPro = Maven_Pro({ subsets: ["latin"], weight: ["400", "700"] });

export const GlobalTheme = createTheme({
  typography: {
    fontFamily: mavenPro.style.fontFamily,
  },
  palette: {
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
      dark: "#F28400",
      contrastText: "#FFFFFF",
    },
    gradient: {
      background: themeVariables.gradients["background"],
      icons: themeVariables.gradients["icons"],
    },
  },

  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          fontFamily: themeVariables.fonts["mavenPro"],
        },
      },
    },
  },
});
