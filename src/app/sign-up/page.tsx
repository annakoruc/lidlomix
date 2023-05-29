"use client";

import { signUpWithEmail } from "@/firebase";
import React, { useRef } from "react";

export default function SignUpPage() {
  const registerEmail = useRef<HTMLInputElement>(null);
  const registerPassword = useRef<HTMLInputElement>(null);

  return (
    <div>
      <label>
        email: <input ref={registerEmail} />
      </label>
      <label>
        password: <input ref={registerPassword} />
      </label>
      <label>
        confirm password: <input />
      </label>
      <button
        onClick={() => {
          signUpWithEmail(registerEmail, registerPassword);
        }}
      >
        Login
      </button>
    </div>
  );
}
