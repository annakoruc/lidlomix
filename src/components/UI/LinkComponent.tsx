import React from "react";
import Link from "@mui/material/Link";

type LinkProps = {
  children: string;
  href: string;
};

export const LinkComponent = ({ children, href }: LinkProps) => {
  return (
    <Link underline="none" href={href}>
      {children}
    </Link>
  );
};
