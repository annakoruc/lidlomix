import * as React from "react";
import { SVGProps } from "react";
export const IconFavorites = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <path
      fill={props.color ? props.color : "url(#a)"}
      d="m18.673 25-.711-.587c-2.371-2.23-4.032-3.638-4.032-5.399 0-1.408 1.186-2.582 2.61-2.582.83 0 1.66.352 2.133.939.475-.587 1.305-.94 2.135-.94 1.423 0 2.608 1.057 2.608 2.583 0 1.76-1.66 3.17-4.031 5.4l-.712.586ZM3.26 23.474a2.384 2.384 0 0 1-1.677-.687 2.335 2.335 0 0 1-.695-1.66V2.347A2.351 2.351 0 0 1 3.26 0h1.185v8.216l2.965-1.76 2.964 1.76V0h7.115c.629 0 1.232.247 1.677.688.444.44.694 1.037.694 1.66v10.657l-1.186-.094a7.177 7.177 0 0 0-3.556.945 7.085 7.085 0 0 0-2.603 2.577 6.993 6.993 0 0 0-.006 7.041h-9.25Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={12.152}
        x2={12.152}
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
