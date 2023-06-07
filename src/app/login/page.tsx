"use client";

import { getRepiceById } from "@/axios/getRecipeById";
import { getRecipeByName } from "@/axios/getRecipeByName";
import { loginWithEmail, loginWithGoogle, logOut } from "@/firebase/auth";
import { getLoggedUser } from "@/firebase/auth/getLoggedUser";
import { addToUserFavorites } from "@/firebase/database";
import { getDatabase } from "@/firebase/database/getDataBase";
import { useEffect, useRef } from "react";

import "./loginPage.scss";
import { InputComponent, NavigateButton } from "@/components/UI";
import { Footer } from "@/components";
import { IconEmailSvg, IconPasswordSvg } from "@/assets";
import { FormControl } from "@mui/material";
import LogoSvg from "@/assets/LogoSvg";

const LoginPage = () => {
  const loginEmail = useRef<HTMLInputElement>(null);
  const loginPassword = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   getRecipeByName("butter");
  //   getRepiceById("8138");
  //   getDatabase();
  //   addToUserFavorites();
  //   getLoggedUser();
  // });

  return (
    <div className="login_page">
      <LogoSvg color="#0c3048" />
      <label>
        <InputComponent
          placeholder="Your email"
          icon={<IconEmailSvg color={"black"} />}
          ref={loginEmail}
          required
        />
        <InputComponent
          placeholder="Password"
          icon={<IconPasswordSvg color={"black"} />}
          ref={loginPassword}
          required
        />
      </label>
      <NavigateButton
        variant="contained"
        title="Login"
        onClick={() => loginWithEmail(loginEmail, loginPassword)}
      />
      <Footer />
    </div>
  );
};

export default LoginPage;
