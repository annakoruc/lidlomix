import * as React from "react";
import { SVGProps } from "react";
export const IconMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={29}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M2 2h25M2 10.333h25M2 18.667h25"
    />
  </svg>
);
