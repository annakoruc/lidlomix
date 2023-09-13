"use client";

// import { getRecipeById } from "@/axios/getRecipeById";
import { getRecipeByName } from "@/axios/getRecipeByName";
import { loginWithEmail, loginWithGoogle, logOut } from "@/firebase/auth";
import { getLoggedUser } from "@/firebase/auth/getLoggedUser";
import { addToUserFavorites } from "@/firebase/database";
import { getDatabase } from "@/firebase/database/getDataBase";
import { useEffect, useRef } from "react";

// import "./loginPage.scss";
import { InputComponent, NavigateButton } from "@/components/UI";

import { IconEmailSvg, IconPasswordSvg } from "@/assets";

import LogoSvg from "@/assets/LogoSvg";

import { BoxFlexComponent } from "@/components/layouts";

const LoginPage = () => {
  const loginEmail = useRef<HTMLInputElement>(null);
  const loginPassword = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   getRecipeByName("butter");
  //   getRecipeById("8138");
  //   getDatabase();
  //   addToUserFavorites();
  //   getLoggedUser();
  // });

  return (
    <BoxFlexComponent>
      <label>
        <InputComponent
          placeholder="Your email"
          type="text"
          icon={<IconEmailSvg color={"black"} />}
          ref={loginEmail}
          required
        />
        <InputComponent
          placeholder="Password"
          type="password"
          icon={<IconPasswordSvg color={"black"} />}
          ref={loginPassword}
          required
        />
      </label>
      <NavigateButton
        variant="contained"
        title="Login"
        onClick={() => loginWithEmail(loginEmail, loginPassword)}
        href={"/my-profile"}
      />
    </BoxFlexComponent>
  );
};

export default LoginPage;
