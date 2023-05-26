import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.config";
import { MutableRefObject } from "react";

export const signUpWithEmail = async (
  registerEmail: MutableRefObject<HTMLInputElement | null>,
  registerPassword: MutableRefObject<HTMLInputElement | null>
) => {
  try {
    const user = await createUserWithEmailAndPassword(
      auth,
      registerEmail.current!.value,
      registerPassword.current!.value
    );
    console.log(user);
  } catch (error: any) {
    console.log(error.message);
  }
};
