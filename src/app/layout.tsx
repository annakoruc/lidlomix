"use client";

import { GlobalTheme } from "@/styles/themes/GlobalTheme";
import { Box, GlobalStyles } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { BottomNavigationComponent, Navbar } from "@/components/UI";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { getRandomRecipes } from "@/redux/features/getRecipesFromApiSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";
import { loggedOutUser, setLoggedUser } from "@/redux/features/loggedUserSlice";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = usePathname();

  useEffect(() => {
    store.dispatch(getRandomRecipes());
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        store.dispatch(
          setLoggedUser({ email: userAuth.email!, uid: userAuth.uid })
        );
      } else {
        store.dispatch(loggedOutUser());
      }
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <title>MyRecipes</title>
        <meta
          name="myRecipes"
          content="Application with recipes from tasty API"
        />
      </head>

      <body>
        <Provider store={store}>
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
            {location === "/" ||
            location === "/login" ||
            location === "/sign-up" ||
            location === "/forgot-password" ? (
              children
            ) : (
              <Box sx={{ display: "grid", gridTemplateRows: "auto 1fr auto" }}>
                <Navbar />
                {children}
                <BottomNavigationComponent />
              </Box>
            )}
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
