import { Box, Container, Typography } from "@mui/material";
import Link from "@mui/material/Link";

export const Footer = () => {
  return (
    <Typography
      variant="caption"
      display="block"
      gutterBottom
      sx={{
        width: "100%",

        position: "absolute",
        bottom: 0,
        textAlign: "center",
      }}
    >
      Created by{" "}
      <Link underline="none" href="https://github.com/annakoruc">
        @annakoruc
      </Link>
    </Typography>
  );
};
