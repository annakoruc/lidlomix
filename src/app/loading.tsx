"use client";

import LogoSvg from "@/assets/LogoSvg";
// import { Footer } from "@/components";
import React from "react";
import "./pageStyle.scss";
import { Rings } from "react-loader-spinner";

const Loading = () => {
  return (
    <main className="main_page">
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
    </main>
  );
};

export default Loading;
