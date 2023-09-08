import { useEffect, useState } from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { IconSearch } from "@/assets";
import { NavMenu } from "./NavMenu";
import { usePathname, useRouter } from "next/navigation";
import { IconBack } from "@/assets/IconBack";

export const Navbar = () => {
  const [changeNavbar, setChangeNavbar] = useState(false);
  const location = usePathname();

  const changeNavbarStyle = () => {
    window.scrollY >= 40 ? setChangeNavbar(true) : setChangeNavbar(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarStyle);

    return () => window.removeEventListener("scroll", changeNavbarStyle);
  }, []);

  const staticNavbar = {
    transition: ".2s ease-in",
    bgcolor: "transparent",
    boxShadow: "none",
  };

  const scrolledNavbar = {
    transition: ".0s linear",
    bgcolor: "rgba(12, 48, 72, 0.9);",
  };

  return (
    <AppBar position="sticky" sx={changeNavbar ? scrolledNavbar : staticNavbar}>
      {/* TODO change location to nested paths */}
      {location !== "/recipe/a" ? (
        <Toolbar
          sx={{
            width: "100%",
            maxWidth: "xl",
            alignSelf: "center",
            padding: 3,
          }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {"All Recipes".toUpperCase()}
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <IconSearch color="white" scale={0.5} />
            <NavMenu />
          </Box>
        </Toolbar>
      ) : (
        <Toolbar
          sx={{
            width: "100%",
            maxWidth: "xl",
            alignSelf: "center",
            justifyContent: "space-between",
            padding: 3,
          }}
        >
          <IconBack />
          <Box>
            <NavMenu />
          </Box>
        </Toolbar>
      )}
    </AppBar>
  );
};
