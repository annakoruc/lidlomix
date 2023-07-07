"use client";

import LogoSvg from "@/assets/LogoSvg";
import { BoxFlexComponent } from "@/components/layouts";
import React from "react";
import { Rings } from "react-loader-spinner";

const Loading = () => {
  return (
    <BoxFlexComponent>
      <LogoSvg color="white" />
      <Rings
        height="80"
        width="80"
        color="#FFFFFF"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </BoxFlexComponent>
  );
};

export default Loading;
