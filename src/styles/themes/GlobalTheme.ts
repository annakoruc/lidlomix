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
    allVariants: {
      // fontFamily: inter.style.fontFamily,
      color: themeVariables.colors["darkblue"],
    },
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
    //MUI ScrollableTabs
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: "30px",
          boxShadow: "0px 0px 10px 0px rgba(12, 48, 72, 0.06)",
        },
        flexContainer: {
          height: "30px",
        },
        indicator: {
          display: "none",
        },
        scroller: {
          height: "30px",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minWidth: 0,
          padding: "0 16px",
          minHeight: "30px",
          color: themeVariables.colors["lightblue"],
          textTransform: "capitalize",
          fontSize: "15px",
          "&.Mui-selected": {
            color: themeVariables.colors["orange"],
            fontWeight: "700",
          },
        },
      },
    },
    //MUI List
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: { minWidth: 0, height: "30px" },
      },
    },

    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: "14px",
        },
        secondary: {
          fontSize: "12px",
        },
      },
    },
    //Mui Checkbox
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: "4px 8px",

          color: themeVariables.colors["lightblue"],
          "&.Mui-checked": {
            color: themeVariables.colors["orange"],
          },
        },
      },
    },
    // Mui BottomNavigation
    MuiBottomNavigationAction: {
      //TODO change color when icon is selected
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: themeVariables.colors["orange"],

            color: themeVariables.colors["white"],
          },
          "&.Mui-selected .MuiBottomNavigationAction-label": {
            display: "none",
          },
        },
      },
    },
  },
});
