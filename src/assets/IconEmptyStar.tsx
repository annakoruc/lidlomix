import React, { SVGProps } from "react";

export const IconEmptyStar = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="10"
      viewBox="0 0 11 10"
      fill="none"
    >
      <g filter={props.color ?? "url(#filter0_i_54_443)"}>
        <path
          d="M5.23175 8.3747L7.76908 9.90932C8.23374 10.1906 8.80235 9.77481 8.68007 9.24901L8.00752 6.36318L10.2514 4.41892C10.661 4.0643 10.4409 3.39176 9.90287 3.34896L6.9498 3.09829L5.79424 0.371428C5.58637 -0.123809 4.87714 -0.123809 4.66926 0.371428L3.51371 3.09217L0.560631 3.34285C0.0225959 3.38565 -0.197509 4.05819 0.212131 4.4128L2.45598 6.35707L1.78344 9.24289C1.66116 9.7687 2.22976 10.1845 2.69443 9.90321L5.23175 8.3747Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_54_443"
          x="0"
          y="0"
          width="10.4634"
          height="10"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.243137 0 0 0 0 0.619608 0 0 0 0 0.745098 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_54_443"
          />
        </filter>
      </defs>
    </svg>
  );
};
