import { Typography } from "@mui/material";
import Link from "@mui/material/Link";

import "./footerstyle.scss";

export const Footer = () => {
  return (
    <Typography
      variant="caption"
      display="block"
      gutterBottom
      style={{
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
