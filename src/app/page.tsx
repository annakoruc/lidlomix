"use client";
import Link from "@mui/material/Link";
// import Link from "next/link";
import { ButtonComponent } from "@/components/UI";
import { theme } from "@/styles/themes/theme";
import { ThemeProvider } from "@mui/material/styles";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Link href={"/login"}>Login</Link>
        <Link href={"/sign-up"}>Sign Up</Link>
        <ButtonComponent />
      </main>
    </ThemeProvider>
  );
}
