import { themeVariables } from "@/styles/themes/themeVariables";
import React from "react";

export const InfoCardInRecipe = ({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) => {
  return (
    <div
      style={{
        height: 87,
        background: themeVariables.gradients.background,
        padding: 4,
        borderRadius: 30,
        display: "flex",
        flexDirection: "column",
        textAlign: "center",

        inlineSize: "53px",
        overflowWrap: "break-word",
        margin: "25px 0",
      }}
    >
      <div
        style={{
          fontSize: "25px",
          width: "45px",
          height: "45px",
          borderRadius: "50%",
          backgroundColor: "white",
          color: themeVariables.colors.darkblue,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </div>
      <p
        style={{
          fontFamily: themeVariables.fonts.inter,
          fontWeight: 500,
          fontSize: 10,
          color: "white",
          paddingTop: 2,
          height: 35,
        }}
      >
        {text}
      </p>
    </div>
  );
};
