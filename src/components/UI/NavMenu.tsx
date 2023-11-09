import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { IconFilter, IconMenu } from "@/assets";
import { Box } from "@mui/material";
import { logOut } from "@/firebase/auth";
import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import { paths } from "@/utils/paths";

export const NavMenu = () => {
  const [open, setOpen] = React.useState<null | HTMLElement>(null);
  const { user } = useAppSelector((store) => store.loggedUser);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ minWidth: 0 }}
      >
        <IconMenu />
      </Button>
      {user ? (
        <Menu
          id="basic-menu"
          anchorEl={open}
          open={Boolean(open)}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              logOut();
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      ) : (
        <Menu
          id="basic-menu"
          anchorEl={open}
          open={Boolean(open)}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              router.push(paths.login);
            }}
          >
            Login
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              router.push(paths.signUp);
            }}
          >
            Sign Up
          </MenuItem>
        </Menu>
      )}
    </Box>
  );
};
