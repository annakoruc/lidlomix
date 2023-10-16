import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

export const signUpWithEmail = async (
  registerEmail: string,
  registerPassword: string
) => {
  await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      sendEmailVerification(auth.currentUser!);
      console.log("User sign Up" + user);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
