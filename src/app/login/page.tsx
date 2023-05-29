"use client";

import { loginWithEmail, loginWithGoogle, logOut } from "@/firebase";
import { useRef } from "react";

const LoginPage = () => {
  const loginEmail = useRef<HTMLInputElement>(null);
  const loginPassword = useRef<HTMLInputElement>(null);

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
