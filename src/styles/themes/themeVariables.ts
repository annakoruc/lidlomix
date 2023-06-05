import { Inter, Maven_Pro } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const mavenPro = Maven_Pro({ subsets: ["latin"], weight: ["400", "700"] });

export const themeVariables = {
  colors: {
    white: "#FFFFFF",
    orange: "#F28400",
    yellow: "#F9B600",

    darkblue: "#0C3048",
    blue: "#3E9EBE",
    lightblue: "#96CAE7",
  },

  fonts: {
    inter: inter.style.fontFamily,
    mavenPro: mavenPro.style.fontFamily,
  },
};
