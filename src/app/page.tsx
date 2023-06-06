"use client";

import { NavigateButton } from "@/components/UI";
import { GlobalTheme } from "@/styles/themes/GlobalTheme";
import { ThemeProvider } from "@mui/material/styles";
import { LinkComponent } from "@/components/UI/LinkComponent";

import LogoSvg from "@/assets/LogoSvg";
import { Button, GlobalStyles, Input } from "@mui/material";
import { themeVariables } from "@/styles/themes/themeVariables";
import { Footer } from "@/components";

import "./pageStyle.scss";

export default function Home() {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <main className="main_page">
        <LogoSvg color="white" />
        <div className="sign_buttons">
          <NavigateButton href={"/login"} title="Login" variant="contained" />
          <NavigateButton
            href={"/sign-up"}
            title="Sign Up"
            variant="outlined"
          />
        </div>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
