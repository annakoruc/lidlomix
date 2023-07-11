import React, { SVGProps } from "react";

export const IconHeart = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="15"
      viewBox="0 0 17 15"
      fill="none"
    >
      <path
        d="M8.17439 15L6.9891 13.921C2.77929 10.1035 0 7.57766 0 4.49591C0 1.97003 1.9782 0 4.49591 0C5.91826 0 7.28338 0.662125 8.17439 1.70027C9.0654 0.662125 10.4305 0 11.8529 0C14.3706 0 16.3488 1.97003 16.3488 4.49591C16.3488 7.57766 13.5695 10.1035 9.35967 13.921L8.17439 15Z"
        fill={props.color ?? "white"}
      />
    </svg>
  );
};
