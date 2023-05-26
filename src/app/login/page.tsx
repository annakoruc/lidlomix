"use client";

import { loginWithEmail } from "@/firebase";
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
    </div>
  );
};

export default LoginPage;
