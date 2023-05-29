import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.config";
import { MutableRefObject } from "react";

export const signUpWithEmail = async (
  registerEmail: MutableRefObject<HTMLInputElement | null>,
  registerPassword: MutableRefObject<HTMLInputElement | null>
) => {
  await createUserWithEmailAndPassword(
    auth,
    registerEmail.current!.value,
    registerPassword.current!.value
  )
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User sign Up" + user);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
