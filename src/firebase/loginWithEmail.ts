import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.config";
import { MutableRefObject } from "react";

export const loginWithEmail = async (
  email: MutableRefObject<HTMLInputElement | null>,
  password: MutableRefObject<HTMLInputElement | null>
) => {
  signInWithEmailAndPassword(
    auth,
    email.current!.value,
    password.current!.value
  )
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User loged in" + user);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
