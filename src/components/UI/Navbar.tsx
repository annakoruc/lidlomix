import { useEffect, useState } from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { IconSearch } from "@/assets";
import { NavMenu } from "./NavMenu";
import { usePathname, useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { useAppSelector } from "@/redux/store";

export const Navbar = () => {
  const [changeNavbar, setChangeNavbar] = useState(false);
  const title = useAppSelector((state) => state.pageTitle.title);
  const location = usePathname();
  const router = useRouter();

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
      {location.split("/")[1] !== "recipe" ? (
        <Toolbar
          sx={{
            width: "100%",
            maxWidth: "xl",
            alignSelf: "center",
            padding: 3,
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "white", fontSize: "16px" }}
          >
            {title.toUpperCase()}
          </Typography>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Icon icon="ri:search-2-fill" style={{ fontSize: "20px" }} />
            <Icon icon="fluent:filter-24-filled" style={{ fontSize: "30px" }} />
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
          <Icon
            icon="vaadin:arrow-backward"
            onClick={() => router.back()}
            style={{ fontSize: "30px" }}
          />
          <Box>
            <NavMenu />
          </Box>
        </Toolbar>
      )}
    </AppBar>
  );
};
