import { Box } from "@mui/material";
import * as React from "react";
import { SVGProps } from "react";
export const IconSearch = (props: SVGProps<SVGSVGElement>) => (
  <Box sx={{ scale: props.scale }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={25}
      fill="none"
      {...props}
    >
      <path
        fill={props.color ?? "url(#a)"}
        d="M11.298 0c6.176 0 11.19 4.962 11.19 11.076 0 6.114-5.014 11.076-11.19 11.076-6.177 0-11.19-4.962-11.19-11.076C.108 4.962 5.12 0 11.298 0Zm10.549 19.778 3.517 3.48L23.605 25l-3.516-3.482 1.758-1.74Z"
      />
      <defs>
        <linearGradient
          id="a"
          x1={12.736}
          x2={12.736}
          y1={0}
          y2={25}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#96CAE7" />
          <stop offset={1} stopColor="#0C3048" />
        </linearGradient>
      </defs>
    </svg>
  </Box>
);
