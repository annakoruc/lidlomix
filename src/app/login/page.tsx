"use client";

import { getRepiceById } from "@/axios/getRecipeById";
import { getRecipeByName } from "@/axios/getRecipeByName";
import { loginWithEmail, loginWithGoogle, logOut } from "@/firebase/auth";
import { getLoggedUser } from "@/firebase/auth/getLoggedUser";
import { addToUserFavorites } from "@/firebase/database";
import { getDatabase } from "@/firebase/database/getDataBase";
import { useEffect, useRef } from "react";

const LoginPage = () => {
  const loginEmail = useRef<HTMLInputElement>(null);
  const loginPassword = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getRecipeByName("butter");
    getRepiceById("8138");
    getDatabase();
    addToUserFavorites();
    getLoggedUser();
  });

  return (
    <div>
      <label>
        email: <input ref={loginEmail} />
      </label>
      <label>
        password: <input ref={loginPassword} />
      </label>
      <button onClick={() => loginWithEmail(loginEmail, loginPassword)}>
        Login
      </button>
      <button onClick={logOut}>LogOut</button>
      <button onClick={loginWithGoogle}>Google</button>
    </div>
  );
};

export default LoginPage;
