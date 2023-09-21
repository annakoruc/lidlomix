"use client";

import { GlobalTheme } from "@/styles/themes/GlobalTheme";
import { Footer } from "@/components";
import { Box, Container, GlobalStyles } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { BottomNavigationComponent, Navbar } from "@/components/UI";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={GlobalTheme}>
          <GlobalStyles
            styles={(theme) => ({
              "*": {
                margin: 0,
                padding: 0,
                boxSizing: "border-box",
              },
              body: {
                height: "100vh",
                width: "100vw",

                background: theme.palette.gradient?.background,
                backgroundAttachment: "fixed",
              },
            })}
          />
          <Provider store={store}>
            <Box sx={{ display: "grid", gridTemplateRows: "auto 1fr auto" }}>
              <Navbar />
              {children}
              <BottomNavigationComponent />
            </Box>
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
