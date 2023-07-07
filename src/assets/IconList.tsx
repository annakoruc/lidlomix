import * as React from "react";
import { SVGProps } from "react";
export const IconList = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={25}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M22.104 25H4.424a3.808 3.808 0 0 1-2.679-1.098 3.73 3.73 0 0 1-1.11-2.652v-20c0-.332.134-.65.37-.884A1.27 1.27 0 0 1 1.9 0h17.679c.335 0 .656.132.893.366.237.235.37.552.37.884v15h5.051v5c0 .995-.399 1.948-1.11 2.652A3.808 3.808 0 0 1 22.104 25Zm-1.263-6.25v2.5c0 .331.133.65.37.884a1.27 1.27 0 0 0 1.786 0c.236-.235.37-.553.37-.884v-2.5H20.84ZM5.687 6.25v2.5H15.79v-2.5H5.687Zm0 5v2.5H15.79v-2.5H5.687Zm0 5v2.5h6.314v-2.5H5.687Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={13.264}
        x2={13.264}
        y1={0}
        y2={25}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#96CAE7" />
        <stop offset={1} stopColor="#0C3048" />
      </linearGradient>
    </defs>
  </svg>
);
